import React, { useState, useContext, createContext } from "react";

const UserCredentialContext = createContext(); // We created a context

export function useUserCredential() {
  return useContext(UserCredentialContext);
}

export function UserCredentialProvider({ children }) {
  // Chiildren = component (compnent is an route that you want to connect to the browserRoute)
  //   const localStorageIsAuth = localStorage.getItem("isAuth") === "true"; // Checkes if isAuth inside the localstorage is true
  const [username, setUsername] = useState("");

  return (
    <>
      <UserCredentialContext.Provider value={{ username, setUsername }}>
        {children}
      </UserCredentialContext.Provider>
    </>
  );
}
