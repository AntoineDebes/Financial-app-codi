import React, { useState, useContext, createContext } from "react";

const IsAuthContext = createContext(); // We created a context

export function useAuth() {
  return useContext(IsAuthContext);
}

export function IsAuthProvider({ children }) {
  // Chiildren = component (compnent is an route that you want to connect to the browserRoute)
  const localStorageIsAuth = localStorage.getItem("isAuth") === "true"; // Checkes if isAuth inside the localstorage is true
  const [isAuth, setIsAuth] = useState(localStorageIsAuth);

  return (
    <>
      <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
        {children}
      </IsAuthContext.Provider>
    </>
  );
}
