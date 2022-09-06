import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import { CityInfos } from "./styles";

const CityInf = () => {
  const { cityApi } = useContext(CityContext);

  return (
    <>
      {cityApi?.location && (
        <CityInfos>
          <li className="container-icon">
            <figure className="icon">
              <img
                src={cityApi?.current.condition.icon}
                alt="icone de imagem"
              />
            </figure>
          </li>
          <li className="centered-li">{`${cityApi.location.name}/ ${cityApi.location.region}`}</li>
          <li>
            <p>Temperatura</p>
            <div className="city-info">
              <span>{`${cityApi.current.temp_c}°C`}</span>
              <img className="gif-background" src="" alt="temperature_img" />
            </div>
          </li>

          <li>
            <p>Chuva</p>{" "}
            <div className="city-info">
              <span>{`${cityApi.current.precip_mm} mm`}</span>
              <img className="gif-background" src="" alt="raining_img" />
            </div>
          </li>

          <li>
            <p>Vento</p>
            <div className="city-info-div">
              <span>{`${cityApi.current.wind_kph} km/h`}</span>
              <span>{cityApi.current.wind_dir}</span>
            </div>
          </li>

          <li>
            <p>Nascer do sol</p>
            <span>{`${cityApi.forecast.forecastday[0].astro.sunrise}`}</span>
          </li>
          <li>
            <p>Por do sol</p>
            <span>{`${cityApi.forecast.forecastday[0].astro.sunset}`}</span>
          </li>
        </CityInfos>
      )}
    </>
  );
};

export default CityInf;
