import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Admin/LoginPage";
import Dashboard from "../pages/Dashboard";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Dashboard />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
