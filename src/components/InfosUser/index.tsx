import { useContext } from "react";
import { AuthContext } from "../../Context/LoginContext";
import { ListInfosUser } from "./styles";
import man from "../../assets/img/avatar-ele.png";

const InfoUser = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <ListInfosUser>
        <li>
          <figure>
            <img src={man} alt="homem" />
          </figure>
        </li>
        <li>{user.city} </li>
        <li> {user.occupation}</li>
      </ListInfosUser>
    </>
  );
};
export default InfoUser;
