import { useState } from "react";
import "./styles/VisitCount.css";

const VisitCount = () => {
  const [unavailable, setUnavailable] = useState(false);
  return (
    <div className="visit-count" title="Page views include a manually set starting offset of 1,680; not unique visitors.">
      {unavailable ? <span>Visit count unavailable</span> : (
        <img
          src="https://hits.sh/renaldportfolio.vercel.app.svg?label=Total%20views&extraCount=1680&color=c2a4ff&labelColor=17111f&style=flat-square"
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
