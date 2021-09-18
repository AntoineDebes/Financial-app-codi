import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "./normalize.css";
import Routes from "./components/Routes";
import { IsAuthProvider } from "./useContext/IsAuthContext";
import SideBar from "./components/SideBar";
import AdminDash from "./pages/AdminDash";
import FixedIncome from "./pages/FixedIncome";
import Dashboard from "./pages/Dashboard";
import PostData from "./pages/PostData";
import DropDownButton from "./components/DropDownButton";

function App() {
  return (
    // <IsAuthProvider>
    //   <BrowserRouter>
    //     <div className="App">
    //       <Routes />
    //     </div>
    //   </BrowserRouter>
    // </IsAuthProvider>
    <PostData />
  );
}

export default App;
