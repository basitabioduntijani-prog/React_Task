import React, { useState } from "react";
import RGBSlider from "./RGBSlider";
import ColorDisplay from "./ColorDisplay";
import "./App.css";

export default function ColorPicker() {
  const [rgb, setRgb] = useState({ r: 255, g: 100, b: 50 });

  // Handle slider changes
  const handleChange = (color, value) => {
    setRgb((prev) => ({ ...prev, [color]: parseInt(value) }));
  };

  // Generate color strings
  const { r, g, b } = rgb;
  const rgbString = `rgb(${r}, ${g}, ${b})`;
  const hexString = `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;

  // Copy hex code to clipboard
  const copyHex = () => {
    navigator.clipboard.writeText(hexString);
    alert(`Copied ${hexString} to clipboard!`);
  };

  return (
    <div className="color-app">
      <div className="color-card">
        <h1 className="title">🎨 Color Picker</h1>

        <div className="sliders">
          <RGBSlider label="Red" value={r} onChange={(val) => handleChange("r", val)} color="red" />
          <RGBSlider label="Green" value={g} onChange={(val) => handleChange("g", val)} color="green" />
          <RGBSlider label="Blue" value={b} onChange={(val) => handleChange("b", val)} color="blue" />
        </div>

        <ColorDisplay rgb={rgbString} hex={hexString} copyHex={copyHex} />
      </div>
    </div>
  );
}
