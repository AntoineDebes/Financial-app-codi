import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../Admin/LoginPage";
import Dashboard from "../pages/Dashboard";
import { useAuth } from "../useContext/IsAuthContext";

function Routes() {
  const { setIsAuth } = useAuth();
  const localstorageIsAuth = localStorage.getItem("isAuth");
  useEffect(() => {
    if (localstorageIsAuth) {
      setIsAuth(true);
    }
  });
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Dashboard />
    </Switch>
  );
}

export default Routes;
