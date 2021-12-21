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
import { options } from "../../utils/utils";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="DashBoard" lineColor="#F7931B">
        <SelectInput option={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
