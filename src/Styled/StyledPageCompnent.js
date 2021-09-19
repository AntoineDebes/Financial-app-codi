import styled from "styled-components";

export const ContentContainer = styled.div`
  height: 100%;
  padding: 0 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 7.5% repeat(auto-fit, 1fr);
  row-gap: 0.4em;
  justify-content: center;
  position: relative;
  @media (min-width: 400px) {
    min-height: 93.1vh;
    grid-template-rows: 7.5% 7.5% 8% repeat(auto-fit, 5.6%);
    row-gap: 0.5rem;
  }
`;

export const ContentContainerPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 20px;
  right: 0;
  grid-column: span 7;
  @media (min-width: 400px) {
    bottom: 10px;
  }
`;

// export const PaginationBttns = css`
//   height: 10px;
//   list-style: none;
//   display: flex;
//   justify-content: center;
//   a {
//     padding: 7px;
//     margin: 6px;
//     border-radius: 5px;
//     border: 1px solid #2b2eff;
//     color: #2b2eff;
//     cursor: pointer;
//   }
//   a:hover {
//     color: rgb(0 62 235 / 99%);
//     background-color: rgb(195 202 221 / 99%);
//   }
// `;
