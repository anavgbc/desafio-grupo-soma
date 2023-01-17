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
    margin-top: 0.938rem;
  }

  .card {
    width: 100%;
    height: 100%;
    background-color: var(--white);
    box-shadow: var(--shadow);
    border-radius: 0.938rem;

    img {
      width: 100%;
      height: 75%;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      object-fit: cover;
    }

    .card--info {
      width: 100%;
      height: 20%;
      margin: 0 0.938rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      @media screen and (max-width: 320px) {
        padding: 0.313rem;
      }

      > div {
        width: 70%;
      }

      h3 {
        width: 80%;
        font-size: 1.75rem;
        font-weight: 650;
        text-align: start;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        @media screen and (min-width: 768px) {
          margin-bottom: 0;
        }

        @media screen and (max-width: 320px) {
          font-size: 1.375rem;
          font-weight: 600;
          width: 9.375rem;
        }

        @media screen and (min-width: 1024px) {
          width: 90%;
        }
      }

      p {
        width: 14.375rem;
        font-size: 1rem;
        font-weight: 400;
        color: var(--gray);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        @media screen and (max-width: 320px) {
          width: 9.375rem;
        }
      }

      span {
        color: var(--superlike-blue);
        font-size: 1.563rem;
        width: 20%;
      }
    }
  }
`;
