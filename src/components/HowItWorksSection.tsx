import React from "react";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Sign in with your role",
    description: "Students, faculty and admins each get a view built for them.",
  },
  {
    number: "02",
    title: "See what matters",
    description: "Announcements, events and requests, filtered to you.",
  },
  {
    number: "03",
    title: "Ask and verify",
    description:
      "Ask the assistant a question and check the official source behind every answer.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="landing-section" aria-labelledby="how-it-works-heading">
      <div className="roles-container">
        <header className="section-header">
          <h2 id="how-it-works-heading" className="roles-heading">
            <span>HOW IT WORKS</span>
          </h2>
        </header>

        <div className="steps-list">
          {STEPS.map((step) => (
            <div key={step.number} className="steps-row">
              <div className="step-meta">
                <span className="step-number">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
              </div>
              <p className="role-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
