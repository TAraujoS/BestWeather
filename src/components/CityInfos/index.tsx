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

          <li>{`${cityApi.location.name}/ ${cityApi.location.region}`}</li>

          <li>
            <p>Temperatura</p>
            <span>{`${cityApi.current.temp_c}°C`}</span>
          </li>

          <li>
            <p>Chuva</p>
            <span>{`${cityApi.current.precip_mm} mm`}</span>
          </li>

          <li>
            <p>Vento</p>
            <div className="wind-info">
              <span>{`${cityApi.current.wind_kph} km/h`}</span>
              <span>{cityApi.current.wind_dir}</span>
            </div>
          </li>
        </CityInfos>
      )}
    </>
  );
};

export default CityInf;
