import React from "react";

function AdminCard({ adminInfo }) {
  const { name, email, password, verified, created_at, admin } = adminInfo;
  const dateTime = created_at.slice(0, 10);
  return (
    <>
      <div className="card__container__card">
        <div>
          <input type="checkbox" name="" id="" />
        </div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{email}</p>
        </div>
        <div>
          <p>{password}</p>
        </div>
        <div>
          <p>{verified}</p>
        </div>
        <div>
          <p>{dateTime}</p>
        </div>
        <div>
          <p>{admin === 0 ? "Moderator" : "Owner"}</p>
        </div>
      </div>
    </>
  );
}

export default AdminCard;
