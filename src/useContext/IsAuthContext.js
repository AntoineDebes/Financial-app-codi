import React, { useState, useContext, createContext } from "react";
import useWindowSize from "../customHooks/useWindowSize.js";

const IsAuthContext = createContext();
const ScreenWidth = createContext();


export function useScreenWidth (){
  return useContext(ScreenWidth);
}

export function useAuth() {
  return useContext(IsAuthContext);
}

export function IsAuthProvider({ children }) {
  const localStorageIsAuth = true
  const [isAuth, setIsAuth] = useState(localStorageIsAuth);
  const {width} = useWindowSize();

  return (
    <>
      <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
        <ScreenWidth.Provider value={{width}} >
          {children}
        </ScreenWidth.Provider>
      </IsAuthContext.Provider>
    </>
  );
}
