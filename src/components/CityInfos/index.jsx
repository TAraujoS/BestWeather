import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import { CityInfos, List } from "./styles";

const CityInf = () => {
  const { setUserCity, userInfo, userLogin, userCity } =
    useContext(CityContext);
  console.log(userLogin);

  return (
    <CityInfos>
      <List></List>
    </CityInfos>
  );
};

export default CityInf;
