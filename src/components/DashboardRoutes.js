import React from "react";
import { Route } from "react-router-dom";
import FixedIncomes from "../pages/FixedIncomes";
import AdminDash from "../pages/AdminDash";

function DashboardRoutes() {
  return (
    <>
      <Route path="/Dashboard" component={FixedIncomes} />
      <Route path="/Dashboard/Admin" component={AdminDash} />
      <Route path="/Dashboard/FixedIncomes" component={AdminDash} />
      <Route path="/Dashboard/FixedExpenses" component={AdminDash} />
      <Route path="/Dashboard/RecurringIncomes" component={AdminDash} />
      <Route path="/Dashboard/RecurringExpenses" component={AdminDash} />
      <Route path="/Dashboard/Goals" component={AdminDash} />
      <Route path="/Dashboard/Report" component={AdminDash} />
    </>
  );
}

export default DashboardRoutes;
