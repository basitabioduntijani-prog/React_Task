// src/App.jsx
import React from "react";
import Profile from "./profile";

function App() {
  return (
    <div>
      <h1>My Profile Cards</h1>

      <Profile
        image="https://via.placeholder.com/100"
        name="Basit Abiodun Tijani"
        role="Student Developer"
        description="Learning React to build amazing web apps in Nigeria."
      />

      <Profile
        image="https://via.placeholder.com/100"
        name="Amaka Johnson"
        role="Frontend Developer"
        description="Building cool interfaces and improving my React skills daily."
      />
    </div>
  );
}

export default App;
