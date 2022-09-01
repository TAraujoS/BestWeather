import { CityInfos } from "../../components/CityInfos/styles";
import FooterDashboard from "../../components/FooterDash";
import HeaderDashboard from "../../components/HeaderDashboard";
import InfoUser from "../../components/InfosUser";
import SectionSearch from "../../components/SectionSearch";
import { BodyDash } from "./styles";

const Dashboard = () => {
  return (
    <BodyDash>
      <HeaderDashboard />
      <SectionSearch />

      <InfoUser />
      <CityInfos />

      <FooterDashboard />
    </BodyDash>
  );
};

export default Dashboard;
