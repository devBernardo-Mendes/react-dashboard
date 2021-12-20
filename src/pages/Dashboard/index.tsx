// -------------------------------------------------
// packages
// -------------------------------------------------
import React from "react";

// -------------------------------------------------
// style
// -------------------------------------------------
import { Container } from "./styles";

// -------------------------------------------------
// components
// -------------------------------------------------
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

// -------------------------------------------------
// components
// -------------------------------------------------
import { options } from "../../components/utils";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <SelectInput option={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
