import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-size: 20px;
  color: #fff;
  gap: 0.5rem;
  align-items: center;

  input {
    height: 45px;
    border-radius: 12px;
    background-color: #fff;

    color: #fff;
    box-shadow: 0 0 1em #08263d59;
  }

  select {
    height: 40px;
    border-radius: 12px;
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
