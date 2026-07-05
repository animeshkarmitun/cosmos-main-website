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
import { X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "careers" | "energy" | "shipping" | "unb" | "dhaka-courier" |
    "holdings" | "marketing" | "telecom" | "apparels" | "pearls" | "printing" | "atelier" | "global" | "wildteam" | "gallery" | "dialogue"
  >("home");
  const [isInvestorOpen, setIsInvestorOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    sector: "energy",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsInvestorOpen(false);
      setFormData({ name: "", email: "", org: "", sector: "energy", message: "" });
    }, 2500);
  };

  const sectors = [
    { value: "energy", label: "Power & Heavy Energy" },
    { value: "tech", label: "IT & High Technologies" },
    { value: "shipping", label: "Sea Logistics & Shipping Channels" },
    { value: "renewables", label: "Renewable Wind & Solar Harbors" },
    { value: "media", label: "Mass Media & Press columns" },
    { value: "defense", label: "Tactical Defense hardware" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-red-700 selection:text-white relative">
      {/* Film Grain Subtle Noise Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Header */}
      <Navbar 
        onInvestorClick={() => setIsInvestorOpen(true)} 
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
            {/* Hero Slide & Overlapping Cards */}
            <Hero />

            {/* News & Updates Ticker */}
            <NewsTicker />

            {/* About Section */}
            <About />

            {/* Code of Governance Section */}
            <CodeOfGovernance />

            {/* Corporate Infographics Section */}
            <CosmosStats />

            {/* Business Conglomerate Grid */}
            <BusinessUnits 
              onNavigate={(page) => {
                setCurrentPage(page as typeof currentPage);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* N-Country Partnership & Services (Bento Grid) */}
            <PartnershipServices />

            {/* Why Cosmos Group (Trust Section) */}
            <WhyCosmosGroup />

            {/* Our Commitment (CSR & Philanthropy Section) */}
            <OurCommitment onDialogueClick={() => {
              setCurrentPage("dialogue");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }} />

            {/* Founder Address */}
            <FounderMessage />

            {/* Work Health and Safety (WHS) Policy */}
            <WHSPolicy />

            {/* Dynamic Partner & Contact Section */}
            <ContactSection />
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
        ) : (
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
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer onCareersClick={() => {
        setCurrentPage("careers");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }} />

      {/* Investor Hub Modal */}
      {isInvestorOpen && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="investor-title">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative p-6 md:p-8 animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsInvestorOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-950/50 p-2 rounded-full border border-slate-800 hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-all"
              aria-label="Close Investor portal dialogue"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 id="investor-title" className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                    INVESTOR PORTAL
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm mt-1 font-light">
                    Initiate strategic capital dialogues, secure equity reports, or request commercial audits from our core treasury.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="investor-name" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      id="investor-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jonathan Sterling"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-red-600 focus:ring-2 focus:ring-red-600/35 rounded-xl py-2.5 px-4 text-sm text-white placeholder:text-slate-600 transition-all outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="investor-email" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Professional Email
                      </label>
                      <input
                        id="investor-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="j.sterling@fund.com"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-red-600 focus:ring-2 focus:ring-red-600/35 rounded-xl py-2.5 px-4 text-sm text-white placeholder:text-slate-600 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="investor-org" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Institution / Org
                      </label>
                      <input
                        id="investor-org"
                        type="text"
                        required
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        placeholder="Apex Capitals Inc."
                        className="w-full bg-slate-950 border border-slate-800 focus:border-red-600 focus:ring-2 focus:ring-red-600/35 rounded-xl py-2.5 px-4 text-sm text-white placeholder:text-slate-600 transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="investor-sector" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Target Sector Division
                    </label>
                    <select
                      id="investor-sector"
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-red-600 focus:ring-2 focus:ring-red-600/35 rounded-xl py-2.5 px-4 text-sm text-white transition-all outline-none select-none"
                    >
                      {sectors.map((s) => (
                        <option className="bg-slate-900 text-white" key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="investor-message" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Inquiry / Capital allocation layout
                    </label>
                    <textarea
                      id="investor-message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please delineate investment parameters, expected timelines, or syndication targets..."
                      className="w-full bg-slate-950 border border-slate-800 focus:border-red-600 focus:ring-2 focus:ring-red-600/35 rounded-xl py-2.5 px-4 text-sm text-white placeholder:text-slate-600 transition-all outline-none resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsInvestorOpen(false)}
                    className="w-1/3 border border-slate-800 hover:bg-slate-800 text-slate-300 font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 bg-red-700 hover:bg-red-600 focus-visible:ring-2 focus-visible:ring-red-500 text-white font-semibold py-3 px-4 rounded-xl transition-all text-sm shadow-md shadow-red-950/50"
                  >
                    Submit Prospectus
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  Transmission Secure
                </h3>
                <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                  Your capital allocation request has been routed to our Lead Treasury Desk. A Senior Director will reach out shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
