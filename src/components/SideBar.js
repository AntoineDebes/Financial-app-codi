import React from "react";
import { CSSTransition } from "react-transition-group";
import { ContentBar, ContentBarCatLink } from "../Styled/StyledSiderBar";

function SideBar({ isSideBarOpen }) {
  return (
    <>
      <CSSTransition
        in={isSideBarOpen}
        timeout={200}
        unmountOnExit
        classNames="side-bar-transition"
      >
        <ContentBar>
          <ContentBarCatLink to="/Dashboard/PostData">
            Add Data
          </ContentBarCatLink>
          <ContentBarCatLink to="/Dashboard/AddAdmin">
            Add Admins
          </ContentBarCatLink>
          <ContentBarCatLink to="/Dashboard/Categories">
            Categories
          </ContentBarCatLink>
          <ContentBarCatLink to="/Dashboard/Admin">Admins</ContentBarCatLink>
          <ContentBarCatLink to="/Dashboard/FixedIncomes">
            FixedIncomes
          </ContentBarCatLink>
          <ContentBarCatLink to="/Dashboard/FixedExpenses">
            Fixed expenses
          </ContentBarCatLink>
          <ContentBarCatLink to="/Dashboard/CurrentIncomes">
            Recurring incomes
          </ContentBarCatLink>
          <ContentBarCatLink to="/Dashboard/CurrentExpenses">
            Recurring expenses
          </ContentBarCatLink>
          <ContentBarCatLink to="/Dashboard/Goals">Goals</ContentBarCatLink>
          <ContentBarCatLink to="/Dashboard/Report">Report</ContentBarCatLink>
        </ContentBar>
      </CSSTransition>
    </>
  );
}

export default SideBar;
