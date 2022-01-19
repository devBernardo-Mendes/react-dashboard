// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";
import { ThemeProvider } from "styled-components";

// -------------------------------------------------
// components
// -------------------------------------------------
import Routes from "./utils/routes";

// -------------------------------------------------
// style
// -------------------------------------------------
import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
