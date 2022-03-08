import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.h4`
  color: white;
  font-weight: 500;
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
`;

export const Image = styled.img`
  width: 10rem;
  height: auto;
  margin: 2rem;
`;

export const ButtonBack = styled.button`
  padding: 0;
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 800;
  color: white;
`;

export const NavContainer = styled.div`
  display: flex;
  width: 85%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: white;
`;
