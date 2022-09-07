import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CityInf from "../../components/CityInfos";
import CityRegister from "../../components/CityRegister";
import FooterDashboard from "../../components/FooterDash";
import Forecast from "../../components/Forecast";
import HeaderDashboard from "../../components/HeaderDashboard";
import InfoUser from "../../components/InfosUser";
import Modal from "../../components/Modal";
import SectionSearch from "../../components/SectionSearch";
<<<<<<< HEAD
import { SiOpenstreetmap } from "react-icons/si";
=======
>>>>>>> f904d8bd412aaf12316a1db48155c87a2b07d466
import { MainDash } from "./styles";
import { CityContext } from "../../Context/CityContext";
import Banners from "../../components/Banners";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
<<<<<<< HEAD
  const { loading, modal } = useContext(CityContext);
  const navigate = useNavigate();
  const mapa = () => {
    navigate("/map");
  };
  const tokenUser = localStorage.getItem("@loginBWeather:token");
=======
  const { loading, modal, tokenUser } = useContext(CityContext);
  const navigate = useNavigate();
>>>>>>> f904d8bd412aaf12316a1db48155c87a2b07d466

  return (
    <>
      {tokenUser ? (
        <>
          {modal && <Modal />}
          <HeaderDashboard />
          <MainDash>
            {loading ? (
              <div className="divLoading">
                <h2>Estamos preparando suas informações</h2>
              </div>
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
