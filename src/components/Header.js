import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { CgProfile, CgChevronDown } from "react-icons/cg";
import { CSSTransition } from "react-transition-group";
import Hamburger from "hamburger-react";
import { useAuth } from "../useContext/IsAuthContext";

function Header({
  isHamburgureOpen,
  setIsSideBarOpen,
  isSideBarOpen,
  ...props
}) {
  const [profileMenuIsOpen, setProfileMenuIsOpen] = useState(false);
  const { setIsAuth } = useAuth();
  const history = useHistory();

  const changeonClick = async (e) => {
    e.preventDefault();
    localStorage.removeItem("login");

    console.log({ firstTime: history });
    props.history.push({
      pathname: "/",
    });
    setIsAuth(false);
    localStorage.clear();
    console.log({ SecondTime: history });
  };

  return (
    <div className="header">
      {isHamburgureOpen && (
        <Hamburger onToggle={() => setIsSideBarOpen(!isSideBarOpen)} />
      )}

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
            <p onClick={changeonClick}>Logout </p>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
}

export default withRouter(Header);
