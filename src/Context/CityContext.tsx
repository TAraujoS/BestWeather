import { createContext, ReactNode, useState, useEffect } from "react";
import { IUser } from "./LoginContext";
import { fakeApi, weatherApi } from "../services";

interface CityContextData {
  userCity: ICityResponse;
  userLogin: IUser;
  setUserLogin: React.Dispatch<React.SetStateAction<IUser>>;
  loading: boolean;
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
  const [loading, setLoading] = useState(false);

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
        console.error("Esse é o problema!", error);
      }
    };
    user();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLogin]);

  useEffect(() => {
    setLoading(true);

    async function infoExt() {
      await weatherApi
        .get(`/current.json?key=${tokenExt}&q=${userLogin.city}`)
        .then((response) => setUserCity(response.data))
        .finally(() => {
          setTimeout(() => setLoading(false), 2000);
        })
        .catch((err) => console.error("Esse é o problema!", err));
    }
    if (userLogin?.city) {
      infoExt();
    }
  }, [userLogin?.city]);
  console.log(userCity);

  return (
    <CityContext.Provider
      value={{ userCity, userLogin, setUserLogin, loading }}
    >
      {children}
    </CityContext.Provider>
  );
};
export default CityProvider;
