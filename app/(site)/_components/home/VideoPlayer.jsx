"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Video files go here once uploaded: key = the key passed to openVideo().
const SOURCES = {
  hero: "https://trupulse-ai.s3.us-east-1.amazonaws.com/Trupulse+website/Trupulse_ai_website_final.mp4",
  "1:1 discussion product walkthrough": "https://trupulse-ai.s3.us-east-1.amazonaws.com/Trupulse+website/1-1Discussions_Website_final.mp4",
  "Employee Survey product walkthrough": "https://trupulse-ai.s3.us-east-1.amazonaws.com/Trupulse+website/Trupulse_survey_final_audiomp4.mp4",
  "Focus Group product walkthrough": "https://trupulse-ai.s3.us-east-1.amazonaws.com/Trupulse+website/Focusgroup_website_final.mp4",
};

const EVENT = "tp-open-video";
export const CLOSED_EVENT = "tp-video-closed";

export const hasVideo = (key) => Boolean(SOURCES[key]);
export const videoSource = (key) => SOURCES[key] || "";

export function openVideo(key, title, startAt = 0) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: { key, title, startAt } }));
}

// Full-screen player for the home page walkthroughs. Shows "coming soon" until a
// video has a source.
export default function VideoPlayer() {
  const [video, setVideo] = useState(null);
  const boxRef = useRef(null);
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const onOpen = (event) => setVideo({ ...event.detail, last: document.activeElement });
    window.addEventListener(EVENT, onOpen);
    return () => window.removeEventListener(EVENT, onOpen);
  }, []);

  const src = video ? SOURCES[video.key] || SOURCES[(video.key || "").toLowerCase()] || "" : "";

  useEffect(() => {
    if (!video) return;
    document.documentElement.classList.add("tp-dm-lock");
    closeRef.current?.focus();
    const v = videoRef.current;
    if (src && v) {
      // Continue from where the inline preview was, with sound.
      if (video.startAt) v.currentTime = video.startAt;
      v.muted = false;
      v.play().catch(() => {});
    }
    function onKey(event) {
      if (event.key === "Escape") { close(); return; }
      if (event.key !== "Tab") return;
      const items = [...boxRef.current.querySelectorAll("button,video[controls]:not([hidden])")];
      const i = items.indexOf(document.activeElement);
      if (event.shiftKey && i <= 0) { event.preventDefault(); items[items.length - 1].focus(); }
      else if (!event.shiftKey && i === items.length - 1) { event.preventDefault(); items[0].focus(); }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("tp-dm-lock");
    };
  }, [video, src]);

  function close() {
    videoRef.current?.pause();
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    video?.last?.focus?.();
    window.dispatchEvent(new CustomEvent(CLOSED_EVENT, { detail: { key: video?.key } }));
    setVideo(null);
  }

  function fullscreen() {
    const el = src ? videoRef.current : frameRef.current;
    (el.requestFullscreen || el.webkitRequestFullscreen)?.call(el);
  }

  if (!video) return null;
  return createPortal(
    <div className="tp-vp open" data-tp-vp="" role="dialog" aria-modal="true" aria-label="Video player" ref={boxRef}
      onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="tp-vp-box">
        <div className="tp-vp-head">
          <strong>{video.title || "Video"}</strong>
          <div className="tp-vp-actions">
            <button className="tp-vp-btn" type="button" aria-label="Fullscreen" onClick={fullscreen}>&#x26F6;</button>
            <button ref={closeRef} className="tp-vp-btn" type="button" aria-label="Close video" onClick={close}>&times;</button>
          </div>
        </div>
        <div className="tp-vp-frame" ref={frameRef}>
          <video ref={videoRef} src={src || undefined} hidden={!src} controls playsInline preload="metadata" />
          <div className="tp-vp-empty" hidden={Boolean(src)}>
            <span>Video coming soon</span>The video will play here once it is uploaded.
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
