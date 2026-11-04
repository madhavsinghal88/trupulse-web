"use client";

import { useEffect, useRef, useState } from "react";
import { CLOSED_EVENT, openVideo, videoSource } from "./VideoPlayer";

const SCRUB_SECONDS = 10;

// A video that plays on its own, muted and looping, filling its slot, with transport
// controls (play/pause, stop, scrub) plus mute and expand at the bottom. Expand opens
// it in the video pop-up from the same point. Renders nothing if the file fails to load,
// so the slot's placeholder shows through.
export default function AutoplayVideo({ videoKey, label }) {
  const src = videoSource(videoKey);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [failed, setFailed] = useState(false);

  // Resume the muted preview once the pop-up closes.
  useEffect(() => {
    const onClosed = (event) => {
      if (event.detail?.key !== videoKey) return;
      const v = videoRef.current;
      if (!v) return;
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    };
    window.addEventListener(CLOSED_EVENT, onClosed);
    return () => window.removeEventListener(CLOSED_EVENT, onClosed);
  }, [videoKey]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, [src, failed]);

  if (!src || failed) return null;

  function togglePlay() {
    const v = videoRef.current;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }

  function stop() {
    const v = videoRef.current;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  }

  function scrub(delta) {
    const v = videoRef.current;
    const duration = Number.isFinite(v.duration) ? v.duration : Infinity;
    v.currentTime = Math.min(Math.max(0, v.currentTime + delta), duration);
  }

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
      <div className="tp-autoplay-controls" role="group" aria-label={`${label} controls`}>
        <div className="tp-autoplay-transport">
          <button type="button" onClick={() => scrub(-SCRUB_SECONDS)} aria-label={`Rewind ${SCRUB_SECONDS} seconds`} title={`Rewind ${SCRUB_SECONDS}s`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 12 18 7v10l-7-5Zm-7 0 7-5v10l-7-5Z" fill="currentColor" /></svg>
          </button>
          <button type="button" onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"} title={playing ? "Pause" : "Play"}>
            {playing ? (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.5v14H7zm6.5 0H17v14h-3.5z" fill="currentColor" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" /></svg>
            )}
          </button>
          <button type="button" onClick={stop} aria-label="Stop video" title="Stop">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="1.5" fill="currentColor" /></svg>
          </button>
          <button type="button" onClick={() => scrub(SCRUB_SECONDS)} aria-label={`Forward ${SCRUB_SECONDS} seconds`} title={`Forward ${SCRUB_SECONDS}s`}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 12 6 7v10l7-5Zm7 0-7-5v10l7-5Z" fill="currentColor" /></svg>
          </button>
        </div>
        <div className="tp-autoplay-meta">
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
      </div>
    </>
  );
}
