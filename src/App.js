import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "./normalize.css";
import Routes from "./components/Routes";
import { IsAuthProvider } from "./useContext/IsAuthContext";

function App() {
  return (
    <IsAuthProvider>
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    </IsAuthProvider>
  );
}

export default App;
