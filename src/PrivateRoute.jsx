import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  return <Navigate to="/login" replace />;
}

export default PrivateRoute;
