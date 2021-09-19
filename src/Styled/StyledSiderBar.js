import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentBar = styled.div`
  min-width: 10.65em;
  height: 100%;
  z-index: 10;
  position: absolute;
  max-width: 211px;
  background-color: rgb(223 223 223);
  box-shadow: 0 0 0 2000px rgb(0 0 0 / 50%);
  @media (min-width: 1000px) {
    position: relative;
    box-shadow: 0 0 7px 1px rgb(95, 91, 91);
  }
`;

export const ContentBarCatLink = styled(Link)`
  padding-left: 0.5rem;
  display: block;
  text-decoration: none;
  color: black;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: 0.4s;
  &:hover {
    color: rgb(0 62 235 / 99%);
    background-color: rgb(195 202 221 / 99%);
    font-weight: 500;
  }
  &:focus {
    color: rgb(0 62 235 / 99%);
    background-color: rgb(195 202 221 / 99%);
    font-weight: 500;
  }
`;
