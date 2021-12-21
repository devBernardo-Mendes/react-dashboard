// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";

// -------------------------------------------------
// styles
// -------------------------------------------------
import { Container, Content } from "./styles";
// -------------------------------------------------
// components
// -------------------------------------------------
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

// -------------------------------------------------
// utils
// -------------------------------------------------
import { options } from "../../utils/utils";

const List: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput option={options} />
      </ContentHeader>
      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/08/2021"
          amount="R$ 320,98"
        />
      </Content>
    </Container>
  );
};
export default List;
