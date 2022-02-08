import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
