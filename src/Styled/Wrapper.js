import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 56px 1fr;
  min-height: 100vh;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-rows: 60px 1fr;
  }
`;
