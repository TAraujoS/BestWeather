import styled from "styled-components";

export const ListInfosUser = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(15, 70, 112, 0.2);
  max-width: 500px;
  height: 60px;

  margin: 30px 10px;
  border-radius: 12px;

  li {
    width: 70px;
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 50px;
    border-radius: 50px;
  }
`;
