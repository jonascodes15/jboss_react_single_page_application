// App.jsx
import React, { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BuiltBy from "./components/BuiltBy";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import NewsletterPopup from "./components/NewsletterPopup";
import HomePage from "./components/HomePage";
import CatalogPage from "./components/CatalogPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import MaintenanceOverlay from "./components/MaintenanceOverlay";

// AnnouncementBar is 36px tall. Navbar is ~60px tall.
// Total offset for fixed elements = 96px.
const HEADER_OFFSET = 96;

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
    switch (activeTab) {
      case "catalog": return <CatalogPage />;
      case "about": return <AboutPage />;
      case "contact": return <ContactPage />;
      default: return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#111111" }}>

      {/* Announcement ticker — topmost fixed bar */}
      <AnnouncementBar />

      {/* Navbar — fixed, sits below the announcement bar */}
      {/* marginTop on nav is handled inside Navbar via top: 36px */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} announcementHeight={36} />

      {/* Spacer — clears both fixed bars on inner pages */}
      {activeTab !== "home" && <div style={{ height: `${HEADER_OFFSET}px` }} />}

      {/* Page content */}
      <main className="flex-1" key={activeTab}>
        {renderPage()}
      </main>

      <Footer setActiveTab={setActiveTab} />
      <BuiltBy />

      {/* Newsletter popup — appears 4s after load */}
      <NewsletterPopup />

      {/* Floating WhatsApp bubble */}
      <FloatingWhatsApp />

      {/* Global maintenance overlay — blocks all pages */}
      <MaintenanceOverlay />
    </div>
  );
}
