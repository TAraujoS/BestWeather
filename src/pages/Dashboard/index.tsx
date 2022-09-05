import { useContext } from "react";
import CityInf from "../../components/CityInfos";
import CityRegister from "../../components/CityRegister";
import FooterDashboard from "../../components/FooterDash";
import Forecast from "../../components/Forecast";
import HeaderDashboard from "../../components/HeaderDashboard";
import InfoUser from "../../components/InfosUser";
import Modal from "../../components/Modal";
import SectionSearch from "../../components/SectionSearch";

import { BodyDash } from "./styles";

import { CityContext } from "../../Context/CityContext";
import Banners from "../../components/Banners";

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
          <HeaderDashboard />
          <SectionSearch />
          <InfoUser />
          <Banners />
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
