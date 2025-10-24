import React from "react";

export default function FahrenheitInput({ fahrenheit, onFahrenheitChange }) {
  return (
    <div className="input-field">
      <label>Fahrenheit (°F)</label>
      <input
        type="number"
        value={fahrenheit}
        onChange={(e) => onFahrenheitChange(e.target.value)}
        placeholder="Enter Fahrenheit"
      />
    </div>
  );
}
