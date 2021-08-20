import React from "react";
import LoginPage from "./Admin/LoginPage";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
    <div className="App">
    
      <Route exact path="/login"  component={LoginPage} />
      <Route exact path="/dashboard"  component={Dashboard}/>

    </div>
  </BrowserRouter>
  );
}

export default App;
