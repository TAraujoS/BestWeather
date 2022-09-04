import styled from "styled-components";

export const HeaderDash = styled.header`
  width: 100vw;
  height: 90px;

  background-color: #0f4670;
`;

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 90px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h2 {
      color: #fff;
      font-size: 20px;

      margin-left: 10px;
    }
  }
`;

export const ButtonLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 65px;
  height: 48px;
  border: none;
  border-radius: 12px;

  background-color: #08263d;
  box-shadow: 0 0 1em #08263d59;
  color: #fff;

  font-size: 25px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #3a6688;
  }
`;
