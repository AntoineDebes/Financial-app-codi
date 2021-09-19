import React from "react";
import FixedIncome from "../pages/FixedIncome";
import FixedExpense from "../pages/FixedExpense";
import CurrentIncome from "../pages/CurrentIncome";
import CurrentExpense from "../pages/CurrentExpense";
import AdminDash from "../pages/AdminDash";
import Report from "../pages/Report"
import AddAdmin from "../pages/AddAdmin"
import Goals from"../pages/Goals"
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function DashboardRoutes() {
  return (
    <>
      <ProtectedRoute path="/Dashboard/AddAdmin" component={AddAdmin} />
      <ProtectedRoute path="/Dashboard/categories" component={AdminDash} />
      <ProtectedRoute path="/Dashboard/Admin" component={AdminDash} />
      <ProtectedRoute path="/Dashboard/FixedIncomes" component={FixedIncome} />
      <ProtectedRoute
        path="/Dashboard/FixedExpenses"
        component={FixedExpense}
      />
      <ProtectedRoute
        path="/Dashboard/CurrentIncomes"
        component={CurrentIncome}
      />
      <ProtectedRoute
        path="/Dashboard/CurrentExpenses"
        component={CurrentExpense}
      />
      <ProtectedRoute path="/Dashboard/Goals" component={Goals} />
      <ProtectedRoute path="/Dashboard/Report" component={Report} />
    </>
  );
}

export default DashboardRoutes;
