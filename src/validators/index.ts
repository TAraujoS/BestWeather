import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório"),

    password: yup
    .string()
    .required("Senha obrigatória"),
  });


  export const registerSchema = yup.object().shape({
    name: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Esse campo deve conter apenas letras")
    .required("Campo obrigatório"),

    email: yup
    .string()
    .email("E-mail inválido")
    .required("Campo obrigatório"),

    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/(\W)|_/, "Deve conter ao menos 1 caractere especial")
      .matches(/.{8,}/, "Deve conter ao menos 8 caracteres"),

    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "A senha deve ser a mesma")
      .required("Campo Obrigatório"),

    occupation: yup
    .string()
    .required("Campo Obrigatório"),

    city: yup
    .string()
    .required("Campo Obrigatório"),
  });