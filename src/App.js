import React from "react";
import LoginPage from "./Admin/LoginPage";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
