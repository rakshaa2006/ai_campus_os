import React from "react";
import { FileText } from "lucide-react";

export default function CampusIntelligenceExampleSection() {
  return (
    <section
      className="landing-section"
      aria-labelledby="campus-intelligence-example-heading"
    >
      <div className="roles-container">
        <header className="section-header">
          <h2 id="campus-intelligence-example-heading" className="roles-heading">
            <span>CAMPUS INTELLIGENCE</span>
            <span className="muted">IN ACTION</span>
          </h2>
        </header>

        <div className="example-grid">
          {/* Primary Example Card */}
          <div className="chat-card">
            <div className="chat-card-header">
              <span className="chat-card-title">Campus Intelligence</span>
              <span className="example-badge">Example</span>
            </div>

            <div className="chat-thread">
              <div className="chat-message chat-question">
                <div className="chat-sender">Student</div>
                <p className="chat-bubble">
                  What is the minimum attendance required to sit the semester
                  exam?
                </p>
              </div>

              <div className="chat-message chat-answer">
                <div className="chat-sender">Assistant</div>
                <p className="chat-bubble">
                  According to the approved college academic regulations,
                  students must maintain a minimum of 85% attendance in each
                  course to be eligible to sit the semester examination.
                </p>
                <div className="citation-chip">
                  <FileText strokeWidth={1.75} className="citation-icon" />
                  <span>Source: Academic Regulations, Section 5.2 (sample)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Small Example Card (Unverified / Missing Topic) */}
          <div className="chat-card chat-card-compact">
            <div className="chat-card-header">
              <span className="chat-card-title">When a topic is not in the documents</span>
              <span className="example-badge">Example</span>
            </div>

            <div className="chat-thread">
              <div className="chat-message chat-question">
                <div className="chat-sender">Student</div>
                <p className="chat-bubble">
                  What are the cafeteria menu timings during the summer break?
                </p>
              </div>

              <div className="chat-message chat-answer">
                <div className="chat-sender">Assistant</div>
                <p className="chat-bubble">
                  I could not find this in the approved documents.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="example-disclaimer">
          Sample content for illustration. Answers in the live product come only
          from documents your college approves.
        </p>
      </div>
    </section>
  );
}
