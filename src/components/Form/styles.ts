import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 70%;
  font-size: 20px;
  color: #fff;
  gap: 0.5rem;

  input {
    height: 40px;
    border-radius: 5px;
    background-color: #08263d8a;

    color: #fff;
    box-shadow: 0 0 1em #08263d59;
  }

  select {
    height: 40px;
    border-radius: 5px;
    background-color: #08263d;
    opacity: 0.5;
    color: #fff;
    box-shadow: 0 0 1em #08263d59;
  }

  h3 {
    font-size: 30px;
    color: #08263d;
  }
`;

export default Form;
