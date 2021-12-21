// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";

// -------------------------------------------------
// style
// -------------------------------------------------
import { Container, Tag } from "./styles";

// -------------------------------------------------
// types
// -------------------------------------------------
import { IHistoryFinanceCardProps } from "../types";

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Container color={cardColor}>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  );
};

export default HistoryFinanceCard;
