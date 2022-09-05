import { useContext, useEffect, useState } from "react";
import { fakeApi } from "../../services";
import { Banner } from "./styles";
import { AuthContext } from "../../Context/LoginContext";
import { CityContext } from "../../Context/CityContext";

interface IBannerResponse {
  email: string;
  password: string;
  name: string;
  url: string;
  occupation: string;
  city: string;
  id: number;
  infos: IInfos[];
}

interface IInfos {
  title: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  url: string;
  userId: number;
  id: number;
}

const Banners = () => {
  const { userLogin } = useContext(AuthContext);
  const { cityApi } = useContext(CityContext);

  const [banner, setBanner] = useState<IBannerResponse>({} as IBannerResponse);

  const token = localStorage.getItem("@loginBWeather:token") || "";

  useEffect(() => {
    getBanner();
  }, []);

  const getBanner = () => {
    fakeApi
      .get(`/users/${userLogin.id}?_embed=infos`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => setBanner(response.data))
      .catch((err) => console.error("Esse é o problema", err));
  };

  const getMessageTemp = (elem: IInfos) => {
    const temp = cityApi.current.temp_c;

    return temp < 20 ? (
      <p>{elem.text1}</p>
    ) : temp < 30 ? (
      <p>{elem.text2}</p>
    ) : temp < 35 ? (
      <p>{elem.text3}</p>
    ) : (
      <p>{elem.text4}</p>
    );
  };

  const getMessagePrec = (elem: IInfos) => {
    const prec = cityApi.current.precip_mm;
    return prec === 0 ? <p>{elem.text1}</p> : <p>{elem.text2}</p>;
  };

  const getMessageWind = (elem: IInfos) => {
    const wind = cityApi.current.wind_kph;

    return wind < 9 ? (
      <p>{elem.text1}</p>
    ) : wind < 19 ? (
      <p>{elem.text2}</p>
    ) : (
      <p>{elem.text3}</p>
    );
  };

  const checkOccupation = (occupation: string, elem: IInfos) => {
    if (occupation === "Paraquedista" || "Asa Delta") {
      return getMessagePrec(elem);
    } else if (occupation === "Surfista") {
      return getMessageWind(elem);
    } else {
      return getMessageTemp(elem);
    }
  };

  return (
    <Banner>
      {banner.infos?.map((elem) => (
        <>
          <div className="divText">
            <h3>{elem.title}</h3>
            <p>{userLogin.name},</p>
            {checkOccupation(banner.occupation, elem)}
          </div>
          <img src={elem.url} alt="Occupation" />
        </>
      ))}
    </Banner>
  );
};

export default Banners;
