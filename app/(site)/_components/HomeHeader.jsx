"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useDemo } from "./DemoProvider";

const NAV = [
  ["#product", "Product"],
  ["#how-it-works", "How It Works"],
  ["#reports", "Reports"],
  ["#use-cases", "Use Cases"],
  ["#resources", "Resources"],
];

export default function HomeHeader() {
  const { openDemo } = useDemo();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Deepen the header blur once content has scrolled underneath it.
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  // The open menu dims the page behind it and locks its scroll.
  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    if (!menuOpen) return;
    const onKey = (event) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-open");
    };
  }, [menuOpen]);

  const demoButton = (
    <button className="btn primary" type="button" onClick={() => { setMenuOpen(false); openDemo("form"); }}>
      Book a Demo <span>→</span>
    </button>
  );

  return (
    <>
      <div className="nav-scrim" data-nav-scrim="" hidden={!menuOpen} onClick={() => setMenuOpen(false)} />
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="shell nav-wrap">
          <a className="logo brand-logo" href="#top" aria-label="TruPulse home">
            <img src="/assets/trupulse-logo.webp" alt="TruPulse" width="384" height="121" />
          </a>
          <nav className={`main-nav${menuOpen ? " mobile-open" : ""}`} aria-label="Main navigation">
            {NAV.map(([href, label]) => (
              // The menu used to stay open after tapping a link, covering the target section.
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            ))}
            <div className="mobile-actions">
              <Link className="login" href="/login">Sign in</Link>
              {demoButton}
            </div>
          </nav>
          <div className="nav-actions">
            <Link className="login" href="/login">Sign in</Link>
            {demoButton}
            <button
              className="icon-btn menu-toggle"
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              data-menu-toggle=""
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
