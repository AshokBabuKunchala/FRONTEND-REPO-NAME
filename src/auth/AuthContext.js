import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    if (token && username) {
      setUser({ username, role });
    }
  }, []);

  const login = (token, username, role) => {
    localStorage.setItem("access_token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    setUser({ username, role });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
