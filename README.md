# Collaborative Kanban Board

Full-stack Trello-style Kanban board: Django REST Framework (JWT auth,
PostgreSQL) + React (drag-and-drop via `@hello-pangea/dnd`).

## Backend (Docker)

```bash
cp backend/.env.example backend/.env   # edit as needed
docker compose up --build
```

The API will be available at `http://localhost:8000/api/`.

Key endpoints:
- `POST /api/auth/register/`
- `POST /api/auth/token/` (obtain JWT pair)
- `POST /api/auth/token/refresh/`
- `GET/POST /api/boards/`, `GET /api/boards/<id>/` (nested lists+cards)
- `GET/POST /api/lists/`
- `GET/POST /api/cards/`
- `PUT /api/cards/<id>/move/` — reorder/move a card

## Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm start
```

Runs on `http://localhost:3000` and talks to the API via `REACT_APP_API_URL`.

## Notes

- Boards are scoped per-user: only the owner and listed `collaborators`
  can view/edit a board, enforced in every viewset's `get_queryset()`.
- Card reordering (`/api/cards/<id>/move/`) runs inside
  `transaction.atomic()` with row-level locks (`select_for_update`) so
  concurrent drags can't corrupt `position` ordering.
- The frontend applies drag-and-drop changes optimistically and rolls
  back local state if the backend move call fails.
