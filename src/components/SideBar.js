import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="content__bar">
        <Link className="content__bar__cat" to="/">
          categories
        </Link>
        <Link className="content__bar__cat" to="/admin">
          Admins
        </Link>
        <Link className="content__bar__cat" to="/FixedIncomes">
          Fixed incomes
        </Link>
        <Link className="content__bar__cat" to="/FixedExpenses">
          Fixed
        </Link>
        <Link className="content__bar__cat" to="/RecurringIncomes">
          Recurring incomes
        </Link>
        <Link className="content__bar__cat" to="RecurringExpenses">
          Recurring expenses
        </Link>
        <Link className="content__bar__cat" to="Goals">
          Goals
        </Link>
        <Link className="content__bar__cat" to="Report">
          Report
        </Link>
      </div>
    </>
  );
}

export default SideBar;
