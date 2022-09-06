import { createContext, ReactNode, useContext, useState } from "react";
import { weatherApi } from "../../services";
import { CityContext } from "../CityContext";

interface IStatesProvider {
  ACRioBranco: () => Promise<void>;
  AMManaus: () => Promise<void>;
  RRBVista: () => Promise<void>;
  ROPVelho: () => Promise<void>;
  PABelem: () => Promise<void>;
  APMacapa: () => Promise<void>;
  MTCuiaba: () => Promise<void>;
  TOPalmas: () => Promise<void>;
  MASaoLuis: () => Promise<void>;
  MSCampoGrande: () => Promise<void>;
  GOGoiania: () => Promise<void>;
  BASalvador: () => Promise<void>;
  PITeresina: () => Promise<void>;
  CEFortaleza: () => Promise<void>;
  RNorteNatal: () => Promise<void>;
  PBJoaoPessoa: () => Promise<void>;
  PERecife: () => Promise<void>;
  ALMaceio: () => Promise<void>;
  SEAracaju: () => Promise<void>;
  MGBeloHorizonte: () => Promise<void>;
  ESVitoria: () => Promise<void>;
  RJRioJaneiro: () => Promise<void>;
  SPSaoPaulo: () => Promise<void>;
  PRCuritiba: () => Promise<void>;
  SCFlorianopolis: () => Promise<void>;
  RSPortoAlegre: () => Promise<void>;
  DFBrasilia: () => Promise<void>;
  capital: ICapitals;
}
interface ICapitals {
  capital: string;
  location: {
    name: string;
    region: string;
  };
  current: {
    condition: { icon: string };
    temp_c: number;
  };
  forecast: {
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
    ];
  };
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

  const ACRioBranco = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Rio Branco Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const AMManaus = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Manaus Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const RRBVista = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Boa Vista Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const ROPVelho = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Porto Velho Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const PABelem = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Belem Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const APMacapa = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Macapa Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const MTCuiaba = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Cuiaba Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const TOPalmas = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Palmas Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const MASaoLuis = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Sao Luis Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const MSCampoGrande = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Campo Grande Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const GOGoiania = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q= Goiania Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const BASalvador = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Salvador Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const PITeresina = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Teresina Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const CEFortaleza = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Fortaleza Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const RNorteNatal = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q= Natal Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const PBJoaoPessoa = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Joao Pessoa Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const PERecife = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Recife Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const ALMaceio = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Maceio Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const SEAracaju = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Aracaju Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const MGBeloHorizonte = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Belo Horizonte Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const ESVitoria = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Vitoria Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const RJRioJaneiro = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Rio de Janeiro Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const SPSaoPaulo = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Sao Paulo Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const PRCuritiba = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Curitiba Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const SCFlorianopolis = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Florianopolis Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const RSPortoAlegre = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Porto Alegre Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };
  const DFBrasilia = async () => {
    try {
      const { data } = await weatherApi.get(
        `/forecast.json?key=${tokenExt}&q=Brasilia Brazil&days=7`
      );
      setCapital(data);
    } catch (error) {
      console.error("Esse erro vem da ext", error);
    }
  };

  return (
    <StatesContext.Provider
      value={{
        ACRioBranco,
        AMManaus,
        RRBVista,
        ROPVelho,
        PABelem,
        APMacapa,
        MTCuiaba,
        TOPalmas,
        MASaoLuis,
        MSCampoGrande,
        GOGoiania,
        BASalvador,
        PITeresina,
        CEFortaleza,
        RNorteNatal,
        PBJoaoPessoa,
        PERecife,
        ALMaceio,
        SEAracaju,
        MGBeloHorizonte,
        ESVitoria,
        RJRioJaneiro,
        SPSaoPaulo,
        PRCuritiba,
        SCFlorianopolis,
        RSPortoAlegre,
        DFBrasilia,
        capital,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export default StatesProvider;
