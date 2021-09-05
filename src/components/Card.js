import React, { useEffect, useState } from "react";
import useWindowSize from "../customHooks/useWindowSize";
import { useClickOutside } from "../customHooks/useClickOutside";
import { CgClose } from "react-icons/cg";
// import { handleCardDeleteCall } from "../customPageComponents/PageFunctions";

function Card({ productInfo, handleCheckBox, mobileDeleteOneId }) {
  const [isWidthMobile, setisWidthMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { title, category, created_at, currency, description, quantity, id } =
    productInfo;
  const dateTime = created_at.slice(0, 10);
  const { width } = useWindowSize();

  useEffect(() => {
    setisWidthMobile(width < 400 ? true : false);
    console.log("isWidthMobile", isWidthMobile);
  }, [width, isWidthMobile]);

  const domNode = useClickOutside(() => {
    console.log("here");
    console.log(isPopupOpen);
    setIsPopupOpen(!isPopupOpen);
    console.log(isPopupOpen);
  });

  return (
    <>
      {isPopupOpen ? (
        <>
          <div className="content__card__popup__background"></div>
          <div className="content__card__popup" ref={domNode}>
            <div className="content__card__popup__container">
              <CgClose
                className="content__card__popup__container__exit"
                size={20}
                onClick={() => setIsPopupOpen(!isPopupOpen)}
              />
              <div>
                <h2>{title}</h2>
              </div>
              <div>
                <h4>Description</h4>
                <p>{description}</p>
              </div>
              <div>
                <h4>quantity</h4>
                <p>{quantity}</p>
              </div>
              <div>
                <h4>currency</h4>
                <p>{currency}</p>
              </div>
              <div>
                <h4>dateTime</h4>
                <p>{dateTime}</p>
              </div>
              <div>
                <h4>category</h4>
                <p>{category}</p>
              </div>
            </div>
            <button onClick={() => mobileDeleteOneId([id])}>Delete</button>
          </div>
        </>
      ) : null}

      <div
        className="content__card__container"
        onClick={isWidthMobile ? () => setIsPopupOpen(!isPopupOpen) : null}
      >
        <div className="card__container__card">
          {!isWidthMobile ? (
            <div>
              <input
                type="checkbox"
                id={id}
                className="card__container__card__checkbox"
                onClick={(e) => handleCheckBox(e)}
              />
            </div>
          ) : null}

          <div>
            <div>{title}</div>
          </div>
          {isWidthMobile ? null : (
            <div>
              <div>{description}</div>
            </div>
          )}
          <div>
            {isWidthMobile ? <p>quantity</p> : null}
            <div>{quantity}</div>
          </div>
          <div>
            {isWidthMobile ? <p>currency</p> : null}
            <div>{currency}</div>
          </div>
          <div>
            {isWidthMobile ? <p>dateTime</p> : null}
            <div>{dateTime}</div>
          </div>
          <div>
            {isWidthMobile ? <p>category</p> : null}
            <div>{category}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
