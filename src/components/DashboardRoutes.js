import React from "react";
import FixedIncomes from "../pages/FixedIncomes";
import AdminDash from "../pages/AdminDash";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function DashboardRoutes() {
  return (
    <>
      <ProtectedRoute path="/Dashboard" component={FixedIncomes} />
      <ProtectedRoute path="/Dashboard/Admin" component={AdminDash} />
      <ProtectedRoute path="/Dashboard/FixedIncomes" component={AdminDash} />
      <ProtectedRoute path="/Dashboard/FixedExpenses" component={AdminDash} />
      <ProtectedRoute
        path="/Dashboard/RecurringIncomes"
        component={AdminDash}
      />
      <ProtectedRoute
        path="/Dashboard/RecurringExpenses"
        component={AdminDash}
      />
      <ProtectedRoute path="/Dashboard/Goals" component={AdminDash} />
      <ProtectedRoute path="/Dashboard/Report" component={AdminDash} />
    </>
  );
}

export default DashboardRoutes;
