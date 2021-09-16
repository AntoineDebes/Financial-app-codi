import React from "react";
import {
  ContentContainerCategory,
  ContentContainerHeader,
} from "../Styled/StyledContentHeader";

function AdminHeader() {
  return (
    <>
      <ContentContainerCategory>
        <h1>Admins</h1>
      </ContentContainerCategory>
      <ContentContainerHeader>
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
      </ContentContainerHeader>
    </>
  );
}

export default AdminHeader;
