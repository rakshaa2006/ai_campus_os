"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  LayoutGrid,
  Search,
  CheckCircle2,
  FileText,
  ShieldCheck,
} from "lucide-react";

const VIDEO_1080 = "/media/campus-1080.mp4";
const VIDEO_720 = "/media/campus-720.mp4";
const POSTER = "/media/campus-poster.jpg";

const DEFAULT_DURATION = 5.04;

interface FeatureItem {
  id: number;
  positionClass: string;
  Icon: React.ComponentType<{ strokeWidth?: number; className?: string }>;
  titleLines: [string, string];
  bodyLines: [string, string, string];
}

const FEATURES: FeatureItem[] = [
  {
    id: 1,
    positionClass: "feature-pos-1",
    Icon: LayoutGrid,
    titleLines: ["ONE PLACE FOR ", "CAMPUS LIFE"],
    bodyLines: [
      "Announcements, events and deadlines in ",
      "one feed, filtered to your department, ",
      "year and role.",
    ],
  },
  {
    id: 2,
    positionClass: "feature-pos-2",
    Icon: Search,
    titleLines: ["NEVER LOSE ", "A THING"],
    bodyLines: [
      "Report or find lost items in seconds, ",
      "with status updates until it is back ",
      "with its owner.",
    ],
  },
  {
    id: 3,
    positionClass: "feature-pos-3",
    Icon: CheckCircle2,
    titleLines: ["REQUESTS THAT ", "GET ANSWERED"],
    bodyLines: [
      "Submit service requests and track ",
      "each one from open to ",
      "resolved.",
    ],
  },
  {
    id: 4,
    positionClass: "feature-pos-4",
    Icon: FileText,
    titleLines: ["ANSWERS YOU ", "CAN TRUST"],
    bodyLines: [
      "Ask about rules, circulars and deadlines. ",
      "Every answer cites the official document ",
      "it came from.",
    ],
  },
  {
    id: 5,
    positionClass: "feature-pos-5",
    Icon: ShieldCheck,
    titleLines: ["BUILT AROUND ", "YOUR ROLE"],
    bodyLines: [
      "Students, faculty and admins each see ",
      "what matters to them, protected by ",
      "database-level permissions.",
    ],
  },
];

const ROLES = [
  {
    role: "STUDENT",
    description:
      "Read announcements, discover events, report lost items, submit requests and ask the assistant.",
  },
  {
    role: "FACULTY",
    description:
      "Publish announcements and course updates and respond to relevant requests.",
  },
  {
    role: "ADMIN",
    description:
      "Manage users and roles, publish official content, and approve the documents the assistant answers from.",
  },
];

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export default function CampusScrollHero() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lastBlockRef = useRef<HTMLElement | null>(null);

  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setReducedMotion(mq.matches);
    };
    updateMotionPreference();
    mq.addEventListener("change", updateMotionPreference);
    return () => {
      mq.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const video = videoRef.current;
    const lastBlock = lastBlockRef.current;

    if (!track || !lastBlock) return;

    if (reducedMotion) {
      track.style.height = "";
      return;
    }

    if (!video) return;

    // Select 720p for screens <= 900px or when Save-Data is enabled
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean };
      mozConnection?: { saveData?: boolean };
      webkitConnection?: { saveData?: boolean };
    };
    const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
    const saveData = Boolean(conn && conn.saveData);
    const isSmallScreen = window.matchMedia("(max-width: 900px)").matches;
    const desiredSrc = saveData || isSmallScreen ? VIDEO_720 : VIDEO_1080;

    if (video.getAttribute("src") !== desiredSrc) {
      video.src = desiredSrc;
      video.load();
    }

    let end = 1;
    let knee = 0.5;
    let cur = 0;
    let target = 0;
    let rafId = 0;

    const measure = () => {
      const viewportHeight = window.innerHeight;
      const trackRect = track.getBoundingClientRect();
      const lastRect = lastBlock.getBoundingClientRect();
      const lastBlockBottom = lastRect.bottom - trackRect.top;

      end = Math.max(1, lastBlockBottom + 0.75 * viewportHeight);
      knee = clamp(lastBlockBottom / end, 0.01, 0.99);
      track.style.height = `${end + viewportHeight}px`;
    };

    const computeTargetTime = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const trackTop = track.offsetTop;
      const p = clamp((scrollY - trackTop) / end, 0, 1);

      const clipProgress =
        p < knee
          ? (p / knee) * 0.46
          : 0.46 + ((p - knee) / (1 - knee)) * 0.54;

      const duration =
        video.duration && Number.isFinite(video.duration)
          ? video.duration
          : DEFAULT_DURATION;

      target = clipProgress * Math.max(0, duration - 1 / 48);
    };

    const commitSeek = () => {
      if (
        !video.seeking &&
        video.readyState >= 1 &&
        Math.abs(video.currentTime - cur) > 1 / 60
      ) {
        try {
          video.currentTime = cur;
        } catch {
          // Ignore transient DOM seek exceptions before metadata completes
        }
      }
    };

    const handleSeeked = () => {
      commitSeek();
    };

    const handleLoadedMetadata = () => {
      measure();
      computeTargetTime();
      commitSeek();
    };

    const handleResize = () => {
      measure();
      computeTargetTime();
    };

    const handleScroll = () => {
      computeTargetTime();
    };

    const tick = () => {
      cur += (target - cur) * 0.22;
      commitSeek();
      rafId = window.requestAnimationFrame(tick);
    };

    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    measure();
    computeTargetTime();

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        measure();
        computeTargetTime();
      });
    }

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [reducedMotion]);

  return (
    <main>
      <div
        ref={trackRef}
        className={`track${reducedMotion ? " reduced-motion" : ""}`}
      >
        <div className="scene">
          {reducedMotion ? (
            <img
              src={POSTER}
              alt="Aerial view of college campus quad"
              className="scene-poster"
              referrerPolicy="no-referrer"
            />
          ) : (
            <video
              ref={videoRef}
              className="scene-video"
              muted
              playsInline
              preload="auto"
              poster={POSTER}
            />
          )}
          <div className="scene-tint" aria-hidden="true" />
        </div>

        <div className="content">
          <header className="intro-block">
            <p className="eyebrow">WHY AI CAMPUS OS</p>
            <h1 className="headline">
              <span>YOUR CAMPUS</span>
              <span>IN ONE PLACE.</span>
              <span>ANSWERS YOU</span>
              <span>CAN TRUST.</span>
            </h1>
          </header>

          {FEATURES.map((feature, index) => {
            const isLast = index === FEATURES.length - 1;
            const IconComponent = feature.Icon;
            return (
              <article
                key={feature.id}
                ref={isLast ? lastBlockRef : undefined}
                className={`feature-block ${feature.positionClass}`}
              >
                <div className="feature-icon" aria-hidden="true">
                  <IconComponent strokeWidth={1.75} />
                </div>
                <h2 className="feature-title">
                  <span className="line">{feature.titleLines[0]}</span>
                  <span className="line">{feature.titleLines[1]}</span>
                </h2>
                <p className="feature-body">
                  <span className="line">{feature.bodyLines[0]}</span>
                  <span className="line">{feature.bodyLines[1]}</span>
                  <span className="line">{feature.bodyLines[2]}</span>
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <section className="roles-section">
        <div className="roles-container">
          <header className="roles-header">
            <h2 className="roles-heading">
              <span>BUILT FOR</span>
              <span>EVERY ROLE</span>
              <span className="muted">ON CAMPUS</span>
            </h2>
            <p className="roles-note">
              One platform, three views. Each person sees the information that
              is relevant to them.
            </p>
          </header>

          <div className="roles-list">
            {ROLES.map((item) => (
              <div key={item.role} className="roles-row">
                <div className="role-label">{item.role}</div>
                <p className="role-description">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="roles-actions">
            <a href="/login" className="signin-link">
              Sign in
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
