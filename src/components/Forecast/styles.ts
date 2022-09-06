import styled from "styled-components";

export const ForecastList = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  padding: 0 5%;
  margin: 25px 0;

  ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1200px;
    gap: 1rem;
    padding: 15px 10px;
    border-radius: 10px;
    background-color: rgba(15, 70, 112, 0.2);
  }

  li {
    display: flex;
    flex-direction: column;
    width: 12%;
    gap: 10px;
    color: #ffffff;

    :hover {
      transform: scale(1.1);
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
      div {
        span {
          font-size: 14px;
          color: gray;
        }
      }
    }
  }

  @media screen and (max-width: 840px) {
    ul {
      flex-wrap: wrap;
    }

    li {
      width: 20%;
    }
  }
  @media screen and (max-width: 550px) {
    ul {
      justify-content: normal;
    }

    li {
      flex-direction: row;
      width: 45%;

      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 425px) {
    li {
      width: 100%;

      div {
        flex-direction: row;
        div {
          width: 45%;
        }
      }
    }
  }
`;
