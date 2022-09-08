import { Route, Routes, Navigate } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoutes from "../components/ProtectedRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/register" />} />
    </Routes>
  );
};

export default MainRoutes;
