import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import Container from "./styles";
import { BsTrash } from "react-icons/bs";

const CityRegister = () => {
  const { setModal, city, cityInfoFavorite, deletedCities } =
    useContext(CityContext);

  return (
    <>
      <Container>
        <div className="lista-de-favoritos-and-button">
          <h3> Lista de Favoritos </h3>
          <button onClick={() => setModal("add")}>+</button>
        </div>

        <div>
          <ul>
            {city.length <= 0 ? (
              <h5> Cadastre suas cidades favoritas aqui !</h5>
            ) : (
              city?.map((element) => (
                <li key={element.id}>
                  <button
                    className="btn-add"
                    onClick={() => cityInfoFavorite(element.nameCity)}
                  >
                    {element.nameCity}
                  </button>
                  <button
                    className="btn-trash"
                    onClick={() => deletedCities(element.id)}
                  >
                    <BsTrash />
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </Container>
    </>
  );
};
export default CityRegister;
