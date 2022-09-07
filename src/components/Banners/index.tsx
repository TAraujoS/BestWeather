import { useContext, useEffect, useState } from "react";
import { fakeApi } from "../../services";
import { Banner } from "./styles";
import { AuthContext, IUser } from "../../Context/LoginContext";
import { CityContext } from "../../Context/CityContext";

// interface IBannerResponse {
//   email: string;
//   password: string;
//   name: string;
//   url: string;
//   occupation: string;
//   city: string;
//   id: number;
// }

interface IInfos {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  url: string;
  id: number;
}

// interface IOtherResponse {
//   email: string;
//   password: string;
//   name: string;
//   url: string;
//   occupation: string;
//   city: string;
//   id: number;
//   news: IOther[];
// }

// interface IOther {
//   title: string;
//   text1: string;
//   text2: string;
//   text3: string;
//   text4: string;
//   text5: string;
//   url: string;
//   userId: number;
//   id: number;
// }

const Banners = () => {
  const { user } = useContext(AuthContext);
  const { cityApi } = useContext(CityContext);
  const [banner, setBanner] = useState<IInfos>({} as IInfos);
  const token = localStorage.getItem("@loginBWeather:token") || "";

  useEffect(() => {
    const showBanner = async () => {
      if (user) {
        await getBanner(user);
      }
    };
    showBanner();
  }, []);

  const getBanner = async (user: IUser) => {
    await fakeApi
      .get<IInfos>(`infos/${user.infoId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => {
        setBanner(response.data);
      })
      .catch((err) => console.error("Esse é o problema", err));
  };

  // const getOther = async () => {
  //   await fakeApi
  //     .get<IOther>("/news", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })

  //     .then((response) => setOther(response.data))
  //     .catch((err) => console.error("Esse é o problema", err));
  // };

  const getMessageTemp = (elem: IInfos) => {
    const temp = cityApi?.current.temp_c;
    return temp < 20
      ? elem?.text1
      : temp < 30
      ? elem?.text2
      : temp < 35
      ? elem?.text3
      : elem?.text4;
  };

  const getMessageTempOther = (elem: IInfos) => {
    const temp = cityApi.current?.temp_c;

    return temp < 20 ? elem?.text1 : temp < 35 ? elem?.text2 : elem?.text3;
  };

  const getMessagePrec = (elem: IInfos) => {
    const prec = cityApi?.current.precip_mm;

    return prec === 0 ? elem?.text1 : elem?.text2;
  };

  const getMessageWind = (elem: IInfos) => {
    const wind = cityApi?.current.wind_kph;

    return wind < 9 ? elem?.text1 : wind < 19 ? elem?.text2 : elem?.text3;
  };

  const checkOccupation = () => {
    if (user.occupation === "Paraquedismo" || user.occupation === "Asa Delta") {
      return getMessagePrec(banner);
    } else if (user.occupation === "Surfe") {
      return getMessageWind(banner);
    } else if (
      user.occupation === "Agricultura" ||
      user.occupation === "Geologia" ||
      user.occupation === "Turismo"
    ) {
      return getMessageTemp(banner);
    } else {
      return getMessageTempOther(banner);
    }
  };

  const showTextOccupation = checkOccupation();

  return (
    <Banner>
      {banner ? (
        <>
          <div className="divText" key={banner?.id}>
            <h3>{banner?.title}</h3>
            <p>{user.name},</p>
            {showTextOccupation}
          </div>
          <img src={banner?.url} alt="Occupation" />
        </>
      ) : (
        <span>Carregando...</span>
      )}
    </Banner>
  );
};

export default Banners;
