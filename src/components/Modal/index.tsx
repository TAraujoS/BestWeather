import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import { ModalAdd, ModalConfig } from "../AddModal";
import Container from "./styles";

const Modal = () => {
  const { modal } = useContext(CityContext);
  return (
    <Container>
      <div className="modal">
        {modal === "add" ? <ModalAdd /> : <ModalConfig />}
      </div>
    </Container>
  );
};

export default Modal;
