import styled from "styled-components";

export const Item = styled.div`
  flex-basis: 20%;

  width: 259px;

  position: relative;
  padding: 0.5rem;
  box-sizing: border-box;

  @media (max-width: 1573px) {
    flex-basis: 23.33%;
  }
  @media (max-width: 1073px) {
    flex-basis: 33.33%;
  }
  @media (max-width: 815px) {
    flex-basis: 50%;
  }
`;

export const Heading = styled.p`
  color: white;
  font-weight: 600;
  font-size: 1rem;
`;

export const Image = styled.img`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
  width: 12rem;
  height: 12rem;
  @media (max-width: 1333px) {
    width: 12rem;
    height: 12rem;
  }
  @media (max-width: 1073px) {
    width: 10rem;
    height: 10rem;
  }
  @media (max-width: 815px) {
    width: 12rem;
    height: 12rem;
  }

  @media (max-width: 555px) {
    width: 7rem;
    height: 7rem;
  }
`;
