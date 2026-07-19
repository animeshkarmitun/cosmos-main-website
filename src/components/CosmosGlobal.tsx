import React from "react";
import {
  ArrowLeft,
  Globe,
  Layers,
  Truck,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface CosmosGlobalProps {
  onBackToHome: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function CosmosGlobal({ onBackToHome }: CosmosGlobalProps) {
  const globalPillars = [
    {
      title: "Commodity & Resource Trading",
      icon: Layers,
      description:
        "Managing high-volume international imports of industrial raw materials, minerals, heavy coal, energy commodities, and specialized machinery.",
    },
    {
      title: "Supply Chain & Logistics Grid",
      icon: Truck,
      description:
        "Constructing and managing seamless, end-to-end bulk logistics grids, secure warehousing, and rapid customs clearance paths.",
    },
    {
      title: "Global Procurement Alliances",
      icon: Workflow,
      description:
        "Maintaining strong procurement and supply-side partnerships with raw materials producers across North America, Australia, and East Asia.",
    },
  ];

  const operationalStats = [
    {
      metric: "1M+ Tons",
      label: "Annually Procured Materials",
      description: "Coordinating massive physical volumes of essential industrial minerals and commodities.",
    },
    {
      metric: "15+ Nations",
      label: "Active Source Markets",
      description: "Managing reliable vendor relationships spanning several continents.",
    },
    {
      metric: "100% Certified",
      label: "Compliant Customs Clearing",
      description: "Utilizing state-of-the-art compliance structures for seamless, rapid custom clearances.",
    },
  ];

  return (
    <div id="global-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-global"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-7xl mx-auto px-4 md:px-6 mb-12"
      >
        <DivisionBrandBanner
          name="Cosmos Global"
          logo="/logos/Cosmos Resources Pte Ltd.png"
          descriptor="Global Resources"
          theme="dark"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 pb-24"
      >
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          className="bg-white/[0.03] border border-slate-800/60 rounded-3xl overflow-hidden relative shadow-2xl"
        >
          <div className="absolute inset-0">
            <img
              src="/images/cosmos-global/hero.webp"
              alt="Cosmos Global Resources international commodity trading port"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04060f]/90 via-[#04060f]/55 to-[#04060f]/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/80 via-[#04060f]/15 to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <Globe className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                International Division — Estd. 2005
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Cosmos Global Resources
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                International Commodity Trading, Resources Procurement & Supply Chains
              </p>
            </div>

            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              Constructing vital, compliant corridors for essential resources. We manage international commodity networks, bulk logistics, and raw material procurement channels to keep domestic industrial processing plants operating efficiently.
            </p>
          </div>
        </motion.div>

        {/* Trade Pillars */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Global Supply Alliances
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Trade & Logistics Pillars
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {globalPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <GlowCard
                  key={pillar.title}
                  variants={fadeUp}
                  theme="dark"
                  className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-950/50 text-red-400 flex items-center justify-center border border-red-900/30">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>

        {/* Operational Statistics */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Reliable Corridors
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Operational Statistics
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              Supplying industrial hubs nationwide, ensuring top-tier trade certifications and uninterrupted import networks.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {operationalStats.map((stat) => (
              <GlowCard
                key={stat.label}
                variants={fadeUp}
                theme="dark"
                className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl"
              >
                <ShieldCheck className="w-6 h-6 text-red-500 mb-4" />
                <span className="block text-2xl md:text-3xl font-black text-white tracking-tight">
                  {stat.metric}
                </span>
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono mt-1">
                  {stat.label}
                </span>
                <p className="text-sm text-slate-400 font-light mt-3 leading-relaxed">{stat.description}</p>
              </GlowCard>
            ))}
          </motion.div>
        </div>

        {/* Global Finance Visual */}
        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl overflow-hidden border border-slate-800/70 shadow-2xl shadow-black/35"
        >
          <img
            src="/images/cosmos-global/global-finance.webp"
            alt="Global finance and international trade corridors"
            className="w-full h-56 md:h-80 object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/45 via-transparent to-[#04060f]/15" />
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/70 border border-red-900/40 rounded-full text-[10px] font-mono font-bold tracking-widest text-red-300 uppercase backdrop-blur-sm">
            Global Finance & Trade
          </div>
        </motion.div>

        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="global" />
        </div>
      </motion.div>
    </div>
  );
}
