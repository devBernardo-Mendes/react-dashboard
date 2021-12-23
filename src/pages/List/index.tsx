// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";

// -------------------------------------------------
// styles
// -------------------------------------------------
import { Container, Content, Filters } from "./styles";
// -------------------------------------------------
// components
// -------------------------------------------------
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

// -------------------------------------------------
// utils
// -------------------------------------------------
import { months, years } from "../../utils/mock";

const List: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput option={months} />
        <SelectInput option={years} />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-fliter">
          Recorrentes
        </button>
        <button type="button" className="tag-fliter">
          Eventuais
        </button>
      </Filters>
      <Content>
        <HistoryFinanceCard
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
