import { userInfo } from "os";
import { createContext, ReactNode, useEffect, useState } from "react";
import { fakeApi } from "../services";
import { IUser } from "./LoginContext";

interface CityContextData {
  userCity: string;
  setUserCity: React.Dispatch<React.SetStateAction<string>>;
  userInfo: () => Promise<void>;
  userLogin: IUser;
}

export const CityContext = createContext<CityContextData>(
  {} as CityContextData
);

export interface ICityContext {
  children: ReactNode;
}

const CityProvider = ({ children }: ICityContext) => {
  const [userCity, setUserCity] = useState("");
  const [userLogin, setuserLogin] = useState<IUser>({} as IUser);
  const idLogin = localStorage.getItem("@loginBWeather:user");

  useEffect(() => {
    try {
      const userInfo = async () => {
        const response = await fakeApi.get(`/users/${idLogin}`);
        const token = localStorage.getItem("@loginBWeather:token");

        setuserLogin(response.data);
      };
    } catch (error) {
      console.error("Esse é o problema", error);
    }
    userInfo();
  }, []);

  return (
    <CityContext.Provider
      value={{ userCity, setUserCity, userInfo, userLogin }}
    >
      {children}
    </CityContext.Provider>
  );
};
export default CityProvider;
