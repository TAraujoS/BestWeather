import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    min-width: 155px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    padding: 0px;
    width: 75%;

    li {
      background-color: #0f4670;
      display: flex;
      min-width: 155px;
      border-radius: 5px;
      margin: 5px;

      .btn-add {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.5rem;
        color: #ffffff;
        background-color: transparent;
        border: none;
        border-radius: 5px;
        margin: 5px;
        padding: 0.5rem;
        margin: 0.3rem 0.3rem;
        // border: 2px solid #0f4670;
        // :hover {
        //   transition: 1.2s;
        // }
      }
      .btn-trash {
        display: flex;
        width: 40px;
        align-items: center;
        justify-content: center;
        height: 2.5rem;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        background-color: transparent;
        margin: 5px;
        padding: 0.5rem;
        margin: 0.3rem 0.3rem;
        // border: 2px solid #0f4670;
      }
      &:hover {
        transition: 0.8s;
        background-color: #0f3999;
        border: 2px solid yellow;
      }
    }
  }

  .lista-de-favoritos-and-button {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin-bottom: 1rem;
    gap: 2rem;

    button {
      height: 2rem;
      width: 2rem;
      font-size: 1.3rem;
      font-weight: 500;
      align-self: center;
      align-items: center;
      border: 2px solid #0f4670;
    }
  }

  button {
    height: 35px;
    color: #ffffff;
    background-color: #0f4670;
    border: none;
    border-radius: 5px;
    padding: 0 0.5rem;
    cursor: pointer;
    :hover {
      transition: 0.8s;
      background-color: #0f3999;
      border: 2px solid yellow;
    }
  }
`;

export default Container;
