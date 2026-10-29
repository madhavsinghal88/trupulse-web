"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { hasVideo, openVideo } from "./VideoPlayer";
import AutoplayVideo from "./AutoplayVideo";
import { tabKeyDown, useEqualHeight } from "./tabs";

const PRODUCTS = [
  {
    tab: "AI-led 1:1 discussions",
    title: "Go deeper, without spending hours conducting interviews.",
    body: "Set the direction and approve the discussion guide. AI conducts each discussion, so your team can gather in-depth feedback without spending time scheduling or running interviews.",
    benefits: ["Flexible timing—participants take part whenever it suits them", "Chat or voice responses in any of 17 languages", "AI follow-up questions that explore the “why”"],
    best: "Stay interviews · Customer discovery · Member feedback",
    video: "1:1 discussion product walkthrough",
    note: "See a 1:1 session end to end",
  },
  {
    tab: "Surveys with AI-powered follow-ups",
    title: "Go beyond the score. Understand the answer.",
    body: "Approve your survey questions, then add follow-up questions where you want deeper insight. Choose their intent—understand drivers, gather examples, identify systemic issues, or surface actionable recommendations—to explore participants’ answers during the survey.",
    benefits: ["Fixed: Everyone receives the same follow-up question.", "Conditional: A follow-up question appears when an answer meets your criteria.", "Adaptive: AI asks a relevant follow-up question based on the response and your research intent."],
    best: "Employee engagement · Customer satisfaction · Member experience",
    video: "Employee Survey product walkthrough",
    note: "See a survey built and analyzed",
  },
  {
    tab: "AI-moderated focus groups",
    title: "Bring people together. Build on every perspective.",
    body: "Set the direction and approve the discussion guide. AI moderates the live discussion, reducing the work involved in facilitating the session.",
    benefits: ["Encourages participation: AI invites quieter voices and manages dominant speakers.", "Explores perspectives: AI asks for examples and probes differing viewpoints.", "Checks understanding: AI shares summaries with the group so participants can clarify or add more."],
    best: "Idea workshops · Product concept feedback · Team improvement",
    video: "Focus Group product walkthrough",
    note: "See a moderated group discussion",
  },
];

const DWELL = 15000; // 15s of reading on each tab, then advance
// Auto-rotation is off in the v106 design: the line stays full and tabs change only on click.
const ROTATE = false;

// Cycles through the tabs; the active tab's underline fills over the dwell time.
// Pauses while keyboard focus is inside; choosing a tab restarts its dwell.
function useRotation(shellRef, activeRef, setActive) {
  const state = useRef({ raf: 0, start: 0, held: 0, reduce: null });

  const setLine = (p) => shellRef.current?.style.setProperty("--p", Math.max(0, Math.min(1, p)).toFixed(4));

  const frame = useCallback((now) => {
    const s = state.current;
    const p = (now - s.start) / DWELL;
    if (p >= 1) {
      setActive((activeRef.current + 1) % PRODUCTS.length);
      s.start = now;
      setLine(0);
    } else setLine(p);
    s.raf = requestAnimationFrame(frame);
  }, [activeRef, setActive]);

  const restart = useCallback(() => {
    const s = state.current;
    cancelAnimationFrame(s.raf);
    if (!ROTATE || s.reduce?.matches) {
      setLine(1);
      shellRef.current?.setAttribute("data-rotation", "off");
      return;
    }
    shellRef.current?.setAttribute("data-rotation", "running");
    s.start = performance.now() - s.held;
    s.held = 0;
    s.raf = requestAnimationFrame(frame);
  }, [frame, shellRef]);

  const pause = useCallback(() => {
    const s = state.current;
    cancelAnimationFrame(s.raf);
    s.held = Math.min(DWELL - 1, performance.now() - s.start);
    shellRef.current?.setAttribute("data-rotation", "paused");
  }, [shellRef]);

  const reset = useCallback(() => { state.current.held = 0; setLine(0); restart(); }, [restart]);

  useEffect(() => {
    const s = state.current;
    s.reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    s.reduce.addEventListener("change", restart);
    restart();
    return () => { cancelAnimationFrame(s.raf); s.reduce.removeEventListener("change", restart); };
  }, [restart]);

  return { pause, restart, reset };
}

export default function ProductTabs() {
  const [active, setActive] = useState(0);
  const [narrow, setNarrow] = useState(false);
  const shellRef = useRef(null);
  const panelRef = useRef(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  const rotation = useRotation(shellRef, activeRef, setActive);
  useEqualHeight(panelRef, PRODUCTS.length, active, setActive);

  // On phones the "example use cases" line becomes a set of tags.
  useEffect(() => {
    const mq = window.matchMedia("(max-width:680px)");
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const pick = (i) => { setActive(i); rotation.reset(); };
  const item = PRODUCTS[active];

  return (
    <div
      className="product-shell reveal"
      ref={shellRef}
      onFocus={rotation.pause}
      onBlur={(event) => { if (!shellRef.current.contains(event.relatedTarget)) rotation.restart(); }}
    >
      <div className="product-tabs" role="tablist" aria-label="TruPulse product features">
        {PRODUCTS.map((p, i) => (
          <button
            key={p.tab}
            className={`product-tab${i === active ? " active" : ""}`}
            type="button"
            role="tab"
            id={`ptab-${i}`}
            aria-controls="ppanel"
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => pick(i)}
            onKeyDown={(event) => tabKeyDown(event, i, PRODUCTS.length, pick)}
          >
            <strong>{p.tab}</strong>
          </button>
        ))}
      </div>
      <div className="product-panel" id="ppanel" role="tabpanel" aria-labelledby={`ptab-${active}`} tabIndex={0} ref={panelRef}>
        <div className="product-copy">
          <span className="kicker">{item.tab}</span>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <ul className="feature-list">{item.benefits.map((b) => <li key={b}><i>✓</i>{b}</li>)}</ul>
          <div className="best-for">
            <small>EXAMPLE USE CASES</small>
            <strong hidden={narrow}>{item.best}</strong>
            {narrow && <div className="best-for-tags">{item.best.split("·").map((t) => <b key={t}>{t.trim()}</b>)}</div>}
          </div>
        </div>
        <div className="walkthrough">
          <div className={`developer-video-slot${hasVideo(item.video) ? " tp-autoplay" : ""}`} aria-label={`${item.video} video placeholder`}>
            <button className="video-slot-play" type="button" aria-label={`Play the ${item.video} video`} onClick={() => openVideo(item.video, item.video)}>▶</button>
            <strong>{item.video}</strong>
            <small>{item.note}</small>
            {!hasVideo(item.video) && <span className="tp-soon">Video coming soon</span>}
            <AutoplayVideo key={item.video} videoKey={item.video} label={item.video} />
          </div>
        </div>
      </div>
    </div>
  );
}
