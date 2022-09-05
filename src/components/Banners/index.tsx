import { useContext, useEffect, useState } from "react";
import { fakeApi } from "../../services";
import { Banner } from "./styles";
import { AuthContext } from "../../Context/LoginContext";
import { CityContext } from "../../Context/CityContext";
import roca from "../../assets/img/roca.png";

const Banners = () => {
  const { user } = useContext(AuthContext);
  const { temp_c } = useContext(CityContext);

  const [isMessage, setIsMessage] = useState(null);

  useEffect(() => {
    fakeApi.get(`/users/${user.id}?_embed=news`).then((response) => {
      setIsMessage(response.data);
    });
  }, []);

  return (
    <Banner>
      <p>{isMessage.new1}</p>

      <img src={roca} alt="" />
    </Banner>
  );
};

export default Banners;
