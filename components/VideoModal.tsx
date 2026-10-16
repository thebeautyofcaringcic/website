"use client";

import { useRef } from "react";

const VIDEO_SRC = "/media/carol-vorderman-hometown-heroes.mp4";

export default function VideoModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const open = () => {
    dialogRef.current?.showModal();
    void videoRef.current?.play().catch(() => {});
  };

  const close = () => dialogRef.current?.close();

  // Runs however the dialog closes (close button, Esc key or backdrop click)
  const stopVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          maxWidth: "560px",
          width: "100%",
          padding: "12px 24px 12px 12px",
          borderRadius: "28px",
          border: "1px solid #6B4569",
          background: "#FBD5E1",
          color: "#3A1B3A",
          textAlign: "left",
          cursor: "pointer",
          font: "inherit",
          boxSizing: "border-box",
        }}
      >
        <span style={{ position: "relative", flex: "0 0 112px", height: "84px", borderRadius: "18px", overflow: "hidden", display: "block" }}>
          <img
            src="/images/vorderman-poster.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 20%", display: "block" }}
          />
          <span
            style={{
              position: "absolute",
              inset: "0",
              margin: "auto",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#EC4B8A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z" fill="#3A1B3A" />
            </svg>
          </span>
        </span>
        <span style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
          <span
            style={{
              fontFamily: "var(--font-josefin), sans-serif",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontSize: "12px",
              fontWeight: 600,
              color: "#B02A63",
            }}
          >
            Pride of Britain · Watch the film
          </span>
          <span style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: "21px", lineHeight: 1.2 }}>
            Carol Vorderman&rsquo;s <strong style={{ fontWeight: 600 }}>Hometown Heroes</strong>
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="video-modal"
        aria-label="Carol Vorderman's Hometown Heroes"
        onClose={stopVideo}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className="video-modal__inner">
          <button type="button" className="video-modal__close" onClick={close} aria-label="Close video">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            poster="/images/vorderman-poster.jpg"
            controls
            playsInline
            preload="none"
            className="video-modal__video"
          />
          <p className="video-modal__caption">Natacha with Carol Vorderman · Pride of Britain Hometown Heroes</p>
        </div>
      </dialog>
    </>
  );
}
