import React, { useState, useContext, createContext } from "react";

const IsAuthContext = createContext();



export function useAuth() {
  return useContext(IsAuthContext);
}

export function IsAuthProvider({ children }) {
  const localStorageIsAuth = true
  const [isAuth, setIsAuth] = useState(localStorageIsAuth);
  return (
    <>
      <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
      </IsAuthContext.Provider>
    </>
  );
}
