"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(document.cookie.includes("auth=true"));
  }, []);

  const login = () => {
    document.cookie = "auth=true; path=/; max-age=86400";
    setLoggedIn(true);
  };

  const logout = () => {
    document.cookie = "auth=; path=/; max-age=0";
    setLoggedIn(false);
  };

 
  return (
    <AuthContext value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext>
  );
};

export const useAuth = () => useContext(AuthContext);
