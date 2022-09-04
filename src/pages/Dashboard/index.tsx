import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/styles";
import CityInf from "../../components/CityInfos";
import FooterDashboard from "../../components/FooterDash";
import HeaderDashboard from "../../components/HeaderDashboard";
import InfoUser from "../../components/InfosUser";
import SectionSearch from "../../components/SectionSearch";
import { CityContext } from "../../Context/CityContext";
import { BodyDash } from "./styles";

const Dashboard = () => {
  const { loading } = useContext(CityContext);
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
          <HeaderDashboard />
          <BodyDash>
            <SectionSearch />
            <InfoUser />
            <CityInf />
            <Button onClick={mapa}>Mapa</Button>
          </BodyDash>
          <FooterDashboard />
        </>
      )}
    </>
  );
};

export default Dashboard;
