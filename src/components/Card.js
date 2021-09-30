import React, { useEffect, useState } from "react";
import useWindowSize from "../customHooks/useWindowSize";
import { useClickOutside } from "../customHooks/useClickOutside";
// import { handleCardDeleteCall } from "../customPageComponents/PageFunctions";
import {
  ContentCardContainer,
  ContentCardPopupBackground,
  ContentCardPopup,
  ContentCardPopupcontainer,
  ContentCardPopupContainerExit,
  CardContainercard,
} from "../Styled/StyledCard";

function Card({ productInfo, handleCheckBox, mobileDeleteOneId }) {
  const [isWidthMobile, setisWidthMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const {
    title,
    category_title,
    created_at,
    currency,
    description,
    quantity,
    id,
  } = productInfo;
  const dateTime = created_at.slice(0, 10);
  const { width } = useWindowSize();

  useEffect(() => {
    setisWidthMobile(width < 400 ? true : false);
  }, [width, isWidthMobile]);

  const domNode = useClickOutside(() => {
    setIsPopupOpen(!isPopupOpen);
  });

  return (
    <>
      {isPopupOpen ? (
        <>
          <ContentCardPopupBackground></ContentCardPopupBackground>
          <ContentCardPopup ref={domNode}>
            <ContentCardPopupcontainer>
              <ContentCardPopupContainerExit
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
                <p>{category_title}</p>
              </div>
            </ContentCardPopupcontainer>
            <div className="container__button">
              <button
                className="button--danger"
                onClick={() => mobileDeleteOneId([id])}
              >
                Delete
              </button>
            </div>
          </ContentCardPopup>
        </>
      ) : null}

      <ContentCardContainer
        onClick={isWidthMobile ? () => setIsPopupOpen(!isPopupOpen) : null}
      >
        <CardContainercard>
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
            <div>{category_title}</div>
          </div>
        </CardContainercard>
      </ContentCardContainer>
    </>
  );
}

export default Card;
