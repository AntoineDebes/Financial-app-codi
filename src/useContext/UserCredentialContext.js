import React, { useState, useContext, createContext } from "react";

const UserCredentialContext = createContext(); // We created a context

export function useUserCredential() {
  return useContext(UserCredentialContext);
}

export function UserCredentialProvider({ children }) {
  const localStorageUsername = localStorage.getItem("username"); // Checkes if isAuth inside the localstorage is true
  const [username, setUsername] = useState(localStorageUsername);

  return (
    <>
      <UserCredentialContext.Provider value={{ username, setUsername }}>
        {children}
      </UserCredentialContext.Provider>
    </>
  );
}
