import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import api from "../api/axios";

const AuthContext = createContext(null);

function decodeUserFromStorage() {
  const raw = localStorage.getItem("auth_user");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(decodeUserFromStorage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isAuthenticated = !!localStorage.getItem("access_token") && !!user;

  const persistSession = useCallback((userData, access, refresh) => {
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
    localStorage.setItem("auth_user", JSON.stringify(userData));
    setUser(userData);
  }, []);

  const login = useCallback(
    async (username, password) => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await api.post("/auth/token/", { username, password });
        // token endpoint only returns access/refresh - stash a minimal
        // user object; a real app might follow up with a /me/ call.
        persistSession({ username }, data.access, data.refresh);
        return true;
      } catch (err) {
        setError(
          err.response?.data?.detail || "Invalid username or password."
        );
        return false;
      } finally {
        setLoading(false);
      }
    },
    [persistSession]
  );

  const register = useCallback(
    async (username, email, password, password2) => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await api.post("/auth/register/", {
          username,
          email,
          password,
          password2,
        });
        persistSession(data.user, data.access, data.refresh);
        return true;
      } catch (err) {
        const payload = err.response?.data;
        const message = payload
          ? Object.values(payload).flat().join(" ")
          : "Registration failed.";
        setError(message);
        return false;
      } finally {
        setLoading(false);
      }
    },
    [persistSession]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("auth_user");
    setUser(null);
  }, []);

  // Keep multiple tabs in sync.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === "access_token" && !e.newValue) {
        setUser(null);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(
    () => ({ user, isAuthenticated, loading, error, login, register, logout }),
    [user, isAuthenticated, loading, error, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

export default AuthContext;
