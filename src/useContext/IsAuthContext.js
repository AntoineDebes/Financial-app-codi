import React, { useState, useContext, createContext } from "react";

const IsAuthContext = createContext();

export function useAuth() {
  return useContext(IsAuthContext);
}

export function IsAuthProvider({ children }) {
  const localStorageIsAuth = localStorage.getItem("isAuth");
  const [isAuth, setIsAuth] = useState(
    localStorageIsAuth ? localStorageIsAuth : false
  );

  return (
    <>
      <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
      </IsAuthContext.Provider>
    </>
  );
}
