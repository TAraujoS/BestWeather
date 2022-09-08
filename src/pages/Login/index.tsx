import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderLogo from "../../components/Header";
import { loginSchema } from "../../validators";
import { AuthContext, ILoginProps } from "../../Context/LoginContext";
import Form from "../../components/Form/styles";
import { Container } from "./styles";
import { Button } from "../../components/Button/styles";
import { useContext } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginProps>({
    resolver: yupResolver(loginSchema),
  });
  const { signIn } = useContext(AuthContext);

  const onError = () => toast.error("Campo obrigatório!", { autoClose: 2000 });

  const onSubmit = handleSubmit(signIn, onError);

  return (
    <Container>
      <section>
        <div className="global-login-div">
          <div className="divLogo">
            <div className="cloud"></div>
            <HeaderLogo />
            <h1>
              "Em qualquer lugar, em qualquer dia, buscando o seu melhor clima!"
            </h1>
          </div>

          <div className="modalLogin">
            <h3>Login</h3>

            <Form onSubmit={onSubmit}>
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  {...register("email")}
                />
              </label>
              <span>{errors?.email?.message}</span>

              <label htmlFor="password">
                <input
                  type="password"
                  id="password"
                  placeholder="Senha"
                  {...register("password")}
                />
              </label>
              <span>{errors?.password?.message}</span>

              <Button type="submit" className="btnLogin">
                Entrar
              </Button>
              <p>
                Ainda não tem cadastro?
                <a href="/Register"> Cadastre-se aqui</a>
              </p>
            </Form>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Login;
