import { useContext } from "react";
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
import Banners from "../../components/Banners";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Dashboard = () => {
  const { loading, modal, tokenUser } = useContext(CityContext);
  const navigate = useNavigate();

  return (
    <>
      {tokenUser ? (
        <>
          {modal && <Modal />}
          <HeaderDashboard />
          <MainDash>
            {loading ? (
              <Loading />
            ) : (
              <>
                <InfoUser />
                <SectionSearch />

                <section className="section-sub">
                  <CityInf />
                  <Banners />
                </section>

                <CityRegister />
                <Forecast />
                <FooterDashboard />
              </>
            )}
          </MainDash>{" "}
        </>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Dashboard;
