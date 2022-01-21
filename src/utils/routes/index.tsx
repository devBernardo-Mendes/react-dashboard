// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";
import { BrowserRouter } from "react-router-dom";

// -------------------------------------------------
// components
// -------------------------------------------------
import App from "./app.routes";

const Routes: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Routes;
