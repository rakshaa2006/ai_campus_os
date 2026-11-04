import React from "react";

const SECURITY_POINTS: string[] = [
  "Permissions enforced in the database, not only in the interface",
  "No secret keys in the browser",
  "The assistant answers only from approved documents",
  "Sensitive features such as biometrics are not part of the first version and would require explicit consent",
];

export default function SecurityPrivacySection() {
  return (
    <section
      className="landing-section"
      aria-labelledby="security-privacy-heading"
    >
      <div className="roles-container">
        <header className="section-header">
          <h2 id="security-privacy-heading" className="roles-heading">
            <span>SECURITY</span>
            <span className="muted">AND PRIVACY</span>
          </h2>
        </header>

        <ul className="security-list">
          {SECURITY_POINTS.map((point, idx) => (
            <li key={point} className="security-row">
              <span className="security-index">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="role-description">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
