import React, { useMemo } from "react";

// utils
import emojis from "../../utils/emojis";

// style
import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <h1>Toogle</h1>

      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>Bernardo Reis</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
