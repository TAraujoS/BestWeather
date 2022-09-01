import styled from "styled-components";

export const HeaderPage = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 100;
  margin-bottom: 1.5vh;

  h2 {
    color: #fff;
    font-size: 2rem;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 4px;
  }
  div > h1 {
    max-width: 200px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0%;
  }
`;
