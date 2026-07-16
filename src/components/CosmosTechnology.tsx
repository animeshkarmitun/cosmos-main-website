import React from "react";
import {
  ArrowLeft,
  Cpu,
  Network,
  Radio,
  Server,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface CosmosTechnologyProps {
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

export default function CosmosTechnology({ onBackToHome }: CosmosTechnologyProps) {
  const technologySolutions = [
    {
      title: "Optical Transmission & Fiber Networks",
      icon: Network,
      description:
        "Deploying high-speed Synchronous Digital Hierarchy (SDH) and Dense Wavelength Division Multiplexing (DWDM) optical terminals nationwide.",
    },
    {
      title: "Microwave Transmission & Wireless Links",
      icon: Radio,
      description:
        "Supplying advanced point-to-point and point-to-multipoint digital microwave systems to bridge geographic and remote connectivity gaps.",
    },
    {
      title: "Billing & Core Network Systems",
      icon: Server,
      description:
        "Integrating state-of-the-art telecommunications billing infrastructure, subscriber servers, and dynamic cloud databases for top operators.",
    },
  ];

  const infrastructureMetrics = [
    {
      metric: "99.999%",
      label: "Carrier-Grade Uptime",
      description: "Delivering resilient telecommunications signaling and terminal equipment.",
    },
    {
      metric: "10K+ KM",
      label: "Fiber Network Support",
      description: "Supported through our state-of-the-art SDH / DWDM terminals.",
    },
    {
      metric: "Top Operators",
      label: "Active Clients",
      description: "Strategic provider to major mobile telecommunication companies.",
    },
  ];

  return (
    <div id="technology-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-technology"
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
          name="Cosmos Technology"
          logo="/logos/Cosmos Technologies.png"
          descriptor="Technology & Telecommunications"
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
              src="/images/cosmos-technology/service_1004_Tech.jpg"
              alt="Cosmos Technologies"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f] via-[#04060f]/60 to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <Cpu className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Technology Division — Estd. 1995
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Cosmos Technology
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                High-Capacity Infrastructure, Signaling & System Integration
              </p>
            </div>

            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              Driving digital transformation with enterprise-grade telecommunications infrastructure. We supply, integrate, and maintain high-capacity fiber optical terminals and microwave transmission networks for major national operators.
            </p>
          </div>
        </motion.div>

        {/* Solutions Section */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Digital Signal Corridors
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Technology Services & Solutions
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologySolutions.map((sol) => {
              const IconComp = sol.icon;
              return (
                <GlowCard
                  key={sol.title}
                  variants={fadeUp}
                  theme="dark"
                  className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-950/50 text-red-400 flex items-center justify-center border border-red-900/30">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-3">
                      {sol.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                      {sol.description}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>

        {/* Infrastructure Metrics */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Reliable Gridways
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Infrastructure Metrics
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              Supplying critical equipment to national networks, keeping millions of subscribers connected round the clock.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {infrastructureMetrics.map((stat) => (
              <GlowCard
                key={stat.label}
                variants={fadeUp}
                theme="dark"
                className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl"
              >
                <Zap className="w-6 h-6 text-red-500 mb-4" />
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

        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="technology" />
        </div>
      </motion.div>
    </div>
  );
}
