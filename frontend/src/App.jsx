import React, { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginRegister from "./components/LoginRegister";
import KanbanBoard from "./components/KanbanBoard";
import api from "./api/axios";

function Dashboard() {
  const { logout, user } = useAuth();
  const [boards, setBoards] = useState([]);
  const [activeBoardId, setActiveBoardId] = useState(null);
  const [newBoardName, setNewBoardName] = useState("");

  useEffect(() => {
    api.get("/boards/").then(({ data }) => {
      const results = data.results || data;
      setBoards(results);
    });
  }, []);

  const createBoard = async (e) => {
    e.preventDefault();
    if (!newBoardName.trim()) return;
    const { data } = await api.post("/boards/", { name: newBoardName.trim() });
    setBoards((prev) => [data, ...prev]);
    setActiveBoardId(data.id);
    setNewBoardName("");
  };

  const deleteBoard = async (boardId) => {
    if (!window.confirm("Delete this board and everything in it?")) return;
    await api.delete(`/boards/${boardId}/`);
    setBoards((prev) => prev.filter((b) => b.id !== boardId));
  };

  if (activeBoardId) {
    return (
      <KanbanBoard
        boardId={activeBoardId}
        onBack={() => setActiveBoardId(null)}
      />
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#fff",
        padding: 24,
      }}
    >
      <h1>Welcome, {user?.username}</h1>
      <button onClick={logout}>Log out</button>
      <form onSubmit={createBoard} style={{ marginTop: 16 }}>
        <input
          value={newBoardName}
          onChange={(e) => setNewBoardName(e.target.value)}
          placeholder="New board name"
        />
        <button type="submit">Create board</button>
      </form>
      <ul>
        {boards.map((b) => (
          <li
            key={b.id}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <button onClick={() => setActiveBoardId(b.id)}>{b.name}</button>
            <button onClick={() => deleteBoard(b.id)} title="Delete board">
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Shell() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Dashboard /> : <LoginRegister />;
}

export default function App() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  );
}
