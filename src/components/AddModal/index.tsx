import { useContext } from "react";
import ModalForm from "./styles";
import { CityContext } from "../../Context/CityContext";

export const ModalAdd = () => {
  const { setModal } = useContext(CityContext);

  return (
    <>
      <section>
        <h3>Cadastro de cidades</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm onSubmit={() => console.log("ModalAdd")}>
        <div>
          <input id="title" placeholder="Cidade" />
          <p>Essa cidade entrará na sua lista de favoritos</p>
        </div>
        <button type="submit">Cadastrar </button>
      </ModalForm>
    </>
  );
};

export const ModalConfig = () => {
  const { setModal } = useContext(CityContext);
  return (
    <>
      <section>
        <h3>Suas configurações</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm onSubmit={() => console.log("ModalConfig")}>
        <label htmlFor="title">Cidade</label>
        <div>
          <input id="title" placeholder="Nome" />
          <input id="title" placeholder="Cidade" />
          <input id="title" placeholder="URL avatar" />
        </div>

        <button type="submit">Editar </button>
      </ModalForm>
    </>
  );
};
