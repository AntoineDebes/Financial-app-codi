import React from "react";
import { Switch, Route } from "react-router-dom";
import FixedIncomes from "../pages/FixedIncomes";
import AdminDash from "../pages/AdminDash";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/Dashboard" component={FixedIncomes} />
        <Route path="/Dashboard/Admin" component={AdminDash} />
        <Route path="/Dashboard/FixedIncomes" component={AdminDash} />
        <Route path="/Dashboard/FixedExpenses" component={AdminDash} />
        <Route path="/Dashboard/RecurringIncomes" component={AdminDash} />
        <Route path="/Dashboard/RecurringExpenses" component={AdminDash} />
        <Route path="/Dashboard/Goals" component={AdminDash} />
        <Route path="/Dashboard/Report" component={AdminDash} />
      </Switch>
    </>
  );
}

export default Routes;
