import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

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
          path="/unauthorized"
          element={<Unauthorized />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  );
}