// BuiltBy.jsx — Jonas Webworks credit, lives below the footer
import React from "react";

export default function BuiltBy() {
  return (
    <div style={{
      background: "#0a0a0a",
      borderTop: "1px solid #1a1a1a",
      padding: "10px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <a
        href="https://jonasweb.works"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          textDecoration: "none", opacity: 0.5, transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
        title="Built by Jonas Webworks"
      >
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#6b5e52", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Built by
        </span>
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" fill="#1a1a1a" rx="3"/>
          <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="#C0572A" fontFamily="'Bebas Neue', sans-serif" fontSize="15" letterSpacing="1">JW</text>
        </svg>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#a89880", letterSpacing: "0.08em", fontWeight: "700" }}>
          JONAS WEBWORKS
        </span>
      </a>
    </div>
  );
}
