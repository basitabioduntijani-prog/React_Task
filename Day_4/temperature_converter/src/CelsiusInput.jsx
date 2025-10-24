import React from "react";

export default function CelsiusInput({ celsius, onCelsiusChange }) {
  return (
    <div className="input-field">
      <label>Celsius (°C)</label>
      <input
        type="number"
        value={celsius}
        onChange={(e) => onCelsiusChange(e.target.value)}
        placeholder="Enter Celsius"
      />
    </div>
  );
}
