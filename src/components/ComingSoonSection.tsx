import React from "react";

const PLANNED_ITEMS: string[] = [
  "Timetable",
  "Notifications",
  "Placements",
  "Clubs",
  "Mobile app",
];

export default function ComingSoonSection() {
  return (
    <section className="landing-section" aria-labelledby="coming-soon-heading">
      <div className="roles-container">
        <header className="roles-header">
          <h2 id="coming-soon-heading" className="roles-heading">
            <span>COMING SOON</span>
          </h2>
          <p className="roles-note">Planned, not yet available</p>
        </header>

        <ol className="timeline-list">
          {PLANNED_ITEMS.map((item, idx) => (
            <li key={item} className="timeline-item">
              <span className="timeline-index">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="timeline-name">{item}</span>
              <span className="timeline-status">Planned, not yet available</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
