import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  // Start or stop timer
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Format time to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const secs = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setSeconds(0);
    setIsRunning(false);
    setLaps([]);
  };

  const handleLap = () => {
    if (isRunning) setLaps((prev) => [...prev, formatTime(seconds)]);
  };

  return (
    <div className="stopwatch">
      <h1>⏱️ Stopwatch</h1>
      <div className="time-display">{formatTime(seconds)}</div>

      <div className="buttons">
        {!isRunning ? (
          <button className="start" onClick={() => setIsRunning(true)}>
            Start
          </button>
        ) : (
          <button className="pause" onClick={() => setIsRunning(false)}>
            Pause
          </button>
        )}
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
        <button className="lap" onClick={handleLap} disabled={!isRunning}>
          Lap
        </button>
      </div>

      {laps.length > 0 && (
        <div className="laps">
          <h3>Lap Times</h3>
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>
                Lap {index + 1}: {lap}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Stopwatch;
