import { useContext, useEffect, useState } from "react";
import { CityContext } from "../../Context/CityContext";
import { AuthContext } from "../../Context/LoginContext";
import { fakeApi, weatherApi } from "../../services";
import Container from "./styles";

interface ICityGetter {
  cityList: string;
  userId: number | null;
  id: number | null;
  nameCity: string;
}

const CityRegister = () => {
  const { setModal, city, setCity, setCityApi, tokenExt, tokenUser } =
    useContext(CityContext);
  const { userId } = useContext(AuthContext);
  const [cityList, setCityList] = useState<ICityGetter[]>([]);

  useEffect(() => {
    async function getCities() {
      fakeApi
        .get("/city", {
          headers: { Authorization: `Bearer ${tokenUser}` },
        })
        .then((res) => {
          setCityList(res.data);
          setModal(null);
        })
        .catch((err) => console.error(err));
    }
    getCities();
  }, [tokenUser]);

  useEffect(() => {
    const filteredCity = () => {
      const itensfiltered = cityList.filter(
        (el) => Number(el.userId) === Number(userId)
      );
      setCity(itensfiltered);
      return itensfiltered;
    };
    filteredCity();
  }, [cityList]);
  const cityInfoFavorite = (name: string) => {
    weatherApi
      .get(
        `/forecast.json?key=${tokenExt}&q=${name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")} Brazil&days=8`
      )
      .then((res) => setCityApi(res.data))
      .catch((err) => console.error("Esse é o problema", err));
  };

  return (
    <>
      <Container>
        <div className="lista-de-favoritos-and-button">
          <h3> Lista de Favoritos: </h3>
          <button onClick={() => setModal("add")}>Adicionar</button>
        </div>

        <div>
          <ul>
            {city.map((element) => (
              <li key={element.id}>
                <button onClick={() => cityInfoFavorite(element.nameCity)}>
                  {element.nameCity}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};
export default CityRegister;
