import styled from "styled-components";

export const Detail = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-grow: 1;
  flex-direction: row;
  flex-wrap: wrap;
  border: none;
`;

export const TypeCard = styled.div`
  background-color: #b4a5fa;
  margin: 1rem;
  min-width: 9rem;
  text-align: center;
  border-radius: 1rem;
  p {
    font-size: 1rem;
    color: white;
    margin: 0.5rem;
  }
`;

export const DimentionContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 2rem;
  p {
    color: grey;
    font-size: 16px;
  }
`;
export const DimentionText = styled.h4`
  color: white;
  font-size: 22px;
  margin: 0.5rem;
`;
