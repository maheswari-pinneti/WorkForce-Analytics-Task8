<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Analytics from "../pages/Analytics";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    
  );
=======
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {

  return (

    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/unauthorized"
        element={<Unauthorized />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>

  );

>>>>>>> origin/feature/rupesh-auth-routing
};

export default AppRoutes;