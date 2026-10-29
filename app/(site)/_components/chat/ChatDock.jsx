"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useDemo } from "../DemoProvider";
import { FAQ_ANSWERS } from "../faq";
import { initChat } from "./engine";

// The TruPulse AI assistant launcher and panel, on every page except sign-in.
export default function ChatDock() {
  const pathname = usePathname();
  const hidden = pathname === "/login";
  return hidden ? null : <Dock />;
}

function Dock() {
  const dockRef = useRef(null);
  const { openDemo } = useDemo();

  // The engine drives this markup directly; React renders it once and leaves it alone.
  useEffect(() => initChat(dockRef.current, { faq: FAQ_ANSWERS, openDemo: () => openDemo("form") }), [openDemo]);

  return (
    <div className="chat-dock" ref={dockRef}>
        <div className="chat-panel" data-chat-panel hidden role="dialog" aria-label="TruPulse AI Assistant">
          <header className="chat-head">
            <button className="chat-icon chat-back" type="button" aria-label="Back" data-chat-back hidden><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            <span className="chat-avatar" data-chat-avatar aria-hidden="true"><svg className="ico-bubble" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path d="M16 4c7.2 0 13 4.6 13 10.3S23.2 24.6 16 24.6c-1.2 0-2.4-.1-3.5-.4l-6 3a.7.7 0 0 1-1-.8l1.2-4A9.6 9.6 0 0 1 3 14.3C3 8.6 8.8 4 16 4Z" fill="currentColor" />
    <circle cx="10.6" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)" /><circle cx="16" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)" /><circle cx="21.4" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)" />
    </svg></span>
            <span className="chat-id"><strong data-chat-title>TruPulse AI Assistant</strong><small data-chat-sub><i className="chat-dot"></i>AI assistant</small></span>
            <span className="chat-head-actions">
              <button className="chat-icon" type="button" aria-label="Conversation menu" aria-expanded="false" data-chat-menu><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" /></svg></button>
              <button className="chat-icon" type="button" aria-label="Close chat" title="Close chat" data-chat-close><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg></button>
            </span>
            <div className="chat-menu" data-chat-menu-list hidden role="menu">
              <button type="button" role="menuitem" data-chat-action="new">Start a new conversation</button>
              <button type="button" role="menuitem" data-chat-action="clear">Clear this conversation</button>
              <button type="button" role="menuitem" data-chat-action="demo">Book a demo instead</button>
            </div>
          </header>
    
          <div className="chat-body">
            
            <section className="chat-view is-on" data-view="home">
              <div className="chat-greet">
                <p className="chat-hi">Hi! <span className="chat-wave" aria-hidden="true">👋</span></p>
                <p className="chat-greet-sub">I can help you explore how TruPulse uses AI to create, conduct, and analyze surveys, 1:1 discussions, and focus groups—with your team guiding the process.</p>
              </div>
              
              <button className="chat-card chat-card-btn" type="button" data-chat-new>
                <span><strong>New conversation</strong><small>AI assistant</small></span>
                <i aria-hidden="true"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.4 20.6 21 12 3.4 3.4l2.1 7.2 9 1.4-9 1.4-2.1 7.2Z" fill="currentColor" /></svg></i>
              </button>
            </section>
    
            
            <section className="chat-view" data-view="chat">
              <div className="chat-log" data-chat-log role="log" aria-live="polite"></div>
              <form className="chat-form" data-chat-form>
                <label className="sr-only" htmlFor="chat-input">Your message</label>
                <input id="chat-input" type="text" placeholder="Ask a question about TruPulse…" autoComplete="off" />
                <button className="chat-icon chat-emoji" type="button" aria-label="Insert emoji" title="Insert emoji" data-chat-emoji><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" strokeWidth="1.9" /><circle cx="9.3" cy="10.2" r="1.15" fill="currentColor" /><circle cx="14.7" cy="10.2" r="1.15" fill="currentColor" /><path d="M8.4 14.2a4.4 4.4 0 0 0 7.2 0" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" /></svg></button>
                <button className="chat-send" type="submit" aria-label="Send message" title="Send" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.4 20.6 21 12 3.4 3.4l2.1 7.2 9 1.4-9 1.4-2.1 7.2Z" fill="currentColor" /></svg></button>
              </form>
              <div className="chat-picker" data-chat-picker hidden>
                <label className="chat-search">
                  <span className="sr-only">Search emoji</span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M15.8 15.8 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                  <input type="search" placeholder="Search emoji" autoComplete="off" data-emoji-search />
                </label>
                <div className="chat-emoji-grid" data-emoji-grid></div>
              </div>
            </section>
    
            
            <section className="chat-view" data-view="messages">
              <p className="chat-section-title">Start a new chat</p>
              <button className="chat-card chat-card-btn" type="button" data-chat-new>
                <span><strong>New conversation</strong><small>AI assistant</small></span>
                <i aria-hidden="true"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.4 20.6 21 12 3.4 3.4l2.1 7.2 9 1.4-9 1.4-2.1 7.2Z" fill="currentColor" /></svg></i>
              </button>
              <p className="chat-section-title">Recent</p>
              <ul className="chat-threads" data-chat-threads></ul>
              <p className="chat-empty" data-chat-empty>No conversations yet — start one above.</p>
            </section>
          </div>
    
          <nav className="chat-tabs" aria-label="Assistant sections">
            <button type="button" className="is-on" data-chat-tab="home" aria-label="Home"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg><span>Home</span></button>
            <button type="button" data-chat-tab="messages" aria-label="Messages"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12.4c0 3.6-3.6 6.5-8 6.5-.9 0-1.7-.1-2.5-.3L5 21l1-3.2A6.6 6.6 0 0 1 4 12.4C4 8.8 7.6 6 12 6s8 2.8 8 6.4Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg><span>Messages</span></button>
          </nav>
        </div>
    
        <button className="chat-launch" type="button" aria-expanded="false" aria-label="Open chat" data-chat-launch>
          <svg className="chat-ring" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
    <defs><path id="chat-ring-path" d="M60 12a48 48 0 1 1 0 96 48 48 0 1 1 0-96" /></defs>
    <text textAnchor="start"><textpath href="#chat-ring-path" startOffset="0" textLength="301.6" lengthAdjust="spacing">we're here to help · we're here to help ·</textpath></text>
    </svg>
          <span className="chat-launch-face" aria-hidden="true"><svg className="ico-bubble" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path d="M16 4c7.2 0 13 4.6 13 10.3S23.2 24.6 16 24.6c-1.2 0-2.4-.1-3.5-.4l-6 3a.7.7 0 0 1-1-.8l1.2-4A9.6 9.6 0 0 1 3 14.3C3 8.6 8.8 4 16 4Z" fill="currentColor" />
    <circle cx="10.6" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)" /><circle cx="16" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)" /><circle cx="21.4" cy="14.3" r="1.9" fill="var(--bubble-dot,#fff)" />
    </svg></span>
          <span className="chat-launch-down" aria-hidden="true"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          <span className="chat-launch-hand" aria-hidden="true">👋</span>
        </button>
      </div>
  );
}
