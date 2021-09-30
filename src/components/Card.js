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

function Card({ productInfo, handleCheckBox, mobileDeleteOneId, categories }) {
  const [isWidthMobile, setisWidthMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState();

  const {
    title,
    category_id,
    created_at,
    currency,
    description,
    quantity,
    id,
  } = productInfo;
  const dateTime = created_at.slice(0, 10);
  const { width } = useWindowSize();

  useEffect(() => {
    setCategoryTitle(
      categories.map((item) => {
        let itemTitle = "";
        if (item.id === category_id) {
          return (itemTitle = item.title);
        }
        return itemTitle;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                <p>{categoryTitle}</p>
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
            <div>{categoryTitle}</div>
          </div>
        </CardContainercard>
      </ContentCardContainer>
    </>
  );
}

export default Card;
