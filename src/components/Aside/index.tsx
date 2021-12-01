import React from "react";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

// utils
import logoimg from "../../assets/logo.svg";

// style
import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoimg} alt="Logo my wallet" />
        <Title>Minha Carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
