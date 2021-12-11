// packages
import React, { useMemo } from "react";

// utils
import emojis from "../../utils/emojis";

// components
import Toggle from "../Toggle";

// style
import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>Bernardo Reis</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
