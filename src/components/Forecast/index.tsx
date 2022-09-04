import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import { ForecastList } from "./styles";

const Forecast = () => {
  const { cityApi } = useContext(CityContext);

  return (
    <>
      {cityApi?.location && (
        <ForecastList>
          <ul>
            {cityApi?.forecast.forecastday.slice(1).map((day, index) => (
              <li key={index} className="cityName">
                <figure>
                  <img src={day.day.condition.icon} alt="icone de imagem" />
                </figure>
                <div>
                  <div>
                    <span>{day.date}</span>
                  </div>
                  <p>Máx: {day.day.maxtemp_c}°C</p>
                  <p>Min: {day.day.mintemp_c}°C</p>
                </div>
              </li>
            ))}
          </ul>
        </ForecastList>
      )}
    </>
  );
};

export default Forecast;
