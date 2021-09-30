import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "./normalize.css";
import Routes from "./components/Routes";
import { IsAuthProvider } from "./useContext/IsAuthContext";
import { UserCredentialProvider } from "./useContext/UserCredentialContext";
import PostData from "./pages/PostData";
import AddCategory from "./pages/AddCategory";

function App() {
  return (
    // <IsAuthProvider>
    //   <UserCredentialProvider>
    //     <BrowserRouter>
    //       <div className="App">
    //         <Routes />
    //       </div>
    //     </BrowserRouter>
    //   </UserCredentialProvider>
    // </IsAuthProvider>
    <AddCategory />
  );
}

export default App;
