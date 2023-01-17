import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--black);

  @media screen and (max-width: 320px) {
    height: 60%;
  }

  @media screen and (min-width: 768px) {
    height: 60%;
    margin-top: 15px;
  }

  .card {
    width: 100%;
    height: 100%;
    background-color: var(--white);
    box-shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.12);
    border-radius: 15px;

    img {
      width: 100%;
      height: 75%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      object-fit: cover;
    }

    .card--info {
      width: 100%;
      height: 20%;
      margin: 0 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 320px) {
        padding: 5px;
      }

      > div {
        width: 70%;
      }

      h3 {
        /* width: 220px; */
        width: 80%;
        font-size: 28px;
        font-weight: 650;
        text-align: start;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        @media screen and (min-width: 768px) {
          margin-bottom: 0;
        }

        @media screen and (max-width: 320px) {
          font-size: 22px;
          font-weight: 600;
          width: 150px;
        }

        @media screen and (min-width: 1024px) {
          width: 90%;
        }
      }

      p {
        width: 230px;
        font-size: 16px;
        font-weight: 400;
        color: gray;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        @media screen and (max-width: 320px) {
          width: 150px;
        }
      }

      span {
        color: #7497fb;
        font-size: 25px;
        width: 20%;
      }
    }
  }
`;
