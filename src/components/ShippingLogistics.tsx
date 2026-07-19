import React from "react";
import {
  ArrowLeft,
  Ship,
  Anchor,
  MapPin,
  Clock,
  Globe2,
  Layers,
  Check,
  Warehouse,
  Container,
  Handshake,
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface ShippingLogisticsProps {
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

export default function ShippingLogistics({ onBackToHome }: ShippingLogisticsProps) {
  const locations = ["Chittagong", "Khulna / Mongla"];

  const servicePillars = [
    {
      title: "Logistics",
      icon: Warehouse,
      items: [
        "Warehousing",
        "Bulk Cargo Operations",
        "Project Logistics",
        "Engineering & Equipment",
        "Container Logistics Management",
        "Stevedoring",
        "International Freight Forwarding",
        "Logistics Management Application",
      ],
    },
    {
      title: "Infrastructure",
      icon: Container,
      items: [
        "Surface Transportation",
        "Cargo Terminals",
        "Terminal Management",
        "Container Rail Operations",
        "Container Depots",
        "Port Development",
      ],
    },
    {
      title: "Agency & Services",
      icon: Handshake,
      items: [
        "Support Services for Oil & Gas Industry",
        "Support Services for Power Industry",
        "Chartering Broker",
        "Crew Recruitment",
        "Ship Management",
        "Shipping Agency",
        "Clearing & Forwarding",
        "Support Services for Dredging Operations",
      ],
    },
  ];

  const clientSegments = [
    "Ship operators/owners agents",
    "Charterers' agents/brokers",
    "Freight forwarders",
    "Ship breakers",
  ];

  const capabilities = [
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "Efficient transportation and freight management services delivered safely, on time, and within budget.",
    },
    {
      icon: Globe2,
      title: "Global Partnerships",
      description:
        "Outbound shipments supported through overseas partners, extending CSL's reach across global supply chains.",
    },
    {
      icon: Layers,
      title: "Project Cargo Expertise",
      description:
        "Expediting break-bulk, containers, dry bulk, liquid bulk, steel, and project cargos from vessel to inland consignees.",
    },
  ];

  return (
    <div id="shipping-logistics-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-shipping"
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
          name="Cosmos Shipping & Logistics"
          logo="/logos/Cosmos Shipping and Logistics.png"
          descriptor="Shipping & Logistics"
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
              src="/images/cosmos-shipping/csl.jpg"
              alt="Cosmos Shipping and Logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/85 via-[#04060f]/20 to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <Anchor className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Maritime Division — Estd. 1980
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Cosmos Shipping and Logistics (CSL)
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                Bangladesh&apos;s Leading Logistical Support & Transportation Company
              </p>
            </div>

            <div className="space-y-5 text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              <p>
                The maritime arm of Cosmos Group, headquartered at Cosmos Centre, CSL delivers efficient agency services to foreign vessels calling at Bangladesh ports and ranks among the country&apos;s largest handlers of cargo by tonnage.
              </p>
              <p>
                We maintain offices at the port cities of Chittagong and Khulna/Mongla, offering full-service agency representation for ship operators, charterers, freight forwarders, and ship breakers — safely, on time, and within budget.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service Pillars */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              End-to-End Maritime Solutions
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Service Portfolio
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              CSL values the magnitude of developing efficient global supply chains — good transport logistics can assure the competitive edge for clients across Bangladesh and beyond.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {servicePillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <GlowCard
                  key={pillar.title}
                  variants={fadeUp}
                  theme="dark"
                  className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-950/50 text-red-400 flex items-center justify-center border border-red-900/30">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400 font-light leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>

        {/* Port Presence & Client Segments */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Nationwide Coverage
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Port Hubs & Client Segments
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlowCard
              variants={fadeUp}
              theme="dark"
              className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl space-y-6"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight">
                  Strategic Port Hubs
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {locations.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-slate-700/60 text-slate-300 text-xs font-bold uppercase tracking-wider rounded-full"
                  >
                    <Ship className="w-3 h-3 text-red-500" />
                    {loc}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Offices at Chittagong and Khulna/Mongla enable comprehensive coverage of Bangladesh&apos;s primary maritime gateways.
              </p>
            </GlowCard>

            <GlowCard
              variants={fadeUp}
              theme="dark"
              className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl space-y-6"
            >
              <div className="flex items-center gap-3">
                <Handshake className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight">
                  Who We Serve
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {clientSegments.map((segment) => (
                  <div
                    key={segment}
                    className="flex items-start gap-2.5 p-3.5 bg-[#0B132B] border border-slate-800/60 rounded-xl"
                  >
                    <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 font-light leading-tight">{segment}</span>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        </div>

        {/* Capabilities */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Operational Excellence
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Why CSL
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const IconComp = cap.icon;
              return (
                <GlowCard
                  key={cap.title}
                  variants={fadeUp}
                  theme="dark"
                  className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl"
                >
                  <IconComp className="w-6 h-6 text-red-500 mb-4" />
                  <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                    {cap.title}
                  </h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">{cap.description}</p>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>

        {/* Corporate Brochure Download */}
        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="shipping" />
        </div>
      </motion.div>
    </div>
  );
}
