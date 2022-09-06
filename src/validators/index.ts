import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),

  password: yup.string().required("Senha obrigatória"),
});

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^([a-zA-Zà-úÀ-Ú0-9]|-|_|\s)+$/,
      "Esse campo deve conter apenas letras"
    )
    .required("Campo obrigatório"),

  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),

  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Deve conter 8 caracteres,uma maiuscula, uma minuscula,um numero e um caractere especial!"
    ),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "A senha deve ser a mesma")
    .required("Campo Obrigatório"),

  occupation: yup.string().required("Campo Obrigatório"),

  city: yup.string().required("Campo Obrigatório"),
});

export const configUserSchema = yup.object().shape(
  {
    name: yup.string().when("name", (value) => {
      if (value?.length > 0) {
        return yup
          .string()
          .matches(
            /^([a-zA-Zà-úÀ-Ú0-9]|-|_|\s)+$/,
            "Esse campo deve conter apenas letras"
          );
      } else {
        return yup.string().notRequired();
      }
    }),
    city: yup.string().when("city", (value) => {
      if (value?.length > 0) {
        return yup
          .string()
          .matches(
            /^([a-zA-Zà-úÀ-Ú0-9]|-|_|\s)+$/,
            "Esse campo deve conter apenas letras"
          );
      } else {
        return yup.string().notRequired();
      }
    }),
  },
  [
    ["name", "name"],
    ["city", "city"],
  ]
);
