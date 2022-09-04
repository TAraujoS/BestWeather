import styled from "styled-components";

export const ListInfosUser = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(15, 70, 112, 0.2);
  padding: 0;
  border-radius: 12px;
  min-width: 300px;

  li {
    font-size: 0.9rem;
    margin-left: 1%;
    margin-right: 10%;
    max-width: 50px;
    display: flex;
    list-style: none;
    justify-content: space-around;
  }
  img {
    width: 30px;
    border-radius: 100%;
  }

  button {
    background-color: transparent;
    border: none;
  }

  svg {
    height: 30px;
    width: 3rem;
  }
`;
