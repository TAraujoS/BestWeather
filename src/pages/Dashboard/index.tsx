import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/styles";
import CityInf from "../../components/CityInfos";
import CityRegister from "../../components/CityRegister";
import FooterDashboard from "../../components/FooterDash";
import Forecast from "../../components/Forecast";
import HeaderDashboard from "../../components/HeaderDashboard";
import InfoUser from "../../components/InfosUser";
import Modal from "../../components/Modal";
import SectionSearch from "../../components/SectionSearch";

import { MainDash } from "./styles";

import { CityContext } from "../../Context/CityContext";

const Dashboard = () => {
  const { loading, modal } = useContext(CityContext);
  const navigate = useNavigate();
  const mapa = () => {
    navigate("/map");
  };

  return (
    <>
      {loading ? (
        <div className="divLoading">
          <h2>Estamos preparando suas informações</h2>
        </div>
      ) : (
        <>
          <MainDash>
            {modal && <Modal />}
            <HeaderDashboard />
            <SectionSearch />
            <InfoUser />
            <CityInf />
            <CityRegister />
            <Forecast />
            <Button onClick={() => mapa}> Mapa</Button>
          </MainDash>
          <FooterDashboard />
        </>
      )}
    </>
  );
};

export default Dashboard;
