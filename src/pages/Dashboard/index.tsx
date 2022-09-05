import FooterDashboard from "../../components/FooterDash";
import Forecast from "../../components/Forecast";
import HeaderDashboard from "../../components/HeaderDashboard";
import InfoUser from "../../components/InfosUser";
import SectionSearch from "../../components/SectionSearch";
import CityInf from "../../components/CityInfos";

import { BodyDash } from "./styles";
import { useContext } from "react";
import { CityContext } from "../../Context/CityContext";
import Banners from "../../components/Banners";

const Dashboard = () => {
  const { loading } = useContext(CityContext);

  return (
    <BodyDash>
      {loading ? (
        <div className="divLoading">
          <h2>Estamos preparando suas informações</h2>
        </div>
      ) : (
        <>
          <HeaderDashboard />
          <SectionSearch />
          <InfoUser />
          <Banners />
          <CityInf />
          <Forecast />
          <FooterDashboard />
        </>
      )}
    </BodyDash>
  );
};

export default Dashboard;
