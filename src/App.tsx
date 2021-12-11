// packages
import React from "react";
import { ThemeProvider } from "styled-components";

// components
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

// style
import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
