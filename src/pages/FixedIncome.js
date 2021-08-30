import React from "react";
import PageComponent from "../customPageComponents/PageComponent";

const FixedIncome = () => {
  return (
    <PageComponent
      fetchApiUrl="api/auth/fixedincome"
      headerName="Fixed Incomes"
    />
  );
};

export default FixedIncome;
