// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";

// -------------------------------------------------
// styles
// -------------------------------------------------
import { Container } from "./styles";

const SelectInput: React.FC = ({ children }) => {
  return (
    <Container>
      <select name="" id="">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
    </Container>
  );
};

export default SelectInput;
