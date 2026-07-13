import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Zap, Ship, Globe2, TrendingUp, Cpu, BookOpen } from "lucide-react";

interface BusinessUnit {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  logo: string;
  image: string;
  detailedText: string;
  metric: string;
  metricLabel: string;
}

interface BusinessUnitsProps {
  onNavigate: (page: string) => void;
}

export default function BusinessUnits({ onNavigate }: BusinessUnitsProps) {
  // Core companies displayed in the Enterprise Spheres section
  const units: BusinessUnit[] = [
    {
      id: "energy",
      title: "Cosmos Energy",
      icon: <Zap className="w-5 h-5 text-red-500" />,
      tagline: "Leading the transition to sustainable energy solutions across the region.",
      logo: "/logos/Cosmos Energy Services.png",
      image: "/images/cosmos-energy-card.png",
      detailedText: "Cosmos Energy is pioneering highly resilient energy channels, resource development, and regional gas infrastructure to fuel domestic industries and support sustainable growth.",
      metric: "500+ MW",
      metricLabel: "Power Grid Integration Cluster",
    },
    {
      id: "marketing",
      title: "Cosmos Marketing",
      icon: <TrendingUp className="w-5 h-5 text-red-500" />,
      tagline: "Comprehensive consultation and marketing strategies.",
      logo: "/logos/Cosmos Logo-01.png",
      image: "/images/cosmos-marketing-card.png",
      detailedText: "Cosmos Marketing provides extensive consultation services, public relations frameworks, and comprehensive market expansion strategies for global clients.",
      metric: "Top Tier",
      metricLabel: "Consultation Services",
    },
    {
      id: "shipping",
      title: "Cosmos Shipping & Logistics",
      icon: <Ship className="w-5 h-5 text-red-500" />,
      tagline: "Global logistics and freight management with unparalleled efficiency.",
      logo: "/logos/Cosmos Shipping and Logistics.png",
      image: "/images/Cosmos-Shipping-card.jpeg",
      detailedText: "Cosmos Shipping & Logistics runs deep-sea logistics fleets, inland cargo harbors, customs brokerage gates, and intelligent supply-chain routing algorithms.",
      metric: "4.2M+",
      metricLabel: "Tons Handled Annually",
    },
    {
      id: "technology",
      title: "Cosmos Technology",
      icon: <Cpu className="w-5 h-5 text-red-500" />,
      tagline: "Connecting the nation with advanced telecommunication and technology infrastructure.",
      logo: "/logos/Cosmos Technologies.png",
      image: "/images/cosmos-telecom-card.png",
      detailedText: "Cosmos Technology delivers cutting-edge telecommunications and enterprise technology solutions, ensuring seamless connectivity and high-speed data transmission.",
      metric: "99.9%",
      metricLabel: "Network Uptime",
    },
    {
      id: "unb",
      title: "UNB",
      icon: <Globe2 className="w-5 h-5 text-red-500" />,
      tagline: "United News of Bangladesh - the leading news agency.",
      logo: "/logos/United News of Bangladesh.png",
      image: "/images/unb.jpeg",
      detailedText: "UNB is a cornerstone of national news reporting, broadcasting unbiased reportage and hosting cultural galleries with global organizations.",
      metric: "15M+",
      metricLabel: "Weekly Active Readers",
    },
    {
      id: "dhakacourier",
      title: "Dhaka Courier",
      icon: <BookOpen className="w-5 h-5 text-red-500" />,
      tagline: "The premier English-language news weekly.",
      logo: "/logos/Dhaka Courier.png",
      image: "/images/brochure_extracts/Dhaka-courier.jpeg",
      detailedText: "Dhaka Courier is an independent English-language news weekly offering in-depth analysis, political commentary, and cultural insights.",
      metric: "40+ Years",
      metricLabel: "Of Journalism",
    },
  ];

  const unitToPageMap: Record<string, string> = {
    energy: "energy",
    marketing: "marketing",
    shipping: "shipping",
    technology: "technology",
    unb: "unb",
    dhakacourier: "dhaka-courier",
  };

  return (
    <section id="businesses" className="py-20 md:py-28 px-6 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <div className="inline-block bg-red-950/40 border border-red-500/30 px-3 py-1 rounded-full text-red-400 text-xs font-semibold tracking-wider uppercase mb-4">
            Our Enterprise Spheres
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Our Companies
          </h2>
          <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl font-light">
            Each business division is operated by leading sector professionals, working with international standards to deliver industrial excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.35, 
                delay: index * 0.05,
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
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 transition-all duration-500 transform hover:-translate-y-1"
              role="button"
              aria-label={`Visit ${unit.title} portal`}
            >
              {/* Background Image */}
              <img
                src={unit.image}
                alt={`${unit.title} background`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/20 transition-opacity duration-500 group-hover:via-slate-950/70" />
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-500" />

              {/* Top Icon */}
              <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-slate-950/60 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-red-600/90 group-hover:border-red-500/30">
                {unit.icon}
              </div>

              {/* Top Right Arrow */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-wide text-white group-hover:text-red-400 transition-colors">
                  {unit.title}
                </h3>
                <p className="text-sm text-slate-300 line-clamp-2 font-light leading-relaxed mb-4">
                  {unit.tagline}
                </p>
                <div className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest font-mono transition-all duration-300 group-hover:text-red-300">
                  <span>Explore Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
