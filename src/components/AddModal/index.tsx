import { useContext } from "react";
import ModalForm from "./styles";
import { CityContext } from "../../Context/CityContext";
import { AuthContext } from "../../Context/LoginContext";

export const ModalAdd = () => {
  const { setModal } = useContext(CityContext);

  return (
    <>
      <section>
        <h3>Cadastro de cidades</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm>
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
  const { user } = useContext(AuthContext);
  const { setModal } = useContext(CityContext);

  return (
    <>
      <section>
        <h3>Suas configurações</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm>
        <div>
          <input id="name" placeholder={user.name} />
          <input id="city" placeholder={user.city} />
          <input id="url" placeholder="URL avatar" />
        </div>

        <button type="submit">Editar </button>
      </ModalForm>
    </>
  );
};
