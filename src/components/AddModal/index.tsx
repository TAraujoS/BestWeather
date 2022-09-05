import { useContext, useState } from "react";
import ModalForm from "./styles";
import { CityContext } from "../../Context/CityContext";
import { useForm } from "react-hook-form";
import { string } from "yup";
import { fakeApi } from "../../services";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/LoginContext";

// interface ICity {
//   nameCity: string;
//   cities: string;
// }

export const ModalAdd = () => {
  const { setModal } = useContext(CityContext);
  const { cities, setCities } = useState<any>([]);
  const { register, handleSubmit } = useForm<any>({});
  const { tokenUser } = useContext(AuthContext);

  const onSubmit = (data: any) => {
    fakeApi
      .post("/city", data)
      .then((response: any) => {
        fakeApi.defaults.headers.common.Authorization = `Bearer ${tokenUser}`;
        setCities([...cities, data]);
      })
      .catch((error: any) => console.error("Esse é o problema!", error));
  };

  return (
    <>
      <section>
        <h3>Cadastro de cidades</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input id="title" placeholder="Cidade" {...register("city")} />
          <p>Essa cidade entrará na sua lista de favoritos</p>
        </div>
        <button type="submit">Cadastrar </button>
      </ModalForm>
    </>
  );
};
// ---------------------- another function -------------------------------------------------
export const ModalConfig = () => {
  const { setModal } = useContext(CityContext);
  return (
    <>
      <section>
        <h3>Suas configurações</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm>
        <label htmlFor="title">Cidade</label>
        <div>
          <input id="title" placeholder="Nome" />
          <input id="city" placeholder="Cidade" />
          <input id="url_avatar" placeholder="URL avatar" />
        </div>

        <button type="submit">Editar </button>
      </ModalForm>
    </>
  );
};
