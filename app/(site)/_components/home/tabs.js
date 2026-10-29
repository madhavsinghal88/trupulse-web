"use client";

import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";

// Keep a tab panel as tall as its tallest tab, so the page does not jump as tabs change:
// render each tab in turn, measure, then restore the current one.
export function useEqualHeight(panelRef, count, active, setActive) {
  const activeRef = useRef(active);
  activeRef.current = active;

  useEffect(() => {
    let timer;
    function equalise() {
      const el = panelRef.current;
      if (!el) return;
      const restore = activeRef.current;
      el.style.minHeight = "0px";
      let max = 0;
      // offsetHeight, not scrollHeight: on an overflow:hidden box scrollHeight
      // under-counts the bottom padding.
      for (let i = 0; i < count; i++) {
        flushSync(() => setActive(i));
        max = Math.max(max, el.offsetHeight);
      }
      flushSync(() => setActive(restore));
      el.style.minHeight = Math.ceil(max) + "px";
    }
    const schedule = (delay) => { clearTimeout(timer); timer = setTimeout(equalise, delay); };
    const onResize = () => schedule(180);
    schedule(0);
    // Re-measure once webfonts land, since they change the wrap.
    document.fonts?.ready.then(() => schedule(0));
    window.addEventListener("resize", onResize);
    return () => { clearTimeout(timer); window.removeEventListener("resize", onResize); };
  }, [panelRef, count, setActive]);
}

// Roving-tabindex keyboard support, required for role="tab".
export function tabKeyDown(event, index, count, pick) {
  const map = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
  let next = null;
  if (event.key in map) next = (index + map[event.key] + count) % count;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = count - 1;
  if (next === null) return;
  event.preventDefault();
  pick(next);
  event.currentTarget.parentElement.children[next]?.focus();
}
