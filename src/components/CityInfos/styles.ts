import styled from "styled-components";

export const CityInfos = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: rgba(15, 70, 112, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin: 0;
  min-width: 300px;
  width: 80%;
  gap: 0.1rem;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    color: #fff;
  }

  .cityName {
    display: flex;
    justify-content: space-between;
  }

  .wind-info {
    display: flex;
    gap: 0.5rem;
  }

  .container-icon {
    margin: 0;
    padding: 0%;

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
