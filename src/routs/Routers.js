import React from "react";
import { Route, Routes } from "react-router-dom";
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
};

export default Routers;
