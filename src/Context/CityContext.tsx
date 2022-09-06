import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { AuthContext } from "./LoginContext";
import { fakeApi, weatherApi } from "../services";

export interface CityContextData {
  searchFromInput: (data: IData) => Promise<void>;
  setCityApi: React.Dispatch<React.SetStateAction<ICityResponse>>;
  cityApi: ICityResponse;
  loading: boolean;
  tokenExt: string;
  modal: string | null;
  setModal: Dispatch<SetStateAction<string | null>>;
  onSubmitFunction: (data: IUserConfig) => void;
}

export interface IData {
  data: string;
  city: string;
}

export interface ICityContext {
  children: ReactNode;
}

export interface ICityResponse {
  location: { name: string; region: string };
  current: {
    temp_c: number;
    condition: {
      icon: string;
    };
    precip_mm: number;
    wind_kph: number;
    wind_dir: number;
  };
  forecast: {
    forecastday: [
      {
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: string;
          condition: {
            icon: string;
          };
        };
        astro: {
          sunrise: string;
          sunset: string;
        };
      }
    ];
  };
}

export const CityContext = createContext<CityContextData>(
  {} as CityContextData
);

export interface IUserConfig {
  name?: string;
  city?: string;
  url?: string;
}

const CityProvider = ({ children }: ICityContext) => {
  const [cityApi, setCityApi] = useState<ICityResponse>({} as ICityResponse);
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModal] = useState<string | null>(null);
  const { user, setUser } = useContext(AuthContext);
  const tokenExt = "27099ab8b4ea4bdf9c9110958220109";
  const tokenUser = localStorage.getItem("@loginBWeather:token");
  const userId = localStorage.getItem("@loginBWeather:user");

  useEffect(() => {
    setLoading(true);

    async function apiWeather() {
      try {
        const { data } = await weatherApi.get(
          `/forecast.json?key=${tokenExt}&q=${user.city} Brazil&days=8`
        );
        setCityApi(data);
      } catch (error) {
        console.error("Esse erro vem da ext", error);
      } finally {
        setLoading(false);
      }
    }
    apiWeather();
  }, [user]);

  const searchFromInput = async (data: IData) => {
    await weatherApi
      .get(
        `/forecast.json?key=${tokenExt}&q=${data.city
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")} Brazil&days=8`
      )
      .then((res) => setCityApi(res.data))
      .catch((err) => console.error("Esse é o problema", err));
  };

  const onSubmitFunction = (data: IUserConfig) => {
    fakeApi
      .patch(`/users/${userId}`, data, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      })
      .then((res) => {
        setUser(res.data);
        setModal(null);
      })
      .catch((error) => console.error("Deu esse problema", error));
  };

  return (
    <CityContext.Provider
      value={{
        cityApi,
        setCityApi,
        loading,
        tokenExt,
        searchFromInput,
        modal,
        setModal,
        onSubmitFunction,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
export default CityProvider;
