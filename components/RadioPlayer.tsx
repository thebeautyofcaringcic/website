"use client";

import { useRef, useState } from "react";

const AUDIO_SRC = "/media/bbc-radio-bristol-interview.mp3";

function formatTime(seconds: number) {
  const s = Math.max(0, Math.floor(seconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export default function RadioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(153);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) void audio.play();
    else audio.pause();
  };

  const seek = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrent(value);
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        maxWidth: "560px",
        padding: "16px 44px 16px 16px",
        borderRadius: "999px",
        background: "rgba(251, 213, 225, 0.08)",
        border: "1px solid #6B4569",
        boxSizing: "border-box",
      }}
    >
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause the BBC Radio Bristol interview" : "Play the BBC Radio Bristol interview"}
        style={{
          flex: "0 0 60px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          background: "#EC4B8A",
          color: "#3A1B3A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {playing ? (
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="4" width="5" height="16" rx="1.5" fill="currentColor" />
            <rect x="14" y="4" width="5" height="16" rx="1.5" fill="currentColor" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z" fill="currentColor" />
          </svg>
        )}
      </button>
      <div style={{ flex: "1 1 auto", minWidth: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
          <div style={{ minWidth: "0" }}>
            <div
              style={{
                fontFamily: "var(--font-josefin), sans-serif",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "12px",
                fontWeight: 600,
                color: "#F7A9C6",
              }}
            >
              BBC Radio Bristol
            </div>
            <div style={{ fontSize: "15px", color: "#FBD5E1" }}>Natacha&rsquo;s interview with James Hansen</div>
          </div>
          <div style={{ fontSize: "13px", color: "#E9C9D8", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
            {formatTime(current)} / {formatTime(duration)}
          </div>
        </div>
        <input
          type="range"
          className="radio-seek"
          min={0}
          max={duration || 0}
          step={1}
          value={current}
          onChange={(e) => seek(Number(e.target.value))}
          aria-label="Seek through the interview"
          aria-valuetext={`${formatTime(current)} of ${formatTime(duration)}`}
          style={{
            background: `linear-gradient(to right, #EC4B8A ${progress}%, #6B4569 ${progress}%)`,
          }}
        />
      </div>
    </div>
  );
}
