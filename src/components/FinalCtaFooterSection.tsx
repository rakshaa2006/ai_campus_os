"use client";

import React, { useEffect, useState } from "react";

export default function FinalCtaFooterSection() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setYear(new Date().getFullYear());
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <footer className="landing-footer-wrapper">
      <section className="cta-section" aria-labelledby="final-cta-heading">
        <div className="roles-container cta-container">
          <div className="cta-block">
            <h2 id="final-cta-heading" className="roles-heading">
              <span>STAY IN THE LOOP</span>
              <span className="muted">ON CAMPUS</span>
            </h2>
            <div className="cta-action">
              <a href="/login" className="signin-link">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="site-footer">
        <div className="roles-container footer-container">
          <div className="footer-brand">AI Campus OS</div>
          <div className="footer-meta">
            <a
              href="https://github.com/rakshaa2006"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <span className="footer-sep" aria-hidden="true">
              ·
            </span>
            <span className="footer-copy">
              © {year} AI Campus OS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
