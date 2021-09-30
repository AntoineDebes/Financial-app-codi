import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "./normalize.css";
import Routes from "./components/Routes";
import { IsAuthProvider } from "./useContext/IsAuthContext";
import { UserCredentialProvider } from "./useContext/UserCredentialContext";
import AddCategory from "./pages/AddCategory";
import PostData from "./pages/PostData";

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
    // <AddCategory />
    <PostData />
  );
}

export default App;
