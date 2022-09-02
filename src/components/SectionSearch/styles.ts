import styled from "styled-components";

export const SectionStyle = styled.section`
  display: flex;
  margin: 0;
  flex-direction: column;
  /* position: relative;
  top: 70px; */

  h3 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  input {
    background-color: #0f4670;
    border: none;
    border-radius: 5px;
    height: 1.5rem;
    color: white;
    ::placeholder {
      color: gray;
    }
  }

  .search-div {
    max-width: 92%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #064670;
    margin: 0.3rem;
    border-radius: 25px;
    padding-top: 0.3rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-bottom: 0.2rem;

    input {
      width: 89%;
    }

    button {
      border-radius: 100%;
      height: 2rem;
      width: 2rem;
      align-items: center;
      background-color: #09153e;
      color: white;
      border: none;
      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
  .search-div:hover {
    button {
      color: yellow;
      transition: 2s;
    }
  }
`;
