import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  const buttonStyle = (activeColor, inactiveColor, isActive) => ({
    margin: "5px",
    padding: "8px 16px",
    background: isActive ? activeColor : inactiveColor,
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
  });

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <button
        onClick={() => setFilter("All")}
        style={buttonStyle("#1976d2", "#90caf9", filter === "All")}
      >
        All
      </button>
      <button
        onClick={() => setFilter("Passed")}
        style={buttonStyle("#2e7d32", "#81c784", filter === "Passed")}
      >
        Passed
      </button>
      <button
        onClick={() => setFilter("Failed")}
        style={buttonStyle("#c62828", "#ef9a9a", filter === "Failed")}
      >
        Failed
      </button>
    </div>
  );
};

export default FilterButtons;
