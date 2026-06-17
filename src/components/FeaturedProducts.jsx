// FeaturedProducts.jsx — Short showcase below the hero, drives users to full catalog
import React, { useState } from "react";
import { PRODUCTS, formatNaira } from "../data/products";
import PriceCalculator from "./PriceCalculator";

const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

export default function FeaturedProducts({ onViewAll }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-16 px-4" style={{ background: "#111111" }}>
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────────── */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                color: "#C0572A",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              HANDPICKED FROM THE WORKSHOP
            </p>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                color: "#E8DCC8",
                lineHeight: "1",
              }}
            >
              FEATURED PIECES
            </h2>
          </div>

          <button
            onClick={onViewAll}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              color: "#C0572A",
              background: "transparent",
              border: "1px solid #C0572A",
              padding: "10px 20px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#C0572A";
              e.currentTarget.style.color = "#E8DCC8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#C0572A";
            }}
          >
            View Full Catalog →
          </button>
        </div>

        {/* ── Product grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((product, i) => (
            <FeaturedCard
              key={product.id}
              product={product}
              index={i}
              onConfigure={() => setSelectedProduct(product)}
              onViewAll={onViewAll}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <PriceCalculator
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

function FeaturedCard({ product, index, onConfigure, onViewAll }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col"
      style={{
        background: "#1a1a1a",
        border: "1px solid #2e2e2e",
        cursor: "pointer",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        transform: hovered ? "translate(-3px, -3px)" : "none",
        boxShadow: hovered ? "5px 5px 0 #C0572A" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "3/2", background: "#0e0e0e" }}
        onClick={onViewAll}
      >
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.85)",
              transition: "transform 0.4s ease",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "3rem",
                color: "#C0572A",
                opacity: 0.15,
              }}
            >
              JBOSS
            </span>
          </div>
        )}

        {/* Category badge */}
        <div
          className="absolute top-2 left-2 px-2 py-1"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.55rem",
            background: "rgba(17,17,17,0.88)",
            color: "#6b5e52",
            border: "1px solid #2e2e2e",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {product.category}
        </div>

        {product.badge && (
          <div
            className="absolute top-2 right-2 px-2 py-1"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              background: "#C0572A",
              color: "#E8DCC8",
              letterSpacing: "0.08em",
            }}
          >
            {product.badge}
          </div>
        )}
      </div>

      {/* Copy */}
      <div className="p-4 flex flex-col flex-1">
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.35rem",
            color: "#E8DCC8",
            letterSpacing: "0.03em",
            marginBottom: "2px",
            lineHeight: "1.1",
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            color: "#6b5e52",
            fontStyle: "italic",
            marginBottom: "0.75rem",
          }}
        >
          "{product.tagline}"
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                color: "#6b5e52",
                letterSpacing: "0.05em",
              }}
            >
              FROM
            </p>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.4rem",
                color: "#C0572A",
              }}
            >
              {formatNaira(product.basePrice)}
            </p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onConfigure();
            }}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              background: "#C0572A",
              color: "#E8DCC8",
              border: "none",
              padding: "8px 12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "3px 3px 0 #7a3118",
            }}
          >
            Price it →
          </button>
        </div>
      </div>
    </div>
  );
}
