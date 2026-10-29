"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Sample PDFs live in public/reports. A report without a file shows "coming soon".
const REPORTS = [
  { file: "1to1-Discussion-Session-Report", name: "1∶1 Discussion Session Report", title: "1:1 Discussion Session Report", note: "Explore key findings, shared themes, and differences across individual discussions, supported by participant quotes." },
  { file: "1to1-Discussion-Individual-Report", name: "1∶1 Discussion Individual Report", title: "1:1 Discussion Individual Report", note: "See how a participant’s perspective, key insights, and supporting quotes are summarized in their own individual report." },
  { file: "Survey-Session-Report", name: "Survey Session Report", title: "Survey Session Report", note: "See survey results, response patterns, and insights from follow-up questions across all participants." },
  { file: "Survey-Individual-Responses-Report", name: "Survey Individual Responses Report", title: "Survey Individual Responses Report", note: "Review every participant’s complete survey answers, including follow-up responses, together in one document." },
  { title: "Focus Group Session Report", note: "Explore the group’s shared themes, differing viewpoints, and insights that emerged through discussion." },
  { title: "Campaign Report", note: "Bring findings from multiple sessions together to reveal broader patterns, changes, and connected insights." },
];

function download(file, name) {
  const a = document.createElement("a");
  a.href = `/reports/${file}.pdf`;
  a.download = name + ".pdf";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function SampleReports() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const lastFocused = document.activeElement;
    document.documentElement.classList.add("tp-dm-lock");
    closeRef.current?.focus();
    const onKey = (event) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("tp-dm-lock");
      lastFocused?.focus?.();
    };
  }, [open]);

  return (
    <>
      <button className="tp-sr-link" type="button" onClick={() => setOpen(true)}>View Sample Reports <span aria-hidden="true">&rarr;</span></button>
      {/* Portalled: a transformed ancestor (.reveal) would otherwise contain position:fixed. */}
      {open && createPortal(
      <div className="tp-srd" onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div className="tp-sr-panel" role="dialog" aria-modal="true" aria-labelledby="tp-sr-t">
          <button ref={closeRef} className="tp-sr-x" type="button" aria-label="Close sample reports" onClick={() => setOpen(false)}>&times;</button>
          <p className="section-label">Sample reports</p>
          <h2 id="tp-sr-t">See what a TruPulse report looks like.</h2>
          <p className="tp-sr-deck">Choose a report type to preview or download a sample. Sample data only.</p>
          <ul className="tp-sr-grid">
            {REPORTS.map((r) => (
              <li className="tp-sr-card" key={r.title}>
                <strong>{r.title}</strong>
                <p className="tp-sr-q">{r.note}</p>
                <div className="tp-sr-actions">
                  {r.file ? (
                    <>
                      <button className="tp-sr-btn" type="button" onClick={() => window.open(`/reports/${r.file}.pdf`, "_blank")}>Preview PDF</button>
                      <button className="tp-sr-btn ghost" type="button" onClick={() => download(r.file, r.name)}>Download</button>
                    </>
                  ) : (
                    <>
                      <span className="tp-sr-btn" aria-disabled="true">Preview PDF</span>
                      <span className="tp-sr-btn ghost" aria-disabled="true">Download</span>
                    </>
                  )}
                </div>
                {!r.file && <small className="tp-sr-soon">Sample coming soon</small>}
              </li>
            ))}
          </ul>
          <p className="tp-sr-note"><strong>Participant identities:</strong> These samples show identified participants using fictional names. For each session, the creator chooses whether participants are identified or anonymous, and participants are informed before providing feedback. In anonymous sessions, names are hidden, though details participants share may still reveal their identity.</p>
        </div>
      </div>,
      document.body)}
    </>
  );
}
