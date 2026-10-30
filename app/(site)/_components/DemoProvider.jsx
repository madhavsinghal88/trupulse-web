"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { InlineWidget } from "react-calendly";
import { CALENDLY_URL } from "@/lib/site";

const DemoContext = createContext({ openDemo: () => {} });

export const useDemo = () => useContext(DemoContext);

const FOCUSABLE = 'a[href],button:not([disabled]),input,textarea,select,iframe,[tabindex]:not([tabindex="-1"])';

export function DemoProvider({ children }) {
  const [demo, setDemo] = useState({ open: false, mode: "form", step: "form", useCase: "", prefill: null });

  // mode "form" shows the request form, "video" the walkthrough. step "calendly" skips
  // straight to scheduling, for ?calendly=1 links and for details collected in the chat.
  const openDemo = useCallback((mode = "form", { useCase = "", step = "form", details = null } = {}) => {
    setDemo({ open: true, mode, step, useCase, prefill: details });
  }, []);
  const closeDemo = useCallback(() => setDemo((d) => ({ ...d, open: false })), []);

  return (
    <DemoContext.Provider value={{ openDemo }}>
      {children}
      <DemoModal {...demo} onClose={closeDemo} />
    </DemoContext.Provider>
  );
}

function DemoModal({ open, mode, step: startStep, useCase, prefill, onClose }) {
  const modalRef = useRef(null);
  const exploreRef = useRef(null);
  const [step, setStep] = useState("form");
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!open) return;
    const lastFocused = document.activeElement;
    setStep(startStep);
    if (prefill) setDetails(prefill);
    document.body.classList.add("modal-open");
    const timer = setTimeout(() => {
      const target = mode === "form" && startStep === "form" ? "input" : ".modal-close";
      modalRef.current?.querySelector(target)?.focus();
    }, 120);
    const onKey = (event) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
      // Return focus to whatever opened the dialog.
      lastFocused?.focus?.();
    };
  }, [open, mode, startStep, useCase, prefill, onClose]);

  // "Explore this in a demo" carries the chosen use case into the form. Runs once the
  // form step is mounted, which can be a render after opening.
  useEffect(() => {
    const box = exploreRef.current;
    if (open && step === "form" && useCase && box && !box.value.trim()) {
      box.value = "I would like to explore: " + useCase;
    }
  }, [open, step, useCase]);

  // Keep Tab inside the dialog while it is open.
  function trapFocus(event) {
    if (event.key !== "Tab") return;
    const items = [...modalRef.current.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  function pickATime(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setDetails({
      name: form.get("name"),
      email: form.get("email"),
      organization: form.get("organization"),
      explore: form.get("explore"),
    });
    setStep("calendly");
  }

  const notes = details && [details.organization && `Organization: ${details.organization}`, details.explore]
    .filter(Boolean).join("\n\n");

  return (
    <div
      ref={modalRef}
      className={`modal${open ? " open" : ""}`}
      data-demo-modal=""
      data-mode={step === "calendly" ? "form" : mode}
      aria-hidden={!open}
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={trapFocus}
    >
      <section className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="demo-title">
        <button className="icon-btn modal-close" type="button" aria-label="Close demo dialog" onClick={onClose}>×</button>
        <header className="modal-title">
          <p className="section-label">See TruPulse in action</p>
          <h2 id="demo-title">See what TruPulse could do for your organization.</h2>
          <p className="modal-deck">Explore how TruPulse creates, conducts, and analyzes research around the questions that matter to you&mdash;with your team guiding the process.</p>
        </header>
        {step === "calendly" ? (
          <>
            <div className="tp-calendly">
              {open && (
                <InlineWidget
                  url={CALENDLY_URL}
                  styles={{ height: "100%" }}
                  prefill={details ? { name: details.name, email: details.email, customAnswers: notes ? { a1: notes } : undefined } : undefined}
                />
              )}
            </div>
            {details && <button type="button" className="tp-calendly-back" onClick={() => setStep("form")}>&larr; Edit your details</button>}
          </>
        ) : (
          <div className="modal-grid">
            <div className="modal-video">
              <div className="developer-video-slot modal-video-slot" aria-label="TruPulse product walkthrough video placeholder">
                <span className="video-slot-play" aria-hidden="true">▶</span>
                <strong>TruPulse product walkthrough</strong>
                <small>See how a question becomes a report</small>
                <span className="tp-soon">Video coming soon</span>
              </div>
              <div className="modal-video-note">
                <strong>From your question to meaningful findings</strong>
                <p>See how you can:</p>
                <ul>
                  <li>Create and approve a survey, 1:1 discussion, or focus group.</li>
                  <li>Gather feedback through AI-led sessions and relevant follow-up questions.</li>
                  <li>Review findings and supporting evidence to inform your next steps.</li>
                </ul>
              </div>
            </div>
            <form className="demo-form" data-demo-form="" onSubmit={pickATime}>
              <h3>Tell us what you&rsquo;re interested in.</h3>
              <p>Share a few details so we can tailor the demo to your needs. You don&rsquo;t need a research plan to get started.</p>
              <label className="field">Full name<input required type="text" name="name" placeholder="Your name" defaultValue={details?.name} /></label>
              <label className="field">Email address<input required type="email" name="email" placeholder="name@company.com" defaultValue={details?.email} /></label>
              <label className="field">Organization<input required type="text" name="organization" placeholder="Organization name" defaultValue={details?.organization} /></label>
              <label className="field">What would you like to explore?<textarea ref={exploreRef} name="explore" placeholder="Tell us about your audience, intended use or what specifically you want to learn." defaultValue={details?.explore} /></label>
              <button className="btn primary" type="submit">Pick a Time</button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
