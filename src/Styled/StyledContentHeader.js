import styled, { css } from "styled-components";

export const ContentContainerCategory = styled.div`
  grid-column: span 7;
  display: flex;
  justify-content: center;
`;

export const ContentContainerButtons = styled.div`
  grid-column: -1/-3;
  display: grid;
  place-content: center;
  ${({ danger }) =>
    danger &&
    css`
      background-color: red;
      padding: 0.7rem 1.2rem;
      color: white;
      border-radius: 5px;
    `}
`;

export const ContentContainerHeader = styled.div`
  padding-bottom: 1rem;
  grid-column: span 7;
  display: grid;
  column-gap: 1.5%;
  height: 100%;
  div {
    min-height: 70px;
    > h2 {
      margin-block-start: 0;
      margin-block-end: 0;
      font-size: 1rem;
    }
  }

  @media (min-width: 400px) {
    padding-left: 7%;
    grid-template-columns: 16% 23% 9% 8% 17% 17%;
    > div {
      width: 100%;
      display: grid;
      place-items: center;
      background-color: rgb(223 223 223);
      height: 100%;
      overflow: hidden;
    }
  }
`;
