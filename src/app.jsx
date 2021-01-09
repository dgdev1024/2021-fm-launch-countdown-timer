/**
 * @file app.jsx
 * @brief The application's top-level component.
 */

// Imports
import React from "react";
import { useLocalStorage } from "./hooks/use-local-storage";
import Timer from "./components/timer";
import Footer from "./components/footer";
import "./app.scss";

// Component
const App = () => {
  const [targetDate] = useLocalStorage(
    "-fm-lct-target-date",
    new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toString()
  );

  return (
    <main className="main">
      <div className="main__container">
        <h1 className="main__heading">We're Launching Soon</h1>
        <Timer
          timeUntil={
            isNaN(Date.parse(targetDate)) === false
              ? new Date(targetDate)
              : new Date(`12-25-${new Date().getFullYear()} 12:00 AM`)
          }
        />
        <Footer />
      </div>
    </main>
  );
};

// Exports
export default App;
