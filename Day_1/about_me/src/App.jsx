// src/App.jsx
import React from "react";
import Header from "./Header";
import Skills from "./Skills";
import Location from "./Location";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Skills />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
