import Form from "../../components/Form/styles";
import { Container } from "./styles";
import { Button } from "../../components/Button/styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderLogo from "../../components/Header";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8, "Deve conter ao menos 8 caracteres").required(),
});

const Login = () => {
  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <div className="divLogo">
        <HeaderLogo />
        <h1>
          "Em qualquer lugar, em qualquer dia, buscando o seu melhor clima!
        </h1>
      </div>

      <div className="modalLogin">
        <h3>Login</h3>

        <Form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />

          <Button type="submit" className="btnLogin">
            Entrar
          </Button>
          <p>Cadastre-se aqui</p>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
