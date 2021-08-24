import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import "./normalize.css";
import Routes from "./components/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
