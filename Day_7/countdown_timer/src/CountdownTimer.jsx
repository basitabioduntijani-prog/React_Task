import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  // Default target date (Nigeria Independence Day)
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

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-wrapper">
      <div className="countdown-box">
        <h1 className="main-title">🎉 Countdown Timer</h1>
        <p className="subtitle">Countdown to your special event</p>

        <div className="input-row">
          <label>Set Target Date: </label>
          <input
            type="datetime-local"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
          />
        </div>

        {!eventStarted ? (
          <div className="time-display">
            <div className="time-unit">
              <h2>{timeLeft.days ?? "00"}</h2>
              <span>Days</span>
            </div>
            <div className="separator">:</div>
            <div className="time-unit">
              <h2>{timeLeft.hours ?? "00"}</h2>
              <span>Hours</span>
            </div>
            <div className="separator">:</div>
            <div className="time-unit">
              <h2>{timeLeft.minutes ?? "00"}</h2>
              <span>Minutes</span>
            </div>
            <div className="separator">:</div>
            <div className="time-unit">
              <h2>{timeLeft.seconds ?? "00"}</h2>
              <span>Seconds</span>
            </div>
          </div>
        ) : (
          <h2 className="event-started">🎊 Event Started!</h2>
        )}

        <p className="target-date">
          {new Date(targetDate).toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          })}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
