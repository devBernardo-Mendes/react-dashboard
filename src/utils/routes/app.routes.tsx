// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";
import { Switch, Route } from "react-router-dom";

// -------------------------------------------------
// components
// -------------------------------------------------
import Dashboard from "../../pages/Dashboard";
import List from "../../pages/List";
import Layout from "../../components/Layout";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/dashboard" exact component={Dashboard}></Route>
      <Route path="/list/:type" exact component={List}></Route>
    </Switch>
  </Layout>
);

export default AppRoutes;
