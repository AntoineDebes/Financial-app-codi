import React from "react";
import PageComponent from "../customPageComponents/PageComponent";

function AdminDash() {
  return (
    <>
      <PageComponent fetchApiUrl="api/admin" headerName="Admins" />
    </>
  );
}

export default AdminDash;
