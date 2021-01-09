/**
 * @file components/timer/index.jsx
 * @brief Displays the countdown timer on screen.
 */

// Imports
import React, { useState, useEffect } from "react";
import TimerDisplay from "../timer-display";
import "./index.scss";

/**
 * @component Timer
 * @brief Displays a countdown timer on the page.
 * @property timeUntil A 'Date' to which the component is counting down.
 */
const Timer = ({ timeUntil }) => {
  const [rawDate, setRawDate] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timeout = setTimeout(() => setRawDate(new Date()), 1000);

    const difference = Math.floor((timeUntil - rawDate) / 1000);
    if (difference <= 0) {
      return;
    }

    const minutes = Math.floor(difference / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    setTimeLeft({
      seconds: difference % 60,
      minutes: minutes % 60,
      hours: hours % 24,
      days,
    });

    return () => clearTimeout(timeout);
  }, [rawDate]);

  return (
    <div className="timer">
      <TimerDisplay timeMetric="Days" timeValue={timeLeft.days} />
      <TimerDisplay timeMetric="Hours" timeValue={timeLeft.hours} />
      <TimerDisplay timeMetric="Minutes" timeValue={timeLeft.minutes} />
      <TimerDisplay timeMetric="Seconds" timeValue={timeLeft.seconds} />
    </div>
  );
};

// Exports
export default Timer;
