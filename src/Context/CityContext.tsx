import { createContext, ReactNode, useState, useEffect } from "react";
import { IUser } from "./LoginContext";
import { fakeApi, weatherApi } from "../services";

interface CityContextData {
  userCity: ICityResponse;
  userLogin: IUser;
  setUserLogin: React.Dispatch<React.SetStateAction<IUser>>;
}

export const CityContext = createContext<CityContextData>(
  {} as CityContextData
);

export interface ICityContext {
  children: ReactNode;
}

export interface ICityResponse {
  location: { name: string };
  current: {
    temp_c: number;
    condition: {};
    precip_mm: number;
    wind_kph: number;
    wind_dir: number;
  };
}

const CityProvider = ({ children }: ICityContext) => {
  const [userCity, setUserCity] = useState<ICityResponse>({} as ICityResponse);
  const [userLogin, setUserLogin] = useState<IUser>({} as IUser);
  const idLogin = localStorage.getItem("@loginBWeather:user");
  const tokenExt = "27099ab8b4ea4bdf9c9110958220109";
  const token = localStorage.getItem("@loginBWeather:token");

  useEffect(() => {
    const user = async () => {
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

  useEffect(() => {
    async function infoExt() {
      await weatherApi
        .get(
          `/current.json?key=${tokenExt}&q=${userLogin.city}`
          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // }
        )
        .then((response) => setUserCity(response.data))
        .catch((err) => console.error(err));
    }
    if (userLogin?.city) {
      infoExt();
    }
  }, [userLogin?.city]);

  return (
    <CityContext.Provider value={{ userCity, userLogin, setUserLogin }}>
      {children}
    </CityContext.Provider>
  );
};
export default CityProvider;
