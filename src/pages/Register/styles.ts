import styled from "styled-components";
import ceu from "../../assets/img/ceu.jpg";
import cloud from "../../assets/img/cloud.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${ceu});
  .cloud {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: url(${cloud});
    background-size: cover;
    animation: animate 90s linear infinite;
    border-radius: 5px;
  }
  @keyframes animate {
    0% {
      background-position: 0px;
    }
    100% {
      background-position: 5440px;
    }
  }
  .modalRegistro {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 27px;
    border-radius: 5px;
    z-index: 1;
  }
  .headerRegister {
    min-width: 295px;
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .btnBackLogin {
    width: 80%;
    max-width: 80px;
    height: 35px;
    padding: 5px;
    font-size: 12px;
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #08263d;
    font-weight: 700;
  }
  p {
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: #868e96;
  }
  .input-text {
    min-width: 250px;
    border: 2px solid #1976bd;
    background-color: #0f4670;
    max-width: 500px;
    color: #ffffff;
    ::placeholder {
      color: #ffffff;
      padding-left: 0.6rem;
    }
  }
  @media screen and (min-width: 768px) {
    .headerRegister {
      width: 600px;
    }
  }
`;
