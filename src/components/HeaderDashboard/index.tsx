import logo from "../../assets/img/logo.png";
import { HeaderDash, DivHeader, ButtonLogout } from "./styles";
import { BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../Context/LoginContext";

const HeaderDashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <HeaderDash>
      <DivHeader>
        <div>
          <img src={logo} alt="Logo BestWeather" />
          <h3>BestWeather</h3>
        </div>
        <ButtonLogout onClick={() => logout()}>
          <BiLogOut />
        </ButtonLogout>
      </DivHeader>
    </HeaderDash>
  );
};

export default HeaderDashboard;
