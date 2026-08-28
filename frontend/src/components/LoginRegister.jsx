import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./LoginRegister.css";

export default function LoginRegister() {
  const { login, register, loading, error } = useAuth();
  const [mode, setMode] = useState("login"); // "login" | "register"

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const isLogin = mode === "login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await login(username, password);
    } else {
      await register(username, email, password, password2);
    }
  };

  const switchMode = () => {
    setMode(isLogin ? "register" : "login");
    setPassword("");
    setPassword2("");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1 className="auth-title">
          {isLogin ? "Welcome back" : "Create an account"}
        </h1>
        <p className="auth-subtitle">
          {isLogin
            ? "Log in to access your boards."
            : "Sign up to start organizing your work."}
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label">
            Username
            <input
              className="auth-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
            />
          </label>

          {!isLogin && (
            <label className="auth-label">
              Email
              <input
                className="auth-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </label>
          )}

          <label className="auth-label">
            Password
            <input
              className="auth-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={isLogin ? "current-password" : "new-password"}
            />
          </label>

          {!isLogin && (
            <label className="auth-label">
              Confirm password
              <input
                className="auth-input"
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
                autoComplete="new-password"
              />
            </label>
          )}

          {error && <div className="auth-error">{error}</div>}

          <button className="auth-submit" type="submit" disabled={loading}>
            {loading ? "Please wait…" : isLogin ? "Log in" : "Sign up"}
          </button>
        </form>

        <button type="button" className="auth-switch" onClick={switchMode}>
          {isLogin
            ? "Don't have an account? Sign up"
            : "Already have an account? Log in"}
        </button>
      </div>
    </div>
  );
}
