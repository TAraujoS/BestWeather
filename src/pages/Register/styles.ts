import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height: 745px;
  margin: auto;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);

  .headerRegister {
    width: 369px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .modalRegistro {
    width: 369px;
    height: 652px;
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
    width: 75px;
    height: 40px;
    padding: 5px;
    font-size: 12px;
  }

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
  }

  p {
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: #868e96;
  }
`;
