"use client";

import { useState } from "react";

const VIEWS = [
  { img: "/assets/home/report-findings.webp", alt: "Key findings: three findings tied to the research objective", title: "See the key findings", body: <>Understand the main takeaways and how they relate to what you set out to learn.</> },
  { img: "/assets/home/report-themes.webp", alt: "Recurring themes and where perspectives differ by tenure", title: "Explore patterns and differences", body: <>Explore recurring themes, contrasting perspectives, and question-level findings, with context from participants&rsquo; responses.</> },
  { img: "/assets/home/report-evidence.webp", alt: "Supporting evidence: participant quotes linked to transcripts", title: "Examine the supporting evidence", body: <>Examine the supporting evidence and illustrative quotes included in each report. Explore the complete source material through discussion transcripts and survey responses.</> },
  { img: "/assets/home/report-next-steps.webp", alt: "Suggested next steps for the team to discuss", title: "Consider what comes next", body: <>Use conclusions and Suggested Next Steps to guide discussion, further research, and decisions.</> },
];

// Selecting a row swaps the report screenshot beside it.
export default function ReportViews() {
  const [active, setActive] = useState(0);
  return (
    <div className="split-feature reveal">
      <div className="tp-shot tp-rep-stage" style={{ aspectRatio: "5/3" }}>
        {VIEWS.map((v, i) => (
          <img key={v.img} src={v.img} alt={v.alt} width="1600" height="960" loading="lazy" decoding="async" className={i === active ? "on" : undefined} />
        ))}
      </div>
      <ul className="feature-rows plain-rows tp-rep-rows">
        {VIEWS.map((v, i) => (
          <li
            key={v.title}
            className={i === active ? "is-active" : undefined}
            role="button"
            tabIndex={0}
            aria-current={i === active ? "true" : "false"}
            onClick={() => setActive(i)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(i); } }}
          >
            <div><h3>{v.title}</h3><p>{v.body}</p></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
