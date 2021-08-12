import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductHeader from "../components/ProductHeader";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div class="wrapper" id="wrapper">
        <Header />
        <div class="content__bar">
          <div class="content__bar__cat">asdasda</div>
          <div class="content__bar__cat">asdasda</div>
          <div class="content__bar__cat">asdasda</div>
          <div class="content__bar__cat">asdasda</div>
          <div class="content__bar__cat">asdasda</div>
          <div class="content__bar__cat">asdasda</div>
          <div class="content__bar__cat">asdasda</div>
          <div class="content__bar__cat">asdasda</div>
        </div>
        <div class="content__container">
          <ProductHeader />
          <ProductCard />
        </div>
      </div>
    </>
  );
}
