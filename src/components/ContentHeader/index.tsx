// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";

// -------------------------------------------------
// components
// -------------------------------------------------

// -------------------------------------------------
// style
// -------------------------------------------------
import { Container, TitleContainer, Controllers } from "./styles";

// -------------------------------------------------
// utils
// -------------------------------------------------

// -------------------------------------------------
// types
// -------------------------------------------------
import { IContentHeaderProps } from "./types";

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
