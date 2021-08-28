import React from "react";
import PageComponent from "../customPageComponents/PageComponent";

const FixedIncome = () => {
  return (
    <PageComponent fetchApiUrl="api/fixedincome" headerName="Fixed Incomes" />
  );
};

export default FixedIncome;
