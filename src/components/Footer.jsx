// Footer.jsx — Minimal brutalist footer
import React from "react";

export default function Footer({ setActiveTab }) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        background: "#0e0e0e",
        borderColor: "#2e2e2e",
      }}
    >
      {/* Rust tape top */}
      <div className="tape-divider" />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div
              className="font-display text-4xl leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#E8DCC8" }}
            >
              JBOSS FURNITURES
            </div>
            <p
              className="text-xs mt-1"
              style={{ fontFamily: "'Space Mono', monospace", color: "#6b5e52", letterSpacing: "0.1em" }}
            >
              Brick by brick — Lagos, Nigeria
            </p>
          </div>

          {/* Nav */}
          <div className="flex gap-6 flex-wrap">
            {[
              { key: "home", label: "Home" },
              { key: "catalog", label: "Catalog" },
              { key: "about", label: "About" },
              { key: "contact", label: "Contact" },
            ].map((l) => (
              <button
                key={l.key}
                onClick={() => {
                  setActiveTab(l.key);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xs tracking-widest transition-colors"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#6b5e52",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C0572A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b5e52")}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
          style={{ borderTop: "1px solid #2e2e2e" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#3d3d3d" }}
          >
            © {year} Jboss Furnitures. All pieces built by hand.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#3d3d3d" }}
          >
            Custom orders welcome — WhatsApp us anytime.
          </p>
        </div>
      </div>
    </footer>
  );
}
