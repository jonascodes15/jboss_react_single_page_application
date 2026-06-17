// HeroCarousel.jsx — Auto-playing workshop photo carousel
// Each slide has unique copy. Clicking any slide opens the catalog.
import React, { useState, useEffect, useCallback } from "react";

// Carousel slides — replace image URLs with Jboss's real hosted workshop photos
const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85",
    eyebrow: "SIGNATURE SOFAS",
    headline: "Where Every Stitch\nTells a Story",
    body: "Hand-stitched seams. Foam cut to spec. Built for the living room that does double duty — family, guests, and everything in between.",
    tag: "SOFAS FROM ₦145,000",
  },
  {
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=85",
    eyebrow: "BED FRAMES",
    headline: "Sleep on\nSolid Ground",
    body: "Iroko hardwood doesn't flex, warp, or squeak. Our bed frames are engineered for a decade of use — not just the first six months.",
    tag: "BED FRAMES FROM ₦210,000",
  },
  {
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1200&q=85",
    eyebrow: "OFFICE CHAIRS",
    headline: "Productive Hours\nDeserve Better",
    body: "Your workspace should match your ambition. Custom-built office chairs that hold their shape long after the warranty on cheap imports expires.",
    tag: "CHAIRS FROM ₦65,000",
  },
  {
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200&q=85",
    eyebrow: "ACCENT CHAIRS",
    headline: "One Chair.\nEvery Room.",
    body: "The piece that pulls a room together. Pick your wood finish, your fabric, your size — we build it around your space, not the other way round.",
    tag: "ACCENT CHAIRS FROM ₦95,000",
  },
  {
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=85",
    eyebrow: "OFFICE & DESKS",
    headline: "Built for the\nLong Shift",
    body: "Solid-top desks with hardwood edge banding. No wobble. No compromise. The kind of workspace that makes work feel intentional.",
    tag: "DESKS FROM ₦80,000",
  },
];

export default function HeroCarousel({ onSlideClick }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 350);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  // Auto-advance every 5s unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const slide = SLIDES[current];

  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer group"
      style={{ height: "clamp(420px, 75vh, 680px)" }}
      onClick={onSlideClick}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      title="Click to browse the full catalog"
    >
      {/* ── Background image ─────────────────────────────────── */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        <img
          src={slide.image}
          alt={slide.headline}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        {/* Grain overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(17,17,17,0.85) 40%, rgba(17,17,17,0.2) 100%)",
          }}
        />
      </div>

      {/* ── Slide copy ───────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-8 md:p-14"
        style={{ opacity: isTransitioning ? 0 : 1, transition: "opacity 0.4s ease" }}
      >
        {/* Eyebrow */}
        <div
          className="mb-3 inline-flex items-center gap-2"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            color: "#C0572A",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "24px",
              height: "2px",
              background: "#C0572A",
            }}
          />
          {slide.eyebrow}
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            color: "#E8DCC8",
            lineHeight: "0.95",
            marginBottom: "1rem",
            whiteSpace: "pre-line",
          }}
        >
          {slide.headline}
        </h2>

        {/* Body */}
        <p
          style={{
            color: "#a89880",
            fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
            lineHeight: "1.7",
            maxWidth: "460px",
            marginBottom: "1.5rem",
          }}
        >
          {slide.body}
        </p>

        {/* Tag + CTA hint */}
        <div className="flex items-center gap-4 flex-wrap">
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              color: "#E8DCC8",
              background: "#C0572A",
              padding: "4px 12px",
              letterSpacing: "0.1em",
            }}
          >
            {slide.tag}
          </span>
          <span
            className="group-hover:text-rust transition-colors"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              color: "#6b5e52",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Click to browse catalog →
          </span>
        </div>
      </div>

      {/* ── Dot indicators ───────────────────────────────────── */}
      <div
        className="absolute bottom-6 right-8 flex gap-2 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              background: i === current ? "#C0572A" : "#3d3d3d",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Slide counter ────────────────────────────────────── */}
      <div
        className="absolute top-6 right-8"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.65rem",
          color: "#3d3d3d",
          letterSpacing: "0.1em",
        }}
      >
        {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
      </div>

      {/* ── Progress bar ─────────────────────────────────────── */}
      {!isPaused && (
        <div
          className="absolute bottom-0 left-0 h-0.5"
          style={{
            background: "#C0572A",
            animation: "progress-bar 5s linear",
            transformOrigin: "left",
          }}
        />
      )}

      <style>{`
        @keyframes progress-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
