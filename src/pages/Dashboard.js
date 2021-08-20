import React from "react";
import Header from "../components/Header";
import "./Dashboard.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../components/Routes";
import SideBar from "../components/SideBar";

export default function Dashboard() {
  return (
    <Router>
      <>
        <div className="wrapper" id="wrapper">
          <Header />
          <SideBar />
          <Routes />
        </div>
      </>
    </Router>
  );
}
