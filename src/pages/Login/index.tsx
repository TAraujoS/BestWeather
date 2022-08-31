import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderLogo from "../../components/Header";
import { loginSchema } from "../../validators";
import { AuthContext, ILoginProps } from "../../Context/LoginContext";
import Form from "../../components/Form/styles";
import { Container } from "./styles";
import { Button } from "../../components/Button/styles";
import { useContext } from "react";

const Login = () => {
  const { register, handleSubmit } = useForm<ILoginProps>({
    resolver: yupResolver(loginSchema),
  });
  const { signIn } = useContext(AuthContext);

  return (
    <Container>
      <section>
        <div className="divLogo">
          <div className="cloud"></div>
          <HeaderLogo />
          <h1>
            "Em qualquer lugar, em qualquer dia, buscando o seu melhor clima!
          </h1>
        </div>

        <div className="modalLogin">
          <h3>Login</h3>

          <Form onSubmit={handleSubmit(signIn)}>
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
            <p>Ainda não tem cadastro?
              <a href="/Register"> Cadastre-se aqui</a>
            </p>
          </Form>
        </div>
      </section>
    </Container>
  );
};

export default Login;
