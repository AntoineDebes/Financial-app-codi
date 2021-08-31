import React from "react";
import useWindowSize from "../customHooks/useWindowSize";

function ContentHeader(props) {
  const { width } = useWindowSize();
  const screenWidth = width < 400 ? true : false;
  console.log(screenWidth);
  return (
    <>
      <div className="content__container__category">
        <h1>{props.headerName}</h1>
      </div>
      <div className="content__container__buttons">
        <button
          className="content__container__button--danger"
          onClick={(e) => props.handleCardDelete(e)}
        >
          Delete
        </button>
        {/* <button>asd</button> */}
      </div>
      <div className="content__container__header">
        {screenWidth ? (
          <div className="content__container__header__first-div"></div>
        ) : null}

        <div>
          <h2>Title</h2>
        </div>
        <div>
          <h2>
            {screenWidth ? "Desc" : "Description"}
            {/* description */}
          </h2>
        </div>
        <div>
          <h2>{screenWidth ? "Q" : "Quantity"}</h2>
        </div>
        <div>
          <h2>{screenWidth ? "Cr" : "Currency"}</h2>
        </div>
        <div>
          <h2>{screenWidth ? "Date" : "Date-time"}</h2>
        </div>
        <div>
          <h2>{screenWidth ? "Cat" : "Category"}</h2>
        </div>
      </div>
    </>
  );
}

export default ContentHeader;
