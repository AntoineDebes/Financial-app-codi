import React from "react";

function Card(props) {
  const { title, category, created_at, currency, description, quantity, id } =
    props.productInfo;
  const{}

  const dateTime = created_at.slice(0, 10);
  console.log(props.checked);
  return (
    <>
      <div className="content__card__container">
        <div className="card__container__card">
          <div>
            <input
              type="checkbox"
              Checked={props.checked.includes(id) ? true : false}
              id={id}
              onClick={(e) => props.handleCheckBox(e)}
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
