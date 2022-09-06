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
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cloud_%28fixed_width%29.svg/2048px-Cloud_%28fixed_width%29.svg.png"
                alt=""
              />
            </div>
          </li>

          <li>
            <p>Chuva</p>{" "}
            <div className="city-info">
              <span>{`${cityApi.current.precip_mm} mm`}</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cloud_%28fixed_width%29.svg/2048px-Cloud_%28fixed_width%29.svg.png"
                alt=""
              />
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
