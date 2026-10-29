"use client";

import { useEffect, useRef } from "react";
import { useDemo } from "../DemoProvider";
import { videoSource } from "./VideoPlayer";
import AutoplayVideo from "./AutoplayVideo";

// The walkthrough frame is positioned with CSS variables measured from the hero copy, so
// it lines up with the text column at every width. (The design's scroll-driven expansion
// of the frame is switched off, so only the resting position is computed.)
function useHeroFrame(heroRef) {
  useEffect(() => {
    const hero = heroRef.current;
    function update() {
      const grid = hero.querySelector(".hero-grid");
      const copy = hero.querySelector(".hero-copy");
      const g = grid.getBoundingClientRect();
      const c = copy.getBoundingClientRect();
      const gutter = Math.max(parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--page-gutter")) || 80, 20);
      const side = Math.max(gutter, g.left);
      const vars = {
        "--hero-expand": "0",
        "--hero-copy-opacity": "1",
        "--hero-copy-shift": "0px",
        "--hero-video-top": `${Math.max(0, c.top - g.top)}px`,
        "--hero-video-right": `${side}px`,
        "--hero-video-bottom": `${Math.max(0, g.bottom - c.bottom)}px`,
        "--hero-video-left": `${window.innerWidth / 2 + 12}px`,
        "--hero-video-radius": "30px",
      };
      for (const [k, v] of Object.entries(vars)) hero.style.setProperty(k, v);
      // On desktop, centre the frame vertically on the hero copy.
      if (!window.matchMedia("(max-width: 980px)").matches) {
        const f = hero.querySelector(".hero-video-frame").getBoundingClientRect();
        const offset = (c.top + c.height / 2) - (f.top + f.height / 2);
        hero.style.setProperty("--hero-video-top", `${Math.max(0, c.top - g.top) + offset}px`);
      }
    }
    update();
    const late = setTimeout(update, 300);
    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    document.fonts?.ready.then(update);
    return () => {
      clearTimeout(late);
      window.removeEventListener("resize", update);
      window.removeEventListener("load", update);
    };
  }, [heroRef]);
}

export default function Hero() {
  const heroRef = useRef(null);
  const { openDemo } = useDemo();
  useHeroFrame(heroRef);

  return (
    <section className="hero" ref={heroRef}>
      <div className="shell hero-grid">
        <div className="hero-copy reveal in">
          <p className="eyebrow">AI-powered research. Human insight.</p>
          <h1><span className="h1-line">Go beyond what people think.</span> <span className="h1-line"><em>Understand why.</em></span></h1>
          <p className="lead">TruPulse uses AI to create, conduct, and analyze surveys, 1:1 discussions, and focus groups. Your team sets the direction, approves the research, and reviews the findings&mdash;getting richer feedback with less manual work.</p>
          <div className="button-row">
            <button className="btn primary" type="button" onClick={() => openDemo("form")}>Book a Demo <span>&rarr;</span></button>
          </div>
          <p className="hero-cta-support">Bring one question about your organization. See how TruPulse researches it.</p>
          <div className="hero-keyline"><i aria-hidden="true"></i><span><strong>1:1 Discussions</strong> · Focus Groups · Surveys</span></div>
        </div>
        <div className="signal-stage reveal in delay-1" aria-label="TruPulse walkthrough video preview">
          <div className="developer-video-slot hero-video-frame tp-autoplay">
            <AutoplayVideo src={videoSource("hero")} label="TruPulse product walkthrough" />
          </div>
        </div>
      </div>
    </section>
  );
}
