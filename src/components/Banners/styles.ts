import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(15, 70, 112, 0.2);
  max-width: 95%;

  padding: 20px;
  border-radius: 12px;
  margin: 1em 0;

  .divText {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
      max-width: 90%;
    }
  }

  h3 {
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 1rem;
    padding: 5px;
    margin-bottom: 15px;
  }

  p {
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 0.9rem;
    padding: 5px;
  }

  img {
    margin-top: 0.5rem;
    width: 100%;
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    max-width: 100%;
    min-height: 380px;

    img {
      max-width: 50%;
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    max-width: 115%;
    min-height: 380px;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    max-width: 57%;
    min-height: 400px;
  }

  @media screen and (min-width: 2560px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    max-width: 57%;
    min-height: 260px;
    max-height: 400px;

    img {
      max-height: 350px;
    }
  }
`;
