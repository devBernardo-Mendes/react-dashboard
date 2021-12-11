// packages
import React from "react";

// style
import { Container } from "./styles";

// import
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
