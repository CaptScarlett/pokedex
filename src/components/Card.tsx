import styled from "styled-components";

export const Card = styled.div`
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : "black")};
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1.5rem;
`;
