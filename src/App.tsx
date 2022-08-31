import "./App.css";
import AuthProvider from "./Context/LoginContext";
import RegisterProvider from "./Context/RegisterContext";
import MainRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RegisterProvider>
          <MainRoutes />
        </RegisterProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
