// FloatingWhatsApp.jsx — Persistent floating WhatsApp CTA
// Sends a pre-typed message to Jboss's WhatsApp
import React, { useState } from "react";
import { WHATSAPP_NUMBER } from "../data/products";

const PRE_TYPED_MESSAGE =
  "Hi Jboss! 👋 I found your website and I'd like to inquire about your furniture. Can we talk?";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    const text = encodeURIComponent(PRE_TYPED_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "24px",
        zIndex: 900,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#25D366",
        border: "2px solid #25D366",
        boxShadow: hovered ? "5px 5px 0 #1a8a42" : "3px 3px 0 #1a8a42",
        padding: hovered ? "12px 20px" : "14px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        overflow: "hidden",
        maxWidth: hovered ? "220px" : "52px",
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#0e0e0e"
        style={{ flexShrink: 0 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.526 5.858L.057 23.428a.5.5 0 0 0 .609.61l5.703-1.49A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.658-.5-5.186-1.373l-.37-.215-3.861 1.01 1.019-3.75-.228-.382A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>

      {/* Label — expands on hover */}
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.65rem",
          color: "#0e0e0e",
          fontWeight: "700",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s ease 0.05s",
        }}
      >
        Chat with Jboss
      </span>
    </button>
  );
}
