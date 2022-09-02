import { useContext } from "react";
import CityInf from "../../components/CityInfos";
import FooterDashboard from "../../components/FooterDash";
import HeaderDashboard from "../../components/HeaderDashboard";
import InfoUser from "../../components/InfosUser";
import SectionSearch from "../../components/SectionSearch";
import { CityContext } from "../../Context/CityContext";
import { BodyDash } from "./styles";

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
          <CityInf />
          <FooterDashboard />
        </>
      )}
    </BodyDash>
  );
};

export default Dashboard;
