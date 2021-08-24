import React, { useState } from "react";
import LoginPage from "./Admin/LoginPage";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import "./normalize.css";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          exact
          path="/"
          // component={LoginPage}
          // setIsAuth={setIsAuth}
          component={(routeProps) => (
            <LoginPage {...routeProps} setIsAuth={setIsAuth} />
          )}
        />
        <ProtectedRoute
          path="/dashboard"
          component={Dashboard}
          isAuth={isAuth}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
