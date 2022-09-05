import { useContext } from "react";
import CityInf from "../../components/CityInfos";
import CityRegister from "../../components/CityRegister";
import FooterDashboard from "../../components/FooterDash";
import Forecast from "../../components/Forecast";
import HeaderDashboard from "../../components/HeaderDashboard";
import InfoUser from "../../components/InfosUser";
import Modal from "../../components/Modal";
import SectionSearch from "../../components/SectionSearch";
import { CityContext } from "../../Context/CityContext";
import { BodyDash } from "./styles";

const Dashboard = () => {
  const { loading, modal } = useContext(CityContext);

  return (
    <BodyDash>
      {loading ? (
        <div className="divLoading">
          <h2>Estamos preparando suas informações</h2>
        </div>
      ) : (
        <>
          {modal && <Modal />}
          {modal && <Modal />}
          <HeaderDashboard />
          <SectionSearch />
          <InfoUser />
          <CityInf />
          <CityRegister />
          <Forecast />
          <FooterDashboard />
        </>
      )}
    </BodyDash>
  );
};

export default Dashboard;
