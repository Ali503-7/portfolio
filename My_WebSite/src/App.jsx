import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home_Section/Home";
import Email from "./components/My_email/email";
import "./css/App.scss";

function App() {
  return (
    <div className="BG">
      <Header />
      <Home />
      <Email />
    </div>
  );
}

export default App;
