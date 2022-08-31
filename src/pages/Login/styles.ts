import styled from "styled-components";
import ceu from "../../assets/img/ceu.jpg";
import cloud from "../../assets/img/cloud.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: rgb(37 122 195 / 50%);

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    width: 100%;
    min-height: 100vh;

    background-color: #fff;
    border-radius: 5px;
    background-image: url(${ceu});
  }

  .cloud {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 105%;
    width: 100%;
    background: url(${cloud});
    animation: animate 90s linear infinite;
    border-radius: 5px;
    opacity: 0.5;
  }
  @keyframes animate {
    0% {
      background-position: 0px;
    }
    100% {
      background-position: 5440px;
    }
  }
  .divLogo {
    position: initial;
    /* position: relative; */
    h1 {
      display: none;
    }
    div {
      justify-content: center;
    }
  }

  .modalLogin {
    width: 349px;
    height: 445px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 2rem 0;
    gap: 1.5rem;
    box-shadow: 0 0 1em #08263d59;
    z-index: 100;

    h3 {
      margin-bottom: 1rem;
      font-size: 30px;
      color: #08263d;
      font-weight: 700;
    }
  }

  h1 {
    font-size: 35px;
    color: #fff;
  }

  .btnLogin {
    width: 100%;
    opacity: 70%;
  }

  p {
    font-size: 16px;
    color: #08263d;
  }

  input {
    width: 100%;

    margin: 0 0.3rem;
    box-shadow: rgba(43, 85, 190, 0.5);
    border: none;
    background-color: #f5f5f5;
    color: #000000;
    padding-left: 0.6rem;
    ::placeholder {
      color: #000000;
    }
  }
  @media screen and (min-width: 768px) {
    section {
      display: flex;
      flex-direction: row;
      background-color: #fff;
      width: 70%;
      height: fit-content;
      border-radius: 5px;
      background-color: #08263d;
      box-shadow: 0 0 1em #08263d59;
      margin: 0;
    }
    .modalLogin {
      width: 40%;
    }
    .divLogo {
      display: flex;
      flex-direction: column;
      align-items: left;
      width: 60%;
      height: 423px;
      gap: 3rem;
      padding: 40px;
      h1 {
        font-size: 2rem;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    section {
      display: flex;
      flex-direction: row;
      background-color: #fff;
      width: 80%;
      max-width: 700px;
      height: fit-content;
      border-radius: 5px;
      background-color: #08263d;
      box-shadow: 0 0 1em #08263d59;
      margin: 0;
    }
  }
`;

/* @media screen and (min-width: 768px) {
    section {
      display: flex;
      flex-direction: row;
      background-color: #fff;
      width: 70%;
      height: fit-content;
      border-radius: 5px;
      background-color: #08263d;
      box-shadow: 0 0 1em #08263d59;
      margin: 0;
    }

    .modalLogin {
      width: 40%;
    }

    .divLogo {
      display: flex;
      flex-direction: column;
      align-items: left;
      width: 60%;
      height: 423px;
      gap: 3rem;
      padding: 40px;

      h1 {
        font-size: 2rem;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    section {
      display: flex;
      flex-direction: row;
      background-color: #fff;
      width: 80%;
      max-width: 800px;
      height: fit-content;
      border-radius: 5px;
      background-color: #08263d;
      box-shadow: 0 0 1em #08263d59;
      margin: 0;
    }
  }
`; */
