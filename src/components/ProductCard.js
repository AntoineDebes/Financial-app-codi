import React from "react";

function ProductCard(props) {
  const { title, category, created_at, currency, description, quantity } =
    props.productInfo;

  const dateTime = created_at.slice(0, 10);
  console.log(props);
  return (
    <>
      <div className="content__card__container">
        <div className="card__container__card">
          <div>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <p>{title}</p>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div>
            <p>{quantity}</p>
          </div>
          <div>
            <p>{currency}</p>
          </div>
          <div>
            <p>{dateTime}</p>
          </div>
          <div>
            <p>{category}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
