"use client";

import { useRef, useState } from "react";
import { useDemo } from "../DemoProvider";
import { tabKeyDown, useEqualHeight } from "./tabs";

const USE_CASES = [
  {
    kicker: "Understand experiences",
    title: "What is the experience really like—and why?",
    body: "Explore what people value, where they encounter friction, and how their experiences differ. Look beyond satisfaction scores to understand the moments shaping their views.",
    tags: ["Employee onboarding", "Customer service", "Student support", "Community programs"],
    ways: "Use a survey to gather feedback across your audience, or AI-led 1:1 discussions to explore specific experiences in depth.",
  },
  {
    kicker: "Discover needs",
    title: "What do people need that we are not yet addressing?",
    body: "Learn about unmet needs, everyday challenges, and gaps in support. Understand what people say would help and why it matters to them.",
    tags: ["Customer discovery", "Employee development", "Member services", "Community needs"],
    ways: "Start with 1:1 discussions to uncover individual needs, or focus groups to explore shared challenges. Use a survey to investigate emerging themes with a wider audience.",
  },
  {
    kicker: "Test ideas",
    title: "How do people respond to this idea—and what would improve it?",
    body: "Explore initial reactions to a proposed product, service, policy, or program. Understand what feels useful, what creates uncertainty, and what questions remain.",
    tags: ["Product concepts", "Service proposals", "School initiatives", "Membership benefits"],
    ways: "Use focus groups to discuss reactions and improvements, or 1:1 discussions for independent feedback. Use a survey to gather structured responses to specific options.",
  },
  {
    kicker: "Navigate change",
    title: "How are people experiencing this change?",
    body: "Understand expectations, concerns, and support needs before, during, or after a change. Explore where people feel prepared and where they need more clarity or help.",
    tags: ["Organizational changes", "New technology", "Campus changes", "Public service updates"],
    ways: "Use surveys at key stages to gather feedback, with 1:1 discussions or focus groups to explore the experiences behind the answers.",
  },
  {
    kicker: "Strengthen engagement",
    title: "What keeps people involved—and what gets in the way?",
    body: "Explore the experiences and motivations that shape participation, connection, and continued involvement. Hear from people who are engaged and those who are stepping back.",
    tags: ["Employee retention", "Customer loyalty", "Member renewal", "Volunteer participation"],
    ways: "Use 1:1 discussions to explore personal motivations and reasons for leaving, or surveys to gather feedback from people with different levels of involvement.",
  },
  {
    kicker: "Improve communication",
    title: "Is our message understood the way we intended?",
    body: "Learn how people interpret a message, what remains unclear, and what additional information they need. Explore differences between what you intend to communicate and what people take away.",
    tags: ["Employee announcements", "Customer messaging", "Student guidance", "Public information"],
    ways: "Use 1:1 discussions to hear interpretations in people’s own words, or surveys with follow-up questions to explore clarity and understanding across your audience.",
  },
];

export default function UseCases() {
  const { openDemo } = useDemo();
  const [active, setActive] = useState(0);
  const panelRef = useRef(null);
  useEqualHeight(panelRef, USE_CASES.length, active, setActive);
  const item = USE_CASES[active];

  return (
    <div className="use-case-explorer reveal">
      <div className="use-case-tabs" role="tablist" aria-label="Research needs">
        {USE_CASES.map((u, i) => (
          <button
            key={u.kicker}
            className={`use-case-tab${i === active ? " active" : ""}`}
            type="button"
            role="tab"
            id={`utab-${i}`}
            aria-controls="upanel"
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(event) => tabKeyDown(event, i, USE_CASES.length, setActive)}
          >
            {u.kicker}
          </button>
        ))}
      </div>
      <div className="use-case-panel" id="upanel" role="tabpanel" aria-labelledby={`utab-${active}`} tabIndex={0} ref={panelRef}>
        <p className="section-label">{item.kicker}</p>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <p className="uc-chip-label">Example use cases</p>
        <div className="use-case-tags">{item.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="use-case-ways"><small>Ways to explore it</small><p>{item.ways}</p></div>
        <button className="btn primary uc-demo" type="button" onClick={() => openDemo("form", { useCase: `${item.kicker}: ${item.title}` })}>
          Explore this in a demo <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}
