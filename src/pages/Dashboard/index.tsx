// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// -------------------------------------------------
// style
// -------------------------------------------------
import { Container } from "./styles";

// -------------------------------------------------
// style
// -------------------------------------------------
import { months, years } from "../../utils/shared/optionsDrodown/utils";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="DashBoard" lineColor="#F7931B">
        <SelectInput option={months} />
        <SelectInput option={years} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
