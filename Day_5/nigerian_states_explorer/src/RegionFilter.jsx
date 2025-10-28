import React from "react";

const RegionFilter = ({ region, setRegion }) => {
  const regions = ["All", "North", "South", "East", "West"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        marginBottom: "10px",
        flexWrap: "wrap",
      }}
    >
      {regions.map((r) => (
        <button
          key={r}
          onClick={() => setRegion(r)}
          style={{
            padding: "8px 15px",
            borderRadius: "8px",
            border: "none",
            background:
              region === r ? "#1976d2" : "rgba(25, 118, 210, 0.15)",
            color: region === r ? "#fff" : "#1976d2",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          {r}
        </button>
      ))}
    </div>
  );
};

export default RegionFilter;
