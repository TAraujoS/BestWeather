import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  width: 1600px;
  height: 780px;
  border-radius: 5px;

  .divLogo {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 1000px;
    height: 780px;
  }

  .modalLogin {
    width: 70%;
    height: 100vh;
    gap: 0.5 rem;
  }

  h1 {
    font-size: 45px;
    color: #fff;
  }

  p {
    font-size: 16px;
    color: #08263d;
  }
`;
