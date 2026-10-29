"use client";

import { useEffect, useRef, useState } from "react";

const METRICS = [
  ["50", "Top performers participated"],
  ["25+ hours", "Discussions analyzed"],
  ["2 weeks", "From setup to executive report"],
  ["2 leaders", "Oversaw the research"],
];

// Split "25+ hours" into digit reels and the text between them.
function segments(text) {
  return text.match(/\d|\D+/g).map((s) => (/\d/.test(s) ? { digit: +s } : { text: s }));
}

// Each digit rolls up like an odometer the first time the strip scrolls into view.
export default function TrustMetrics() {
  const gridRef = useRef(null);
  const [lineHeights, setLineHeights] = useState(null);
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const grid = gridRef.current;
    setLineHeights([...grid.querySelectorAll(".trust-metric strong")].map((el) => {
      const cs = getComputedStyle(el);
      const lh = parseFloat(cs.lineHeight);
      return isNaN(lh) ? parseFloat(cs.fontSize) * 1.2 : lh;
    }));
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Let the reels paint at zero first, so the roll is animated.
        requestAnimationFrame(() => requestAnimationFrame(() => setRolling(true)));
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  let reel = 0;
  return (
    <div className="shell trust-strip-grid" ref={gridRef}>
      {METRICS.map(([value, label], i) => (
        <div className="trust-metric" key={label}>
          <strong>
            {lineHeights ? (
              <>
                <span className="tp-sr">{value}</span>
                <span className="tp-od" aria-hidden="true" style={{ "--lh": `${lineHeights[i]}px` }}>
                  {segments(value).map((seg, k) => {
                    if (seg.text !== undefined) return <span key={k} className="tp-t">{seg.text}</span>;
                    const delay = reel++ * 130;
                    return (
                      <span key={k} className="tp-d">
                        <span
                          className="tp-r"
                          style={{
                            transition: `transform 1.8s cubic-bezier(.16,.84,.3,1) ${delay}ms`,
                            transform: rolling ? `translateY(calc(var(--lh) * -${10 + seg.digit}))` : undefined,
                          }}
                        >
                          {Array.from({ length: 20 }, (_, n) => <i key={n}>{n % 10}</i>)}
                        </span>
                      </span>
                    );
                  })}
                </span>
              </>
            ) : value}
          </strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
