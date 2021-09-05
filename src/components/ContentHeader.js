import React from "react";
import useWindowSize from "../customHooks/useWindowSize";

function ContentHeader({ headerName, handleCardDelete }) {
  const { width } = useWindowSize();
  const screenWidth = width > 400 ? true : false;
  return (
    <>
      <div className="content__container__category">
        <h1>{headerName}</h1>
      </div>
      {screenWidth && screenWidth ? (
        <>
          <div className="content__container__buttons">
            <button
              className="content__container__button--danger"
              onClick={(e) => handleCardDelete(e)}
            >
              Delete
            </button>
            {/* <button>asd</button> */}
          </div>
          <div className="content__container__header">
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
          </div>
        </>
      ) : null}
    </>
  );
}

export default ContentHeader;
