import styled from "styled-components";

export const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;

  @media screen and (min-width: 768px) {
    width: 70%;
    border-bottom: 2px solid;
    border-style: solid;
    border-image: linear-gradient(
        90deg,
        #e6e6e6 0%,
        rgba(136, 136, 136, 0.56) 80%
      )
      1;
  }

  .header-box {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  /* p {
    font-family: "Alex Brush", cursive;
    font-size: 20px;
    color: #7497fb;
  } */

  button {
    font-size: 28px;
    background-color: transparent;
    color: gray;
    height: 100%;
    margin: 5px 10px;

    @media screen and (min-width: 768px) {
      font-size: 25px;
    }
  }
`;
