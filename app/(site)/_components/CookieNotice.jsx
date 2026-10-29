"use client";

import { useEffect, useState } from "react";

const KEY = "tp-cookie-choice";

// Shown until the visitor accepts or declines; the choice is kept in localStorage and
// exposed as window.tpCookieChoice ("accept" | "decline").
export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let choice = null;
    try { choice = localStorage.getItem(KEY); } catch {}
    if (choice) window.tpCookieChoice = choice;
    else setShow(true);
  }, []);

  function choose(choice) {
    try { localStorage.setItem(KEY, choice); } catch {}
    window.tpCookieChoice = choice;
    setShow(false);
  }

  if (!show) return null;
  return (
    <div id="tp-cookie" role="region" aria-label="Cookie notice" style={styles.bar}>
      <p style={styles.text}>We use cookies to run this website and, with your permission, to understand how it is used. You can accept or decline non-essential cookies.</p>
      <div style={styles.actions}>
        <button type="button" style={styles.decline} onClick={() => choose("decline")}>Decline</button>
        <button type="button" style={styles.accept} onClick={() => choose("accept")}>Accept</button>
      </div>
    </div>
  );
}

const button = { height: 42, padding: "0 18px", borderRadius: 999, cursor: "pointer" };
const styles = {
  bar: { display: "flex", position: "fixed", left: 16, right: 16, bottom: 16, zIndex: 9999, maxWidth: 720, margin: "0 auto", flexWrap: "wrap", alignItems: "center", gap: "14px 20px", padding: "18px 20px", borderRadius: 18, background: "#110f35", color: "#fff", boxShadow: "0 20px 60px rgba(17,15,53,.35)", font: "400 14px/1.5 Inter,system-ui,sans-serif" },
  text: { flex: "1 1 320px", margin: 0 },
  actions: { display: "flex", gap: 10, flex: "0 0 auto" },
  decline: { ...button, border: "1px solid rgba(255,255,255,.4)", background: "transparent", color: "#fff", font: "600 14px Inter,sans-serif" },
  accept: { ...button, border: 0, background: "#EE851B", color: "#110f35", font: "700 14px Inter,sans-serif" },
};
