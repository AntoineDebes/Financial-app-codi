import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../useContext/IsAuthContext";

function ProtectedRoute({ component: Component, ...rest }) {
  const { isAuth } = useAuth();

  return (
    <Route
      {...rest}
      render={() => {
        if (isAuth) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

export default ProtectedRoute;
