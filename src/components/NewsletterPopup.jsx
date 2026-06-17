// NewsletterPopup.jsx
// Appears 4 seconds after landing. Collects email.
// Currently logs submissions to console — see README for email setup options.
import React, { useState, useEffect } from "react";

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Don't show again if user already subscribed or dismissed this session
    const alreadyDone = localStorage.getItem("jboss_newsletter_done");
    if (alreadyDone) return;

    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    // Only permanently suppress if they subscribed — dismissed users see it next visit
  };

  const handleSubmit = async () => {
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    try {
      // ─────────────────────────────────────────────────────────
      // EMAIL INTEGRATION POINT
      // Right now this just logs to console.
      // See the README for how to connect Formspree, Mailchimp, etc.
      // Replace the block below with your chosen provider's fetch call.
      // ─────────────────────────────────────────────────────────
      console.log("New subscriber:", email);

      // Simulate network delay for UX feedback
      await new Promise((r) => setTimeout(r, 800));

      // On success:
      setStatus("success");
      localStorage.setItem("jboss_newsletter_done", "true");
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") handleDismiss();
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleDismiss}
        style={{
          position: "fixed", inset: 0, zIndex: 500,
          background: "rgba(8,8,8,0.88)",
          backdropFilter: "blur(3px)",
          animation: "fade-in 0.3s ease",
        }}
      />

      {/* Modal */}
      <div style={{
        position: "fixed",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 501,
        width: "min(520px, calc(100vw - 32px))",
        background: "#1a1a1a",
        border: "2px solid #C0572A",
        boxShadow: "10px 10px 0 #7a3118",
        animation: "slide-up 0.35s ease",
        overflow: "hidden",
      }}>

        {/* Top rust bar */}
        <div style={{
          height: "4px",
          background: "repeating-linear-gradient(90deg, #C0572A 0px, #C0572A 20px, #7a3118 20px, #7a3118 30px)",
        }} />

        {/* Close button */}
        <button
          onClick={handleDismiss}
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "none", border: "1px solid #2e2e2e",
            color: "#6b5e52", fontSize: "0.8rem",
            cursor: "pointer", width: "28px", height: "28px",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C0572A"; e.currentTarget.style.color = "#C0572A"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2e2e2e"; e.currentTarget.style.color = "#6b5e52"; }}
        >✕</button>

        {status !== "success" ? (
          <div style={{ padding: "36px 36px 32px" }}>

            {/* Eyebrow */}
            <p style={{
              fontFamily: "'Space Mono', monospace", fontSize: "0.6rem",
              color: "#C0572A", letterSpacing: "0.25em", textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}>
              EXCLUSIVE OFFER — INNER CIRCLE
            </p>

            {/* Main heading */}
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.2rem, 8vw, 3.2rem)",
              color: "#E8DCC8", lineHeight: "0.95",
              marginBottom: "0.5rem",
            }}>
              UPGRADE YOUR<br />
              <span style={{ color: "#C0572A" }}>COMFORT.</span><br />
              SAVE 5%.
            </h2>

            {/* Subheading */}
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
              color: "#7a6e65", lineHeight: "1.65", marginBottom: "1.75rem",
              borderLeft: "2px solid #C0572A", paddingLeft: "0.875rem",
            }}>
              Join the inner circle. Drop your email to unlock <strong style={{ color: "#E8DCC8" }}>5% off your first
              bespoke order</strong> and get exclusive early access to our seasonal catalog drops.
            </p>

            {/* Email input */}
            <div style={{ marginBottom: "0.75rem" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your email address"
                autoFocus
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "#111111",
                  border: "1px solid #3d3d3d",
                  color: "#E8DCC8",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.15s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#C0572A")}
                onBlur={(e) => (e.target.style.borderColor = "#3d3d3d")}
              />
              {errorMsg && (
                <p style={{
                  fontFamily: "'Space Mono', monospace", fontSize: "0.6rem",
                  color: "#C0572A", marginTop: "6px", letterSpacing: "0.05em",
                }}>⚠ {errorMsg}</p>
              )}
            </div>

            {/* CTA button */}
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              style={{
                width: "100%", padding: "15px",
                background: status === "loading" ? "#7a3118" : "#C0572A",
                color: "#E8DCC8",
                border: "2px solid #C0572A",
                boxShadow: status === "loading" ? "none" : "4px 4px 0 #7a3118",
                fontFamily: "'Space Mono', monospace", fontSize: "0.75rem",
                fontWeight: "700", letterSpacing: "0.2em", textTransform: "uppercase",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "all 0.15s",
              }}
            >
              {status === "loading" ? "SENDING..." : "🔓 UNLOCK MY DISCOUNT"}
            </button>

            {/* No spam note */}
            <p style={{
              fontFamily: "'Space Mono', monospace", fontSize: "0.55rem",
              color: "#3d3d3d", textAlign: "center", marginTop: "12px",
              letterSpacing: "0.05em",
            }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>

        ) : (
          /* ── Success state ── */
          <div style={{ padding: "48px 36px", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem",
              color: "#E8DCC8", marginBottom: "0.5rem",
            }}>YOU'RE IN.</h2>
            <p style={{
              fontFamily: "'Inter', sans-serif", fontSize: "0.875rem",
              color: "#7a6e65", lineHeight: "1.65", marginBottom: "1.5rem",
            }}>
              Your 5% discount code is on its way to <strong style={{ color: "#E8DCC8" }}>{email}</strong>.
              Check your inbox — and welcome to the inner circle.
            </p>
            <button
              onClick={() => setVisible(false)}
              style={{
                padding: "12px 32px",
                background: "#C0572A", color: "#E8DCC8",
                border: "2px solid #C0572A", boxShadow: "3px 3px 0 #7a3118",
                fontFamily: "'Space Mono', monospace", fontSize: "0.7rem",
                letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer",
              }}
            >
              Start Shopping →
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-up { from { opacity: 0; transform: translate(-50%, calc(-50% + 30px)); } to { opacity: 1; transform: translate(-50%, -50%); } }
      `}</style>
    </>
  );
}
