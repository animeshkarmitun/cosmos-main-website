import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Zap, Ship, Globe2, Building, TrendingUp, Phone, Shirt, Gem, Printer, Globe, Palette, BookOpen, PawPrint, ChevronDown, ChevronUp } from "lucide-react";

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
  onNavigate: (page: string) => void;
}

export default function BusinessUnits({ onNavigate }: BusinessUnitsProps) {
  const [showAll, setShowAll] = useState(false);

  // 13 Companies & Initiatives based on the Navbar Sectors menu
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
    {
      id: "wildteam",
      title: "WildTeam",
      icon: <PawPrint className="w-5 h-5 text-slate-400 group-hover:text-red-500 transition-colors" />,
      tagline: "Wildlife conservation initiative protecting Bangladesh's rich biodiversity.",
      logo: "/logos/WildTeam.png",
      detailedText: "WildTeam is a dedicated wildlife conservation initiative focused on protecting the Royal Bengal Tiger and preserving Bangladesh's unique natural heritage through science, community engagement, and field action.",
      metric: "Conservation",
      metricLabel: "Field Excellence",
    },
  ];

  const unitToPageMap: Record<string, string> = {
    energy: "energy",
    holdings: "holdings",
    marketing: "marketing",
    telecom: "telecom",
    apparels: "apparels",
    pearls: "pearls",
    printing: "printing",
    shipping: "shipping",
    dhakacourier: "dhaka-courier",
    unb: "unb",
    atelier: "atelier",
    global: "global",
    wildteam: "wildteam",
  };

  const visibleUnits = showAll ? units : units.slice(0, 12);

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
                  delay: showAll && index >= 12 ? (index - 12) * 0.06 : index * 0.03,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                tabIndex={0}
                onClick={() => onNavigate(unitToPageMap[unit.id] || "home")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onNavigate(unitToPageMap[unit.id] || "home");
                  }
                }}
                className="group relative h-72 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-slate-700 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center p-5 text-center"
                role="button"
                aria-label={`Visit ${unit.title} portal`}
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
                View All 13 Divisions <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </>
            )}
            <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              13
            </span>
          </button>
        </div>
      </div>

    </section>
  );
}
