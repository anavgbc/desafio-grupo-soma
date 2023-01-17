import styled from "styled-components";

export const ButtonAction = styled.button`
  // width: 25%;
  // height: 60%;
  width: 60px;
  height: 60px;
  font-size: 1.563rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--white);
  box-shadow: var(--shadow);

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media screen and (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;
