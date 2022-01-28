// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";

// -------------------------------------------------
// styles
// -------------------------------------------------
import { Container } from "./styles";

// -------------------------------------------------
// types
// -------------------------------------------------
import { ISelectIntupProps } from "../types";

const SelectInput: React.FC<ISelectIntupProps> = ({ option, onChange }) => {
  return (
    <Container>
      <select onChange={onChange}>
        {option.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default SelectInput;
