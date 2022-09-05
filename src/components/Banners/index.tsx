import { useContext, useEffect, useState } from "react";
import { fakeApi } from "../../services";
import { Banner } from "./styles";
import { AuthContext } from "../../Context/LoginContext";
import { CityContext } from "../../Context/CityContext";

const Banners = () => {
  const { userLogin } = useContext(AuthContext);
  const { cityApi } = useContext(CityContext);

  const [isMessage, setIsMessage] = useState("");
  const [banner, setBanner] = useState({});

  const getBanner = () => {
    fakeApi
      .get(`/users/${userLogin.id}?_embed=info`)
      .then((response) => setBanner(response.data))
      .catch((err) => console.error("Esse é o problema", err));
  };
  getBanner();

  return (
    <Banner>
      <p>{}</p>

      {/* <img src={banner.info.url} alt="Occupation" /> */}
    </Banner>
  );
};

export default Banners;
