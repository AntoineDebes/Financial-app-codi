import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import img from "../images/login.jpg";
import { FaLock } from "react-icons/fa";

const AddAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  console.log(name, email, password, password_confirmation);
  const changeonClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", password_confirmation);

    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");

    axios
      .post("http://localhost:8000/api/auth/register", formData)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
  };

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
            <span className="Form_span">Add Admins</span> <FaLock></FaLock>
          </h2>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="Password confirmation"
            required
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <button type="submit">Add Admin</button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
