import React, { useState, useEffect } from "react";
import { FetchApi } from "../apis/Api";
import AdminCard from "../components/AdminCard";
import AdminHeader from "../components/AdminHeader";
import { CardContainercard, ContentCardContainer } from "../Styled/StyledCard";
import { ContentContainer } from "../Styled/StyledPageCompnent";

function AdminDash() {
  const [admins, setAdmins] = useState([]);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    verified: "",
  });

  const { name, email, password } = inputs;

  useEffect(() => {
    FetchApi({ method: "get", fetchApiUrl: "api/admin" })
      .then((res) => {
        setAdmins(res.data);
        console.log(admins);
      })
      .catch((error) => {
        console.log("error", error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const insertAdmin = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  console.log("admins", admins);
  return (
    <>
      <ContentContainer>
        <AdminHeader />
        <ContentCardContainer>
          {admins &&
            admins.map((admin) => {
              return <AdminCard adminInfo={admin} />;
            })}

          <CardContainercard>
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
          </CardContainercard>
        </ContentCardContainer>
      </ContentContainer>
    </>
  );
}

export default AdminDash;
