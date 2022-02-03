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
// types
//
import { IData, IRouteParams } from "./types";

// -------------------------------------------------
// utils
// -------------------------------------------------
import { months, years } from "../../utils/shared/optionsDrodown/utils";
import gains from "../../utils/repositories/gains";
import expenses from "../../utils/repositories/expenses";
import formatCurreny from "../../utils/shared/formatMoney/formatedCurrency";
import formatDate from "../../utils/shared/formatDate/date";

const List: React.FC<IRouteParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear() + 1)
  );

  const { type } = match.params;

  const title = useMemo(() => {
    return type === "entry-balance" ? "Entradas" : "Saídas";
  }, [type]);

  const lineColor = useMemo(() => {
    return type === "entry-balance" ? "#F7931B" : "#E44C4E";
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  useEffect(() => {
    const filteredData = listData.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth());
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const formattedData = filteredData.map((item) => {
      return {
        id: String(new Date().getTime()) + item.amount,
        description: item.description,
        amountFormatted: formatCurreny(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });

    setData(formattedData);
  }, [data.length, listData, monthSelected, yearSelected]);

  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput
          option={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          option={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
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
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};
export default List;
