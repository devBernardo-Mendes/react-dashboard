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

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="DashBoard" lineColor="#F7931B">
        <SelectInput option={[]} onChange={() => {}} />
        <SelectInput option={[]} onChange={() => {}} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
