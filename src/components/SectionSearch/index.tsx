import { useContext } from "react";
import { AuthContext } from "../../Context/LoginContext";
import { SectionStyle } from "./styles";

const SectionSearch = () => {
  const { userLogin } = useContext(AuthContext);
  const userDash = localStorage.getItem("@loginBWeather:user");

  console.log(userLogin);
  return (
    <SectionStyle>
      <>
        <h3 className="user-intro">
          Olá, {userDash}, como está o seu clima hoje?{" "}
        </h3>

        <div>
          <input type="text" placeholder="Digite a sua localização aqui" />
          <button className="search-button">Buscar</button>
        </div>
      </>
    </SectionStyle>
  );
};

export default SectionSearch;
