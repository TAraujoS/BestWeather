import { useContext, useState } from "react";
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
  infos: [
    {
      title: string;
      text1: string;
      text2: string;
      text3: string;
      text4: string;
      text5: string;
      Url: string;
      userId: number;
      id: number;
    }
  ];
}

const Banners = () => {
  const { userLogin } = useContext(AuthContext);
  const { cityApi } = useContext(CityContext);

  const [banner, setBanner] = useState<IBannerResponse>({} as IBannerResponse);
  const [isMessage, setIsMessage] = useState("");

  const getBanner = () => {
    fakeApi
      .get(`/users/${userLogin.id}?_embed=infos`)
      .then((response) => setBanner(response.data))
      .catch((err) => console.error("Esse é o problema", err));
  };
  getBanner();

  // const getMessage = () => {
  //   cityApi.current.temp_c < 20
  //     ? setIsMessage(banner.infos[0].text1)
  //     : setIsMessage(banner.infos[0].text2);
  // };
  // getMessage();

  return (
    <Banner>
      <p>{banner.email}</p>
      <p></p>

      {/* <img src={banner.infos[0].Url} alt="Occupation" /> */}
    </Banner>
  );
};

export default Banners;
