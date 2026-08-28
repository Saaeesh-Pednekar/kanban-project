from django.conf import settings
from django.db import models


class Board(models.Model):
    """
    A Kanban board. Belongs to exactly one owner but can be shared with
    other users via the `collaborators` M2M field, giving those users
    view/update access without transferring ownership.
    """

    name = models.CharField(max_length=255)
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name="owned_boards",
        on_delete=models.CASCADE,
    )
    collaborators = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="collaborating_boards",
        blank=True,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.name

    def is_member(self, user):
        """True if `user` may view/act on this board (owner or collaborator)."""
        return self.owner_id == user.id or self.collaborators.filter(id=user.id).exists()


class List(models.Model):
    """A column on a Board (e.g. 'To Do', 'In Progress', 'Done')."""

    board = models.ForeignKey(Board, related_name="lists", on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    position = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["position", "id"]

    def __str__(self):
        return f"{self.board.name} / {self.name}"


class Card(models.Model):
    """A single task/card living inside a List, ordered by `position`."""

    list = models.ForeignKey(List, related_name="cards", on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, default="")
    position = models.PositiveIntegerField(default=0)
    assigned_to = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="assigned_cards",
        blank=True,
    )
    due_date = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["position", "id"]

    def __str__(self):
        return self.title
