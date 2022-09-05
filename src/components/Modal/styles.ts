import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);

  .modal {
    width: 100%;
    max-width: 350px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    opacity: 1;
    animation: showUp 0.4s;
  }

  @keyframes showUp {
    from {
      opacity: 0;
      transform: scale(0.4);
    }
  }

  .modal section {
    display: flex;
    justify-content: space-between;
    background-color: #0f4670;
    padding: 0.75rem 1.25rem;
    border-radius: 4px 4px 0px 0px;
  }

  .modal section h3 {
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  .modal section button {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
  }
  .modal section button:hover {
    color: #000000;
  }
`;

export default Container;
