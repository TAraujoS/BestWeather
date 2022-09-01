import { userInfo } from "os";
import { createContext, ReactNode, useEffect, useState } from "react";
import { fakeApi } from "../services";
import { IUser } from "./LoginContext";

interface CityContextData {
  userCity: string;
  setUserCity: React.Dispatch<React.SetStateAction<string>>;
  userInfo: () => void;
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
    const userInfo = async () => {
      const token = localStorage.getItem("@loginBWeather:token");
      try {
        const { data } = await fakeApi.get(`/users/${idLogin}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setuserLogin(data);
      } catch (error) {
        console.error("Esse é o problema", error);
      }
    };
    userInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
