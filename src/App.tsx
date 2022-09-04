import "./App.css";
import CityProvider from "./Context/CityContext";
import AuthProvider from "./Context/LoginContext";
import RegisterProvider from "./Context/RegisterContext";
<<<<<<< HEAD
import StatesProvider from "./Context/StatesContext";
=======
import GlobalStyle from "./styles/GlobalStyle";
>>>>>>> 15accd3824fafd2111938e2d07d39e765bbbfcc6
import MainRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RegisterProvider>
          <CityProvider>
<<<<<<< HEAD
            <StatesProvider>
              <MainRoutes />
            </StatesProvider>
=======
            <GlobalStyle />
            <MainRoutes />
>>>>>>> 15accd3824fafd2111938e2d07d39e765bbbfcc6
          </CityProvider>
        </RegisterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
