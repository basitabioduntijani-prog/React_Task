import React, { useState } from "react";
import CelsiusInput from "./CelsiusInput";
import FahrenheitInput from "./FahrenheitInput";
import "./App.css";

export default function TemperatureApp() {
  const [temperature, setTemperature] = useState({ scale: "c", value: "" });

  // Conversion formulas
  const toCelsius = (f) => ((f - 32) * 5) / 9;
  const toFahrenheit = (c) => (c * 9) / 5 + 32;

  const tryConvert = (value, convertFn) => {
    const num = parseFloat(value);
    if (Number.isNaN(num)) return "";
    const output = convertFn(num);
    return Math.round(output * 100) / 100;
  };

  const handleCelsiusChange = (value) => {
    setTemperature({ scale: "c", value });
  };

  const handleFahrenheitChange = (value) => {
    setTemperature({ scale: "f", value });
  };

  const { scale, value } = temperature;
  const celsius = scale === "f" ? tryConvert(value, toCelsius) : value;
  const fahrenheit = scale === "c" ? tryConvert(value, toFahrenheit) : value;

  return (
    <div className="app-container">
      <div className="converter-box">
        <h1 className="title">🌡️ Temperature Converter</h1>
        <p className="subtitle">
          Convert between Celsius and Fahrenheit instantly.
        </p>

        <div className="inputs">
          <CelsiusInput celsius={celsius} onCelsiusChange={handleCelsiusChange} />
          <FahrenheitInput
            fahrenheit={fahrenheit}
            onFahrenheitChange={handleFahrenheitChange}
          />
        </div>

        <div className="result">
          {celsius !== "" && fahrenheit !== "" ? (
            <p>
              {celsius}°C = {fahrenheit}°F
            </p>
          ) : (
            <p className="hint">Enter a temperature to see the conversion</p>
          )}
        </div>
      </div>
    </div>
  );
}
