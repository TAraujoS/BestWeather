import styled from "styled-components";

export const BodyDash = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background-color: #09153e;
  color: #fff;

  .divLoading {
    width: 100vw;
    height: 100vh;
    margin: auto;

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.5);
  }

  h2 {
    color: #93abbd;
    font-size: 40px;
  }
`;
