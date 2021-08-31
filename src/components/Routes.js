import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../Admin/LoginPage";
import Dashboard from "../pages/Dashboard";
import { useAuth } from "../useContext/IsAuthContext";

function Routes() {
  const { isAuth, setIsAuth } = useAuth();
  console.log({ isAuth });
  const localstorageIsAuth = localStorage.getItem("isAuth");
  useEffect(() => {
    if (localstorageIsAuth) {
      console.log("contextLocalStorage", localstorageIsAuth);
      setIsAuth(true);
      console.log({ isAuth });
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
