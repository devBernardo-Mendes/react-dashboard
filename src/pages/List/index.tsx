// -------------------------------------------------
// packages
// -------------------------------------------------
import React, { useState, useEffect, useMemo } from "react";

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
import { IData, IRouteParams } from "../types";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

const List: React.FC<IRouteParams> = ({ match }) => {
  //const [data, setData] = useState<IData>([]);

  // const listData = useMemo(() => {
  //   return type === "entry-balance" ? gains : expenses;
  // }, []);

  // useEffect(() => {
  //   console.log(listData);
  // }, []);

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
