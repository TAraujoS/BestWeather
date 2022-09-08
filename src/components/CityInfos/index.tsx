import {
  WiRain,
  WiStrongWind,
  WiSunrise,
  WiSunset,
  WiThermometer,
} from "react-icons/wi";
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
            <div className="city-info-div">
              <span className="icon-weather">
                <WiThermometer />
              </span>
              <p>Temperatura</p>
            </div>
            <span>{`${cityApi.current.temp_c}°C`}</span>
          </li>

          <li>
            <div className="city-info-div">
              <span className="icon-weather">
                <WiRain />{" "}
              </span>
              <p>Chuva</p>{" "}
            </div>
            <span>{`${cityApi.current.precip_mm} mm`}</span>
          </li>

          <li>
            <div className="city-info-div">
              <span className="icon-weather">
                <WiStrongWind />
              </span>
              <p>Vento</p>
            </div>
            <div className="city-info-div">
              <span>{`${cityApi.current.wind_kph} km/h`}</span>
              <span>{cityApi.current.wind_dir}</span>
            </div>
          </li>

          <li>
            <div className="city-info-div">
              <span className="icon-weather">
                <WiSunrise />
              </span>
              <p>Nascer do sol</p>
            </div>
            <span>{`${cityApi.forecast.forecastday[0].astro.sunrise}`}</span>
          </li>

          <li>
            <div className="city-info-div">
              <span className="icon-weather">
                <WiSunset />
              </span>
              <p>Pôr do sol</p>
            </div>
            <span>{`${cityApi.forecast.forecastday[0].astro.sunset}`}</span>
          </li>
        </CityInfos>
      )}
    </>
  );
};

export default CityInf;
