import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth,useScreenWidth } from "../useContext/IsAuthContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const { isAuth } = useAuth();
  const {width} = useScreenWidth()
  const localStorageIsAuth = localStorage.getItem("isAuth") === "true";

console.log("screenWidth",width)
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuth || localStorageIsAuth) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
