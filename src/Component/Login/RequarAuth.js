import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();

  if (loading) {
    return <button class="btn btn-square loading align-middle"></button>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
