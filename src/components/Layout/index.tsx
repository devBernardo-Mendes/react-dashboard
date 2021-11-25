import React from "react";

// style
import { Container } from "./styles";

// import
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = () => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content />
    </Container>
  );
};

export default Layout;
