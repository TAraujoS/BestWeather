import styled from "styled-components";

export const ListInfosUser = styled.section`
  display: flex;
  max-height: 5rem;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(15, 70, 112, 0.2);
  width: 100%;

  p {
    display: flex;
    font-size: 0.9rem;
    margin: 2%;
    max-width: 50px;
  }

  div {
    margin: 2%;
    img {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      border: 1px solid #ffffff;
      background-color: #ffffff;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    :hover {
      transition: 1.2s;
      transform: scale(1.2);
    }
  }

  svg {
    height: 30px;
    width: 3rem;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius: 0rem;

    .city-list {
      display: flex;
      align-items: center;
      p {
        margin: 0;
        min-width: 10rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    div {
      margin: 2%;
      img {
        width: 70px;
        height: 70px;
        border-radius: 100%;
      }
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
