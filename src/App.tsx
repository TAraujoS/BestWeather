import CityProvider from "./Context/CityContext";
import AuthProvider from "./Context/LoginContext";
import RegisterProvider from "./Context/RegisterContext";
import GlobalStyle from "./styles/GlobalStyle";
import MainRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <ToastContainer />
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
