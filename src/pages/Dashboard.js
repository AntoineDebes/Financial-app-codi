import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Dashboard.css";
import DashboardRoutes from "../components/DashboardRoutes";
import SideBar from "../components/SideBar";
import {useScreenWidth} from "../useContext/IsAuthContext";

export default function Dashboard() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isHamburgureOpen, setIsHamburgureOpen] = useState(false);
  const [test, setTest] = useState(false);
  const { width } = useScreenWidth();

  useEffect(() => {
    if (width < 1000) {
      setIsSideBarOpen(false);
      setIsHamburgureOpen(true);
    } else {
      setIsSideBarOpen(true);
      setIsHamburgureOpen(false);
    }
  }, [width]);

  return (
    <>
      <div className="wrapper" id="wrapper">
        <Header
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
          isHamburgureOpen={isHamburgureOpen}
          setTest={setTest}
          test={test}
        />
        <div className="wrapper__content__container">
          <SideBar isSideBarOpen={isSideBarOpen} />
          <DashboardRoutes />
        </div>
      </div>
    </>
  );
}
