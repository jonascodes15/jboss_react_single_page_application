// AboutPage.jsx — Brand story, workshop ethos, the "brick by brick" narrative
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-10 pb-20 px-4" style={{ background: "#111111" }}>
      <div className="max-w-5xl mx-auto">

        {/* ── Header ───────────────────────────────────────────── */}
        <div className="mb-16">
          <div className="tape-divider mb-6" />
          <p
            className="text-xs tracking-widest mb-2"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
          >
            THE STORY
          </p>
          <h1
            className="font-display leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              color: "#E8DCC8",
            }}
          >
            JUST A FURNITURE BOY<br />
            <span style={{ color: "#C0572A" }}>DOING HIS THING.</span>
          </h1>
        </div>

        {/* ── Story block ──────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-0" style={{ border: "1px solid #2e2e2e" }}>
          {/* Left: photo placeholder */}
          <div
            className="min-h-64 md:min-h-full flex items-center justify-center relative"
            style={{ background: "#0e0e0e", borderRight: "1px solid #2e2e2e" }}
          >
            <img
              src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa1e?w=600&q=80"
              alt="Workshop"
              className="w-full h-full object-cover opacity-60"
              style={{ minHeight: "300px" }}
            />
            {/* Overlay text */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: "linear-gradient(to top, rgba(17,17,17,0.9), transparent)" }}
            >
              <span className="stamp">Lagos Workshop</span>
            </div>
          </div>

          {/* Right: text */}
          <div className="p-8 md:p-12">
            <p
              className="font-display text-4xl mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C0572A" }}
            >
              "BRICK BY BRICK."
            </p>
            <div className="space-y-4" style={{ color: "#a89880", lineHeight: "1.8", fontSize: "0.95rem" }}>
              <p>
                Jboss Furnitures started the way all real things do — with a
                skill, a workshop, and a stubborn refusal to cut corners.
              </p>
              <p>
                Based in Lagos, Nigeria, we build every sofa, chair, and bed frame
                by hand. No factory lines. No imported flat-packs. Just real
                hardwood frames, quality foam, and fabric chosen with care.
              </p>
              <p>
                Our photos aren't studio shots with perfect lighting. They're
                taken in the workshop — because that's where the work actually
                happens. We think that's more honest. You see exactly what
                you're getting.
              </p>
              <p style={{ color: "#E8DCC8" }}>
                Every piece is built-to-order for homes and offices across Lagos.
                You want it? We build it. Brick by brick.
              </p>
            </div>
          </div>
        </div>

        {/* ── Values ───────────────────────────────────────────── */}
        <div className="mt-16 mb-12">
          <p
            className="text-xs tracking-widest mb-8"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
          >
            WHAT WE STAND FOR
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "#2e2e2e" }}>
            {[
              {
                num: "01",
                title: "Honesty in Materials",
                body: "We tell you exactly what goes into every piece. Iroko hardwood, high-density foam, durable upholstery — no ambiguity.",
              },
              {
                num: "02",
                title: "Built to Last",
                body: "Furniture that wobbles after a year was never built right. We frame every piece for years of real use.",
              },
              {
                num: "03",
                title: "Affordable Quality",
                body: "Lagos deserves beautiful furniture that doesn't cost a month's salary. That's the whole point.",
              },
              {
                num: "04",
                title: "Your Space, Your Spec",
                body: "Custom dimensions, custom configurations. Share your room size, we'll make it fit perfectly.",
              },
            ].map((v) => (
              <div
                key={v.num}
                className="p-8"
                style={{ background: "#1a1a1a" }}
              >
                <div
                  className="font-display text-5xl mb-4 opacity-20"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C0572A" }}
                >
                  {v.num}
                </div>
                <h3
                  className="font-display text-xl mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#E8DCC8", letterSpacing: "0.05em" }}
                >
                  {v.title}
                </h3>
                <p style={{ color: "#7a6e65", fontSize: "0.875rem", lineHeight: "1.7" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Process timeline ──────────────────────────────────── */}
        <div
          className="p-8 md:p-12"
          style={{ background: "#1a1a1a", border: "1px solid #2e2e2e" }}
        >
          <p
            className="text-xs tracking-widest mb-8"
            style={{ fontFamily: "'Space Mono', monospace", color: "#C0572A" }}
          >
            HOW IT WORKS
          </p>
          <div className="space-y-0">
            {[
              { step: "PICK", desc: "Browse the catalog. Find the piece you want." },
              { step: "CONFIGURE", desc: "Choose your size, fabric, and finish. See the live estimated price." },
              { step: "ORDER", desc: "Hit 'Order via WhatsApp'. We get your exact spec in a message." },
              { step: "BUILD", desc: "We confirm details, collect a deposit, and get to work. Lead time: 7–16 days." },
              { step: "DELIVER", desc: "We bring it to your door in Lagos and set it up." },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 py-5"
                style={{ borderBottom: i < 4 ? "1px solid #2e2e2e" : "none" }}
              >
                <div
                  className="font-display text-3xl w-20 shrink-0 leading-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#C0572A" }}
                >
                  {item.step}
                </div>
                <p
                  className="pt-1"
                  style={{ color: "#a89880", fontSize: "0.9rem", lineHeight: "1.6" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
