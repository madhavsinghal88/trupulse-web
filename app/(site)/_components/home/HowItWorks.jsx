"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    title: "Define what you want to understand",
    body: "Start with your own topic, research objective, or a ready-made template from the use case library. TruPulse’s session creation agent asks questions to clarify your audience, goals, and important details you might otherwise overlook. Together, you shape a session guide for your review and approval before launch.",
    img: "/assets/home/hiw-1-setup.webp",
    alt: "Session setup: research objective and drafted questions",
  },
  {
    title: "Invite the right participants",
    body: "Choose who you want to hear from using saved contacts, participant groups, or an imported list. Send invitations and track participation in one workspace.",
    img: "/assets/home/hiw-2-invite.webp",
    alt: "Inviting the right participants and tracking who has started",
  },
  {
    title: "Let AI conduct the research",
    body: "TruPulse guides participants through the session, asking relevant follow-up questions to explore their answers and understand the reasons behind them.",
    img: "/assets/home/hiw-3-conversation.webp",
    alt: "A live AI-led conversation asking follow-up questions",
  },
  {
    title: "Review the findings and decide what’s next",
    body: "TruPulse analyzes responses and prepares reports with key findings, themes, and supporting evidence. Your team reviews the results and decides how to act.",
    img: "/assets/home/hiw-4-findings.webp",
    alt: "Key finding with supporting quote and suggested next steps",
  },
];

// On desktop the list keeps the height of its tallest open step, so opening a step
// does not move the page; each answer animates open to its own measured height.
function useStepHeights(listRef) {
  useEffect(() => {
    const list = listRef.current;
    const items = [...list.children];
    let timer;
    function measure() {
      items.forEach((li) => {
        const p = li.querySelector("p");
        if (p) p.style.setProperty("--h", p.scrollHeight + 4 + "px");
      });
      if (window.innerWidth < 981) { list.style.minHeight = ""; return; }
      const current = items.map((li) => li.classList.contains("active"));
      list.style.minHeight = "0px";
      document.documentElement.classList.add("tp-measure");
      let max = 0;
      items.forEach((li) => {
        items.forEach((x) => x.classList.remove("active"));
        li.classList.add("active");
        max = Math.max(max, list.getBoundingClientRect().height);
      });
      items.forEach((li, i) => li.classList.toggle("active", current[i]));
      document.documentElement.classList.remove("tp-measure");
      list.style.minHeight = Math.ceil(max) + "px";
    }
    const schedule = () => { clearTimeout(timer); timer = setTimeout(measure, 120); };
    measure();
    window.addEventListener("resize", schedule);
    window.addEventListener("load", schedule);
    document.fonts?.ready.then(schedule);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("load", schedule);
    };
  }, [listRef]);
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);
  useStepHeights(listRef);


  return (
    <div className="split-feature reveal">
      <div className="tp-shot tp-hiw-stage" style={{ aspectRatio: "16/9" }} data-step-visual="">
        {STEPS.map((s, i) => (
          <img key={s.img} src={s.img} alt={s.alt} width="1600" height="900" loading="lazy" decoding="async" className={i === active ? "on" : undefined} />
        ))}
      </div>
      <ol className="feature-rows step-rows" data-step-rows="" ref={listRef}>
        {STEPS.map((s, i) => (
          <li key={s.title} className={i === active ? "active" : undefined}>
            <button type="button" onClick={() => setActive(i)}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div><h3>{s.title}</h3><p>{s.body}</p></div>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
