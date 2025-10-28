import React from "react";

const StatesList = ({ states }) => {
  if (states.length === 0) {
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#999",
          marginTop: "20px",
        }}
      >
        ❌ No results found
      </p>
    );
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {states.map((state, index) => (
        <li
          key={index}
          style={{
            background: "#f5f9ff",
            margin: "8px 0",
            padding: "12px 15px",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <strong>{state.name}</strong> - Capital: {state.capital}
          </div>
          <span style={{ color: "#1976d2", fontSize: "14px" }}>
            ({state.region})
          </span>
        </li>
      ))}
    </ul>
  );
};

export default StatesList;
