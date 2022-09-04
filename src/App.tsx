import "./App.css";
import CityProvider from "./Context/CityContext";
import AuthProvider from "./Context/LoginContext";
import RegisterProvider from "./Context/RegisterContext";
import GlobalStyle from "./styles/GlobalStyle";
import MainRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RegisterProvider>
          <CityProvider>
            <GlobalStyle />
            <MainRoutes />
          </CityProvider>
        </RegisterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
