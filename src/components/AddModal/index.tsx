import { useContext, useState } from "react";
import ModalForm from "./styles";
import { CityContext } from "../../Context/CityContext";
import { useForm } from "react-hook-form";
import { string } from "yup";
import { fakeApi } from "../../services";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/LoginContext";

interface ICity {
  nameCity: string;
}

export const ModalAdd = () => {
  const { setModal } = useContext(CityContext);
  const { register, handleSubmit } = useForm<ICity>({});
  const { userId } = useContext(AuthContext);

  const onSubmit = (data: any) => {
    data.userId = userId;
    console.log(data);
    fakeApi
      .post("/city", data)
      .then((response: any) => {
        console.log(response);
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
          <input id="title" placeholder="Cidade" {...register("nameCity")} />
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
