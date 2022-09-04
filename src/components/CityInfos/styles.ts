import styled from "styled-components";

export const CityInfos = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 269px;
  height: 441px;
  background-color: rgba(15, 70, 112, 0.2);
  border-radius: 8px;

  li {
    width: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    color: #fff;
    padding: 15px;
    font-size: 16px;
  }

  .cityName {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    font-size: 18px;
  }
  .container-icon {
    .icon {
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
