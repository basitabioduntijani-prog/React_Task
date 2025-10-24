import React from "react";

export default function ColorDisplay({ rgb, hex, copyHex }) {
  return (
    <div className="color-display">
      <div className="color-preview" style={{ backgroundColor: rgb }}></div>

      <div className="color-values">
        <p><strong>RGB:</strong> {rgb}</p>
        <p><strong>HEX:</strong> {hex}</p>
      </div>

      <button className="copy-btn" onClick={copyHex}>
        Copy HEX
      </button>
    </div>
  );
}
