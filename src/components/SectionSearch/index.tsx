import { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiSearchAlt } from "react-icons/bi";
import { AuthContext } from "../../Context/LoginContext";
import { weatherApi } from "../../services";
import { SectionStyle } from "./styles";

// interface IFunctions {
//   searchFromInput: (cityValue: IData) => void;
// }

interface IData {
  data: string;
  city: string;
}

const key = "b4b75ed7ee9a4858bdd230139222908";

const SectionSearch = () => {
  const { register, handleSubmit } = useForm<IData>();
  const { user } = useContext(AuthContext);

  const searchFromInput = async (data: IData) => {
    console.log();
    console.log(data.city);
    await weatherApi
      .get(`/current.json?key=${key}&q=${data.city}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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
