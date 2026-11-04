import React from "react";
import {
  Megaphone,
  Calendar,
  Search,
  ClipboardList,
  BookOpenCheck,
} from "lucide-react";

interface ModuleItem {
  title: string;
  description: string;
  Icon: React.ComponentType<{ strokeWidth?: number; className?: string }>;
}

const MODULES: ModuleItem[] = [
  {
    title: "Announcements",
    description: "Official updates in one feed.",
    Icon: Megaphone,
  },
  {
    title: "Events",
    description: "Discover and RSVP.",
    Icon: Calendar,
  },
  {
    title: "CampusFind",
    description: "Report and find lost items.",
    Icon: Search,
  },
  {
    title: "Service Requests",
    description: "Submit and track requests.",
    Icon: ClipboardList,
  },
  {
    title: "Campus Intelligence",
    description: "Answers cited from approved college documents.",
    Icon: BookOpenCheck,
  },
];

export default function ModulesSection() {
  return (
    <section className="landing-section" aria-labelledby="modules-heading">
      <div className="roles-container">
        <header className="section-header">
          <h2 id="modules-heading" className="roles-heading">
            <span>MODULES</span>
          </h2>
        </header>

        <div className="modules-grid">
          {MODULES.map((mod) => {
            const IconComponent = mod.Icon;
            return (
              <article key={mod.title} className="module-card">
                <div className="module-icon" aria-hidden="true">
                  <IconComponent strokeWidth={1.75} />
                </div>
                <h3 className="module-title">{mod.title}</h3>
                <p className="module-description">{mod.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
