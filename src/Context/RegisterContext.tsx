import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
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
  confirmPassword: string;
  occupation: string;
  city?: string;
}
export const RegisterContext = createContext({} as IRegisterProviderProps);

const RegisterProvider = ({ children }: IRegisterProps) => {
  const navigate = useNavigate();

  const onSubmitFunction = async (data: ISubmitData) => {
    console.log(data);
    try {
      const response = await fakeApi.post("/signup", data);
      console.log(response);
      navigate("/");
    } catch (error) {
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
