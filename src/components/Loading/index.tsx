import { LoadingScreen } from "./styles";

const Loading = () => {
  return (
    <LoadingScreen>
      <div className="wrapper">
        <div className="sun"></div>
        <div className="rain">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="cloud">
          <div className="cloud1">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="cloud1 c_shadow">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="cloud_s">
          <div className="cloud1">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="cloud1 c_shadow">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="cloud_vs">
          <div className="cloud1">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="cloud1 c_shadow">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="haze"></div>
        <div className="haze_stripe"></div>
        <div className="haze_stripe"></div>
        <div className="haze_stripe"></div>
        <div className="thunder"></div>

        <div className="sleet">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="text">
          <ul>
            <li>Carregando suas informações...</li>
            <li>Será que vai fazer sol?</li>
            <li>Só um pouquinho de sol?</li>
            <li>Algumas nuvens?</li>
            <li>Muitas nuvens...</li>
            <li>Muitas nuvens!</li>
            <li>Neblina...</li>
            <li>Toró brabo</li>
            <li>Vai chover?</li>
            <li>Granizo!</li>
          </ul>
        </div>
      </div>
    </LoadingScreen>
  );
};

export default Loading;
