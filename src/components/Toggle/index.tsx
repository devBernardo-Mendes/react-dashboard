// packages
import React from "react";

// styles
import { Container, ToggleLabel, ToggleSelector } from "./style";

const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleLabel>Ligth</ToggleLabel>;
      <ToggleSelector
        checked
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => {
          console.log("Mudou");
        }}
      />
      <ToggleLabel>Dark</ToggleLabel>;
    </Container>
  );
};

export default Toggle;
