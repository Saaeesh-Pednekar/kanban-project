from django.contrib import admin

from .models import Board, Card, List


@admin.register(Board)
class BoardAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "owner", "created_at")
    search_fields = ("name", "owner__username")


@admin.register(List)
class ListAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "board", "position")
    list_filter = ("board",)


@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "list", "position", "due_date")
    list_filter = ("list__board",)
