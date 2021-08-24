import React, { useState, useContext, createContext } from "react";

const IsAuthContext = createContext();
const IsAuthUpdateContext = createContext();

export function useAuth() {
  return useContext(IsAuthContext);
}

export function useAuthUpdate() {
  return useContext(IsAuthUpdateContext);
}

export function IsAuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <IsAuthContext.Provider value={isAuth}>
        <IsAuthUpdateContext.Provider value={setIsAuth}>
          {children}
        </IsAuthUpdateContext.Provider>
      </IsAuthContext.Provider>
    </>
  );
}
