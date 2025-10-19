// src/components/StateCard.jsx
import React from 'react';

const regionColors = {
  North: '#8B4513',
  South: '#008751',
  East: '#FFD700',
  West: '#4169E1',
};

const StateCard = ({ state, capital, region, population, children }) => {
  const bgColor = regionColors[region] || '#ccc';

  const cardStyle = {
    backgroundColor: bgColor,
    color: '#fff',
    borderRadius: '12px',
    padding: '20px',
    width: '250px',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={cardStyle}>
      <h2>{state}</h2>
      <p><strong>Capital:</strong> {capital}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Population:</strong> {population}</p>
      {children && (
        <div style={{ marginTop: '10px', fontStyle: 'italic' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default StateCard;
