import React from "react";
import {
  ArrowLeft,
  Briefcase,
  FileText,
  Compass,
  Handshake,
  TrendingUp,
  ShieldCheck,
  Users,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "motion/react";
import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface CosmosMarketingProps {
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

export default function CosmosMarketing({ onBackToHome }: CosmosMarketingProps) {
  const marketingPillars = [
    {
      title: "Business Representation",
      icon: Handshake,
      desc: "Acting as the local partner and exclusive representative of Fortune 500 consortiums, contractors, and industrial conglomerates in Bangladesh.",
    },
    {
      title: "Market Entry & Consulting",
      icon: Compass,
      desc: "Delivering detailed feasibility studies, economic mapping, regulatory gap analysis, and tailored strategies for complex market entries.",
    },
    {
      title: "B2B Procurement & Tender Bid Advice",
      icon: FileText,
      desc: "Providing precise intelligence, legal framework navigation, and technical bid advisory services for mega-scale national infrastructure contracts.",
    },
  ];

  const galleryImages = [
    { src: "/images/cosmos-marketing-card.png", alt: "Cosmos Marketing Consultation" },
    { src: "/images/about-us-1.jpeg", alt: "Corporate Strategy & Leadership" },
    { src: "/images/events/China 1e.jpg", alt: "International Business Delegation — China" },
    { src: "/images/about-us-2.jpg", alt: "Advanced Technology Partnerships" },
    { src: "/images/events/Nordic 1e.jpg", alt: "Nordic Trade & Investment Forum" },
    { src: "/images/events/China 3e.jpg", alt: "Cross-Border B2B Collaboration" },
  ];

  return (
    <div id="marketing-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-marketing"
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
          name="Cosmos Marketing Consultants"
          logo="/logos/Cosmos Logo-01.png"
          descriptor="Consultation Services"
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
              src="/images/cosmos-marketing-card.png"
              alt="Cosmos Marketing Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04060f]/75 via-[#04060f]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/40 via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <Briefcase className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Consultation Division — Estd. 1978
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Cosmos Marketing Ltd.
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                High-Level Consultation, Advisory & B2B Representation
              </p>
            </div>

            <p className="text-slate-100 text-sm md:text-lg font-light leading-relaxed max-w-3xl drop-shadow-md">
              We provide unparalleled local partnership, corporate representation, and advisory solutions in energy, high technology, and defense sectors, guiding global partners through successful, highly compliant entries in South Asia.
            </p>
          </div>
        </motion.div>

        {/* Marketing & Advisory Pillars */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              B2B Strategic Growth
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Marketing & Advisory Pillars
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketingPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <GlowCard
                  key={pillar.title}
                  variants={fadeUp}
                  theme="dark"
                  className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-900/30 text-red-500 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>

        {/* Partnership Highlights */}
        <div className="space-y-8">
          <motion.div
            variants={fadeUp}
            className="max-w-2xl flex flex-col md:flex-row md:items-end justify-between gap-4 w-full"
          >
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
                Global Partnerships & Delegations
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                Market Authority
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Engagement Highlights</span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {galleryImages.map((img) => (
              <GlowCard
                key={img.src}
                variants={fadeUp}
                theme="dark"
                className="break-inside-avoid bg-white/[0.03] border border-slate-800/60 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors group relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm font-bold font-display uppercase tracking-wide text-white">
                    {img.alt}
                  </p>
                </div>
              </GlowCard>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <TrendingUp className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                40+ Partners
              </h4>
              <p className="text-sm text-slate-400 font-light">
                Representing multi-billion dollar industrial, logistics, and resource corporations across strategic sectors.
              </p>
            </GlowCard>
            <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <ShieldCheck className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                100% Win-Compliance
              </h4>
              <p className="text-sm text-slate-400 font-light">
                Strict adherence to TRACE compliance and global anti-corruption standards in every engagement.
              </p>
            </GlowCard>
            <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <Users className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                $2B+ Contracts
              </h4>
              <p className="text-sm text-slate-400 font-light">
                Advised and supported major power plants, geological studies, and port network infrastructure projects.
              </p>
            </GlowCard>
          </motion.div>
        </div>

        {/* Corporate Brochure Download */}
        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="marketing" />
        </div>
      </motion.div>
    </div>
  );
}
