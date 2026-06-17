// PriceCalculator.jsx — Interactive price builder with WhatsApp order link
import React, { useState } from "react";
import { calculatePrice, formatNaira, WHATSAPP_NUMBER } from "../data/products";

export default function PriceCalculator({ product, onClose }) {
  const [configIndex, setConfigIndex] = useState(0);
  const [fabricIndex, setFabricIndex] = useState(0);

  // ── Price Calculation ──────────────────────────────────────────
  // estimatedPrice = (basePrice × configMultiplier) + fabricSurcharge
  const estimatedPrice = calculatePrice(product, configIndex, fabricIndex);
  const selectedConfig = product.configurations[configIndex];
  const selectedFabric = product.fabrics[fabricIndex];

  // ── WhatsApp message builder ───────────────────────────────────
  const handleOrder = () => {
    const message = encodeURIComponent(
      `Hi Jboss! 👋\n\nI'd like to order the following:\n\n` +
      `🛋️ *Product:* ${product.name}\n` +
      `📐 *Configuration:* ${selectedConfig.label}\n` +
      `🪡 *Fabric/Finish:* ${selectedFabric.label}\n` +
      `💰 *Estimated Price:* ${formatNaira(estimatedPrice)}\n\n` +
      `Please confirm availability and lead time. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="slide-up w-full max-w-lg relative"
        style={{
          background: "#1a1a1a",
          border: "2px solid #C0572A",
          boxShadow: "8px 8px 0 #7a3118",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-start justify-between p-6 pb-4"
          style={{ borderBottom: "1px solid #2e2e2e" }}
        >
          <div>
            <p
              className="text-xs tracking-widest mb-1"
              style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
            >
              PRICE CALCULATOR — {product.id.toUpperCase()}
            </p>
            <h2
              className="font-display text-3xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#E8DCC8" }}
            >
              {product.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-2xl leading-none mt-1 px-2"
            style={{ color: "#6b5e52" }}
          >
            ✕
          </button>
        </div>

        {/* Product mini-info */}
        <div className="px-6 pt-4 pb-2">
          <div className="flex gap-2 flex-wrap mb-2">
            {Object.entries(product.specs).map(([k, v]) => (
              <span
                key={k}
                className="text-xs px-2 py-1"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  background: "#2e2e2e",
                  color: "#a89880",
                  fontSize: "0.65rem",
                }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* ── Configuration Selector ─────────────────────────── */}
        <div className="px-6 py-4">
          <p
            className="text-xs tracking-widest mb-3"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
          >
            01 — CONFIGURATION
          </p>
          <div className="grid grid-cols-2 gap-2">
            {product.configurations.map((cfg, i) => (
              <button
                key={i}
                className={`selector-btn p-3 text-left text-xs ${configIndex === i ? "active" : ""}`}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  border: "1px solid",
                  borderColor: configIndex === i ? "#C0572A" : "#3d3d3d",
                  background: configIndex === i ? "#C0572A" : "#111111",
                  color: configIndex === i ? "#E8DCC8" : "#a89880",
                  letterSpacing: "0.05em",
                }}
                onClick={() => setConfigIndex(i)}
              >
                <div className="font-bold mb-1">{cfg.label}</div>
                <div style={{ color: configIndex === i ? "#f5d5c5" : "#6b5e52", fontSize: "0.6rem" }}>
                  ×{cfg.multiplier.toFixed(2)} base price
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Fabric Selector ───────────────────────────────── */}
        <div className="px-6 py-4">
          <p
            className="text-xs tracking-widest mb-3"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
          >
            02 — FABRIC / FINISH
          </p>
          <div className="grid grid-cols-2 gap-2">
            {product.fabrics.map((fab, i) => (
              <button
                key={i}
                className={`selector-btn p-3 text-left text-xs ${fabricIndex === i ? "active" : ""}`}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  border: "1px solid",
                  borderColor: fabricIndex === i ? "#C0572A" : "#3d3d3d",
                  background: fabricIndex === i ? "#C0572A" : "#111111",
                  color: fabricIndex === i ? "#E8DCC8" : "#a89880",
                  letterSpacing: "0.05em",
                }}
                onClick={() => setFabricIndex(i)}
              >
                <div className="font-bold mb-1">{fab.label}</div>
                <div style={{ color: fabricIndex === i ? "#f5d5c5" : "#6b5e52", fontSize: "0.6rem" }}>
                  {fab.surcharge > 0 ? `+${formatNaira(fab.surcharge)}` : "Included"}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Price Display ─────────────────────────────────── */}
        <div
          className="mx-6 p-5 mb-4"
          style={{
            background: "#111111",
            border: "1px solid #2e2e2e",
            borderLeft: "4px solid #C0572A",
          }}
        >
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <p
                className="text-xs tracking-widest mb-1"
                style={{ fontFamily: "'Space Mono', monospace", color: "#6b5e52" }}
              >
                ESTIMATED PRICE
              </p>
              <div
                className="font-display text-5xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C0572A" }}
              >
                {formatNaira(estimatedPrice)}
              </div>
              <p
                className="text-xs mt-1"
                style={{ fontFamily: "'Space Mono', monospace", color: "#6b5e52" }}
              >
                Lead time: ~{product.leadTime}
              </p>
            </div>
            <div className="text-right text-xs" style={{ fontFamily: "'Space Mono', monospace", color: "#6b5e52" }}>
              <div>Base: {formatNaira(product.basePrice)}</div>
              <div>Config: ×{selectedConfig.multiplier}</div>
              <div>Fabric: +{formatNaira(selectedFabric.surcharge)}</div>
            </div>
          </div>
        </div>

        {/* ── WhatsApp Order Button ─────────────────────────── */}
        <div className="px-6 pb-6">
          <button
            onClick={handleOrder}
            className="whatsapp-pulse w-full py-4 text-sm font-bold tracking-widest transition-transform active:translate-y-0.5"
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
            📲 Order via WhatsApp
          </button>
          <p
            className="text-center mt-3 text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#6b5e52" }}
          >
            Tapping sends a pre-filled message with your selection
          </p>
        </div>
      </div>
    </div>
  );
}
