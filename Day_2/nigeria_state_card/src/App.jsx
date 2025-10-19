// src/App.jsx
import React from 'react';
import StateCard from './StateCard';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        backgroundColor: '#f4f4f4',
      }}
    >
      <StateCard
        state="Lagos"
        capital="Ikeja"
        region="West"
        population="14 million"
      >
        🏙️ Famous Landmark: National Theatre, Iganmu
      </StateCard>

      <StateCard
        state="Kano"
        capital="Kano"
        region="North"
        population="13 million"
      >
        🕌 Famous Landmark: Emir's Palace
      </StateCard>

      <StateCard
        state="Anambra"
        capital="Awka"
        region="East"
        population="6 million"
      >
        🏞️ Famous Landmark: Ogbunike Caves
      </StateCard>

      <StateCard
        state="Rivers"
        capital="Port Harcourt"
        region="South"
        population="7 million"
      >
        🌉 Famous Landmark: Isaac Boro Park
      </StateCard>
    </div>
  );
}

export default App;
