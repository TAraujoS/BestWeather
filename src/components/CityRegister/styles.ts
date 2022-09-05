import styled from "styled-components";

const Container = styled.section`
  width: 375px;
  margin: 20px 0;
  padding-left: 10px;

  h3 {
    color: #f5f5f5f5;
    font-size: 16px;
  }

  div {
    display: flex;
    align-items: flex-start;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    padding: 0px;
    width: 75%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 35px;
      min-width: 30%;
      color: #ffffff;
      background-color: #0f4670;
      border: 1px solid #0f4670;
      border-radius: 5px;
      margin: 5px;
      padding: 5px;

      cursor: pointer;

      :hover {
        background-color: #09153e;
        border: 1px solid #ffffff;
      }
    }
  }

  button {
    height: 35px;
    color: #ffffff;
    background-color: #0f4670;
    border: 1px solid #0f4670;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;

    :hover {
      background-color: #09153e;
      border: 1px solid #ffffff;
    }
  }
`;

export default Container;
