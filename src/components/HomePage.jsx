import React, { useState, useEffect, useCallback } from "react";
import FeaturedProducts from "./FeaturedProducts";

// ── Carousel images — replace with Jboss's real hosted photo URLs ──
const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=85",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1400&q=85",
  "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1400&q=85",
  "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1400&q=85",
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1400&q=85",
];

// ── Background carousel (no text, pure visual behind hero copy) ──
function BackgroundCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const next = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % CAROUSEL_IMAGES.length);
      setFading(false);
    }, 600);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      {/* Current image */}
      <img
        key={current}
        src={CAROUSEL_IMAGES[current]}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          opacity: fading ? 0 : 1,
          transition: "opacity 0.6s ease",
          filter: "brightness(0.22)",
        }}
      />
      {/* Dark gradient so left-side text stays readable */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, rgba(14,14,14,0.92) 45%, rgba(14,14,14,0.3) 100%)",
      }} />
      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
        background: "linear-gradient(to bottom, transparent, #111111)",
      }} />

      {/* Dot indicators — bottom right, subtle */}
      <div style={{
        position: "absolute", bottom: "20px", right: "24px",
        display: "flex", gap: "6px", alignItems: "center",
      }}>
        {CAROUSEL_IMAGES.map((_, i) => (
          <div key={i} style={{
            width: i === current ? "20px" : "5px",
            height: "5px",
            background: i === current ? "#C0572A" : "#3d3d3d",
            transition: "all 0.3s ease",
          }} />
        ))}
      </div>
    </div>
  );
}

// ── SVG Icons ─────────────────────────────────────────────────────
const IconMaterials = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="20" width="28" height="5" rx="1" stroke="#D4892A" strokeWidth="1.8" fill="none"/>
    <rect x="5" y="14" width="22" height="5" rx="1" stroke="#D4892A" strokeWidth="1.8" fill="none"/>
    <rect x="8" y="8" width="16" height="5" rx="1" stroke="#D4892A" strokeWidth="1.8" fill="none"/>
    <line x1="16" y1="4" x2="16" y2="8" stroke="#D4892A" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const IconCustom = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="16,3 29,27 3,27" stroke="#D4892A" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
    <line x1="16" y1="3" x2="16" y2="27" stroke="#D4892A" strokeWidth="1.2" strokeDasharray="2 2"/>
    <line x1="3" y1="27" x2="29" y2="27" stroke="#D4892A" strokeWidth="1.2" strokeDasharray="2 2"/>
    <circle cx="16" cy="3" r="1.5" fill="#D4892A"/>
    <circle cx="3" cy="27" r="1.5" fill="#D4892A"/>
    <circle cx="29" cy="27" r="1.5" fill="#D4892A"/>
  </svg>
);
const IconWorkshop = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 26 L14 10 L16 14 L20 6 L26 26" stroke="#D4892A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="4" y1="26" x2="28" y2="26" stroke="#D4892A" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="20" cy="6" r="2" stroke="#D4892A" strokeWidth="1.5" fill="none"/>
  </svg>
);

export default function HomePage({ setActiveTab }) {
  const handleShop = () => {
    setActiveTab("catalog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Jboss! 👋 I found your website and I'd like to inquire about your furniture. Can we talk?");
    window.open(`https://wa.me/2349071329638?text=${msg}`, "_blank");
  };

  return (
    <div style={{ background: "#111111" }}>

      {/* ── HERO — carousel runs as background, copy sits on top ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Carousel background */}
        <BackgroundCarousel />

        {/* Hero copy — z-index above the carousel */}
        <div style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(6rem, 12vw, 9rem) clamp(1.5rem, 6vw, 5rem) clamp(2rem, 6vw, 5rem)",
          maxWidth: "760px",
        }}>
          {/* Stamp */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="stamp">Lagos, Nigeria — Est. 2023</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.8rem, 12vw, 10rem)",
            color: "#E8DCC8",
            lineHeight: "0.92",
            letterSpacing: "-0.01em",
            marginBottom: "0.15rem",
          }}>
            RAW WOOD.
          </h1>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3.8rem, 12vw, 10rem)",
            color: "#C0572A",
            lineHeight: "0.92",
            letterSpacing: "-0.01em",
            marginBottom: "2rem",
          }}>
            PURE COMFORT.
          </h1>

          {/* Subheadline */}
          <p style={{
            color: "#a89880",
            fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
            lineHeight: "1.75",
            maxWidth: "520px",
            borderLeft: "3px solid #C0572A",
            paddingLeft: "1.25rem",
            marginBottom: "2.5rem",
          }}>
            Skip the massive showroom markups. We turn heavy-duty structural hardwood,
            high-density foam, and premium fabrics into bespoke luxury furniture —
            handcrafted right here in Lagos.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <button onClick={handleShop} style={{
              fontFamily: "'Space Mono', monospace",
              background: "#C0572A", color: "#E8DCC8",
              border: "2px solid #C0572A", boxShadow: "5px 5px 0 #7a3118",
              padding: "14px 32px", fontSize: "0.75rem",
              textTransform: "uppercase", letterSpacing: "0.2em",
              cursor: "pointer", fontWeight: "700",
            }}>
              Shop the Catalog →
            </button>

            <button onClick={handleWhatsApp} style={{
              fontFamily: "'Space Mono', monospace",
              background: "transparent", color: "#25D366",
              border: "2px solid #25D366", boxShadow: "5px 5px 0 #1a8a42",
              padding: "14px 32px", fontSize: "0.75rem",
              textTransform: "uppercase", letterSpacing: "0.2em",
              cursor: "pointer", fontWeight: "700",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.526 5.858L.057 23.428a.5.5 0 0 0 .609.61l5.703-1.49A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.658-.5-5.186-1.373l-.37-.215-3.861 1.01 1.019-3.75-.228-.382A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp Jboss
            </button>
          </div>

          {/* Stats */}
          <div style={{
            marginTop: "3rem", paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "grid", gridTemplateColumns: "repeat(3, auto)",
            gap: "2rem", width: "fit-content",
          }}>
            {[
              { num: "100+", label: "Pieces Delivered" },
              { num: "3+",   label: "Years Building" },
              { num: "100%", label: "Handcrafted" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "#C0572A", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#6b5e52", letterSpacing: "0.06em", marginTop: "3px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee ticker ─────────────────────────────────────── */}
      <div className="overflow-hidden py-3" style={{
        background: "#C0572A",
        borderTop: "2px solid #7a3118", borderBottom: "2px solid #7a3118",
      }}>
        <div className="marquee-track" style={{ display: "flex", gap: "3rem" }}>
          {Array(6).fill(["CUSTOM SOFAS","HANDCRAFTED","LAGOS MADE","QUALITY FOAM","PREMIUM FABRIC","OFFICE CHAIRS","BED FRAMES","BRICK BY BRICK"]).flat().map((t, i) => (
            <span key={i} style={{
              fontFamily: "'Bebas Neue', sans-serif", color: "#E8DCC8",
              letterSpacing: "0.2em", fontSize: "1rem", whiteSpace: "nowrap",
            }}>{t} &nbsp;·&nbsp;</span>
          ))}
        </div>
      </div>

      {/* ── Featured Products — directly below hero ─────────────── */}
      <FeaturedProducts onViewAll={() => { setActiveTab("catalog"); window.scrollTo({ top: 0, behavior: "smooth" }); }} />

      {/* ── Why Jboss ──────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "#0e0e0e" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
          <div style={{ borderLeft: "4px solid #C0572A", paddingLeft: "1.5rem", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#C0572A", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.5rem" }}>THE JBOSS DIFFERENCE</p>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: "#E8DCC8", lineHeight: 1 }}>
              NO SHORTCUTS.<br />NO NONSENSE.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", border: "1px solid #2e2e2e" }}>
            {[
              { icon: <IconMaterials />, title: "REAL MATERIALS", body: "We use solid hardwood frames and high-density foam. The kind that doesn't collapse after three months." },
              { icon: <IconCustom />,    title: "CUSTOM TO YOUR SPACE", body: "Every piece can be sized to your room. Share your dimensions and we'll build around them." },
              { icon: <IconWorkshop />,  title: "WORKSHOP HONEST", body: "Our photos are real workshop shots — no studio filters, no fake mockups. What you see is what you get." },
            ].map((card, i) => (
              <div key={i} style={{
                padding: "2rem",
                background: i === 1 ? "#1a1a1a" : "#111111",
                borderRight: i < 2 ? "1px solid #2e2e2e" : "none",
              }}>
                <div style={{ marginBottom: "1rem" }}>{card.icon}</div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "#E8DCC8", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>{card.title}</h3>
                <p style={{ color: "#7a6e65", lineHeight: "1.7", fontSize: "0.875rem" }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────── */}
      <section className="py-16 px-4 text-center" style={{ background: "#1a1a1a", borderTop: "2px solid #2e2e2e" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#C0572A", letterSpacing: "0.25em", marginBottom: "1rem", textTransform: "uppercase" }}>READY TO ORDER?</p>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "#E8DCC8", marginBottom: "2rem" }}>LET'S BUILD SOMETHING.</h2>
        <button onClick={handleShop} style={{
          fontFamily: "'Space Mono', monospace", background: "#C0572A", color: "#E8DCC8",
          border: "2px solid #C0572A", boxShadow: "5px 5px 0 #7a3118",
          padding: "14px 40px", fontSize: "0.75rem",
          textTransform: "uppercase", letterSpacing: "0.2em", cursor: "pointer",
        }}>Browse the Catalog →</button>
      </section>
    </div>
  );
}
