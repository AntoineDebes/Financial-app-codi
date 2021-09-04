import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function SideBar({ isSideBarOpen, domNode }) {
  return (
    <>
      <CSSTransition
        in={isSideBarOpen}
        timeout={200}
        unmountOnExit
        classNames="side-bar-transition"
      >
        <div className="content__bar">
          <Link className="content__bar__cat" to="/Dashboard/">
            categories
          </Link>
          <Link className="content__bar__cat" to="/Dashboard/Admin">
            Admins
          </Link>
          <Link className="content__bar__cat" to="/Dashboard/FixedIncomes">
            Fixed incomes
          </Link>
          <Link className="content__bar__cat" to="/Dashboard/FixedExpenses">
            Fixed expenses
          </Link>
          <Link className="content__bar__cat" to="/Dashboard/CurrentIncomes">
            Recurring incomes
          </Link>
          <Link className="content__bar__cat" to="/Dashboard/CurrentExpenses">
            Recurring expenses
          </Link>
          <Link className="content__bar__cat" to="/Dashboard/Goals">
            Goals
          </Link>
          <Link className="content__bar__cat" to="/Dashboard/Report">
            Report
          </Link>
        </div>
      </CSSTransition>
    </>
  );
}

export default SideBar;
