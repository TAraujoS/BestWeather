import { createContext, ReactNode, useEffect, useState } from "react";
import { fakeApi } from "../services";
import { IUser } from "./LoginContext";

interface CityContextData {
  userCity: string;
  setUserCity: React.Dispatch<React.SetStateAction<string>>;

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
  const [userLogin, setUserLogin] = useState<IUser>({} as IUser);
  const idLogin = localStorage.getItem("@loginBWeather:user");

  useEffect(() => {
    const user = async () => {
      const token = localStorage.getItem("@loginBWeather:token");
      try {
        const { data } = await fakeApi.get(`/users/${idLogin}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserLogin(data);
      } catch (error) {
        console.error("Esse é o problema", error);
      }
    };
    user();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CityContext.Provider value={{ userCity, setUserCity, userLogin }}>
      {children}
    </CityContext.Provider>
  );
};
export default CityProvider;
