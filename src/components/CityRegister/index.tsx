import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import Container from "./styles";

const CityRegister = () => {
  const { setModal } = useContext(CityContext);

  return (
    <>
      <Container>
        <h3> Lista de Favoritos: </h3>
        <div>
          <ul>
            <li>Curitiba</li>
            <li>São Paulo</li>
            <li>Salvador</li>
          </ul>
          <button onClick={() => setModal("add")}>Adicionar +</button>
        </div>
      </Container>
    </>
  );
};
export default CityRegister;
