import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  user?: boolean;
  permission?: string;
}

const ProtectedRoute = ({
  children,
  user = true,
  permission
}: ProtectedRouteProps) => {

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
