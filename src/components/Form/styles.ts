import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;
  font-size: 100vh;
  color: #fff;
  gap: 0.5rem;

  input {
    height: 30px;
    border-radius: 5px;
    background-color: #fff;
    color: #3a6688;
    box-shadow: 0 0 1em #08263d;
  }

  select {
    height: 30px;
    border-radius: 5px;
    background-color: #343b41;
    color: #fff;
  }

  h3 {
    font-size: 30px;
    color: #08263d;
  }
`;

export default Form;
