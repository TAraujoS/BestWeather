import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 12px;

  input {
    min-width: 250px;
    border: 2px solid #1976bd;
    background-color: #0f4670;
    max-width: 500px;
    color: #ffffff;
    padding-left: 0.6rem;
    ::placeholder {
      color: #ffffff;
    }
  }

  svg {
    color: #f10;
  }
`;

export const Error = styled.div`
  position: relative;
  display: flex;

  &:hover span {
    opacity: 1;
  }

  span {
    font-size: 14px;
    position: absolute;
    color: red;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 5px 15px;
    border-radius: 10px;
    left: 25px;
    top: -1px;
    opacity: 0;
    transition: opacity 0.4s;
    width: 245px;

    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      transform: rotate(90deg);
      border-color: rgba(255, 255, 255, 0.6) transparent;
      position: absolute;
      top: 4px;
      left: -7px;
    }
  }

  @media screen and (max-width: 425px) {
    span {
      font-size: 12px;
      left: -245px;
      top: 30px;
      width: 240px;
      padding: 2px 15px;
      &::before {
        transform: rotate(180deg);
        top: -7px;
        left: 3px;
      }
    }
  }
`;
