import React from "react";
import PageComponent from "../customPageComponents/PageComponent";

const CurrentExpense = () => {
  return (
    <PageComponent
      fetchApiUrl="api/currentexpense"
      headerName="Current Expenses"
    />
  );
};

export default CurrentExpense;
