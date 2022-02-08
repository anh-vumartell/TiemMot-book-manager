import React from "react";
import { Routes, Route } from "react-router-dom";

import { ErrorLayout, ProtectedLayout, PublicLayout } from "layouts";
import { Home, Login, ForgotPassword, PriceFormula } from "scenes";

export const CustomizeRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<ProtectedLayout />}>
          <Route index element={<Home />} />
          <Route path="/formula" element={<PriceFormula />} />
        </Route>
        <Route path="/sign" element={<PublicLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="*" element={<ErrorLayout />} />
      </Route>
    </Routes>
  );
};

export default CustomizeRoutes;
