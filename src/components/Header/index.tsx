import vectorBW from "./img/vectorBW.png";
import { HeaderPage } from "./styles";

const HeaderLogo = () => {
  return (
    <HeaderPage>
      <img src={vectorBW} alt="" />;<h2>BestWeather</h2>
    </HeaderPage>
  );
};

export default HeaderLogo;
