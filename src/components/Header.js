import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect, Route, withRouter } from "react-router";
import { CgProfile, CgChevronDown } from "react-icons/cg";
import "../pages/Dashboard.css";
import { CSSTransition } from "react-transition-group";
import Hamburger from "hamburger-react";

function Header(props) {
  const [profileMenuIsOpen, setProfileMenuIsOpen] = useState(false);

  const history = useHistory();

  const changeonClick = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("login");
    const result = await fetch("http://localhost:8000/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    }).then((res) => res.json());
    console.log({ result });
    console.log(result.success);
    if (result.success) {
      props.history.push({
        pathname: "/",
      });
    } else {
      console.log("dddd");
    }
  };

  return (
    <div className="header">
      {props.isHamburgureOpen ? (
        <Hamburger
          onToggle={() => props.setSideBarOpen(!props.isSideBarOpen)}
        />
      ) : null}

      <div
        className="header__user"
        onClick={() => setProfileMenuIsOpen(!profileMenuIsOpen)}
      >
        <div className="header__user__profile">
          <CgChevronDown />
          <p>antoine</p>
          <CgProfile size={20} />
        </div>

        <CSSTransition
          in={profileMenuIsOpen}
          timeout={200}
          classNames="list-transition"
          unmountOnExit
        >
          <div className="header__user__menu">
            <p>Add Admins</p>
            <p oncClick={changeonClick}>Logout </p>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default withRouter(Header);
