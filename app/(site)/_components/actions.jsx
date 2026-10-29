"use client";

import { openChat } from "@/lib/site";
import { useDemo } from "./DemoProvider";

// Client islands for the design's data-open-demo / data-chat-ask controls, so the
// sections around them can stay server components.

export function DemoButton({ mode = "form", useCase, className = "btn primary", children, ...rest }) {
  const { openDemo } = useDemo();
  return (
    <button className={className} type="button" onClick={() => openDemo(mode, { useCase })} {...rest}>
      {children}
    </button>
  );
}

export function DemoLink({ children, ...rest }) {
  const { openDemo } = useDemo();
  return (
    <a href="#" onClick={(event) => { event.preventDefault(); openDemo("form"); }} {...rest}>
      {children}
    </a>
  );
}

export function ChatButton({ className, ask, children, ...rest }) {
  return (
    <button className={className} type="button" onClick={() => openChat(ask)} {...rest}>
      {children}
    </button>
  );
}

export function ChatLink({ children, ...rest }) {
  return (
    <a href="#" onClick={(event) => { event.preventDefault(); openChat(); }} {...rest}>
      {children}
    </a>
  );
}
