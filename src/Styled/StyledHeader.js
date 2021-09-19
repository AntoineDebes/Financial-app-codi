import styled from "styled-components";

export const StyledHeader = styled.div`
  grid-column: span 8;
  height: 100%;
  background-color: rgb(223 223 223);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 999;
  box-shadow: 0 0 7px 1px rgb(95, 91, 91);
  @media (min-width: 1000px) {
    justify-content: flex-end;
    height: 100%;
  }
`;

export const HeaderUser = styled.div`
  position: relative;
  background-color: rgb(204 204 204);
`;

export const HeaderUserProfile = styled.div`
  padding-right: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.3rem;
  height: 100%;
`;

export const HeaderUserMenu = styled.div`
  overflow: hidden;
  width: 100%;
  top: 100%;
  background-color: rgb(204 204 204);
  z-index: 100;
  box-shadow: 0 5px 9px 1px rgb(95, 91, 91);
  p:hover {
    cursor: pointer;
  }
`;
