import styled from "styled-components";
import ceu from "../../assets/img/ceu.jpg";
import cloud from "../../assets/img/cloud.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-image: url(${ceu});
  background-color: rgb(37 122 195 / 50%);

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    background: none;
    justify-content: space-between;
  }

  .cloud {
    position: absolute;
    top: 123px;
    left: 270px;
    height: 67%;
    width: 42%;
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
    background: transparent;
    border: transparent;
  }

  .divLogo > h1 {
    font-size: 0px;
  }

  .divLogo > div {
    justify-content: center;
  }

  .modalLogin {
    padding: 2rem 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 1em #08263d59;

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
    width: 90%;
    opacity: 70%;
  }

  p {
    font-size: 16px;
    color: #08263d;
  }

  input {    
    width: 90%;
    margin: 0 0.3rem;    
    box-shadow: rgba(43, 85, 190, 0.5);
    border: none;
    background-color: #f5f5f5;
    ::placeholder {
      padding-left: 0.6rem;
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
`
