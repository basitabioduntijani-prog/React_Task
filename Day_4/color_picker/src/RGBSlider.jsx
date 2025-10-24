import React from "react";

export default function RGBSlider({ label, value, onChange, color }) {
  return (
    <div className="slider-container">
      <label className="slider-label" style={{ color }}>{label}: {value}</label>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`slider slider-${color}`}
      />
    </div>
  );
}
