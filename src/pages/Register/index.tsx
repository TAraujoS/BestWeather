import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validators";
import HeaderLogo from "../../components/Header";

import Form from "../../components/Form/styles";
import { Container } from "./styles";
import { Button } from "../../components/Button/styles";

const Registro = () => {
  const { register } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <Container>
      <div className="modalRegistro">
        <div className="headerRegister">
          <HeaderLogo />
          <Button className="btnBackLogin">Login</Button>
        </div>

        <Form>
          <h3>Cadastro</h3>
          <input
            type="text"
            id="name"
            className="input-text"
            {...register("name")}
            placeholder="Nome completo"
          />

          <input
            type="text"
            id="email"
            className="input-text"
            {...register("email")}
            placeholder="E-mail"
          />

          <input
            type="password"
            id="password"
            className="input-text"
            {...register("password")}
            placeholder="Senha"
          />

          <input
            type="password"
            id="confirmPassword"
            className="input-text"       
            {...register("confirmPassword")}

            placeholder="Confirmação de senha"
          />

          <input
            type="text"
            id="occupation"
            className="input-text"
            {...register("occupation")}
            placeholder="Profissão"
          />

          <input
            type="text"
            id="city"
            className="input-text"
            {...register("city")}
            placeholder="Cidade"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </div>
    </Container>
  );
};

export default Registro;
