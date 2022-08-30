import styled from "styled-components";
import nuvem from "../../assets/img/nuvem.jpg";

export const Container = styled.div`
  width: 1440px;
  height: 745px;
  margin: 0;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(37 122 195 / 50%);

  section {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    width: 900px;
    height: 500px;
    border-radius: 5px;
    background-color: #08263d;
    box-shadow: 0 0 1em #08263d59;
    background-image: url(${nuvem});

    margin: auto;
  }

  .divLogo {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: auto;
    width: 400px;
    height: 423px;
    gap: 3rem;
    padding: 40px;
  }

  .modalLogin {
    width: 349px;
    height: 445px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 27px;
    border-radius: 5px;
  }

  h1 {
    font-size: 35px;
    color: #fff;
  }

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: #08263d;
    font-weight: 700;
  }

  .btnLogin {
    opacity: 70%;
    width: 90px;
    margin-left: 45px;
    margin-top: 45px;
    height: 40px;
  }

  p {
    font-size: 16px;
    color: #08263d;
  }

  input {
    box-shadow: rgba(43, 85, 190, 0.5);
    border: none;
    background-color: #f5f5f5;
    ::placeholder {
      padding-left: 0.6rem;
    }
  }
`;
