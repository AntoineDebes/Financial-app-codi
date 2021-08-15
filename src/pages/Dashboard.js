import React from "react";
import Header from "../components/Header";
import "./Dashboard.css";

import ProductDash from "./ProductDash";

export default function Dashboard() {
  return (
    <>
      <div class="wrapper" id="wrapper">
        <Header />
        <div class="content__bar">
          <div class="content__bar__cat">Admins</div>
          <div class="content__bar__cat">categories</div>
          <div class="content__bar__cat">Fixed incomes</div>
          <div class="content__bar__cat">fixed expenses</div>
          <div class="content__bar__cat">recurring incomes</div>
          <div class="content__bar__cat">recurring expenses</div>
          <div class="content__bar__cat">Goals</div>
          <div class="content__bar__cat">Report</div>
        </div>
        <ProductDash />
      </div>
    </>
  );
}
