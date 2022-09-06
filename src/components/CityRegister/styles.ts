import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  margin: 20px 0;
  padding-left: 10px;

  h3 {
    color: #f5f5f5f5;
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
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

  .lista-de-favoritos-and-button {
    display: flex;
    justify-content: space-around;

    margin-bottom: 1rem;

    button {
      align-self: center;
      align-items: center;
    }
  }

  button {
    height: 35px;
    color: #ffffff;
    background-color: #0f4670;
    border: 1px solid #0f4670;
    border-radius: 10px;
    padding: 0 0.5rem;
    cursor: pointer;

    :hover {
      background-color: #09153e;
      border: 1px solid #ffffff;
    }
  }
`;

export default Container;
