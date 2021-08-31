import React from "react";
import PageComponent from "../customPageComponents/PageComponent";

const CurrentIncome = () => {
  return (
    <PageComponent
      fetchApiUrl="api/currentincome"
      headerName="Current Incomes"
    />
  );
};

export default CurrentIncome;
