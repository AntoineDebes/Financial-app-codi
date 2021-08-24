import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Admin/LoginPage";
import Dashboard from "../pages/Dashboard";
import { IsAuthProvider } from "../useContext/IsAuthContext";

function Routes() {
  return (
    <IsAuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Dashboard />
        </Switch>
      </BrowserRouter>
    </IsAuthProvider>
  );
}

export default Routes;
