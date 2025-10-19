import React from "react";
import GreetingCard from "./GreetingCard.jsx";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🎉 Greeting Cards 🎉</h1>

      <GreetingCard
        name="Tunde"
        message="Have a great day!"
        color="green"
      />

      <GreetingCard
        name="Aisha"
        message="Wishing you success in your exams!"
        color="purple"
      />

      <GreetingCard
        name="Basit"
        message="Keep shining and stay awesome!"
        color="orange"
      />
    </div>
  );
};

export default App;
