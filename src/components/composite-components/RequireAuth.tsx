import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useAppSelector } from "redux/hooks";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return (
      <Navigate to="/sign/login" state={{ from: location }} replace={true} />
    );
  }

  return <div className="pages-container">{children}</div>;
};

export default RequireAuth;
