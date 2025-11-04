import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  // Default target: Nigeria Independence Day (October 1, 2025)
  const [targetDate, setTargetDate] = useState("2025-10-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference <= 0) {
        setEventStarted(true);
        setTimeLeft({});
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft(); // Initial call
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer); // Cleanup
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <h2>🎉 Countdown Timer</h2>
      <p className="subtitle">Countdown to your special event</p>

      <div className="date-input">
        <label>Set Target Date: </label>
        <input
          type="datetime-local"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
        />
      </div>

      {!eventStarted ? (
        <div className="timer-display">
          <h1>
            {timeLeft.days ?? "00"} <span>Days</span> :{" "}
            {timeLeft.hours ?? "00"} <span>Hours</span> :{" "}
            {timeLeft.minutes ?? "00"} <span>Minutes</span> :{" "}
            {timeLeft.seconds ?? "00"} <span>Seconds</span>
          </h1>
          <p className="target-date">
            {new Date(targetDate).toLocaleString("en-US", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </p>
        </div>
      ) : (
        <h1 className="event-started">🎊 Event Started!</h1>
      )}
    </div>
  );
};

export default CountdownTimer;
