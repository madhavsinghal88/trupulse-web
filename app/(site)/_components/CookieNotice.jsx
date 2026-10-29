"use client";

import { useEffect, useRef, useState } from "react";

const KEY = "tp-cookie-choice";
const CATEGORIES = [
  { id: "analytics", title: "Analytics", note: "Help us understand how visitors use the website." },
  { id: "marketing", title: "Marketing", note: "Used to measure and improve our campaigns." },
];

// Shown until the visitor accepts, declines, or saves their own choices; the choice is kept
// in localStorage and exposed as window.tpCookieChoice ({ necessary, analytics, marketing }).
// window.tpOpenCookieSettings() reopens the settings dialog.
export default function CookieNotice() {
  const [show, setShow] = useState(false);
  const [settings, setSettings] = useState(false);
  const [picked, setPicked] = useState({ analytics: false, marketing: false });
  const closeRef = useRef(null);
  const lastFocus = useRef(null);

  useEffect(() => {
    let choice = null;
    try { choice = localStorage.getItem(KEY); } catch {}
    if (choice) {
      try {
        const saved = JSON.parse(choice);
        if (saved && typeof saved === "object") setPicked({ analytics: !!saved.analytics, marketing: !!saved.marketing });
        window.tpCookieChoice = saved;
      } catch { window.tpCookieChoice = choice; }
    } else setShow(true);
    window.tpOpenCookieSettings = openSettings;
  }, []);

  useEffect(() => {
    if (!settings) return;
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") closeSettings(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [settings]);

  function openSettings() {
    lastFocus.current = document.activeElement;
    setSettings(true);
  }

  function closeSettings() {
    setSettings(false);
    lastFocus.current?.focus?.();
  }

  function store(choice) {
    setPicked({ analytics: choice.analytics, marketing: choice.marketing });
    try { localStorage.setItem(KEY, JSON.stringify(choice)); } catch {}
    window.tpCookieChoice = choice;
    setShow(false);
    setSettings(false);
  }

  const all = (on) => store({ necessary: true, analytics: on, marketing: on });

  return (
    <>
      {show && (
        <div id="tp-cookie" role="region" aria-label="Cookie notice" style={styles.bar}>
          <p style={styles.text}>We use cookies to run this website and, with your permission, to understand how it is used. You can accept, decline, or choose which optional cookies to allow.</p>
          <div style={styles.actions}>
            <button type="button" style={styles.link} onClick={openSettings}>Cookie settings</button>
            <button type="button" style={styles.decline} onClick={() => all(false)}>Decline</button>
            <button type="button" style={styles.accept} onClick={() => all(true)}>Accept</button>
          </div>
        </div>
      )}
      {settings && (
        <div id="tp-cookie-set" role="dialog" aria-modal="true" aria-labelledby="tp-ck-title" style={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) closeSettings(); }}>
          <div style={styles.panel}>
            <div style={styles.head}>
              <h2 id="tp-ck-title" style={styles.title}>Cookie settings</h2>
              <button ref={closeRef} type="button" aria-label="Close cookie settings" style={styles.close} onClick={closeSettings}>&times;</button>
            </div>
            <p style={styles.deck}>Choose which optional cookies to allow. You can change this at any time.</p>
            <div style={styles.row}>
              <div><strong>Strictly necessary</strong><div style={styles.muted}>Needed for the website to work. Always on.</div></div>
              <span style={styles.always}>Always on</span>
            </div>
            {CATEGORIES.map((c) => (
              <label key={c.id} style={{ ...styles.row, cursor: "pointer" }}>
                <span><strong>{c.title}</strong><span style={{ ...styles.muted, display: "block" }}>{c.note}</span></span>
                <input type="checkbox" checked={picked[c.id]} onChange={(e) => setPicked((p) => ({ ...p, [c.id]: e.target.checked }))} style={styles.check} />
              </label>
            ))}
            <div style={styles.footer}>
              <button type="button" style={styles.save} onClick={() => store({ necessary: true, ...picked })}>Save choices</button>
              <button type="button" style={{ ...styles.accept, height: 44, padding: "0 20px" }} onClick={() => all(true)}>Accept all</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const button = { height: 42, padding: "0 18px", borderRadius: 999, cursor: "pointer" };
const styles = {
  bar: { display: "flex", position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 9999, maxWidth: 760, margin: "0 auto", flexWrap: "wrap", alignItems: "center", gap: "14px 20px", padding: "18px 20px", borderRadius: 18, background: "#110f35", color: "#fff", boxShadow: "0 20px 60px rgba(17,15,53,.35)", font: "400 14px/1.5 Inter,system-ui,sans-serif" },
  text: { flex: "1 1 300px", margin: 0 },
  actions: { display: "flex", flexWrap: "wrap", gap: 10, flex: "0 0 auto" },
  link: { ...button, padding: "0 16px", border: 0, background: "transparent", color: "#fff", font: "600 14px Inter,sans-serif", textDecoration: "underline" },
  decline: { ...button, border: "1px solid rgba(255,255,255,.4)", background: "transparent", color: "#fff", font: "600 14px Inter,sans-serif" },
  accept: { ...button, border: 0, background: "#EE851B", color: "#110f35", font: "700 14px Inter,sans-serif" },
  overlay: { display: "flex", position: "fixed", inset: 0, zIndex: 10000, alignItems: "center", justifyContent: "center", padding: 16, background: "rgba(17,15,53,.6)", font: "400 14px/1.5 Inter,system-ui,sans-serif" },
  panel: { width: "min(520px,100%)", maxHeight: "calc(100vh - 32px)", overflow: "auto", borderRadius: 20, background: "#fff", color: "#110f35", padding: 24, boxShadow: "0 30px 80px rgba(0,0,0,.35)" },
  head: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, margin: "0 0 6px" },
  title: { margin: 0, font: "700 20px/1.3 Inter,sans-serif" },
  close: { width: 40, height: 40, borderRadius: "50%", border: "1px solid #e3e1f2", background: "#fff", color: "#110f35", fontSize: 20, cursor: "pointer" },
  deck: { margin: "0 0 16px", color: "#5b589d" },
  row: { display: "flex", justifyContent: "space-between", gap: 16, padding: "14px 0", borderTop: "1px solid #eceaf6" },
  muted: { color: "#5b589d" },
  always: { flex: "0 0 auto", fontWeight: 700, color: "#0a8a78" },
  check: { flex: "0 0 auto", width: 22, height: 22, accentColor: "#433EB1" },
  footer: { display: "flex", flexWrap: "wrap", justifyContent: "flex-end", gap: 10, marginTop: 16 },
  save: { height: 44, padding: "0 20px", borderRadius: 999, border: "1px solid #110f35", background: "#fff", color: "#110f35", font: "600 14px Inter,sans-serif", cursor: "pointer" },
};
