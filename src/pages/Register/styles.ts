import styled from "styled-components";
import nuvem from "../../assets/img/nuvem.jpg";

export const Container = styled.div`
  width: 1440px;
  height: 745px;
  margin: auto;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${nuvem});

  .headerRegister {
    width: 369px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .modalRegistro {
    width: 369px;
    height: 552px;
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
    width: 65px;
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
`;
