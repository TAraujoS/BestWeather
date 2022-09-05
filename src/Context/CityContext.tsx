import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { AuthContext } from "./LoginContext";
import { weatherApi } from "../services";

interface CityContextData {
  searchFromInput: (data: IData) => Promise<void>;
  setCityApi: React.Dispatch<React.SetStateAction<ICityResponse>>;
  cityApi: ICityResponse;
  loading: boolean;
  tokenExt: string;
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
}

export const CityContext = createContext<CityContextData>(
  {} as CityContextData
);

const CityProvider = ({ children }: ICityContext) => {
  const [cityApi, setCityApi] = useState<ICityResponse>({} as ICityResponse);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useContext(AuthContext);
  const tokenExt = "27099ab8b4ea4bdf9c9110958220109";

  useEffect(() => {
    setLoading(true);

    async function apiWeather() {
      try {
        const { data } = await weatherApi.get(
          `/forecast.json?key=${tokenExt}&q=${user.city} Brazil&days=7`
        );
        setCityApi(data);
      } catch (error) {
        console.error("Esse erro vem da ext", error);
      } finally {
        setLoading(false);
      }
    }

    if (user?.city) {
      apiWeather();
    }
  }, [user?.city]);

  const searchFromInput = async (data: IData) => {
    await weatherApi
      .get(`/forecast.json?key=${tokenExt}&q=${data.city} Brazil&days=7`)
      .then((res) => setCityApi(res.data))
      .catch((err) => console.error("Esse é o problema", err));
  };
  return (
    <CityContext.Provider
      value={{
        cityApi,
        setCityApi,
        loading,
        tokenExt,
        searchFromInput,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};
export default CityProvider;
