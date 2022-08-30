import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderLogo from "../../components/Header";
import { loginSchema } from "../../validators";

import Form from "../../components/Form/styles";
import { Container } from "./styles";
import { Button } from "../../components/Button/styles";

const Login = () => {
  const { register } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <Container>
      <section>
        <div className="divLogo">
          <HeaderLogo />
          <h1>
            "Em qualquer lugar, em qualquer dia, buscando o seu melhor clima!
          </h1>
        </div>

        <div className="modalLogin">
          <h3>Login</h3>

          <Form>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              {...register("email")}
            />
            <input
              type="password"
              id="password"
              placeholder="Senha"
              {...register("password")}
            />

            <Button type="submit" className="btnLogin">
              Entrar
            </Button>
            <p>Cadastre-se aqui</p>
          </Form>
        </div>
      </section>
    </Container>
  );
};

export default Login;
