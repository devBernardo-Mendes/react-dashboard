// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";
import { Routes, Route } from "react-router-dom";

// -------------------------------------------------
// components
// -------------------------------------------------
import List from "../pages/List";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/list/entry-balance"
        element={
          <List
            match={{
              params: {
                type: "Entradas",
                lineColor: "#F7931B",
              },
            }}
          />
        }
      />
      <Route
        path="/list/exit-balance"
        element={
          <List
            match={{
              params: {
                type: "Saídas",
                lineColor: "#E44C4E",
              },
            }}
          />
        }
      />
    </Routes>
  </Layout>
);

export default AppRoutes;
