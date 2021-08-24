import React from "react";
import LoginPage from "./Admin/LoginPage";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import "./normalize.css";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import { IsAuthProvider } from "./useContext/IsAuthContext";

function App() {
  return (
    <IsAuthProvider>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={LoginPage} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    </IsAuthProvider>
  );
}

export default App;
