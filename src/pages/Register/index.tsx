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
import Input from "../../components/Input";
import { Error } from "../../components/Input/styles";
import { BiErrorCircle } from "react-icons/bi";

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

          <Input
            type="text"
            id="name"
            placeholder="Nome completo"
            {...register("name")}
            error={errors?.name}
          />

          <Input
            type="text"
            id="email"
            {...register("email")}
            placeholder="E-mail"
            error={errors?.email}
          />

          <Input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Senha"
            error={errors?.password}
          />

          <Input
            type="password"
            id="confirmPassword"
            {...register("passwordConfirm")}
            placeholder="Confirmação de senha"
            error={errors?.passwordConfirm}
          />

          <label htmlFor="occupation">
            <div className="error-select">
              <select
                id="occupation"
                {...register("occupation")}
                className="select-text"
              >
                <option value="">Escolha uma profissão</option>
                <option value="Agricultura">Agricultura</option>
                <option value="Asa Delta">Asa Delta</option>
                <option value="Geologia">Geologia</option>
                <option value="Paraquedismo">Paraquedismo</option>
                <option value="Surfe">Surfe</option>
                <option value="Turismo">Turismo</option>
                <option value="Outros">Outros</option>
              </select>
              {errors?.occupation && (
                <Error>
                  <BiErrorCircle />
                  <span>{errors?.occupation.message}</span>
                </Error>
              )}
            </div>
          </label>

          <Input
            type="text"
            id="city"
            {...register("city")}
            placeholder="Cidade"
            error={errors?.city}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
