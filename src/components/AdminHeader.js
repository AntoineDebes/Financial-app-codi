import React from "react";

function AdminHeader() {
  return (
    <>
      <div className="content__container__category">
        <h1>Admins</h1>
      </div>
      <div className="content__container__header">
        <div>
          <h2>name</h2>
        </div>
        <div>
          <h2>email</h2>
        </div>
        <div>
          <h2>password</h2>
        </div>
        <div>
          <h2>verified</h2>
        </div>
        <div>
          <h2>date time</h2>
        </div>
        <div>
          <h2>Ownership</h2>
        </div>
      </div>
    </>
  );
}

export default AdminHeader;
