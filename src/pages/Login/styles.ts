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
  background-color: #3163ff;
  background-image: linear-gradient(0deg, #3163ff 0%, #85a4ff 56%, #c6d3ff 95%);

  .global-login-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    min-height: 100vh;
    border-radius: 5px;
    background-image: url(${ceu});
    z-index: 0;
  }

  .cloud {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background: url(${cloud});
    animation: animate 90s linear infinite;
    border-radius: 5px;
    opacity: 0.5;
    z-index: 1;
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
    h1 {
      display: none;
    }
    div {
      justify-content: center;
    }
  }

  .modalLogin {
    max-width: 50vh;
    width: 90%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
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
    .global-login-div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-content: center;
      width: 100%;
    }

    section {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      background-color: #fff;
      border-radius: 5px;
      background-color: #08263d;
      margin: 0 10%;
      opacity: 100%;
      background: none;
      border: none;
    }
    .modalLogin {
      width: 40%;
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
    }
    .divLogo {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: left;
      width: 60%;
      height: 65vh;
      gap: 3rem;
      background-image: url(${ceu});

      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      h1 {
        max-width: 400px;
        display: block;
        font-size: 2rem;
        align-self: center;
      }
    }
  }
`;
