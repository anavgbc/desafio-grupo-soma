import styled from "styled-components";

export const ButtonAction = styled.button`
  width: 25%;
  height: 60%;
  font-size: 25px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--white);
  box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: 320px) {
    width: 20%;
    height: 60%;
    font-size: 20px;
  }
  @media screen and (min-width: 1024px) {
    width: 25;
    height: 75%;
  }
`;
