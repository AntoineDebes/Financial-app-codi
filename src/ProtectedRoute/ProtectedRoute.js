import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../useContext/IsAuthContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const { isAuth } = useAuth();
  const localStorageIsAuth = localStorage.getItem("isAuth") === "true";

  console.log(isAuth, localStorageIsAuth);
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
