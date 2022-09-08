import styled from "styled-components";

export const MainDash = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  min-width: 100vw;
  background-color: #09153e;
  color: #fff;

  .section-sub {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: #93abbd;
    font-size: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
    .section-sub {
      display: flex;
      align-items: flex-start;
      flex-direction: row-reverse;
      gap: 1rem;
      width: 98%;
      margin-top: 1rem;
      padding: 0;
    }
  }
`;
