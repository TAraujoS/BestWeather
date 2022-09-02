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
  setCityApi: React.Dispatch<React.SetStateAction<ICityResponse>>;
  cityApi: ICityResponse;
  loading: boolean;
}

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
          `/current.json?key=${tokenExt}&q=${user.city}`
        );
        console.log(data);
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

  return (
    <CityContext.Provider value={{ cityApi, setCityApi, loading }}>
      {children}
    </CityContext.Provider>
  );
};
export default CityProvider;
