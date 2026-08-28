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
      if (results.length && !activeBoardId) {
        setActiveBoardId(results[0].id);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createBoard = async (e) => {
    e.preventDefault();
    if (!newBoardName.trim()) return;
    const { data } = await api.post("/boards/", { name: newBoardName.trim() });
    setBoards((prev) => [data, ...prev]);
    setActiveBoardId(data.id);
    setNewBoardName("");
  };

  if (activeBoardId) {
    return <KanbanBoard boardId={activeBoardId} />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f172a", color: "#fff", padding: 24 }}>
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
          <li key={b.id}>
            <button onClick={() => setActiveBoardId(b.id)}>{b.name}</button>
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
