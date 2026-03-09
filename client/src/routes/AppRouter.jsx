import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login           from "../auth/Login";
import AdminDashboard  from "../pages/AdminDashboard";
import DoctorDashboard from "../pages/DoctorDashboard";
import ReceptionDashboard from "../pages/ReceptionDashboard";
import ProtectedRoute  from "../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        <Route path="/doctor" element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <DoctorDashboard />
          </ProtectedRoute>
        } />

        <Route path="/reception" element={
          <ProtectedRoute allowedRoles={["reception"]}>
            <ReceptionDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}