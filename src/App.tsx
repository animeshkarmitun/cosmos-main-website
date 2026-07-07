import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsTicker from "./components/NewsTicker";
import About from "./components/About";
import CodeOfGovernance from "./components/CodeOfGovernance";
import CosmosStats from "./components/CosmosStats";
import BusinessUnits from "./components/BusinessUnits";
import PartnershipServices from "./components/PartnershipServices";
import WhyCosmosGroup from "./components/WhyCosmosGroup";
import OurCommitment from "./components/OurCommitment";
import MajorAchievements from "./components/MajorAchievements";
import FounderMessage from "./components/FounderMessage";
import WHSPolicy from "./components/WHSPolicy";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Careers from "./components/Careers";
import EnergyServices from "./components/EnergyServices";
import ShippingLogistics from "./components/ShippingLogistics";
import UNB from "./components/UNB";
import DhakaCourier from "./components/DhakaCourier";
import CosmosHoldings from "./components/CosmosHoldings";
import CosmosMarketing from "./components/CosmosMarketing";
import CosmosTelecom from "./components/CosmosTelecom";
import CosmosApparels from "./components/CosmosApparels";
import PearlsParadise from "./components/PearlsParadise";
import CosmosPrinting from "./components/CosmosPrinting";
import CosmosAtelier71 from "./components/CosmosAtelier71";
import CosmosGlobal from "./components/CosmosGlobal";
import WildTeam from "./components/WildTeam";
import CosmosGallery from "./components/CosmosGallery";
import CosmosDialogue from "./components/CosmosDialogue";
import CosmosFoundation from "./components/CosmosFoundation";
import Home2 from "./components/Home2";
import CosmosBooks from "./components/CosmosBooks";
import CSRPage from "./components/CSRPage";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "home2" | "careers" | "energy" | "shipping" | "unb" | "dhaka-courier" |
    "holdings" | "marketing" | "telecom" | "apparels" | "pearls" | "printing" | "atelier" | "global" | "wildteam" | "gallery" | "dialogue" | "foundation" | "books" | "csr"
  >("home");

  // Scroll to hash target whenever returning to the home page
  useEffect(() => {
    if (currentPage === "home" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-red-700 selection:text-white relative">
      {/* Film Grain stays exclusive to the default dark home variant */}
      {currentPage !== "home2" && <div className="film-grain" aria-hidden="true" />}

      {/* Header */}
      <Navbar 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {/* Main Sections with Transition Animations */}
      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          <motion.main
            key="home-page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* News & Updates Ticker */}
            <div className="relative z-40 pt-24 md:pt-28 -mb-24 md:-mb-28">
              <NewsTicker />
            </div>

            {/* Hero Slide & Overlapping Cards */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Why Cosmos Group (Trust Section) */}
            <WhyCosmosGroup />

            {/* Code of Governance Section */}
            <CodeOfGovernance />

            {/* Business Conglomerate Grid */}
            <BusinessUnits 
              onNavigate={(page) => {
                setCurrentPage(page as typeof currentPage);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* Major Achievements */}
            <MajorAchievements />

            {/* Corporate Infographics Section */}
            <CosmosStats />

            {/* N-Country Partnership & Services (Bento Grid) */}
            <PartnershipServices />

            {/* Our Commitment (CSR Teaser — links to dedicated CSR page) */}
            <OurCommitment
              onCsrClick={() => {
                setCurrentPage("csr");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* Founder Address */}
            <FounderMessage />

            {/* Work Health and Safety (WHS) Policy */}
            <WHSPolicy />

            {/* Dynamic Partner & Contact Section */}
            <ContactSection />
          </motion.main>
        ) : currentPage === "home2" ? (
          <motion.main
            key="home2-page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Home2
              onNavigate={(page) => {
                setCurrentPage(page as typeof currentPage);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onCsrClick={() => {
                setCurrentPage("csr");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </motion.main>
        ) : currentPage === "careers" ? (
          <motion.div
            key="careers-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Careers onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "energy" ? (
          <motion.div
            key="energy-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <EnergyServices onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "shipping" ? (
          <motion.div
            key="shipping-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ShippingLogistics onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "unb" ? (
          <motion.div
            key="unb-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <UNB onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "dhaka-courier" ? (
          <motion.div
            key="courier-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <DhakaCourier onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "holdings" ? (
          <motion.div
            key="holdings-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosHoldings onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "marketing" ? (
          <motion.div
            key="marketing-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosMarketing onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "telecom" ? (
          <motion.div
            key="telecom-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosTelecom onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "apparels" ? (
          <motion.div
            key="apparels-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosApparels onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "pearls" ? (
          <motion.div
            key="pearls-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <PearlsParadise onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "printing" ? (
          <motion.div
            key="printing-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosPrinting onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "atelier" ? (
          <motion.div
            key="atelier-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosAtelier71 onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "global" ? (
          <motion.div
            key="global-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosGlobal onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "wildteam" ? (
          <motion.div
            key="wildteam-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <WildTeam onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "gallery" ? (
          <motion.div
            key="gallery-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosGallery onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "dialogue" ? (
          <motion.div
            key="dialogue-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosDialogue onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "books" ? (
          <motion.div
            key="books-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosBooks onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "csr" ? (
          <motion.div
            key="csr-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CSRPage
              onBackToHome={() => {
                setCurrentPage("home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onNavigate={(page) => {
                setCurrentPage(page as typeof currentPage);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="foundation-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CosmosFoundation onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer
        onCareersClick={() => {
          setCurrentPage("careers");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onCsrClick={() => {
          setCurrentPage("csr");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
