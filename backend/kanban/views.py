from django.db import transaction
from django.db.models import F, Q
from django.shortcuts import get_object_or_404
from rest_framework import permissions, status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Board, Card, List
from .serializers import (
    BoardDetailSerializer,
    BoardSerializer,
    CardMoveSerializer,
    CardSerializer,
    ListSerializer,
)


class IsBoardMember(permissions.BasePermission):
    """
    Object-level permission: only the board's owner or one of its
    collaborators may view/edit it (and, by extension, its lists/cards).
    """

    def has_object_permission(self, request, view, obj):
        board = obj if isinstance(obj, Board) else obj.board
        return board.is_member(request.user)


# ------------------------------------------------------------------
# BOARD
# ------------------------------------------------------------------
class BoardViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated, IsBoardMember]

    def get_queryset(self):
        """
        Multi-tenancy enforcement: a user may only ever see boards they
        own OR are listed as a collaborator on. This is the single
        source of truth for board visibility - list, retrieve, update,
        and delete all flow through this queryset.
        """
        user = self.request.user
        return (
            Board.objects.filter(Q(owner=user) | Q(collaborators=user))
            .distinct()
            .select_related("owner")
            .prefetch_related("collaborators", "lists__cards__assigned_to")
        )

    def get_serializer_class(self):
        if self.action == "retrieve":
            return BoardDetailSerializer
        return BoardSerializer

    def perform_create(self, serializer):
        # The creator automatically becomes the owner - never trust a
        # client-supplied owner field.
        serializer.save(owner=self.request.user)


# ------------------------------------------------------------------
# LIST
# ------------------------------------------------------------------
class ListViewSet(viewsets.ModelViewSet):
    serializer_class = ListSerializer
    permission_classes = [permissions.IsAuthenticated, IsBoardMember]

    def get_queryset(self):
        user = self.request.user
        return List.objects.filter(
            Q(board__owner=user) | Q(board__collaborators=user)
        ).distinct().select_related("board")

    def perform_create(self, serializer):
        board = serializer.validated_data["board"]
        if not board.is_member(self.request.user):
            raise permissions.PermissionDenied("You are not a member of this board.")
        serializer.save()


# ------------------------------------------------------------------
# CARD
# ------------------------------------------------------------------
class CardViewSet(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    permission_classes = [permissions.IsAuthenticated, IsBoardMember]

    def get_queryset(self):
        user = self.request.user
        return Card.objects.filter(
            Q(list__board__owner=user) | Q(list__board__collaborators=user)
        ).distinct().select_related("list", "list__board")

    def perform_create(self, serializer):
        target_list = serializer.validated_data["list"]
        if not target_list.board.is_member(self.request.user):
            raise permissions.PermissionDenied("You are not a member of this board.")
        serializer.save()

    @action(detail=True, methods=["put"])
    def move(self, request, pk=None):
        """
        PUT /api/cards/<id>/move/
        Body: { "list": <target_list_id>, "position": <target_index> }

        Moves a card to `list` at zero-based index `position`, shifting
        every other affected card's `position` up/down as needed. The
        entire read-modify-write cycle happens inside a single database
        transaction with row-level locking so concurrent drags cannot
        corrupt ordering.
        """
        card = self.get_object()  # enforces IsBoardMember on current board
        input_serializer = CardMoveSerializer(data=request.data)
        input_serializer.is_valid(raise_exception=True)

        target_list = input_serializer.validated_data["list"]
        target_position = input_serializer.validated_data["position"]

        if not target_list.board.is_member(request.user):
            raise permissions.PermissionDenied(
                "You are not a member of the destination board."
            )

        with transaction.atomic():
            # Lock every card in both the source and destination lists so
            # concurrent move requests serialize instead of racing.
            list_ids = {card.list_id, target_list.id}
            locked_cards = list(
                Card.objects.select_for_update().filter(list_id__in=list_ids)
            )

            source_list_id = card.list_id
            source_position = card.position

            # Clamp target_position into a valid range for the destination
            # list (accounting for the fact the card is about to leave its
            # current list, if it's a cross-list move).
            dest_count = sum(
                1
                for c in locked_cards
                if c.list_id == target_list.id and c.id != card.id
            )
            target_position = max(0, min(target_position, dest_count))

            if source_list_id == target_list.id:
                # ---- Same-list reorder ----
                if target_position == source_position:
                    pass  # no-op, nothing to shift
                elif target_position < source_position:
                    # Card moves up: shift [target_position, source_position)
                    # down by one.
                    Card.objects.filter(
                        list_id=source_list_id,
                        position__gte=target_position,
                        position__lt=source_position,
                    ).exclude(id=card.id).update(position=F("position") + 1)
                else:
                    # Card moves down: shift (source_position, target_position]
                    # up by one.
                    Card.objects.filter(
                        list_id=source_list_id,
                        position__gt=source_position,
                        position__lte=target_position,
                    ).exclude(id=card.id).update(position=F("position") - 1)

                card.position = target_position
                card.save(update_fields=["position"])
            else:
                # ---- Cross-list move ----
                # 1. Close the gap left behind in the source list.
                Card.objects.filter(
                    list_id=source_list_id, position__gt=source_position
                ).update(position=F("position") - 1)

                # 2. Open a gap in the destination list at target_position.
                Card.objects.filter(
                    list_id=target_list.id, position__gte=target_position
                ).update(position=F("position") + 1)

                # 3. Move the card itself.
                card.list = target_list
                card.position = target_position
                card.save(update_fields=["list", "position"])

        card.refresh_from_db()
        return Response(CardSerializer(card).data, status=status.HTTP_200_OK)
