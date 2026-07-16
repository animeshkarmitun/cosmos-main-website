import React from "react";
import {
  ArrowLeft,
  Flame,
  Zap,
  Radio,
  Sun,
  CheckCircle,
  Star,
  Users,
  Shield,
  Award,
  Cable,
  Factory,
  Gauge,
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";

interface EnergyServicesProps {
  onBackToHome: () => void;
}

// ── Animation variants (DESIGN.md §6) ────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// ── Data ──────────────────────────────────────────────────────────
const capabilities = [
  {
    icon: Flame,
    title: "Oil & Gas Exploration",
    description:
      "Bangladesh's first geological study, Haripur Oil Field discovery, Sangu Gas Field for Cairn Energy, Lakatura 300 MMSCFD Plant, pipeline infrastructure, refinery FEED, and SCADA systems.",
    highlight: "Est. 1982",
  },
  {
    icon: Zap,
    title: "Power Generation",
    description:
      "First Independent Captive Power Producer in Bangladesh. Built a 10MW gas-engine power plant for Scan Cement factory under JV with Rolls Royce Power Ventures, UK. O&M of power plants, substations, and supply of major electrical equipment.",
    highlight: "ISO 9001 Certified",
  },
  {
    icon: Cable,
    title: "Transmission & Distribution",
    description:
      "First 230KV substation for PGCB in partnership with Mahkota Technologies (formerly GEC Malaysia). 400kV and 230kV transmission lines, turnkey contracts for 15+ substations under rehabilitation and upgradation projects.",
    highlight: "400kV Max Voltage",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description:
      "200 MW Solar PV Project by Sun Edison, 100 MW Wind Power Plant by VESTAS. Pre-payment metering systems, smart grid solutions, and network automation for next-generation energy distribution.",
    highlight: "Future-Forward",
  },
];

const powerProjects = [
  {
    id: "pp-cipp",
    title: "Bangladesh's First CIPP",
    subtitle: "Captive Independent Power Producer",
    description:
      "In partnership with Rolls Royce Power Ventures, UK. First organization in Bangladesh to attain ISO 9001 Certification for O&M of Captive Power Plant.",
    isFeatured: true,
  },
  {
    id: "pp-ashuganj",
    title: "Ashuganj Power Plant",
    year: "2018",
    description:
      "400MW Combined Cycle with CNTIC under APSCL-EPC",
  },
  {
    id: "pp-bibiyana",
    title: "Bibiyana South",
    year: "2017",
    description:
      "400 MW Gas Based Combined Cycle with Larsen & Toubro under BPDB",
  },
  {
    id: "pp-maitree",
    title: "Maitree Super Thermal",
    year: "2017",
    description:
      "1320 MW Coal Power Plant at Rampal with BHEL under BIFPCL",
  },
  {
    id: "pp-bheramara",
    title: "Bheramara CCPP",
    year: "2015",
    description:
      "414 MW Combined Cycle with Larsen & Toubro under NWPGCL",
  },
];

const oilGasAchievements = [
  {
    id: "og-1",
    title: "First Geological Study of Bangladesh",
    description:
      "Petroleum Geology Study (Cosmos-Corelab-BAPEX JV)",
  },
  {
    id: "og-2",
    title: "First Oil Field Discovery",
    description:
      "Haripur Oil Field — Provided all third-party services and materials",
  },
  {
    id: "og-3",
    title: "Major Gas Field Projects",
    description:
      "Sangu Gas Field for Cairn Energy, Lakatura 300 MMSCFD Plant, Silica Gel 90 MMCFD Plant",
  },
  {
    id: "og-4",
    title: "Infrastructure Development",
    description:
      "Pipeline projects, drilling rig supplies, refinery FEED, SCADA systems",
  },
  {
    id: "og-5",
    title: "Recent Achievements",
    description:
      "Chevron PSC Block evaluation, SPM Project under BPC/ERL, Black Ash Study under GTCL",
    isRecent: true,
  },
];

const metrics = [
  { value: "40+", unit: "Years", label: "Sector Leadership" },
  { value: "2,534+", unit: "MW", label: "Power Capacity" },
  { value: "15+", unit: "", label: "Substations Built" },
  { value: "400", unit: "kV", label: "Max Voltage Rating" },
];

// ── Component ────────────────────────────────────────────────────
export default function EnergyServices({ onBackToHome }: EnergyServicesProps) {
  return (
    <div
      id="energy-services-page"
      className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30"
    >
      {/* ═══ Back Navigation ═══ */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-energy"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      {/* ═══ Division Brand Banner ═══ */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-7xl mx-auto px-4 md:px-6 mb-12"
      >
        <DivisionBrandBanner
          name="Cosmos Energy Services"
          logo="/logos/Cosmos Energy Services.png"
          descriptor="Oil, Gas & Power"
          theme="dark"
        />
      </motion.div>

      {/* ═══ Main Content ═══ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 pb-24"
      >
        {/* ─── SECTION 1: Hero Banner ─── */}
        <motion.div
          variants={fadeUp}
          className="bg-white/[0.03] border border-slate-800/60 rounded-3xl overflow-hidden relative shadow-2xl"
        >
          <div className="absolute inset-0">
            <img
              src="/images/cosmos-energy-card.png"
              alt="Cosmos Energy Services operations"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f] via-[#04060f]/60 to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <Zap className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Energy & Power Division
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Cosmos Energy Services
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                Oil, Gas & Power — Since 1982
              </p>
            </div>

            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              Bangladesh's pioneering energy company providing comprehensive solutions 
              across oil & gas exploration, power generation, transmission infrastructure, 
              and renewable energy. A professional team of geoscientists, economists, geologists, 
              and engineers with unrivaled experience in petroleum and power sectors.
            </p>
          </div>
        </motion.div>

        {/* ─── SECTION 2: Core Capabilities (2×2 Grid) ─── */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Sectors & Expertise
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Core Capabilities
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {capabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-5 hover:bg-white/[0.05] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-950/50 border border-red-900/30 flex items-center justify-center shrink-0">
                    <cap.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight">
                    {cap.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  {cap.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-800/60">
                  <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest">
                    {cap.highlight}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ─── SECTION 3: Power Generation Projects ─── */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Leadership in Energy Infrastructure
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Power Generation Projects
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-4">
            {powerProjects.map((proj) => (
              <motion.div
                key={proj.id}
                variants={fadeUp}
                className={`rounded-2xl border transition-all duration-300 ${
                  proj.isFeatured
                    ? "bg-red-950/20 border-red-900/30 shadow-lg shadow-red-950/10"
                    : "bg-white/[0.03] border-slate-800/60 hover:bg-white/[0.05]"
                }`}
              >
                <div className="p-6 md:p-8 flex items-start gap-5">
                  {/* Year / Featured badge */}
                  <div className="shrink-0 mt-0.5">
                    {proj.isFeatured ? (
                      <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-500/25">
                        <Award className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="px-3 py-1.5 rounded-full bg-red-950/50 border border-red-900/30">
                        <span className="text-xs font-mono font-bold text-red-500">
                          {proj.year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="text-base md:text-lg font-bold font-display text-white uppercase tracking-tight">
                        {proj.title}
                      </h4>
                      {proj.isFeatured && (
                        <span className="text-[9px] bg-red-900/40 text-red-400 font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-red-800/30">
                          Pioneer
                        </span>
                      )}
                    </div>
                    {proj.subtitle && (
                      <p className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider">
                        {proj.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Transmission & Distribution summary cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4"
          >
            <motion.div
              variants={fadeUp}
              className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl"
            >
              <Radio className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                Transmission Lines
              </h4>
              <p className="text-sm text-slate-400 font-light">
                400kV and 230kV transmission lines including Rooppur-Dhaka,
                Rooppur-Gopalganj, and Western Zone projects.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl"
            >
              <Factory className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                Substations
              </h4>
              <p className="text-sm text-slate-400 font-light">
                Turnkey contracts for 15+ substations under rehabilitation and
                upgradation projects. First 230KV substation for PGCB.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl"
            >
              <Gauge className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                Distribution
              </h4>
              <p className="text-sm text-slate-400 font-light">
                Pre-payment metering systems, smart grid solutions, and network
                automation for modern energy distribution.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ─── SECTION 4: Oil & Gas Track Record ─── */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Historical Track Record
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Oil & Gas Achievements
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light mt-2">
              Landmark projects in Bangladesh's petroleum sector since 1982
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-4">
            {oilGasAchievements.map((ach) => (
              <motion.div
                key={ach.id}
                variants={fadeUp}
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 flex items-start gap-5 ${
                  ach.isRecent
                    ? "bg-red-950/20 border-red-900/30 shadow-lg shadow-red-950/10"
                    : "bg-white/[0.03] border-slate-800/60 hover:bg-white/[0.05]"
                }`}
              >
                <div className="shrink-0 mt-0.5">
                  {ach.isRecent ? (
                    <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-500/25">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] text-red-500 flex items-center justify-center border border-slate-800/60">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-bold font-display uppercase tracking-tight text-white">
                      {ach.title}
                    </h4>
                    {ach.isRecent && (
                      <span className="text-[9px] bg-red-900/40 text-red-400 font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-red-800/30">
                        Key Highlight
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ─── SECTION 5: Key Metrics ─── */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="bg-[#0B132B] border border-slate-800/60 rounded-2xl p-6 text-center space-y-2"
            >
              <div className="text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
                {m.value}
                {m.unit && (
                  <span className="text-lg md:text-xl text-red-500 ml-1">
                    {m.unit}
                  </span>
                )}
              </div>
              <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                {m.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── SECTION 6: Corporate Brochure ─── */}
        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="energy" />
        </div>
      </motion.div>
    </div>
  );
}
