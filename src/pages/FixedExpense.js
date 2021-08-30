import React from "react";
import PageComponent from "../customPageComponents/PageComponent";

const FixedExpense = () => {
  return (
    <PageComponent fetchApiUrl="api/fixedexpense" headerName="Fixed Expenses" />
  );
};



export default FixedExpense;
