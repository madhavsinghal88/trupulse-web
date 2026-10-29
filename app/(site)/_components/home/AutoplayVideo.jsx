"use client";

import { useEffect, useRef, useState } from "react";
import { CLOSED_EVENT, openVideo, videoSource } from "./VideoPlayer";

// A video that plays on its own, muted and looping, filling its slot, with mute and
// expand buttons at the bottom. Expand opens it in the video pop-up from the same point.
// Renders nothing if the file fails to load, so the slot's placeholder shows through.
export default function AutoplayVideo({ videoKey, label }) {
  const src = videoSource(videoKey);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);

  // Resume the muted preview once the pop-up closes.
  useEffect(() => {
    const onClosed = (event) => { if (event.detail?.key === videoKey) videoRef.current?.play().catch(() => {}); };
    window.addEventListener(CLOSED_EVENT, onClosed);
    return () => window.removeEventListener(CLOSED_EVENT, onClosed);
  }, [videoKey]);

  if (!src || failed) return null;

  function toggleMute() {
    const v = videoRef.current;
    v.muted = !v.muted;
    if (!v.muted) v.play().catch(() => {});
    setMuted(v.muted);
  }

  function expand() {
    const v = videoRef.current;
    v.pause();
    openVideo(videoKey, label, v.currentTime);
  }

  return (
    <>
      <video ref={videoRef} className="tp-autoplay-video" src={src} autoPlay muted loop playsInline preload="auto" aria-label={label} onError={() => setFailed(true)} />
      <div className="tp-autoplay-controls">
        <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute video" : "Mute video"} title={muted ? "Unmute" : "Mute"}>
          {muted ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" /><path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor" /><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          )}
        </button>
        <button type="button" onClick={expand} aria-label="Open video player" title="Open video player">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </>
  );
}
