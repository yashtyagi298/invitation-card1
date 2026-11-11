import { useEffect, useState } from "react";
import { event } from "../data/event";

const calc = () => {
  const diff = Math.max(0, new Date(event.date).getTime() - Date.now());
  return {
    Days: Math.floor(diff / 86400000),
    Hours: Math.floor((diff / 3600000) % 24),
    Minutes: Math.floor((diff / 60000) % 60),
    Seconds: Math.floor((diff / 1000) % 60),
  };
};

export default function Countdown() {
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div role="timer" aria-label="Time left until the wedding">
      <div className="countdown-grid">
      {Object.entries(t).map(([label, value]) => (
        <div key={label} className="countdown-cell">
          <div className="countdown-value">{String(value).padStart(2, "0")}</div>
          <div className="countdown-label">{label}</div>
        </div>
      ))}
      </div>
    </div>
  );
}
