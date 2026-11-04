import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="landing-section" aria-labelledby="about-heading">
      <div className="roles-container">
        <div className="about-block">
          <div className="about-left">
            <p className="role-label">ABOUT</p>
            <h2 id="about-heading" className="roles-heading about-heading">
              <span>A STUDENT-BUILT</span>
              <span className="muted">PROJECT</span>
            </h2>
          </div>

          <div className="about-right">
            <p className="role-description">
              AI Campus OS is built by Raksha, a Computer Science (AI and ML)
              student at AJIET, Mangaluru.
            </p>
            <div className="about-links">
              <a
                href="https://github.com/rakshaa2006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                <span>github.com/rakshaa2006</span>
                <ArrowUpRight strokeWidth={1.75} className="link-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
