import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Redirect, Route, withRouter } from "react-router";
import "./LoginPage.css";

import Dashboard from "../pages/Dashboard";

import img from "../images/login.jpg";
import { FaLock } from "react-icons/fa";

function LoginPage(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeonClick = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const result = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());

    if (result.success) {
      console.log({ result });
      localStorage.setItem(
        "login",
        result.token_type + " " + result.access_token
      );
      // console.log("front-token", result.token_type + " " + result.access_token);
      props.history.push({
        pathname: "/dashboard",
      });
    }
  };
  ///////////////////////////////////////////////////////////////////
  return (
    <div data-aos="fade-left" className="login">
      <div className="login_image">
        <div className="image_img">
          <img src={img} alt="login" />
        </div>
      </div>
      <div className="Form">
        <form onSubmit={changeonClick} encType="multipart/form-data">
          <h2>
            <span className="Form_span">Log In</span> <FaLock></FaLock>
          </h2>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
