import "./App.css";
import CityProvider from "./Context/CityContext";
import AuthProvider from "./Context/LoginContext";
import RegisterProvider from "./Context/RegisterContext";
import StatesProvider from "./Context/StatesContext";
import GlobalStyle from "./styles/GlobalStyle";
import MainRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RegisterProvider>
          <CityProvider>
            <StatesProvider>
              <MainRoutes />
              <GlobalStyle />
            </StatesProvider>
          </CityProvider>
        </RegisterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
