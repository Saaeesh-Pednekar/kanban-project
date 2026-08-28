import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import api from "../api/axios";
import "./KanbanBoard.css";

/**
 * Re-indexes an array's `position` field to match its current order
 * (0, 1, 2, ...). Used after any local mutation so the UI stays
 * internally consistent even before the backend responds.
 */
function reindex(cards) {
  return cards.map((card, index) => ({ ...card, position: index }));
}

export default function KanbanBoard({ boardId, onBack }) {
  const [board, setBoard] = useState(null);
  const [lists, setLists] = useState([]); // [{ id, name, position, cards: [...] }]
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [newListName, setNewListName] = useState("");

  const fetchBoard = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/boards/${boardId}/`);
      setBoard(data);
      setLists(
        [...data.lists]
          .sort((a, b) => a.position - b.position)
          .map((list) => ({
            ...list,
            cards: [...list.cards].sort((a, b) => a.position - b.position),
          })),
      );
    } catch (err) {
      setErrorMessage("Failed to load board.");
    } finally {
      setLoading(false);
    }
  }, [boardId]);

  useEffect(() => {
    fetchBoard();
  }, [fetchBoard]);

  const addList = async (e) => {
    e.preventDefault();
    if (!newListName.trim()) return;
    try {
      const { data } = await api.post("/lists/", {
        board: boardId,
        name: newListName.trim(),
        position: lists.length,
      });
      setLists((prev) => [...prev, { ...data, cards: [] }]);
      setNewListName("");
    } catch {
      setErrorMessage("Could not create list.");
    }
  };

  const deleteList = async (listId) => {
    if (!window.confirm("Delete this list and all its cards?")) return;
    const previousLists = lists;
    // Optimistically remove it, roll back on failure.
    setLists((prev) => prev.filter((l) => l.id !== listId));
    try {
      await api.delete(`/lists/${listId}/`);
    } catch {
      setLists(previousLists);
      setErrorMessage("Could not delete list.");
    }
  };

  const addCard = async (listId, title) => {
    if (!title.trim()) return;
    const targetList = lists.find((l) => l.id === listId);
    const optimisticPosition = targetList ? targetList.cards.length : 0;

    try {
      const { data } = await api.post("/cards/", {
        list: listId,
        title: title.trim(),
        description: "",
        position: optimisticPosition,
      });
      setLists((prev) =>
        prev.map((l) =>
          l.id === listId ? { ...l, cards: [...l.cards, data] } : l,
        ),
      );
    } catch {
      setErrorMessage("Could not create card.");
    }
  };

  /**
   * Core drag handler. Applies the reorder to local state immediately
   * (optimistic UI), then syncs the authoritative move to the backend.
   * On failure, the pre-drag snapshot is restored.
   */
  const onDragEnd = async (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return; // dropped outside any droppable
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return; // no-op drop
    }

    // Snapshot for rollback.
    const previousLists = lists;

    const sourceListId = Number(source.droppableId);
    const destListId = Number(destination.droppableId);
    const cardId = Number(draggableId);

    let nextLists;

    if (sourceListId === destListId) {
      // ---- Reorder within the same list ----
      nextLists = lists.map((list) => {
        if (list.id !== sourceListId) return list;
        const cardsCopy = Array.from(list.cards);
        const [moved] = cardsCopy.splice(source.index, 1);
        cardsCopy.splice(destination.index, 0, moved);
        return { ...list, cards: reindex(cardsCopy) };
      });
    } else {
      // ---- Move across lists ----
      let movedCard = null;
      nextLists = lists.map((list) => {
        if (list.id === sourceListId) {
          const cardsCopy = Array.from(list.cards);
          const [removed] = cardsCopy.splice(source.index, 1);
          movedCard = removed;
          return { ...list, cards: reindex(cardsCopy) };
        }
        return list;
      });
      nextLists = nextLists.map((list) => {
        if (list.id === destListId && movedCard) {
          const cardsCopy = Array.from(list.cards);
          cardsCopy.splice(destination.index, 0, {
            ...movedCard,
            list: destListId,
          });
          return { ...list, cards: reindex(cardsCopy) };
        }
        return list;
      });
    }

    setLists(nextLists);
    setErrorMessage(null);

    try {
      await api.put(`/cards/${cardId}/move/`, {
        list: destListId,
        position: destination.index,
      });
    } catch (err) {
      // Backend rejected the move (permissions, validation, network) -
      // roll the UI back to exactly how it looked before the drag.
      setLists(previousLists);
      setErrorMessage("Couldn't save that move — reverted.");
    }
  };

  if (loading) return <div className="kanban-status">Loading board…</div>;
  if (!board) return <div className="kanban-status">Board not found.</div>;

  return (
    <div className="kanban-page">
      <header className="kanban-header">
        {onBack && (
          <button className="kanban-back-btn" onClick={onBack}>
            ← Back to boards
          </button>
        )}
        <h1>{board.name}</h1>
        {errorMessage && <div className="kanban-error">{errorMessage}</div>}
      </header>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-lists">
          {lists.map((list) => (
            <Droppable droppableId={String(list.id)} key={list.id}>
              {(provided, snapshot) => (
                <div
                  className={`kanban-list ${
                    snapshot.isDraggingOver ? "kanban-list--over" : ""
                  }`}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <div className="kanban-list-title-row">
                    <div className="kanban-list-title">{list.name}</div>
                    <button
                      className="kanban-list-delete"
                      onClick={() => deleteList(list.id)}
                      title="Delete list"
                      type="button"
                    >
                      ✕
                    </button>
                  </div>

                  {list.cards.map((card, index) => (
                    <Draggable
                      draggableId={String(card.id)}
                      index={index}
                      key={card.id}
                    >
                      {(dragProvided, dragSnapshot) => (
                        <div
                          className={`kanban-card ${
                            dragSnapshot.isDragging
                              ? "kanban-card--dragging"
                              : ""
                          }`}
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                        >
                          <div className="kanban-card-title">{card.title}</div>
                          {card.description && (
                            <div className="kanban-card-desc">
                              {card.description}
                            </div>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}

                  <NewCardForm onSubmit={(title) => addCard(list.id, title)} />
                </div>
              )}
            </Droppable>
          ))}

          <form className="kanban-add-list" onSubmit={addList}>
            <input
              className="kanban-add-list-input"
              placeholder="+ Add another list"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
            />
          </form>
        </div>
      </DragDropContext>
    </div>
  );
}

function NewCardForm({ onSubmit }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  return (
    <form className="kanban-add-card" onSubmit={handleSubmit}>
      <input
        className="kanban-add-card-input"
        placeholder="+ Add a card"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
