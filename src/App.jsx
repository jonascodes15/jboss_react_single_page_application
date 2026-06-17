import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BuiltBy from "./components/BuiltBy";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import HomePage from "./components/HomePage";
import CatalogPage from "./components/CatalogPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
    switch (activeTab) {
      case "catalog": return <CatalogPage />;
      case "about":   return <AboutPage />;
      case "contact": return <ContactPage />;
      default:        return <HomePage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#111111" }}>
      {/* Fixed navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Spacer clears the fixed navbar — only needed on non-home pages */}
      {activeTab !== "home" && <div style={{ height: "64px" }} />}

      {/* Page content */}
      <main className="flex-1" key={activeTab}>
        {renderPage()}
      </main>

      {/* Footer then Built By credit below it */}
      <Footer setActiveTab={setActiveTab} />
      <BuiltBy />

      {/* Floating WhatsApp bubble */}
      <FloatingWhatsApp />
    </div>
  );
}
