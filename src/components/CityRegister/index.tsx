import { useContext, useEffect, useState } from "react";
import { CityContext } from "../../Context/CityContext";
import { AuthContext } from "../../Context/LoginContext";
import { fakeApi } from "../../services";
import Container from "./styles";

interface ICityGetter {
  cityList: string;
  userId: number | null;
  id: number | null;
  nameCity: string;
}

const CityRegister = () => {
  const { setModal } = useContext(CityContext);
  const { userId } = useContext(AuthContext);
  const [cityList, setCityList] = useState<ICityGetter[]>([]);

  useEffect(() => {
    async function getCities() {
      fakeApi
        .get("/city")
        .then((res) => {
          setCityList(res.data);
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
    getCities();
  }, []);

  const filteredCity = cityList.filter(
    (element) => Number(element.userId) === Number(userId)
  );

  console.log(filteredCity);

  return (
    <>
      <Container>
        <h3> Lista de Favoritos: </h3>
        <div>
          <ul>
            {filteredCity.map((element) => (
              <li key={element.id}>
                <p>{element.nameCity}</p>
              </li>
            ))}
          </ul>
          <button onClick={() => setModal("add")}>Adicionar +</button>
        </div>
      </Container>
    </>
  );
};
export default CityRegister;
