import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRoleHomePath } from "@/dashboard/dashboardConfig";

export const RequireAuth = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export const RequireRole = ({ allowedRoles }) => {
  const { currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(currentUser.role)) {
    return <Navigate to={getRoleHomePath(currentUser.role)} replace />;
  }

  return <Outlet />;
};

export const DashboardRedirect = () => {
  const { currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to={getRoleHomePath(currentUser.role)} replace />;
};

