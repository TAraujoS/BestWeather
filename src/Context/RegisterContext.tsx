import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fakeApi } from "../services";

export interface IRegisterProviderProps {
  onSubmitFunction: (data: ISubmitData) => Promise<void>;
  back: () => void;
}
interface IRegisterProps {
  children: ReactNode;
}

export interface ISubmitData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  occupation: string;
  city: string;
  infoId?: number;
}
export const RegisterContext = createContext({} as IRegisterProviderProps);

const RegisterProvider = ({ children }: IRegisterProps) => {
  const navigate = useNavigate();

  const onSubmitFunction = async (data: ISubmitData) => {
    const infoId =
      data.occupation === "Asa Delta"
        ? 1
        : data.occupation === "Geologia"
        ? 2
        : data.occupation === "Agricultura"
        ? 3
        : data.occupation === "Paraquedismo"
        ? 4
        : data.occupation === "Surfe"
        ? 5
        : data.occupation === "Turismo"
        ? 6
        : 7;
    const finalData = { ...data, infoId };
    finalData.city.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    try {
      await fakeApi.post("/signup", finalData);
      toast.success("Cadastro feito com sucesso, faça o login.", {
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      toast.error("Verifique se todos os campos estão preenchidos.", {
        autoClose: 2000,
      });
      console.error("Deu esse problema", error);
    }
  };

  const back = () => {
    navigate("/");
  };
  return (
    <RegisterContext.Provider value={{ onSubmitFunction, back }}>
      {children}
    </RegisterContext.Provider>
  );
};
export default RegisterProvider;
