import styled from "styled-components";

export const ButtonAction = styled.button`
  width: 25%;
  height: 60%;
  font-size: 1.563rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--white);
  box-shadow: var(--shadow);

  @media screen and (max-width: 320px) {
    width: 20%;
    height: 60%;
    font-size: 1.25rem;
  }
  @media screen and (min-width: 1024px) {
    height: 75%;
  }
`;
