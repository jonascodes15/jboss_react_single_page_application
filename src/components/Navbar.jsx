// Navbar.jsx
// Logo: uses /public/logo.png — replace with Jboss's real logo file
import React, { useState, useEffect } from "react";

export default function Navbar({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "home", label: "Home" },
    { key: "catalog", label: "Catalog" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
  ];

  const handleNav = (key) => {
    setActiveTab(key);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: "36px", left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(14,14,14,0.97)" : "rgba(14,14,14,0.85)",
      borderBottom: "1px solid #1e1e1e",
      backdropFilter: "blur(8px)",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1152px", margin: "0 auto", padding: "8px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* ── Logo image from public/logo.png ── */}
        <button onClick={() => handleNav("home")} style={{
          display: "flex", alignItems: "center", gap: "10px",
          background: "none", border: "none", cursor: "pointer", padding: 0,
        }}>
          <img
            src="https://i.ibb.co/1G4PSQJM/logoo.jpg"
            alt="J-Boss Furnitures"
            style={{
              height: "42px",
              width: "auto",
              objectFit: "contain",
              // Invert black logo to white/cream so it shows on dark navbar.
              // Remove this filter if your logo is already light-coloured.
              filter: "invert(1) sepia(1) saturate(2) hue-rotate(340deg) brightness(0.85)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#E8DCC8", letterSpacing: "0.12em", lineHeight: "1" }}>J-BOSS</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#C0572A", letterSpacing: "0.28em", textTransform: "uppercase" }}>FURNITURES</span>
          </div>
        </button>

        {/* ── Desktop nav ── */}
        <div style={{ display: "none" }} className="md-nav">
          {links.map((l) => (
            <button key={l.key} onClick={() => handleNav(l.key)}
              className={`nav-link ${activeTab === l.key ? "active" : ""}`}
              style={{ marginLeft: "2rem" }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => handleNav("contact")} style={{
            marginLeft: "2rem",
            fontFamily: "'Space Mono', monospace", fontSize: "0.65rem",
            background: "#C0572A", color: "#E8DCC8",
            border: "2px solid #C0572A", boxShadow: "3px 3px 0 #7a3118",
            padding: "8px 16px", textTransform: "uppercase",
            letterSpacing: "0.15em", cursor: "pointer",
          }}>Order Now</button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "none" }}
          aria-label="Toggle menu">
          <span style={{ display: "block", width: "22px", height: "2px", background: "#C0572A", marginBottom: "5px" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#C0572A", marginBottom: "5px" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#C0572A" }} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div style={{ background: "#0e0e0e", borderTop: "1px solid #2e2e2e" }} className="mobile-menu">
          {links.map((l) => (
            <button key={l.key} onClick={() => handleNav(l.key)} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "16px 24px", fontFamily: "'Space Mono', monospace",
              fontSize: "0.75rem", color: activeTab === l.key ? "#C0572A" : "#E8DCC8",
              background: "none", border: "none", borderBottom: "1px solid #1e1e1e",
              textTransform: "uppercase", letterSpacing: "0.12em", cursor: "pointer",
            }}>{l.label}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .md-nav { display: flex !important; align-items: center; }
          .mobile-hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .md-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
