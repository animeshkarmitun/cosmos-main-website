import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Zap, Ship, Globe2, Building, TrendingUp, Phone, Shirt, Gem, Printer, Globe, Palette, BookOpen, X, ChevronDown, ChevronUp } from "lucide-react";

interface BusinessUnit {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  logo: string;
  detailedText: string;
  metric: string;
  metricLabel: string;
}

interface BusinessUnitsProps {
  onExploreEnergy?: () => void;
  onExploreShipping?: () => void;
  onExploreUNB?: () => void;
  onExploreDhakaCourier?: () => void;
}

export default function BusinessUnits({ 
  onExploreEnergy, 
  onExploreShipping,
  onExploreUNB,
  onExploreDhakaCourier
}: BusinessUnitsProps) {
  const [selectedUnit, setSelectedUnit] = useState<BusinessUnit | null>(null);
  const [showAll, setShowAll] = useState(false);

  // 12 Companies based on the Navbar Sectors menu
  const units: BusinessUnit[] = [
    {
      id: "energy",
      title: "Cosmos Energy",
      icon: <Zap className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "Leading the transition to sustainable energy solutions across the region.",
      logo: "/logos/Cosmos Energy Services.png",
      detailedText: "Cosmos Energy is pioneering highly resilient energy channels, resource development, and regional gas infrastructure to fuel domestic industries and support sustainable growth.",
      metric: "500+ MW",
      metricLabel: "Power Grid Integration Cluster",
    },
    {
      id: "holdings",
      title: "Cosmos Holdings",
      icon: <Building className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "Investment and holding management driving diverse portfolios.",
      logo: "/logos/Cosmos Logo-01.png",
      detailedText: "Cosmos Holdings manages the strategic investments of the group, ensuring sustainable financial growth across diverse industries and maintaining operational excellence.",
      metric: "12+",
      metricLabel: "Diverse Industries",
    },
    {
      id: "marketing",
      title: "Cosmos Marketing",
      icon: <TrendingUp className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "Comprehensive consultation and marketing strategies.",
      logo: "/logos/Cosmos Logo-01.png",
      detailedText: "Cosmos Marketing provides extensive consultation services, public relations frameworks, and comprehensive market expansion strategies for global clients.",
      metric: "Top Tier",
      metricLabel: "Consultation Services",
    },
    {
      id: "telecom",
      title: "Cosmos Telecom",
      icon: <Phone className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "Connecting the nation with advanced telecommunication infrastructure.",
      logo: "/logos/Cosmos Logo-01.png",
      detailedText: "Providing cutting-edge telecommunication networks, ensuring seamless connectivity and high-speed data transmission for consumers and enterprises.",
      metric: "99.9%",
      metricLabel: "Network Uptime",
    },
    {
      id: "apparels",
      title: "Cosmos Apparels",
      icon: <Shirt className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "High-quality garment manufacturing with international standards.",
      logo: "/logos/Cosmos Logo-01.png",
      detailedText: "Our apparels division produces world-class garments, adhering to strict compliance standards and serving major international clothing brands.",
      metric: "Export",
      metricLabel: "Global Destinations",
    },
    {
      id: "pearls",
      title: "Pearls Paradise",
      icon: <Gem className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "Exquisite jewelry and precious gems.",
      logo: "/logos/Pearls Paradise.png",
      detailedText: "Pearls Paradise offers premium, finely crafted jewelry and authenticated precious stones with a commitment to quality and elegance.",
      metric: "100%",
      metricLabel: "Authentic Gems",
    },
    {
      id: "printing",
      title: "Cosmos Printing",
      icon: <Printer className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "Advanced printing and commercial publishing solutions.",
      logo: "/logos/Cosmos Logo-01.png",
      detailedText: "Equipped with state-of-the-art machinery, Cosmos Printing handles bulk commercial publishing, packaging, and high-fidelity print solutions.",
      metric: "High Volume",
      metricLabel: "Commercial Printing",
    },
    {
      id: "shipping",
      title: "Cosmos Shipping",
      icon: <Ship className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "Global logistics and freight management with unparalled efficiency.",
      logo: "/logos/Cosmos Shipping and Logistics.png",
      detailedText: "Cosmos Shipping runs deep-sea logistics fleets, inland cargo harbors, customs brokerage gates, and intelligent supply-chain routing algorithms.",
      metric: "4.2M+",
      metricLabel: "Tons Handled Annually",
    },
    {
      id: "dhakacourier",
      title: "Dhaka Courier",
      icon: <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "The premier English-language news weekly.",
      logo: "/logos/Dhaka Courier.png",
      detailedText: "Dhaka Courier is an independent English-language news weekly offering in-depth analysis, political commentary, and cultural insights.",
      metric: "40+ Years",
      metricLabel: "Of Journalism",
    },
    {
      id: "unb",
      title: "UNB",
      icon: <Globe2 className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "United News of Bangladesh - the leading news agency.",
      logo: "/logos/United News of Bangladesh.png",
      detailedText: "UNB is a cornerstone of national news reporting, broadcasting unbiased reportage and hosting cultural galleries with global organizations.",
      metric: "15M+",
      metricLabel: "Weekly Active Readers",
    },
    {
      id: "atelier",
      title: "Cosmos Atelier 71",
      icon: <Palette className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "A premier printmaking studio promoting fine arts.",
      logo: "/logos/Cosmos Atelier 71.png",
      detailedText: "Cosmos Atelier 71 provides a creative space and modern facilities for printmakers and artists to practice, exhibit, and preserve fine arts.",
      metric: "Creative",
      metricLabel: "Artistic Excellence",
    },
    {
      id: "global",
      title: "Cosmos Global",
      icon: <Globe className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "Global resources and international trade ventures.",
      logo: "/logos/Cosmos Resources Pte Ltd.png",
      detailedText: "Cosmos Global manages international trade, strategic partnerships, and global resource acquisition to support the conglomerate's expanding footprint.",
      metric: "Worldwide",
      metricLabel: "Trade Network",
    },
  ];

  const visibleUnits = showAll ? units : units.slice(0, 8);

  return (
    <section id="businesses" className="py-20 md:py-28 px-6 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <div className="inline-block bg-red-950/40 border border-red-500/30 px-3 py-1 rounded-full text-red-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Our Enterprise Spheres
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Conglomerate Pillars
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl font-light">
            Each business division is operated by leading sector professionals, working with international standards to deliver industrial excellence.
          </p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleUnits.map((unit, index) => (
              <motion.div
                key={unit.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.96 }}
                transition={{ 
                  duration: 0.35, 
                  delay: showAll && index >= 8 ? (index - 8) * 0.06 : index * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                tabIndex={0}
                onClick={() => setSelectedUnit(unit)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedUnit(unit);
                  }
                }}
                className="group relative h-72 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-slate-700 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center p-5 text-center"
                role="button"
                aria-label={`View additional information about ${unit.title}`}
              >
                {/* Logo Area */}
                <div className="w-28 h-28 md:w-32 md:h-32 mb-5 relative z-10 flex items-center justify-center p-3 bg-white/5 rounded-xl transition-transform duration-500 group-hover:scale-105 border border-white/5">
                  <img
                    alt={`${unit.title} Logo`}
                    className="max-w-full max-h-full object-contain"
                    src={unit.logo}
                  />
                </div>

                {/* Text content inside the card */}
                <div className="z-10 w-full">
                  <h3 className="text-lg font-bold mb-1.5 tracking-wide text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {unit.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 font-light leading-relaxed px-1">
                    {unit.tagline}
                  </p>
                </div>

                {/* Top Pill Icon (Subtle) */}
                <div className="absolute top-3.5 left-3.5 w-8 h-8 rounded-full bg-slate-950/50 flex items-center justify-center border border-slate-800">
                  {unit.icon}
                </div>

                {/* Hover Action indicator */}
                <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Collapse Control */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 text-white hover:text-red-100 transition-all font-semibold text-sm uppercase tracking-wider bg-gradient-to-r from-red-700 to-red-600 border border-red-500/40 px-6 py-3 rounded-full hover:from-red-600 hover:to-red-500 hover:shadow-lg hover:shadow-red-950/30 hover:-translate-y-0.5 active:translate-y-0"
            aria-expanded={showAll}
          >
            {showAll ? (
              <>
                Show Featured <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              </>
            ) : (
              <>
                View All 12 Divisions <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </>
            )}
            <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              12
            </span>
          </button>
        </div>
      </div>

      {/* Information Overlay Drawer / Modal */}
      {selectedUnit && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedUnit(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-950/60 p-2 rounded-full border border-slate-800 focus:outline-none focus:ring-2 focus:ring-red-600 z-10"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-56 relative flex items-center justify-center bg-slate-950 p-8 border-b border-slate-800">
              <img
                src={selectedUnit.logo}
                alt={`${selectedUnit.title} Logo`}
                className="max-w-full max-h-full object-contain filter drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-left">
                <h3 id="modal-title" className="text-2xl font-bold text-white uppercase tracking-wide">
                  {selectedUnit.title}
                </h3>
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <p className="text-slate-300 font-normal leading-relaxed text-sm md:text-base">
                {selectedUnit.detailedText}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-800 pt-6">
                <div>
                  <p className="text-2xl font-extrabold text-red-500">{selectedUnit.metric}</p>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{selectedUnit.metricLabel}</p>
                </div>
                <div className="flex flex-col gap-2 justify-end md:items-end md:text-right">
                  {selectedUnit.id === "energy" && onExploreEnergy && (
                    <button
                      onClick={() => {
                        setSelectedUnit(null);
                        onExploreEnergy();
                      }}
                      className="bg-slate-950 hover:bg-slate-850 text-red-400 hover:text-red-350 font-bold py-2 px-4 rounded-xl text-xs uppercase tracking-wider border border-red-900/40 transition-all shadow-md cursor-pointer w-full md:w-auto"
                    >
                      View Energy Portal
                    </button>
                  )}
                  {selectedUnit.id === "shipping" && onExploreShipping && (
                    <button
                      onClick={() => {
                        setSelectedUnit(null);
                        onExploreShipping();
                      }}
                      className="bg-slate-950 hover:bg-slate-850 text-red-400 hover:text-red-350 font-bold py-2 px-4 rounded-xl text-xs uppercase tracking-wider border border-red-900/40 transition-all shadow-md cursor-pointer w-full md:w-auto"
                    >
                      View Shipping Portal
                    </button>
                  )}
                  {selectedUnit.id === "unb" && onExploreUNB && (
                    <button
                      onClick={() => {
                        setSelectedUnit(null);
                        onExploreUNB();
                      }}
                      className="bg-slate-950 hover:bg-slate-850 text-red-400 hover:text-red-350 font-bold py-2 px-4 rounded-xl text-xs uppercase tracking-wider border border-red-900/40 transition-all shadow-md cursor-pointer w-full md:w-auto"
                    >
                      Explore UNB Portal
                    </button>
                  )}
                  {selectedUnit.id === "dhakacourier" && onExploreDhakaCourier && (
                    <button
                      onClick={() => {
                        setSelectedUnit(null);
                        onExploreDhakaCourier();
                      }}
                      className="bg-slate-950 hover:bg-slate-850 text-red-400 hover:text-red-350 font-bold py-2 px-4 rounded-xl text-xs uppercase tracking-wider border border-red-900/40 transition-all shadow-md cursor-pointer w-full md:w-auto"
                    >
                      Explore Dhaka Courier
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedUnit(null)}
                    className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer w-full md:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
