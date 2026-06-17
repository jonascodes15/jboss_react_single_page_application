// ContactPage.jsx — WhatsApp-first contact with social links
import React, { useState } from "react";
import { WHATSAPP_NUMBER } from "../data/products";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleWhatsApp = (msg) => {
    const text = encodeURIComponent(msg || "Hi Jboss! I'd like to inquire about your furniture.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+234 810 000 0000"); // replace with real
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickMessages = [
    { label: "Custom Sofa Inquiry", msg: "Hi Jboss! I'm interested in a custom sofa. Can we talk about dimensions and fabric options?" },
    { label: "Bed Frame Order", msg: "Hi Jboss! I'd like to order a bed frame. Can you share availability and pricing?" },
    { label: "Office Furniture", msg: "Hi Jboss! I need office chairs and a desk for my workspace. Do you handle bulk orders?" },
    { label: "General Inquiry", msg: "Hi Jboss! I saw your work and I'd love to know more about what you offer." },
  ];

  return (
    <div className="min-h-screen pt-10 pb-20 px-4" style={{ background: "#111111" }}>
      <div className="max-w-4xl mx-auto">

        {/* ── Header ───────────────────────────────────────────── */}
        <div className="mb-12">
          <div className="tape-divider mb-6" />
          <p
            className="text-xs tracking-widest mb-2"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
          >
            LET'S TALK
          </p>
          <h1
            className="font-display text-6xl md:text-8xl mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#E8DCC8" }}
          >
            CONTACT
          </h1>
          <p style={{ color: "#7a6e65", maxWidth: "440px", fontSize: "0.9rem", lineHeight: "1.7" }}>
            No forms. No waiting. Just a direct WhatsApp message to Jboss.
            We respond fast because we're in the workshop, not behind a desk.
          </p>
        </div>

        {/* ── Primary WhatsApp CTA ──────────────────────────────── */}
        <div
          className="p-8 mb-8"
          style={{
            background: "#1a1a1a",
            border: "2px solid #25D366",
            boxShadow: "6px 6px 0 #1a8a42",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💬</span>
            <div>
              <h2
                className="font-display text-3xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#E8DCC8" }}
              >
                WhatsApp Jboss Directly
              </h2>
              <p
                className="text-xs"
                style={{ fontFamily: "'Space Mono', monospace", color: "#25D366" }}
              >
                Fastest way to reach us
              </p>
            </div>
          </div>
          <button
            onClick={() => handleWhatsApp()}
            className="whatsapp-pulse w-full py-4 text-sm font-bold tracking-widest mb-4"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "#25D366",
              color: "#0e0e0e",
              border: "2px solid #25D366",
              boxShadow: "4px 4px 0 #1a8a42",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Open WhatsApp Chat →
          </button>
          <button
            onClick={copyPhone}
            className="w-full py-3 text-xs tracking-widest"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "transparent",
              color: copied ? "#25D366" : "#6b5e52",
              border: "1px solid #2e2e2e",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            {copied ? "✓ Copied!" : "Copy Phone Number"}
          </button>
        </div>

        {/* ── Quick Message Templates ───────────────────────────── */}
        <div className="mb-10">
          <p
            className="text-xs tracking-widest mb-4"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
          >
            QUICK MESSAGE TEMPLATES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {quickMessages.map((qm, i) => (
              <button
                key={i}
                onClick={() => handleWhatsApp(qm.msg)}
                className="p-4 text-left transition-all"
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #2e2e2e",
                  color: "#a89880",
                  fontSize: "0.8rem",
                  fontFamily: "'Space Mono', monospace",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C0572A";
                  e.currentTarget.style.color = "#E8DCC8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2e2e2e";
                  e.currentTarget.style.color = "#a89880";
                }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ color: "#25D366" }}>→</span>
                  <span>{qm.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Social Links ──────────────────────────────────────── */}
        <div
          className="p-8"
          style={{ background: "#1a1a1a", border: "1px solid #2e2e2e" }}
        >
          <p
            className="text-xs tracking-widest mb-6"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
          >
            FIND US ONLINE
          </p>
          <div className="space-y-3">
            {[
              {
                platform: "Twitter / X",
                handle: "@J_bossFurniture",
                url: "https://twitter.com/J_bossFurniture",
                icon: "𝕏",
              },
              {
                platform: "Instagram",
                handle: "@jboss.furnitures",
                url: "https://instagram.com/jboss.furnitures", // update this
                icon: "◎",
              },
            ].map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 transition-all"
                style={{
                  background: "#111111",
                  border: "1px solid #2e2e2e",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C0572A")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2e2e2e")}
              >
                <span className="text-2xl w-8 text-center" style={{ color: "#C0572A" }}>
                  {s.icon}
                </span>
                <div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: "'Space Mono', monospace", color: "#6b5e52" }}
                  >
                    {s.platform}
                  </div>
                  <div style={{ color: "#E8DCC8", fontFamily: "'Space Mono', monospace", fontSize: "0.85rem" }}>
                    {s.handle}
                  </div>
                </div>
                <span className="ml-auto" style={{ color: "#3d3d3d" }}>→</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Location note ─────────────────────────────────────── */}
        <div
          className="mt-6 p-6"
          style={{
            background: "transparent",
            border: "1px solid #2e2e2e",
            borderLeft: "4px solid #C0572A",
          }}
        >
          <p
            className="text-xs tracking-widest mb-2"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
          >
            LOCATION
          </p>
          <p style={{ color: "#a89880", fontSize: "0.9rem", lineHeight: "1.6" }}>
            Workshop-based in <strong style={{ color: "#E8DCC8" }}>Lagos, Nigeria</strong>.
            We deliver across Lagos State. Contact us about delivery to other states.
          </p>
        </div>
      </div>
    </div>
  );
}
