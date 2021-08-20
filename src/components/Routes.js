import React from "react";
import { Switch, Route } from "react-router-dom";
import FixedIncomes from "../pages/FixedIncomes";
import AdminDash from "../pages/AdminDash";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={FixedIncomes} />
        <Route path="/admin" component={AdminDash} />
        <Route path="/FixedIncomes" component={AdminDash} />
        <Route path="/FixedExpenses" component={AdminDash} />
        <Route path="/RecurringIncomes" component={AdminDash} />
        <Route path="/RecurringExpenses" component={AdminDash} />
        <Route path="/Goals" component={AdminDash} />
        <Route path="/Report" component={AdminDash} />
      </Switch>
    </>
  );
}

export default Routes;
