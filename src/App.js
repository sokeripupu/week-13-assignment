import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";
import Navbar from "./components/navigation/Navbar";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Navbar />

      <Login />
    </div>
  );
}

export default App;
