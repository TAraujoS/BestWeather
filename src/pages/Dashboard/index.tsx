import FooterDashboard from "../../components/FooterDash";
import HeaderDashboard from "../../components/HeaderDashboard";
import SectionSearch from "../../components/SectionSearch";
import { BodyDash } from "./styles";

const Dashboard = () => {
  return (
    <BodyDash>
      <HeaderDashboard />
      <SectionSearch />
      <FooterDashboard />
    </BodyDash>
  );
};

export default Dashboard;
