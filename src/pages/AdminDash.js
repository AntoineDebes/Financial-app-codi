import React, { useState, useEffect } from "react";
import { adminApi } from "../apis/Api";
import AdminCard from "../components/AdminCard";
import AdminHeader from "../components/AdminHeader";

function AdminDash() {
  const [admins, setAdmins] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    verified: "",
    admin: Boolean,
  });

  const { name, email, password} = inputs;

  useEffect(() => {
    adminApi()
      .then((res) => {
        setAdmins(res.data);
        console.log(admins);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [admins]);

  const insertAdmin = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="content__container">
        <AdminHeader />
        <div className="content__card__container">
          {admins &&
            admins.map((admin) => {
              return <AdminCard adminInfo={admin} />;
            })}

          <div className="card__container__card">
            <div></div>
            <div>
              {name}
              <input
                type="text"
                name="name"
                id=""
                onChange={(e) => insertAdmin(e)}
              />
            </div>
            <div>
              {email}
              <input
                type="text"
                name="email"
                id=""
                onChange={(e) => insertAdmin(e)}
              />
            </div>
            <div>
              {password}
              <input
                type="text"
                name="password"
                id=""
                onChange={(e) => insertAdmin(e)}
              />
            </div>
            <div>
              <input
                type="text"
                name="verified"
                id=""
                onChange={(e) => insertAdmin(e)}
              />
            </div>
            <div></div>
            <div>
              <input
                type="checkbox"
                name="admin"
                id=""
                onChange={(e) => insertAdmin(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDash;
