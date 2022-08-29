import { useForm } from "react-hook-form";
import { FormPage } from "./styles.js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../Services/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

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

  //captura os inputs do user
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //   const onSubmitFunction = (data) => {
  //     delete data.passwordConfirm;
  //     api
  //       .post("/users", data)
  //       .then((res) => {
  //         toast.success("Cadastro realizado!");
  //         navigate("/");
  //       })
  //       .catch((error) => console.log(error));
  //   };

  return (
    <>
      <section>
        <svg
          width="75"
          height="65"
          viewBox="0 0 75 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.1217 12.8645C36.4515 12.8645 35.8972 12.6727 35.459 12.289C35.0207 11.9053 34.8016 11.4201 34.8016 10.8333V4.7395C34.8016 4.1527 35.0207 3.66745 35.459 3.28377C35.8972 2.90009 36.4515 2.70825 37.1217 2.70825C37.792 2.70825 38.3462 2.90009 38.7845 3.28377C39.2227 3.66745 39.4418 4.1527 39.4418 4.7395V10.8333C39.4418 11.4201 39.2227 11.9053 38.7845 12.289C38.3462 12.6727 37.792 12.8645 37.1217 12.8645ZM52.9758 18.6197C52.5118 18.2135 52.2798 17.7395 52.2798 17.1978C52.2798 16.6562 52.5118 16.1822 52.9758 15.776L57.848 11.4426C58.312 11.0364 58.8663 10.8333 59.5108 10.8333C60.1552 10.8333 60.7095 11.0364 61.1735 11.4426C61.6375 11.8489 61.8695 12.3228 61.8695 12.8645C61.8695 13.4062 61.6375 13.8801 61.1735 14.2864L56.2239 18.6197C55.7599 19.026 55.2186 19.2291 54.5999 19.2291C53.9812 19.2291 53.4398 19.026 52.9758 18.6197ZM61.8695 34.5312C61.1993 34.5312 60.645 34.3393 60.2068 33.9556C59.7685 33.572 59.5494 33.0867 59.5494 32.4999C59.5494 31.9131 59.7685 31.4279 60.2068 31.0442C60.645 30.6605 61.1993 30.4687 61.8695 30.4687H68.8298C69.5001 30.4687 70.0544 30.6605 70.4926 31.0442C70.9308 31.4279 71.15 31.9131 71.15 32.4999C71.15 33.0867 70.9308 33.572 70.4926 33.9556C70.0544 34.3393 69.5001 34.5312 68.8298 34.5312H61.8695ZM37.1217 62.2916C36.4515 62.2916 35.8972 62.0997 35.459 61.7161C35.0207 61.3324 34.8016 60.8471 34.8016 60.2603V54.1666C34.8016 53.5798 35.0207 53.0945 35.459 52.7109C35.8972 52.3272 36.4515 52.1353 37.1217 52.1353C37.792 52.1353 38.3462 52.3272 38.7845 52.7109C39.2227 53.0945 39.4418 53.5798 39.4418 54.1666V60.2603C39.4418 60.8471 39.2227 61.3324 38.7845 61.7161C38.3462 62.0997 37.792 62.2916 37.1217 62.2916ZM18.0195 18.6197L13.07 14.3541C12.6059 13.9478 12.3739 13.4626 12.3739 12.8984C12.3739 12.3341 12.6059 11.8489 13.07 11.4426C13.534 11.0364 14.0753 10.8333 14.694 10.8333C15.3127 10.8333 15.8541 11.0364 16.3181 11.4426L21.2677 15.776C21.7317 16.1822 21.9637 16.6562 21.9637 17.1978C21.9637 17.7395 21.7317 18.2135 21.2677 18.6197C20.8036 18.9808 20.2494 19.1614 19.6049 19.1614C18.9605 19.1614 18.432 18.9808 18.0195 18.6197ZM57.9254 53.5572L52.9758 49.2239C52.5118 48.8176 52.2798 48.3437 52.2798 47.802C52.2798 47.2603 52.5118 46.7864 52.9758 46.3801C53.3883 46.019 53.9167 45.8385 54.5612 45.8385C55.2057 45.8385 55.7599 46.019 56.2239 46.3801L61.2508 50.6458C61.7149 51.052 61.934 51.5372 61.9082 52.1015C61.8824 52.6657 61.6633 53.151 61.2508 53.5572C60.7868 53.9635 60.2326 54.1666 59.5881 54.1666C58.9436 54.1666 58.3894 53.9635 57.9254 53.5572ZM5.41361 34.5312C4.74336 34.5312 4.18911 34.3393 3.75087 33.9556C3.31263 33.572 3.09351 33.0867 3.09351 32.4999C3.09351 31.9131 3.31263 31.4279 3.75087 31.0442C4.18911 30.6605 4.74336 30.4687 5.41361 30.4687H12.3739C13.0442 30.4687 13.5984 30.6605 14.0367 31.0442C14.4749 31.4279 14.694 31.9131 14.694 32.4999C14.694 33.0867 14.4749 33.572 14.0367 33.9556C13.5984 34.3393 13.0442 34.5312 12.3739 34.5312H5.41361ZM13.07 53.5572C12.6059 53.151 12.3739 52.677 12.3739 52.1353C12.3739 51.5937 12.6059 51.1197 13.07 50.7135L18.0195 46.3801C18.432 46.019 18.9605 45.8385 19.6049 45.8385C20.2494 45.8385 20.8036 46.019 21.2677 46.3801C21.7317 46.7864 21.9637 47.2716 21.9637 47.8359C21.9637 48.4001 21.7317 48.8853 21.2677 49.2916L16.3954 53.5572C15.9314 53.9635 15.3772 54.1666 14.7327 54.1666C14.0882 54.1666 13.534 53.9635 13.07 53.5572ZM37.1217 48.7499C31.9659 48.7499 27.5835 47.1701 23.9745 44.0103C20.3654 40.8506 18.5609 37.0138 18.5609 32.4999C18.5609 27.986 20.3654 24.1492 23.9745 20.9895C27.5835 17.8298 31.9659 16.2499 37.1217 16.2499C42.2775 16.2499 46.6599 17.8298 50.269 20.9895C53.8781 24.1492 55.6826 27.986 55.6826 32.4999C55.6826 37.0138 53.8781 40.8506 50.269 44.0103C46.6599 47.1701 42.2775 48.7499 37.1217 48.7499ZM37.1217 44.6874C40.9886 44.6874 44.2754 43.5025 46.9822 41.1327C49.689 38.7629 51.0424 35.8853 51.0424 32.4999C51.0424 29.1145 49.689 26.2369 46.9822 23.8671C44.2754 21.4973 40.9886 20.3124 37.1217 20.3124C33.2549 20.3124 29.9681 21.4973 27.2613 23.8671C24.5545 26.2369 23.2011 29.1145 23.2011 32.4999C23.2011 35.8853 24.5545 38.7629 27.2613 41.1327C29.9681 43.5025 33.2549 44.6874 37.1217 44.6874Z"
            fill="#F9FE00"
          />
        </svg>
        <h2>Best Weather</h2>
        <button className="login-button">Login</button>
      </section>

      <div className="form-div">
        <div className="register-div-total">
          <h3 className="align-center">Cadastro</h3>

          <div className="register-div">
            <input
              name="name"
              placeholder="Nome Completo"
              type="text"
              className="form-input"
              {...register("name")}
            />
            <p className="error-text">{errors.name?.message}</p>
          </div>

          <div className="register-div">
            <input
              name="email"
              placeholder="E-mail"
              type="email"
              className="form-input"
              {...register("email")}
            />
            <p className="error-text">{errors.email?.message}</p>
          </div>

          <div className="register-div">
            <input
              name="password"
              placeholder="Senha"
              type="password"
              className="form-input"
              {...register("password")}
            />
            <p className="error-text">{errors.password?.message}</p>
          </div>

          <div className="register-div">
            <input
              name="password-confirm"
              placeholder="Confirmação da senha"
              type="password"
              className="form-input"
              {...register("passwordConfirm")}
            />
            <p className="error-text">{errors.passwordConfirm?.message}</p>
          </div>

          <div className="register-div">
            <input
              name="contato"
              placeholder="Contato"
              type="text"
              className="form-input"
              {...register("contato")}
            />
            <p className="error-text">{errors.contato?.message}</p>
          </div>

          <div className="register-div">
            <select
              className="form-input-select"
              id="modulo"
              name="estado"
              form="estadoForm"
              {...register("estado")}
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
            <p className="error-text">{errors.estado?.message}</p>
          </div>

          <button type="submit" className="button-cadastrar-form">
            Cadastrar
          </button>
        </div>
      </div>
    </>
  );
}
