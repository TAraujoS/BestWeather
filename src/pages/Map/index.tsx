import mapClikable from "../../assets/img/map.png";
import mao from "../../assets/img/mao.png";
import FooterDashboard from "../../components/FooterDash";
import HeaderDashboard from "../../components/HeaderDashboard";
import { MainDash } from "../Dashboard/styles";
import { ContainerGeneral, ContainerMap } from "./styles";
import { useContext } from "react";
import { StatesContext } from "../../Context/StatesContext";

const MapBrazil = () => {
  const { capital, ACRioBranco, AMManaus } = useContext(StatesContext);
  console.log(capital);
  return (
    <>
      <HeaderDashboard />
      <MainDash>
        <h1>Confira o tempo no Nosso Brasil </h1>
        <ContainerGeneral>
          {capital ? (
            <div>
              <figure>
                {/* <img src={capital.forecast.forecastday[0].day.condition.icon} alt="" /> */}
              </figure>
              <p></p>
            </div>
          ) : (
            <div>
              <figure>
                <img src={mao} alt="mão apontando" />
              </figure>
              <h3>clique em um estado e verá o tempo em sua capital</h3>
            </div>
          )}
          <ContainerMap>
            <img
              className="imageBrasil"
              useMap="#mapaBrasil"
              src={mapClikable}
              alt="Mapa do Brasil"
            />
          </ContainerMap>
        </ContainerGeneral>
        <map name="mapaBrasil">
          <area
            shape="poly"
            coords="9,205,100,249,72,266,51,244,37,250"
            onClick={() => ACRioBranco()}
            alt="Acre"
          />
          <area
            shape="poly"
            coords="67,71,110,70,126,84,167,68,193,121,203,108,237,92,275,142,230,226,168,214,113,239,17,201,34,169,67,161,74,106,66,88,80,88"
            onClick={() => AMManaus()}
            alt="Amazonas"
          />
          <area
            shape="poly"
            coords="153,29,176,41,213,18,226,35,220,55,235,83,223,83,213,101,195,101,193,117,179,58,159,55"
            href=""
            alt="Roraima"
          />
          <area
            shape="poly"
            coords="130,245,152,245,167,226,190,242,193,273,216,173,216,292,205,300,188,298,165,284,147,284,140,252"
            href=""
            alt="Rondonia"
          />
          <area
            shape="poly"
            coords="242,80,285,68,286,59,299,59,350,126,364,118,377,129,409,111,432,118,392,181,399,186,280,210,384,230,372,243,273,240,252,197,287,124,249,110"
            href=""
            alt="Pará"
          />
          <area
            shape="poly"
            coords="310,63,340,63,356,35,398,104,376,118,347,107"
            href=""
            alt="Amapa"
          />
          <area
            shape="poly"
            coords="201,237,253,237,253,218,268,249,368,250,357,326,325,357,325,373,315,358,253,363,253,348,222,345,217,302,234,287,220,264,204,264"
            href=""
            alt="Mato Grosso"
          />
          <area
            shape="poly"
            coords="403,181,415,190,414,215,425,225,212,235,436,259,427,274,433,294,400,293,392,287,388,297,374,287,377,244,393,227,395,206"
            href=""
            alt="Tocantins"
          />
          <area
            shape="poly"
            coords="440,119,461,134,459,150,486,139,493,145,480,161,484,177,480,189,484,198,265,200,443,217,440,252,430,236,432,218,418,206,418,179,411,176"
            href=""
            alt="Maranhão"
          />
          <area
            shape="poly"
            coords="262,375,317,378,355,402,308,461,295,462,291,442,261,439"
            href=""
            alt="Mato Grosso do Sul"
          />
          <area
            shape="poly"
            coords="370,302,433,301,433,327,420,346,413,378,392,378,367,388,366,395,331,374,346,347,363,330"
            href=""
            alt="Goias"
          />
          <area shape="circle" coords="407,325,18" href="" alt="Brasilia" />
          <area
            shape="poly"
            coords="516,238,520,246,544,235,560,245,560,270,566,283,560,293,550,293,539,378,529,364,532,346,480,321,475,314,445,326,438,272,445,260,459,267,481,244,509,244"
            href=""
            alt="Bahia"
          />
          <area
            shape="poly"
            coords="509,142,522,219,505,236,472,239,473,254,452,262,446,253,455,219,492,198,493,154"
            href=""
            alt="Piaui"
          />
          <area
            shape="poly"
            coords="516,144,538,144,574,167,549,203,551,210,546,214,526,211"
            href=""
            alt="Ceara"
          />
          <area
            shape="poly"
            coords="576,174,606,180,607,195,590,195,586,200,577,200,577,192,,561,193"
            href=""
            alt="Rio grande do Norte"
          />
          <area
            shape="poly"
            coords="571,193,573,204,588,204,589,199,606,199,615,207,581,221,580,211,569,210,557,214,556,200"
            href=""
            alt="Paraiba"
          />
          <area
            shape="poly"
            coords="527,214,541,214,545,220,568,220,575,212,575,227,583,227,590,219,601,217,611,212,609,227,593,231,589,238,578,238,571,233,565,233,562,237,544,227,525,241,519,231,529,220"
            href=""
            alt="Pernambuco"
          />
          <area
            shape="poly"
            coords="577,241,590,241,597,234,604,234,606,238,590,254,585,254,565,243,570,237"
            href=""
            alt="Alagoas"
          />
          <area
            shape="poly"
            coords="566,247,585,258,572,275,565,265,570,265"
            href=""
            alt="Sergipe"
          />
          <area
            shape="poly"
            coords="468,322,476,332,485,327,511,344,525,345,525,357521,357,522,369,527,373,516,374,510,409,503,409,492,434,443,446,441,450,435,450,433,429,423,422,422,407,397,407,394,410,389,405,364,404,374,391,397,384,409,387,418,387,423,346,432,346,432,337"
            href=""
            alt="Minas Gerais"
          />
          <area
            shape="poly"
            coords="519,379,535,379,535,406,518,424,505,424,506,412,515,412,521,400"
            href=""
            alt="Espirito Santo"
          />
          <area
            shape="poly"
            coords="502,422,507,428,516,428,515,439,505,442,504,451,488,451,488,445,482,445,483,454,469,452,468,447,462,447,471,442,493,439,501,433"
            href=""
            alt="Rio de Janeiro"
          />
          <area
            shape="poly"
            coords="398,413,416,413,421,432,427,432,431,454,447,454,458,447,464,452,463,458,437,464,407,484,402,483,401,478,389,478,381,451,361,450,356,447,333,448,348,436,357,415,368,408,387,408,395,416"
            href=""
            alt="São Paulo"
          />
          <area
            shape="poly"
            coords="329,452,357,452,362,455,377,455,381,460,381,470,386,473,386,481,397,481,397,488,406,488,401,500,387,500,386,503,381,500,367,500,365,502,358,502,356,508,347,508,340,504,321,503,316,491,310,493,313,467"
            href=""
            alt="Parana"
          />
          <area
            shape="poly"
            coords="306,506,381,506,385,508,392,503,400,503,397,540,384,550,378,550,383,538,371,538,356,524,339,516,321,516,321,508,339,508,349,513,360,513"
            href=""
            alt="Santa Catarina"
          />
          <area
            shape="poly"
            coords="311,522,334,522,353,527,366,539,378,540,376,546,375,553,381,553,368,577,350,593,345,594,345,590,358,584,370,566,365,565,364,569,360,564,355,564,350,580,345,581,341,591,341,599,325,620,342,611,329,603,318,592,303,582,296,582,292,575,289,575,284,579,284,573,273,564,263,566"
            href=""
            alt="Rio Grande do Sul"
          />
        </map>
      </MainDash>
      <FooterDashboard />
    </>
  );
};
export default MapBrazil;
