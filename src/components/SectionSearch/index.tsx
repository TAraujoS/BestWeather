import { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AuthContext } from "../../Context/LoginContext";
import { SectionStyle } from "./styles";

const SectionSearch = () => {
  const { userLogin } = useContext(AuthContext);
  const userDash = localStorage.getItem("@loginBWeather:user");

  return (
    <SectionStyle>
      <>
        <h3 className="user-intro">
          Olá, {userDash}, como está o seu clima hoje?{" "}
        </h3>

        <div>
          <input type="text" placeholder="Digite a sua localização aqui" />
          <button className="search-button">
            <BiSearchAlt />
          </button>
        </div>
      </>
    </SectionStyle>
  );
};

export default SectionSearch;
