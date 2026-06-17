// CatalogPage.jsx — Product grid with filter + price calculator trigger
import React, { useState } from "react";
import { PRODUCTS, formatNaira } from "../data/products";
import PriceCalculator from "./PriceCalculator";

const CATEGORIES = ["All", "Sofa", "Chair", "Bed Frame", "Office"];

export default function CatalogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-10 pb-20 px-4" style={{ background: "#111111" }}>
      <div className="max-w-6xl mx-auto">

        {/* ── Page Header ───────────────────────────────────── */}
        <div className="mb-10">
          <div className="tape-divider mb-6" />
          <p
            className="text-xs tracking-widest mb-2"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
          >
            THE WORKSHOP COLLECTION
          </p>
          <h1
            className="font-display text-6xl md:text-8xl mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#E8DCC8" }}
          >
            CATALOG
          </h1>
          <p style={{ color: "#7a6e65", maxWidth: "480px", fontSize: "0.9rem", lineHeight: "1.7" }}>
            Every item is built-to-order in our Lagos workshop. Select a piece, configure
            it to your space, and place your order directly via WhatsApp.
          </p>
        </div>

        {/* ── Category Filter ────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 text-xs tracking-widest transition-all"
              style={{
                fontFamily: "'Space Mono', monospace",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                background: activeCategory === cat ? "#C0572A" : "transparent",
                color: activeCategory === cat ? "#E8DCC8" : "#6b5e52",
                border: "1px solid",
                borderColor: activeCategory === cat ? "#C0572A" : "#3d3d3d",
                boxShadow: activeCategory === cat ? "3px 3px 0 #7a3118" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Product Grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {/* ── Catalog footer note ────────────────────────────── */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid #2e2e2e" }}>
          <p
            className="text-center text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#6b5e52" }}
          >
            All prices are estimates. Final quote confirmed on WhatsApp.
            Custom dimensions available — just ask.
          </p>
        </div>
      </div>

      {/* ── Price Calculator Modal ─────────────────────────── */}
      {selectedProduct && (
        <PriceCalculator
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

// ── Individual Product Card ──────────────────────────────────────
function ProductCard({ product, onSelect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="product-card flex flex-col"
      style={{
        background: "#1a1a1a",
        border: "1px solid #2e2e2e",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", background: "#0e0e0e" }}>
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover workshop-frame"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="font-display text-6xl opacity-10"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C0572A" }}
            >
              JBOSS
            </span>
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <div
            className="absolute top-3 left-3 px-2 py-1 text-xs font-bold"
            style={{
              fontFamily: "'Space Mono', monospace",
              background: "#C0572A",
              color: "#E8DCC8",
              letterSpacing: "0.1em",
            }}
          >
            {product.badge}
          </div>
        )}

        {/* Category tag */}
        <div
          className="absolute top-3 right-3 px-2 py-1 text-xs"
          style={{
            fontFamily: "'Space Mono', monospace",
            background: "rgba(17,17,17,0.85)",
            color: "#6b5e52",
            border: "1px solid #2e2e2e",
            fontSize: "0.6rem",
            letterSpacing: "0.1em",
          }}
        >
          {product.category.toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Name */}
        <h3
          className="font-display text-2xl mb-1 leading-tight"
          style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#E8DCC8", letterSpacing: "0.03em" }}
        >
          {product.name}
        </h3>
        <p
          className="text-xs mb-4"
          style={{ color: "#6b5e52", fontStyle: "italic" }}
        >
          "{product.tagline}"
        </p>

        {/* Specs */}
        <div
          className="mb-4 p-3 space-y-1"
          style={{ background: "#111111", border: "1px solid #2e2e2e" }}
        >
          {Object.entries(product.specs).map(([k, v]) => (
            <div key={k} className="flex gap-2 text-xs">
              <span
                className="shrink-0 uppercase"
                style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A", fontSize: "0.6rem", paddingTop: "1px" }}
              >
                {k}
              </span>
              <span style={{ color: "#a89880", fontSize: "0.72rem", lineHeight: "1.4" }}>{v}</span>
            </div>
          ))}
          <div className="flex gap-2 text-xs pt-1" style={{ borderTop: "1px solid #2e2e2e", marginTop: "4px" }}>
            <span
              className="shrink-0 uppercase"
              style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A", fontSize: "0.6rem", paddingTop: "1px" }}
            >
              Lead Time
            </span>
            <span style={{ color: "#a89880", fontSize: "0.72rem" }}>{product.leadTime}</span>
          </div>
        </div>

        {/* Price starting from */}
        <div className="mb-4">
          <p
            className="text-xs"
            style={{ fontFamily: "'Space Mono', monospace", color: "#6b5e52" }}
          >
            Starting from
          </p>
          <p
            className="font-display text-3xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C0572A" }}
          >
            {formatNaira(product.basePrice)}
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onSelect}
          className="mt-auto w-full py-3 text-xs tracking-widest font-bold transition-all active:translate-y-0.5"
          style={{
            fontFamily: "'Space Mono', monospace",
            background: "#C0572A",
            color: "#E8DCC8",
            border: "2px solid #C0572A",
            boxShadow: "4px 4px 0 #7a3118",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          Configure + Price →
        </button>
      </div>
    </div>
  );
}
