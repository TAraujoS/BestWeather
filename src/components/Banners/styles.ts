import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(15, 70, 112, 0.2);
  max-width: 800px;
  height: 300px;

  margin-left: 30px;
  padding: 20px;
  border-radius: 12px;

  .divText {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    width: 450px;
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 20px;
    padding: 5px;
    margin-bottom: 15px;
  }

  p {
    width: 450px;
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 14px;
    padding: 5px;
  }

  img {
    width: 40%;
  }
`;
