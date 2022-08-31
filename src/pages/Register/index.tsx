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
      <div className="modalRegistro">
        <div className="headerRegister">
          <HeaderLogo />
          <Button className="btnBackLogin" onClick={() => back}>
            Voltar
          </Button>
        </div>

        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h3>Cadastro</h3>
          <input
            type="text"
            id="name"
            className="input-text"
            {...register("name")}
            placeholder="Nome completo"
          />
          <span>{errors.name?.message}</span>

          <input
            type="text"
            id="email"
            className="input-text"
            {...register("email")}
            placeholder="E-mail"
          />
          <p>{errors.email?.message}</p>
          <input
            type="password"
            id="password"
            className="input-text"
            {...register("password")}
            placeholder="Senha"
          />
          <p>{errors.password?.message}</p>

          <input
            type="password"
            id="confirmPassword"
            className="input-text"
            {...register("confirmPassword")}
            placeholder="Confirmação de senha"
          />
          <p>{errors.confirmPassword?.message}</p>

          <input
            type="text"
            id="occupation"
            className="input-text"
            {...register("occupation")}
            placeholder="Profissão"
          />
          <p>{errors.occupation?.message}</p>

          <input
            type="text"
            id="city"
            className="input-text"
            {...register("city")}
            placeholder="Cidade"
          />
          <p>{errors.city?.message}</p>

          <Button type="button">Cadastrar</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
