import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--base-white);
  border-radius: 0.625rem;
  backdrop-filter: blur(0.313rem);
  color: var(--black);

  @media screen and (min-width: 768px) {
    width: 70%;
    height: 70vh;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
  }

  .container--box {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      margin: 0.313rem 0;
      font-size: 1.875rem;
      font-weight: 700;

      @media screen and (max-width: 320px) {
        font-size: 1.25rem;
      }
    }
    @media screen and (min-width: 768px) {
      width: 60%;
    }
  }

  .container--buttons {
    width: 100%;
    height: 20%;
    align-items: center;
    margin: 0 auto;
    padding: 0.625rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      padding: 0.625rem;
    }

    .button--accept {
      color: var(--btn-accept);
    }

    .button--reject {
      color: var(--btn-reject);
    }

    .button--superlike {
      color: var(--superlike-blue);
    }
  }
`;
