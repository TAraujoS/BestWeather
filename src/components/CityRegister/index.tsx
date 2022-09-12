import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CityContext } from "../../Context/CityContext";
import { AuthContext } from "../../Context/LoginContext";
import { fakeApi, weatherApi } from "../../services";
import Container from "./styles";
import { BsTrash } from "react-icons/bs";

interface ICityGetter {
  cityList: string;
  userId: number | null;
  id: string;
  nameCity: string;
}

const CityRegister = () => {
  const { setModal, city, setCity, setCityApi, tokenExt, tokenUser } =
    useContext(CityContext);
  const { userId } = useContext(AuthContext);
  const [cityList, setCityList] = useState<ICityGetter[]>([]);

  useEffect(() => {
    function getCities() {
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
  }, []);

  useEffect(() => {
    const filteredCity = () => {
      const itensfiltered = cityList.filter((el) => el.userId === userId);
      setCity(itensfiltered);
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

  const deletedCities = async (id: string) => {
    await fakeApi
      .delete(`/city/${id}`, {
        headers: { Authorization: `Bearer ${tokenUser}` },
      })
      .then(() => {
        const deletedFiltered = cityList.filter((elem) => elem.id !== id);
        setCityList(deletedFiltered);
        toast.success("Cidade removida com sucesso!");
      })
      .catch((err) => console.error("Esse erro vem da Api fake", err));
  };
  return (
    <>
      <Container>
        <div className="lista-de-favoritos-and-button">
          <h3> Lista de Favoritos </h3>
          <button onClick={() => setModal("add")}>+</button>
        </div>

        <div>
          <ul>
            {city.length <= 0 ? (
              <h5> Cadastre suas cidades favoritas aqui !</h5>
            ) : (
              city?.map((element) => (
                <li key={element.id}>
                  <button
                    className="btn-add"
                    onClick={() => cityInfoFavorite(element.nameCity)}
                  >
                    {element.nameCity}
                  </button>
                  <button
                    className="btn-trash"
                    onClick={() => deletedCities(element.id)}
                  >
                    <BsTrash />
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </Container>
    </>
  );
};
export default CityRegister;
