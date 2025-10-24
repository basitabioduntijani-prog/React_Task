import React from "react";

export default function ScoreBoard({ score, total }) {
  return (
    <div className="score-board">
      <p>
        Score: <strong>{score}</strong> / {total}
      </p>
    </div>
  );
}
