import React from "react";
import EcomDashboard from "../components/EcomDashboard.jsx";
import OrderList from "../components/OrderList.jsx";
import { Routes, Route } from "react-router-dom";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<EcomDashboard />} />
      <Route path="orderlist" element={<OrderList />} />
    </Routes>
  );
};

export default index;
