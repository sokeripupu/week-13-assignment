import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";
import Navbar from "./components/navigation/Navbar";

function App() {


  return (
    <div className="App">
      <Navbar />

      <Login />
    </div>
  );
}

export default App;
