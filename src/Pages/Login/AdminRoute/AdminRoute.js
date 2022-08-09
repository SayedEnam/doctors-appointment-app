import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

function AdminRoute({ children }) {
  const { user, admin, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  }
  return user.email && admin ? children : <Navigate to="/" />;
}

export default AdminRoute;
