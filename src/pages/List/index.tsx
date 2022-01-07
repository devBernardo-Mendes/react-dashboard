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
import { IRouteParams } from "../types";

const List: React.FC<IRouteParams> = ({ match }) => {
  const { type, lineColor } = match.params;

  return (
    <Container>
      <ContentHeader title={type} lineColor={lineColor}>
        <SelectInput option={months} />
        <SelectInput option={years} />
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent  ">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
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
