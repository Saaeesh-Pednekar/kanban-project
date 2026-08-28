from django.contrib.auth import get_user_model
from rest_framework import serializers

from authentication.serializers import UserPublicSerializer
from .models import Board, Card, List

User = get_user_model()


# ------------------------------------------------------------------
# CARD
# ------------------------------------------------------------------
class CardSerializer(serializers.ModelSerializer):
    assigned_to = UserPublicSerializer(many=True, read_only=True)
    assigned_to_ids = serializers.PrimaryKeyRelatedField(
        source="assigned_to",
        queryset=User.objects.all(),
        many=True,
        write_only=True,
        required=False,
    )

    class Meta:
        model = Card
        fields = (
            "id",
            "list",
            "title",
            "description",
            "position",
            "assigned_to",
            "assigned_to_ids",
            "due_date",
            "created_at",
            "updated_at",
        )
        read_only_fields = ("id", "created_at", "updated_at")


class CardMoveSerializer(serializers.Serializer):
    """Input serializer for PUT /api/cards/<id>/move/"""

    list = serializers.PrimaryKeyRelatedField(queryset=List.objects.all())
    position = serializers.IntegerField(min_value=0)


# ------------------------------------------------------------------
# LIST
# ------------------------------------------------------------------
class ListSerializer(serializers.ModelSerializer):
    class Meta:
        model = List
        fields = ("id", "board", "name", "position", "created_at")
        read_only_fields = ("id", "created_at")


class ListDetailSerializer(serializers.ModelSerializer):
    """A List with its Cards nested and ordered by position."""

    cards = serializers.SerializerMethodField()

    class Meta:
        model = List
        fields = ("id", "board", "name", "position", "created_at", "cards")
        read_only_fields = ("id", "created_at")

    def get_cards(self, obj):
        cards = obj.cards.all().order_by("position", "id")
        return CardSerializer(cards, many=True).data


# ------------------------------------------------------------------
# BOARD
# ------------------------------------------------------------------
class BoardSerializer(serializers.ModelSerializer):
    """Lightweight Board representation, used for list views."""

    owner = UserPublicSerializer(read_only=True)
    collaborators = UserPublicSerializer(many=True, read_only=True)
    collaborator_ids = serializers.PrimaryKeyRelatedField(
        source="collaborators",
        queryset=User.objects.all(),
        many=True,
        write_only=True,
        required=False,
    )

    class Meta:
        model = Board
        fields = (
            "id",
            "name",
            "owner",
            "collaborators",
            "collaborator_ids",
            "created_at",
            "updated_at",
        )
        read_only_fields = ("id", "owner", "created_at", "updated_at")


class BoardDetailSerializer(serializers.ModelSerializer):
    """
    Recursively serializes a Board -> Lists -> Cards in a single payload,
    ordered by position at every level. This is the primary serializer
    used to hydrate the KanbanBoard React component in one request.
    """

    owner = UserPublicSerializer(read_only=True)
    collaborators = UserPublicSerializer(many=True, read_only=True)
    lists = serializers.SerializerMethodField()

    class Meta:
        model = Board
        fields = (
            "id",
            "name",
            "owner",
            "collaborators",
            "created_at",
            "updated_at",
            "lists",
        )
        read_only_fields = fields

    def get_lists(self, obj):
        lists = obj.lists.all().order_by("position", "id")
        return ListDetailSerializer(lists, many=True).data
