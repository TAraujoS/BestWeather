import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(15, 70, 112, 0.2);
  max-width: 95%;

  padding: 20px;
  border-radius: 12px;
  margin: 1em 0;

  .divText {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 1rem;
    padding: 5px;
    margin-bottom: 15px;
  }

  p {
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 0.9rem;
    padding: 5px;
  }

  img {
    margin-top: 0.5rem;
    width: 100%;
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: row;

    img {
      max-width: 50%;
    }
  }
`;
