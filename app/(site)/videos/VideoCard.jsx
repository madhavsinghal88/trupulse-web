"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// A video card that opens in a lightbox. Until a video has a src, the card and the
// lightbox show the "coming soon" placeholder.
export default function VideoCard({ title, note, src, lead = false }) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const cardRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => { setShown(true); closeRef.current?.focus(); });
    const onKey = (event) => { if (event.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    return () => { cancelAnimationFrame(frame); document.removeEventListener("keydown", onKey); };
  }, [open]);

  function close() {
    setShown(false);
    setTimeout(() => { setOpen(false); cardRef.current?.focus(); }, 260);
  }

  const slot = (
    <div className="developer-video-slot" aria-label={`${title} video placeholder`}>
      <span className="video-slot-play" aria-hidden="true">&#9654;</span>
      <strong>{title}</strong>
      <small>{note}</small>
      <span className="tp-soon">Video coming soon</span>
    </div>
  );

  return (
    <>
      <figure
        ref={cardRef}
        className={`vid-card${lead ? " vid-card-lead" : ""}`}
        tabIndex={0}
        role="button"
        aria-label={`Play: ${title}`}
        onClick={() => setOpen(true)}
        onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setOpen(true); } }}
      >
        {slot}
      </figure>
      {open && createPortal(
        <div
          className={`tp-lb${shown ? " open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={(event) => { if (event.target === event.currentTarget) close(); }}
        >
          <div className="tp-lb-box">
            {src ? <video src={src} controls autoPlay playsInline /> : slot}
            <button ref={closeRef} type="button" className="tp-x" aria-label="Close video" onClick={close} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
