import React from "react";
import { useHistory } from "react-router-dom";
import { Redirect, Route, withRouter } from "react-router";
import LoginPage from "../Admin/LoginPage";
import "../pages/Dashboard.css";

function Header(props) {
  const history = useHistory();
  const changeonClick = async (e) => {
    e.preventDefault();
    //console.log(localStorage.getItem("login"));
    const token = localStorage.getItem("login");
    const result = await fetch("http://localhost:8000/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    }).then((res) => res.json());
    console.log(result.message);
    console.log(result.success);
    if (result.success) {
      props.history.push({
        pathname: "/login",
      });
    } else {
      console.log("dddd");
    }
  };
  return (
    <div class="header">
      <button type="submit">Add Admins</button>
      <button onClick={changeonClick} type="submit">
        Logout{" "}
      </button>
    </div>
  );
}

export default withRouter(Header);
