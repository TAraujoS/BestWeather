import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import { CityInfos } from "./styles";

const CityInf = () => {
  const { userCity } = useContext(CityContext);
  //console.log(userCity.location.name);

  return (
    <CityInfos>
      <li className="cityName">{userCity.location.name}</li>
      <li>
        <span>{`${userCity.current.temp_c} ºC`}</span>
      </li>

      <li>
        <p>Chuva</p>
        <span>{`${userCity.current.precip_mm} mm`}</span>
      </li>

      <li>
        <p>Vento</p>
        <span>{`${userCity.current.wind_kph} km/h`}</span>
        <span>{userCity.current.wind_dir}</span>
      </li>
    </CityInfos>
  );
};

export default CityInf;
