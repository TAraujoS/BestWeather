import { createContext, ReactNode, useContext, useState } from "react";
import { weatherApi } from "../../services";
import { CityContext } from "../CityContext";

interface IStatesProvider {
  AcreRioBranco: () => Promise<void>;
  capital: ICapitals;
}
interface ICapitals {
  capital: string;
  forecast: [
    forecastday: [
      {
        date: string;
        day: {
          maxtemp_c: string;
          mintemp_c: string;
          condition: {
            icon: string;
          };
        };
      }
    ]
  ];
}

export interface IStateContext {
  children: ReactNode;
}

export const StatesContext = createContext<IStatesProvider>(
  {} as IStatesProvider
);

const StatesProvider = ({ children }: IStateContext) => {
  const { tokenExt } = useContext(CityContext);
  const [capital, setCapital] = useState<ICapitals>({} as ICapitals);

  const AcreRioBranco = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Rio Branco Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };

  return (
    <StatesContext.Provider value={{ AcreRioBranco, capital }}>
      {children}
    </StatesContext.Provider>
  );
};

export default StatesProvider;
