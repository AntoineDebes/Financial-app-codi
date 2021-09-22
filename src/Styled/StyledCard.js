import styled from "styled-components";
import { CgClose } from "react-icons/cg";

export const ContentCardContainer = styled.div`
  grid-column: span 7;
`;

export const ContentCardPopupBackground = styled.div`
  background-color: transparent;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const ContentCardPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 50%;
  width: max-content;
  max-width: 80%;
  transform: translate(-50%, -50%);
  padding-left: 16px;
  background-color: white;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding-top: 2.5rem;
  padding-bottom: 0.8rem;
`;

export const ContentCardPopupcontainer = styled.div`
  height: max-content;
  margin: 0 auto;
  display: flex;
  row-gap: 1.2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: scroll;
  > div {
    > h4 {
      margin-block-start: 0.1rem;
      margin-block-end: 0.1rem;
    }
    > h2 {
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }
`;

export const ContentCardPopupContainerExit = styled(CgClose)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CardContainercard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 0.7rem;
  border: 1px solid gray;
  border-radius: 12px;
  color: black;
  padding: 0.5rem 1.2rem;
  background-color: rgb(255, 255, 255);
  > div:first-child {
    grid-column: span 4;
  }
  > div {
    display: flex;
    flex-direction: column;
    row-gap: 0.3rem;
  }
  > div > p {
    color: rgb(173, 172, 172);
    margin-block-end: 0;
    margin-block-start: 0;
  }
  @media (min-width: 400px) {
    border: 0;
    background-color: inherit;
    grid-template-columns: 6% 15% 22% 8% 8% 16% 16%;
    column-gap: 1.5%;
    justify-content: center;
    padding-left: 0rem;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 0.1rem;
      height: 2rem;
      overflow: hidden;
    }
    > div:first-child {
      grid-column: span 1;
    }
  }
`;
