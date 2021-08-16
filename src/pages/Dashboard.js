import React from "react";
import Header from "../components/Header";
import "./Dashboard.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminDash from "./AdminDash";
import { Link } from "react-router-dom";

import ProductDash from "./ProductDash";

export default function Dashboard() {
  return (
    <Router>
      <>
        <div class="wrapper" id="wrapper">
          <Header />
          <div class="content__bar">
            <Link className="content__bar__cat" to="/admin">
              Admins
            </Link>
            <div class="content__bar__cat">categories</div>
            <div class="content__bar__cat">Fixed incomes</div>
            <div class="content__bar__cat">fixed expenses</div>
            <div class="content__bar__cat">recurring incomes</div>
            <div class="content__bar__cat">recurring expenses</div>
            <div class="content__bar__cat">Goals</div>
            <div class="content__bar__cat">Report</div>
          </div>
          <Switch>
            <Route exact path="/" component={ProductDash} />
            <Route path="/admin" component={AdminDash} />
          </Switch>
        </div>
      </>
    </Router>
  );
}
