import React from "react";
import useWindowSize from "../customHooks/useWindowSize";
import {
  ContentContainerCategory,
  ContentContainerButtons,
  ContentContainerHeader,
} from "../Styled/StyledContentHeader";

function ContentHeader({ headerName, handleCardDelete }) {
  const { width } = useWindowSize();
  const screenWidth = width > 400 ? true : false;
  return (
    <>
      <ContentContainerCategory>
        <h1>{headerName}</h1>
      </ContentContainerCategory>
      {screenWidth && screenWidth ? (
        <>
          <ContentContainerButtons>
            <ContentContainerButtons
              danger
              onClick={(e) => handleCardDelete(e)}
            >
              Delete
            </ContentContainerButtons>
            {/* <button>asd</button> */}
          </ContentContainerButtons>
          <ContentContainerHeader>
            <div>
              <h2>{headerName === "Admins" ? "Name" : "Title"}</h2>
            </div>
            <div>
              <h2>{headerName === "Admins" ? "Email" : "Description"}</h2>
            </div>
            <div>
              <h2>{headerName === "Admins" ? "Verified" : "Quantity"}</h2>
            </div>
            <div>
              <h2>{headerName === "Admins" ? "Created" : "Currency"}</h2>
            </div>
            <div>
              <h2>{headerName === "Admins" ? "Updated" : "Date-time"}</h2>
            </div>
            <div>
              <h2>{headerName === "Admins" ? "Auth" : "Category"}</h2>
            </div>
          </ContentContainerHeader>
        </>
      ) : null}
    </>
  );
}

export default ContentHeader;
