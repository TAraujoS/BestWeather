import { HeaderPage } from "./styles";
import logo from "../../assets/img/logo.png";

const HeaderLogo = () => {
  return (
    <HeaderPage>
      <img src={logo} alt="BestWeather" />
      <h2>BestWeather</h2>
    </HeaderPage>
  );
};

export default HeaderLogo;
