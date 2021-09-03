import React from "react";

function Card({ productInfo, handleCheckBox }) {
  const { title, category, created_at, currency, description, quantity, id } =
    productInfo;

  const dateTime = created_at.slice(0, 10);
  return (
    <>
      <div className="content__card__container">
        <div className="card__container__card">
          <div>
            <input
              type="checkbox"
              // checked={props.checked.includes(id) ? true : false}
              id={id}
              onClick={(e) => handleCheckBox(e)}
            />
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

export default Card;
