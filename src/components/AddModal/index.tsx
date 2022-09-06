import { useContext, useState } from "react";
import ModalForm from "./styles";

import { CityContext, IUserConfig } from "../../Context/CityContext";
import { AuthContext } from "../../Context/LoginContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { fakeApi } from "../../services";
import { useForm } from "react-hook-form";
import { configUserSchema } from "../../validators";

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

export const ModalConfig = () => {
  const { user } = useContext(AuthContext);
  const { setModal, onSubmitFunction } = useContext(CityContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserConfig>({
    resolver: yupResolver(configUserSchema),
  });

  return (
    <>
      <section>
        <h3>Suas configurações</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <input id="name" {...register("name")} placeholder={user.name} />
          <input id="city" {...register("city")} placeholder={user.city} />
          <input id="url" {...register("url")} placeholder="URL avatar" />
        </div>

        <button type="submit">Editar </button>
      </ModalForm>
    </>
  );
};
