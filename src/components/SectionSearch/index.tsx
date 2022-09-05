import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiSearchAlt } from "react-icons/bi";
import { CityContext, IData } from "../../Context/CityContext";
import { AuthContext } from "../../Context/LoginContext";
import { SectionStyle } from "./styles";

const SectionSearch = () => {
  const { register, handleSubmit } = useForm<IData>();
  const { user } = useContext(AuthContext);
  const { searchFromInput } = useContext(CityContext);

  return (
    <SectionStyle>
      <>
        <h3 className="user-intro">
          Olá, {user.name}, como está o seu clima hoje?
        </h3>

        <form onSubmit={handleSubmit(searchFromInput)}>
          <input
            type="text"
            placeholder="Digite a sua localização aqui"
            {...register("city")}
          />
          <button type="submit" className="search-button">
            <BiSearchAlt />
          </button>
        </form>
      </>
    </SectionStyle>
  );
};

export default SectionSearch;
