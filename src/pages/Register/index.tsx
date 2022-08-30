import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../components/Button/styles";
import Form from "../../components/Form/styles";
import { Container } from "./styles";
import HeaderLogo from "../../components/Header";

const schema = yup.object().shape({
  email: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "Mínimo de 8 dígitos")
    .required("Campo obrigatório"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas diferentes")
    .min(8, "Mínimo de 8 dígitos")
    .required("Campo Obrigatório"),
  name: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Apenas Letras")
    .required("Campo obrigatório"),
  contato: yup.string().required("Campo Obrigatório"),
  estado: yup.string().required("Campo Obrigatório"),
});

const Registro = () => {
  const { register } = useForm({
    resolver: yupResolver(schema),
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
            {...register("password")}
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
