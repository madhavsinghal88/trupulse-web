"use client";

import { useEffect, useState } from "react";

// Highlights the entry for whichever section is currently being read.
export default function ArticleToc({ headings }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const targets = headings.map((h) => document.getElementById(h.id));
    function onScroll() {
      const line = window.innerHeight * 0.3;
      let best = 0;
      targets.forEach((t, i) => { if (t && t.getBoundingClientRect().top <= line) best = i; });
      setActive(best);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [headings]);

  return (
    <nav className="article-aside" aria-label="On this page" data-toc="">
      <strong>In this article</strong>
      {headings.map((h, i) => (
        <a key={h.id} href={`#${h.id}`} className={i === active ? "active" : undefined} aria-current={i === active ? "true" : undefined}>
          {h.text}
        </a>
      ))}
    </nav>
  );
}
