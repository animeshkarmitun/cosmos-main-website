import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsTicker from "./components/NewsTicker";
import About from "./components/About";
import BusinessUnits from "./components/BusinessUnits";
import WhyCosmosGroup from "./components/WhyCosmosGroup";
import OurCommitment from "./components/OurCommitment";
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
import AboutPage from "./components/AboutPage";
import TeamPage from "./components/TeamPage";
import PoliciesPage from "./components/PoliciesPage";
import ServicesPage from "./components/ServicesPage";
import ExploreTeaser from "./components/ExploreTeaser";
import { Zap, Ship, Cpu, Shield, Scale } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "home2" | "careers" | "energy" | "shipping" | "unb" | "dhaka-courier" |
    "holdings" | "marketing" | "telecom" | "apparels" | "pearls" | "printing" | "atelier" | "global" | "wildteam" | "gallery" | "dialogue" | "foundation" | "books" | "csr" |
    "about-page" | "team" | "policies" | "services"
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

            {/* Business Conglomerate Grid */}
            <BusinessUnits
              onNavigate={(page) => {
                setCurrentPage(page as typeof currentPage);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* Teaser → AboutPage (stats/achievements deep-dive) */}
            <ExploreTeaser
              id="impact-teaser"
              theme="dark"
              variant="stats"
              eyebrow="By the Numbers"
              title="Five Decades of Impact"
              summary="From a single venture founded in 1973 to a multi-sector conglomerate — the scale, milestones and achievements that define Cosmos Group."
              ctaLabel="Explore Our Story"
              onExplore={() => {
                setCurrentPage("about-page");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              stats={[
                { value: "52+", label: "Years of Excellence" },
                { value: "12", label: "Business Units" },
                { value: "9", label: "Core Sectors" },
                { value: "64", label: "Districts Covered" },
              ]}
            />

            {/* Teaser → ServicesPage (partnership & services bento) */}
            <ExploreTeaser
              id="services-teaser"
              theme="dark"
              variant="cards"
              eyebrow="What We Do"
              title="Partnership & Services"
              summary="Advisory, project management, and in-country representation — delivering end-to-end solutions across industries and borders."
              ctaLabel="Explore Services"
              onExplore={() => {
                setCurrentPage("services");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              cards={[
                { icon: Zap, title: "Energy & Power", desc: "Utility-scale generation, renewables integration and grid infrastructure." },
                { icon: Ship, title: "Shipping & Logistics", desc: "Deep-sea cargo pathways, customs brokering and nationwide delivery." },
                { icon: Cpu, title: "Advanced Technologies", desc: "Secure networks, enterprise systems and specialised software." },
              ]}
            />

            {/* Teaser → PoliciesPage (governance + WHS) */}
            <ExploreTeaser
              id="governance-teaser"
              theme="dark"
              variant="dual"
              eyebrow="Compliance & Standards"
              title="Governance & Safety"
              summary="Ethical conduct, transparency and rigorous workplace safety standards across every operation in the Cosmos ecosystem."
              ctaLabel="Explore Policies"
              onExplore={() => {
                setCurrentPage("policies");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              cards={[
                { icon: Shield, title: "Code of Governance", desc: "The framework of ethics, accountability and board-level oversight." },
                { icon: Scale, title: "WHS Policy", desc: "Workplace health & safety protocols protecting every associate." },
              ]}
            />

            {/* Teaser → TeamPage (leadership / founder) */}
            <ExploreTeaser
              id="leadership-teaser"
              theme="dark"
              variant="portrait"
              imageSide="right"
              eyebrow="Leadership"
              title="The Minds Behind Cosmos"
              summary="Visionary stewardship driving a five-decade legacy across nine sectors — built from the dawn of Bangladesh's independence."
              ctaLabel="Meet the Team"
              onExplore={() => {
                setCurrentPage("team");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_mLNS0l4Na3bFGLtJC-BQevcb-gHMhPELGF38SGivw&s=10"
              imageAlt="Enayetullah Khan, Chairman of Cosmos Group"
              caption={{ line1: "Enayetullah Khan", line2: "Chairman · Cosmos Group" }}
            />

            {/* Our Commitment (CSR Teaser — links to dedicated CSR page) */}
            <OurCommitment
              onCsrClick={() => {
                setCurrentPage("csr");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

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
        ) : currentPage === "about-page" ? (
          <motion.div
            key="about-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <AboutPage onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "team" ? (
          <motion.div
            key="team-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <TeamPage onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "policies" ? (
          <motion.div
            key="policies-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <PoliciesPage onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
          </motion.div>
        ) : currentPage === "services" ? (
          <motion.div
            key="services-page-content"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ServicesPage onBackToHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />
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
        onPoliciesClick={() => {
          setCurrentPage("policies");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
