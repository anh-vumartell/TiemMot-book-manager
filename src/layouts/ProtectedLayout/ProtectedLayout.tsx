import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
