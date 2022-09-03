import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import { CityInfos } from "./styles";

const CityInf = () => {
  const { cityApi } = useContext(CityContext);

  return (
    <>
      {cityApi?.location && (
        <CityInfos>
          <li className="cityName">{cityApi?.location.name}</li>
          <li>
            <span>{`${cityApi.current.temp_c} ºC`}</span>
          </li>

          <li>
            <p>Chuva</p>
            <span>{`${cityApi.current.precip_mm} mm`}</span>
          </li>

          <li>
            <p>Vento</p>
            <span>{`${cityApi.current.wind_kph} km/h`}</span>
            <span>{cityApi.current.wind_dir}</span>
          </li>
        </CityInfos>
      )}
    </>
  );
};

export default CityInf;
