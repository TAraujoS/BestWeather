import FooterDashboard from "../../components/FooterDash";
import HeaderDashboard from "../../components/HeaderDashboard";
import InfoUser from "../../components/InfosUser";
import SectionSearch from "../../components/SectionSearch";
import { CityContext } from "../../Context/CityContext";
import { BodyDash } from "./styles";

const Dashboard = () => {
  return (
    <BodyDash>
      <HeaderDashboard />
      <SectionSearch />
      <InfoUser />

      <FooterDashboard />
    </BodyDash>
  );
};

export default Dashboard;
