import styled from "styled-components";

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  form {
    display: flex;
    align-items: center;
    max-width: 90%;
    background-color: #064670;
    margin-top: 0.3rem;
    border-radius: 25px;
    padding-top: 0.3rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-bottom: 0.2rem;
  }

  input {
    min-width: 240px;
    max-width: 320px;
    background-color: #0f4670;
    border: none;
    border-radius: 5px;
    height: 1.5rem;
    color: white;
    outline: none;
    ::placeholder {
      color: gray;
      border: none;
    }
  }

  input {
    width: 89%;
  }

  button {
    border-radius: 100%;
    height: 2rem;
    width: 2rem;
    align-items: center;
    background-color: #3a6688;
    color: white;
    border: none;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }

  .user-intro {
    font-size: 0.85em;
  }

  @media screen and (min-width: 375px) {
    .user-intro {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 425px) {
    .user-intro {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 768px) {
    .user-intro {
      font-size: 1.2rem;
    }
  }
`;
