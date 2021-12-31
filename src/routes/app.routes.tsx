// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";
import { Switch, Route } from "react-router-dom";

// -------------------------------------------------
// components
// -------------------------------------------------
import List from "../pages/List";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/Layout";

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
  </Switch>
);

export default AppRoutes;
