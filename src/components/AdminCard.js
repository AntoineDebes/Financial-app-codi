import React from "react";

function AdminCard(props) {
  const { name, email, password, verified, created_at, admin } =
    props.adminInfo;
  console.log({ name });
  const dateTime = created_at.slice(0, 10);
  return (
    <>
      <div class="card__container__card">
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
