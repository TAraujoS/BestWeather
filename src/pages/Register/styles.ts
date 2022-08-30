import styled from "styled-components";
import nuvem from "../../assets/img/nuvem.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${nuvem});

  .headerRegister {
    min-width: 295px;
    width: 100%;
    gap: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .modalRegistro {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 27px;
    border-radius: 5px;
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
    border: 2px solid #1976bd;
    background-color: #0f4670;
    max-width: 500px;
    opacity: 80%;
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
