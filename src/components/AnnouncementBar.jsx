// AnnouncementBar.jsx
// A premium scrolling ticker above the navbar.
// Add/edit messages in the MESSAGES array below.
import React, { useState, useEffect } from "react";

const MESSAGES = [
  " Outfitting an office or hotel? Ask about our corporate bulk discount packages.",
  " Every piece is built-to-order in our Lagos workshop — brick by brick.",
  " Lead times: sofas 7–14 days · bed frames 12–16 days · chairs 5–7 days.",
  " WhatsApp us directly for custom dimensions and fabric samples.",
  " Outfitting an office or hotel? Ask about our corporate bulk discount packages.",
  " Every piece is built-to-order in our Lagos workshop — brick by brick.",
  " Lead times: sofas 7–14 days · bed frames 12–16 days · chairs 5–7 days.",
  " WhatsApp us directly for custom dimensions and fabric samples.",
];

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  // Respect users who close it — don't re-show on same session
  useEffect(() => {
    const closed = sessionStorage.getItem("announcementDismissed");
    if (closed) setDismissed(true);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("announcementDismissed", "true");
  };

  if (dismissed) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 200, // above navbar
      height: "36px",
      background: "#0e0e0e",
      borderBottom: "1px solid #C0572A",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    }}>
      {/* Left accent */}
      <div style={{
        flexShrink: 0,
        height: "100%",
        width: "6px",
        background: "#C0572A",
      }} />

      {/* Label */}
      <div style={{
        flexShrink: 0,
        padding: "0 12px",
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.55rem",
        color: "#C0572A",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        borderRight: "1px solid #2e2e2e",
        height: "100%",
        display: "flex",
        alignItems: "center",
        background: "#111111",
        whiteSpace: "nowrap",
      }}>
        LIVE
        {/* Blinking dot */}
        <span style={{
          display: "inline-block",
          width: "5px", height: "5px",
          borderRadius: "50%",
          background: "#C0572A",
          marginLeft: "6px",
          animation: "blink 1.2s ease-in-out infinite",
        }} />
      </div>

      {/* Scrolling ticker */}
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        <div style={{
          display: "flex",
          animation: "ticker-scroll 40s linear infinite",
          whiteSpace: "nowrap",
        }}>
          {MESSAGES.map((msg, i) => (
            <span key={i} style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.62rem",
              color: "#a89880",
              letterSpacing: "0.05em",
              paddingRight: "80px",
              flexShrink: 0,
            }}>
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        aria-label="Close announcement"
        style={{
          flexShrink: 0,
          background: "none",
          border: "none",
          color: "#3d3d3d",
          fontSize: "0.9rem",
          cursor: "pointer",
          padding: "0 12px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          transition: "color 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#C0572A")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#3d3d3d")}
      >
        ✕
      </button>

      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
