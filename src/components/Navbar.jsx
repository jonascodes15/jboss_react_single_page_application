import React, { useState, useEffect } from "react";

function JBLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 40 C14 34, 10 26, 16 18 C18 28, 22 34, 28 38" stroke="#C0572A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M20 46 C10 42, 6 32, 10 22 C14 32, 18 40, 26 44" stroke="#C0572A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M22 52 C12 50, 8 40, 12 30 C16 40, 20 48, 28 52" stroke="#C0572A" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.45"/>
      <path d="M58 40 C66 34, 70 26, 64 18 C62 28, 58 34, 52 38" stroke="#C0572A" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M60 46 C70 42, 74 32, 70 22 C66 32, 62 40, 54 44" stroke="#C0572A" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M58 52 C68 50, 72 40, 68 30 C64 40, 60 48, 52 52" stroke="#C0572A" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.45"/>
      <text x="27" y="52" fontFamily="'Bebas Neue', Georgia, serif" fontSize="28" fontWeight="700" fill="#E8DCC8" letterSpacing="-1">J</text>
      <text x="41" y="52" fontFamily="'Bebas Neue', Georgia, serif" fontSize="28" fontWeight="700" fill="#E8DCC8" letterSpacing="-1">B</text>
    </svg>
  );
}

export default function Navbar({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { key: "home",    label: "Home" },
    { key: "catalog", label: "Catalog" },
    { key: "about",   label: "About" },
    { key: "contact", label: "Contact" },
  ];

  const handleNav = (key) => {
    setActiveTab(key);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(14,14,14,0.97)" : "rgba(14,14,14,0.85)",
      borderBottom: "1px solid #1e1e1e",
      backdropFilter: "blur(8px)",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1152px", margin: "0 auto", padding: "10px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <button onClick={() => handleNav("home")} style={{
          display: "flex", alignItems: "center", gap: "10px",
          background: "none", border: "none", cursor: "pointer", padding: 0,
        }}>
          <JBLogo size={40} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#E8DCC8", letterSpacing: "0.12em", lineHeight: "1" }}>J-BOSS</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#C0572A", letterSpacing: "0.28em", textTransform: "uppercase" }}>FURNITURES</span>
          </div>
        </button>

        {/* Desktop nav — visible only on md+ screens */}
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

        {/* Mobile hamburger — visible only on small screens */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "none" }}
          aria-label="Toggle menu">
          <span style={{ display: "block", width: "22px", height: "2px", background: "#C0572A", marginBottom: "5px" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#C0572A", marginBottom: "5px" }} />
          <span style={{ display: "block", width: "22px", height: "2px", background: "#C0572A" }} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
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

      {/* Responsive style tag — controls show/hide at breakpoint */}
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
