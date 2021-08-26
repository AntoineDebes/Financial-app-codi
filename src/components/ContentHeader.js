import React from "react";

function ContentHeader(props) {
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
        <div>
          <h2>title</h2>
        </div>
        <div>
          <h2>description</h2>
        </div>
        <div>
          <h2>amount</h2>
        </div>
        <div>
          <h2>currency</h2>
        </div>
        <div>
          <h2>date time</h2>
        </div>
        <div>
          <h2>category</h2>
        </div>
      </div>
    </>
  );
}

export default ContentHeader;
