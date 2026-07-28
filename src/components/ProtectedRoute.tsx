<<<<<<< HEAD
import {
  Navigate,
  Outlet,
} from "react-router-dom";

import type {
  Permission,
  User,
} from "../types/auth";

import { hasPermission } from "../utils/permissions";

interface ProtectedRouteProps {
  user: User;
  permission: Permission;
}

function ProtectedRoute({
  user,
  permission,
}: ProtectedRouteProps) {

  const allowed = hasPermission(
    user.role,
    permission,
  );

  if (!allowed) {
    return (
      <Navigate
        to="/dashboard"
        replace
      />
    );
  }

  return <Outlet />;
}

export default ProtectedRoute;
=======
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type Props = {
  children: JSX.Element;
};

export default function ProtectedRoute({
  children,
}: Props) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
>>>>>>> origin/feature/rupesh-auth-routing
