/**
 * @file components/timer-display/index.jsx
 * @brief Displays a timer display on screen.
 */

// Imports
import React, { useEffect, useRef } from "react";
import "./index.scss";

// Index of maximum values of time metrics.
const MaxTime = {
  Seconds: 60,
  Minutes: 60,
  Hours: 24,
};

/**
 * @component TimerDisplay
 * @brief Displays a unit of time on screen.
 * @property timeMetric The unit of time to show (seconds, minutes, etc.)
 * @property timeValue The number of that unit remaining.
 */
const TimerDisplay = ({ timeMetric, timeValue }) => {
  const beforeCard = useRef(null);
  const afterCard = useRef(null);

  useEffect(() => {
    const { classList: beforeList } = beforeCard.current;
    const { classList: afterList } = afterCard.current;

    const onBeforeCardHidden = () => {
      beforeList.remove("timer-display__card--before-animate");
      beforeList.add("timer-display__card--before-faded");
      afterList.remove("timer-display__card--after-faded");
      afterList.add("timer-display__card--after-animate");
    };

    afterList.remove("timer-display__card--after-animate");
    afterList.add("timer-display__card--after-faded");
    beforeList.remove("timer-display__card--before-faded");
    beforeList.add("timer-display__card--before-animate");

    beforeCard.current.addEventListener("animationend", onBeforeCardHidden);

    return () => {
      beforeCard.current.removeEventListener(
        "animationend",
        onBeforeCardHidden
      );
    };
  }, [timeValue]);

  const prependZero = (value) => {
    if (value < 10) return `0${value}`;
    return value;
  };

  return (
    <div className="timer-display">
      <div
        ref={beforeCard}
        className="timer-display__card timer-display__card--before"
      >
        <div className="timer-display__card-crease"></div>
        <p className="timer-display__card-text">
          {prependZero(
            MaxTime[timeMetric]
              ? (timeValue + 1) % MaxTime[timeMetric]
              : timeValue + 1
          )}
        </p>
      </div>
      <div
        ref={afterCard}
        className="timer-display__card timer-display__card--after timer-display__card--after-faded"
      >
        <div className="timer-display__card-crease"></div>
        <p className="timer-display__card-text">{prependZero(timeValue)}</p>
      </div>
      <p className="timer-display__metric">{timeMetric}</p>
    </div>
  );
};

// Exports
export default TimerDisplay;
