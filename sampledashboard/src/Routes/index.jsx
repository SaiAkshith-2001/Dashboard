import React from "react";
import EcomDashboard from "../components/EcomDashboard.jsx";
import OrderList from "../components/OrderList.jsx";
import DashboardLayout from "../Pages/DashboardLayout.jsx";
import { Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="" element={<EcomDashboard />} />
        <Route path="orderlist" element={<OrderList />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
