import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Dashboard.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../components/Routes";
import SideBar from "../components/SideBar";
import useWindowSize from "../customHooks/useWindowSize";

export default function Dashboard() {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const [isHamburgureOpen, setISHamburgureOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 1000) {
      setSideBarOpen(false);
      setISHamburgureOpen(true);
    } else {
      setSideBarOpen(true);
      setISHamburgureOpen(false);
    }
  }, [width]);

  return (
    <Router>
      <>
        <div className="wrapper" id="wrapper">
          <Header
            isSideBarOpen={isSideBarOpen}
            setSideBarOpen={setSideBarOpen}
            isHamburgureOpen={isHamburgureOpen}
          />
          <div className="wrapper__content__container">
            <SideBar isSideBarOpen={isSideBarOpen} />
            <Routes />
          </div>
        </div>
      </>
    </Router>
  );
}
