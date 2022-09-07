import styled from "styled-components";

export const CityInfos = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: rgba(15, 70, 112, 0.2);
  border-radius: 8px;
  padding: 1rem 0.8rem;
  margin: 0;
  width: 95%;

  gap: 0.6rem;

  img {
    width: 1rem;
  }
  .gif-background {
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    color: #fff;
    margin-bottom: 0.25em;
  }

  .centered-li {
    align-self: center;
    margin-bottom: 1em;
  }

  .cityName {
    display: flex;
    justify-content: space-between;
  }

  .city-info-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.3rem;
    .icon-weather {
      font-size: 1.8rem;
    }
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
  @media screen and (min-width: 768px) {
    min-width: 280px;
    max-width: 340px;
    width: 100%;
    min-height: 380px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 280px;
    max-width: 340px;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    min-width: 280px;
    max-width: 340px;
    width: 100%;
    min-height: 400px;
  }
`;
