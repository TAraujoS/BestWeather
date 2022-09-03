import { useEffect, useState } from "react";
import man from "../../assets/img/avatar-ele.png";
import { IUser } from "../../Context/LoginContext";
import { fakeApi } from "../../services";
import { ListInfosUser } from "./styles";

const InfoUser = () => {
  const [userId, setUserId] = useState<IUser>({} as IUser);
  useEffect(() => {
    const id = localStorage.getItem("@loginBWeather:user");
    const token = localStorage.getItem("@loginBWeather:token");
    const getUser = async () => {
      try {
        const { data } = await fakeApi.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserId(data);
      } catch (error) {
        console.error("Esse é o problema", error);
      }
    };
    getUser();
  }, [userId]);

  return (
    <>
      <ListInfosUser>
        <li>
          <figure>
            <img src={man} alt="homem" />
          </figure>
        </li>
        <li>{userId.city} </li>
        <li> {userId.occupation}</li>
      </ListInfosUser>
    </>
  );
};
export default InfoUser;
