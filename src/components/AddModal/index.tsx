import { useContext } from "react";
import ModalForm from "./styles";

import { CityContext, IUserConfig } from "../../Context/CityContext";
import { AuthContext } from "../../Context/LoginContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { configUserSchema } from "../../validators";

export interface ICity {
  cityList: string;
  userId: number | null | string;
  id: number | null;
  nameCity: string;
}

export const ModalAdd = () => {
  const { setModal } = useContext(CityContext);
  const { register, handleSubmit } = useForm<ICity>({});
  const { onSubmitCity } = useContext(CityContext);

  return (
    <>
      <section>
        <h3>Cadastro de cidades</h3>
        <button onClick={() => setModal(null)}> X </button>
      </section>
      <ModalForm onSubmit={handleSubmit(onSubmitCity)}>
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

  const { register, handleSubmit } = useForm<IUserConfig>({
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
