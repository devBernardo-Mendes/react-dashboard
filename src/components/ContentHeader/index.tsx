// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";

// -------------------------------------------------
// components
// -------------------------------------------------
import SelectInput from "../../components/SelectInput";

// -------------------------------------------------
// style
// -------------------------------------------------
import { Container, TitleContainer, Controllers } from "./styles";

// -------------------------------------------------
// utils
// -------------------------------------------------
import { options } from "../utils";

// -------------------------------------------------
// types
// -------------------------------------------------
import {IContentHeaderProps}  from "../types";



const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;
