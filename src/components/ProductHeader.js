import React from "react";

function Products() {
  return (
    <>
      <div className="content__container__category">
        <h1>Products</h1>
      </div>
      <div className="content__container__buttons">
        <button className="content__container__button--danger">Delete</button>
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

export default Products;
