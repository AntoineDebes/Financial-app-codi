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

function AdminCard({ productInfo, handleCheckBox, mobileDeleteOneId }) {
  const [isWidthMobile, setisWidthMobile] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { name, email, created_at, updated_at, verified, admin, id } =
    productInfo;
  const createdAtAdmin = created_at.slice(0, 10);
  const updatedAtAdmin = updated_at.slice(0, 10);
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
                <h2>{name}</h2>
              </div>
              <div>
                <h4>Email</h4>
                <p>{email}</p>
              </div>
              <div>
                <h4>Verified</h4>
                <p>{verified}</p>
              </div>
              <div>
                <h4>Created_at</h4>
                <p>{createdAtAdmin}</p>
              </div>
              <div>
                <h4>Updated_at</h4>
                <p>{updatedAtAdmin}</p>
              </div>
              <div>
                <h4>Auth</h4>
                <p>{admin === 0 ? "Moderator" : "Owner"}</p>
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
          {!isWidthMobile && admin !== 1 ? (
            <div>
              <input
                type="checkbox"
                id={id}
                className="card__container__card__checkbox"
                onClick={(e) => handleCheckBox(e)}
              />
            </div>
          ) : (
            <div></div>
          )}

          <div>
            <div>{name}</div>
          </div>
          {isWidthMobile ? null : (
            <div>
              <div>{email}</div>
            </div>
          )}
          <div>
            {isWidthMobile ? <p>Verified</p> : null}
            <div>{verified}</div>
          </div>
          <div>
            {isWidthMobile ? <p>Created_at</p> : null}
            <div>{createdAtAdmin}</div>
          </div>
          <div>
            {isWidthMobile ? <p>Updated_at</p> : null}
            <div>{updatedAtAdmin}</div>
          </div>
          <div>
            {isWidthMobile ? <p>Auth</p> : null}
            <div>{admin === 0 ? "Moderator" : "Owner"}</div>
          </div>
        </CardContainercard>
      </ContentCardContainer>
    </>
  );
}

export default AdminCard;
