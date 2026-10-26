import { useEffect, useState } from "react";
import "./styles/VisitCount.css";

const VisitCount = () => {
  const [unavailable, setUnavailable] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (!unavailable || attempt >= 3) return;
    const timer = setTimeout(() => {
      setAttempt((current) => current + 1);
      setUnavailable(false);
    }, 5000 * (attempt + 1));
    return () => clearTimeout(timer);
  }, [unavailable, attempt]);
  return (
    <div className="visit-count" title="Page views include a manually set starting offset of 1,680; not unique visitors.">
      {unavailable ? <button type="button" className="visit-count-retry" onClick={() => { setAttempt(0); setUnavailable(false); }} aria-label="Retry loading total views">Views · Retry ↻</button> : (
        <img
          key={attempt}
          src={`/api/views?attempt=${attempt}`}
          alt="Total portfolio views, including a manually set starting offset of 1,680"
          height={24}
          referrerPolicy="no-referrer"
          onError={() => setUnavailable(true)}
        />
      )}
    </div>
  );
};

export default VisitCount;
