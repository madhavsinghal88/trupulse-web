"use client";

import { useEffect, useState } from "react";

const ROWS = [
  {
    title: "Your brand, throughout the experience",
    body: "Bring your organization’s identity to participant invitations, sessions, and reports for a consistent, recognizable experience.",
    img: "/assets/home/brand-1-invitation.webp",
    alt: "Participant invitation screen with the organization’s own logo and colors",
  },
  {
    title: "Research guidelines you define",
    body: "Set guidelines for the AI’s language, questions, and handling of sensitive topics to support your research objectives and organizational standards.",
    img: "/assets/home/brand-2-guardrails.webp",
    alt: "Corporate guardrails applied to every session",
  },
  {
    title: "Access based on responsibilities",
    body: "Manage who can create and run research, review responses, and access reports through roles and permissions.",
    img: "/assets/home/brand-3-roles.webp",
    alt: "Roles and permissions showing access based on responsibilities",
  },
  {
    title: "Control over data retention",
    body: "Set how long research data is retained and manage deletion according to your organization’s requirements.",
    img: "/assets/home/brand-4-retention.webp",
    alt: "Automatic data deletion policy settings",
  },
  {
    title: "Your review at key steps",
    body: "Review and approve sessions before launch. Evaluate the findings and supporting evidence before deciding what happens next.",
    img: "/assets/home/brand-5-approval.webp",
    alt: "Launch approval screen: session ready for your review",
  },
];

const DWELL = 4500;
// Auto-advance is off in the v106 design; rows change only when chosen.
const AUTO_ADVANCE = false;

// Each row shows its screen when chosen (and can take turns every 4.5s via AUTO_ADVANCE).
export default function BrandRotator() {
  const [active, setActive] = useState(0);
  const [restartKey, setRestartKey] = useState(0);

  useEffect(() => {
    let timer = null;
    const start = () => { stop(); if (!AUTO_ADVANCE) return; timer = setInterval(() => setActive((a) => (a + 1) % ROWS.length), DWELL); };
    const stop = () => { if (timer) clearInterval(timer); timer = null; };
    const onVisibility = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => { stop(); document.removeEventListener("visibilitychange", onVisibility); };
  }, [restartKey]);

  const pick = (i) => { setActive(i); setRestartKey((k) => k + 1); };

  return (
    <div className="trust-layout reveal">
      <div className="tp-brand-stage" aria-live="polite">
        {ROWS.map((r, i) => (
          <img key={r.img} src={r.img} alt={r.alt} width="1600" height="1200" loading="lazy" decoding="async" className={i === active ? "on" : undefined} />
        ))}
      </div>
      <ul className="feature-rows plain-rows trust-rows tp-brand-rows">
        {ROWS.map((r, i) => (
          <li
            key={r.title}
            className={i === active ? "is-active" : undefined}
            aria-current={i === active ? "true" : "false"}
            tabIndex={0}
            role="button"
            onClick={() => pick(i)}
            onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); pick(i); } }}
          >
            <div><h3>{r.title}</h3><p>{r.body}</p></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
