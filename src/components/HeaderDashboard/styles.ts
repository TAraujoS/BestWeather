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
    transition: 5s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h3 {
      color: #fff;
      font-size: 20px;
      margin-left: 10px;
    }
  }

  div:hover > img {
    transition: 5s;
    transform: rotate(275deg);
  }
  div:hover > h3 {
    transition: 2s;
    color: yellow;
  }
`;

export const ButtonLogout = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  padding-left: 2px;
  border: none;
  border-radius: 12px;

  background-color: #08263d;
  box-shadow: 0 0 1em #08263d59;
  color: #fff;

  font-size: 25px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    transition: 1.2s;
    background-color: #3a6688;
  }
`;
