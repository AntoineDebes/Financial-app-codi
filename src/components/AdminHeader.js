import React from "react";
import useWindowSize from "../customHooks/useWindowSize";
import {
  ContentContainerCategory,
  ContentContainerButtons,
  ContentContainerHeader,
} from "../Styled/StyledContentHeader";

function AdminHeader({ headerName, handleCardDelete }) {
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
              <h2>Title</h2>
            </div>
            <div>
              <h2>description</h2>
            </div>
            <div>
              <h2>Quantity</h2>
            </div>
            <div>
              <h2>Currency</h2>
            </div>
            <div>
              <h2>Date-time</h2>
            </div>
            <div>
              <h2>Category</h2>
            </div>
          </ContentContainerHeader>
        </>
      ) : null}
    </>
  );
}

export default AdminHeader;
