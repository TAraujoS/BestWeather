import styled from "styled-components";

export const ListInfosUser = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(15, 70, 112, 0.2);
  padding: 0;
  border-radius: 12px;
  min-width: 300px;

  p {
    display: flex;
    font-size: 0.9rem;
    margin: 2%;
    max-width: 50px;
  }

  img {
    width: 30px;
    border-radius: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  svg {
    height: 30px;
    width: 3rem;
  }
`;
