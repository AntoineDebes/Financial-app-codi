import React, { useState, useContext, createContext } from "react";

const IsAuthContext = createContext();

export function useAuth() {
  return useContext(IsAuthContext);
}

export function IsAuthProvider({ children }) {
  const localStorageIsAuth = localStorage.getItem("isAuth") === "true";
  const [isAuth, setIsAuth] = useState();
  localStorageIsAuth;
  return (
    <>
      <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
      </IsAuthContext.Provider>
    </>
  );
}
