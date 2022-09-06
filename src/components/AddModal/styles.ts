import styled from "styled-components";

const ModalForm = styled.form`
  background-color: #09153e;
  padding: 0.75rem 3rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    gap: 15px;

    input {
      height: 2rem;
      width: 100%;
      padding-left: 0.8rem;

      color: #ffffff;
      background-color: #0f4670;
      border: none;
      border-radius: 15px;
    }
  }

  p {
    height: 2rem;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;
    font-size: 0.8rem;
  }

  button {
    display: block;
    width: 100%;
    height: 2.4rem;

    border: 1px solid #0f4670;
    border-radius: 15px;
    margin: 1.5rem 0 1rem;

    color: #ffffff;
    background: #0f4670;
    transition: 0.2s;
    cursor: pointer;

    font-size: 1rem;
  }

  button:hover {
    background-color: #09153e;
    border: 1px solid #ffffff;
  }

  button:active {
    transform: scale(1);
  }
`;

export default ModalForm;
