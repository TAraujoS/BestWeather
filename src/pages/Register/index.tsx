import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators";
import HeaderLogo from "../../components/Header";

import Form from "../../components/Form/styles";
import { Container } from "./styles";
import { Button } from "../../components/Button/styles";
import { useContext } from "react";
import {
  IRegisterProviderProps,
  ISubmitData,
  RegisterContext,
} from "../../Context/RegisterContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitData>({
    resolver: yupResolver(registerSchema),
  });
  const { onSubmitFunction, back } =
    useContext<IRegisterProviderProps>(RegisterContext);

  return (
    <Container>
      <div className="cloud"></div>
      <div className="modalRegistro">
        <div className="headerRegister">
          <HeaderLogo />
          <Button className="btnBackLogin" onClick={() => back()}>
            Voltar
          </Button>
        </div>

        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h3>Cadastro</h3>

          <label htmlFor="name">
            <input
              type="text"
              id="name"
              className="input-text"
              {...register("name")}
              placeholder="Nome completo"
            />
            <span>{errors.name?.message}</span>
          </label>

          <label htmlFor="email">
            <input
              type="text"
              id="email"
              className="input-text"
              {...register("email")}
              placeholder="E-mail"
            />
            <p>{errors.email?.message}</p>
          </label>

          <label htmlFor="password">
            <input
              type="password"
              id="password"
              className="input-text"
              {...register("password")}
              placeholder="Senha"
            />
            <p>{errors.password?.message}</p>
          </label>

          <label htmlFor="confirmPassword">
            <input
              type="password"
              id="confirmPassword"
              className="input-text"
              {...register("passwordConfirm")}
              placeholder="Confirmação de senha"
            />
            <p>{errors.passwordConfirm?.message}</p>
          </label>

          <label htmlFor="occupation">
            <input
              type="text"
              id="occupation"
              className="input-text"
              {...register("occupation")}
              placeholder="Profissão"
            />
            <p>{errors.occupation?.message}</p>
          </label>

          <label htmlFor="city">
            <input
              type="text"
              id="city"
              className="input-text"
              {...register("city")}
              placeholder="Cidade"
            />
            <p>{errors.city?.message}</p>
          </label>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
