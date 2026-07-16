import React from "react";
import { 
  ArrowLeft, 
  PawPrint, 
  Leaf, 
  Users, 
  Binoculars,
  Heart,
  Shield,
  ArrowUpRight,
  Globe,
  Image as ImageIcon
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface WildTeamProps {
  onBackToHome: () => void;
}

// ── Animation variants (Cosmos Foundation pattern) ─────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function WildTeam({ onBackToHome }: WildTeamProps) {
  const focusAreas = [
    {
      title: "Tiger Conservation",
      icon: PawPrint,
      description: "Protecting the endangered Royal Bengal Tiger through anti-poaching patrols, corridor monitoring, and community-based stewardship across critical habitats."
    },
    {
      title: "Habitat Restoration",
      icon: Leaf,
      description: "Restoring forest ecosystems, wetlands, and wildlife corridors to ensure safe passage and breeding grounds for threatened species."
    },
    {
      title: "Community Engagement",
      icon: Users,
      description: "Empowering local communities with sustainable livelihoods, education, and conservation training to reduce human-wildlife conflict."
    }
  ];

  const impactMetrics = [
    {
      title: "Flagship Species",
      metric: "Royal Bengal Tiger",
      description: "Core conservation focus across Bangladesh's last tiger landscapes.",
      icon: PawPrint
    },
    {
      title: "Field Presence",
      metric: "24/7 Patrols",
      description: "Continuous monitoring and rapid response teams in protected areas.",
      icon: Binoculars
    },
    {
      title: "Partnerships",
      metric: "Global Network",
      description: "Collaborating with international wildlife and research organizations.",
      icon: Globe
    }
  ];

  const galleryImages = [
    { 
      src: "/images/wildteam/dd55b2_bea383b5cdc54422913780973ec2bd49~mv2.avif", 
      alt: "WildTeam Conservation Work",
      featured: true
    },
    { 
      src: "/images/wildteam/HTC demonstration 2_JPG.avif", 
      alt: "HTC Demonstration",
      featured: false
    },
    { 
      src: "/images/wildteam/VTRT rally_JPG.avif", 
      alt: "VTRT Rally",
      featured: false
    }
  ];

  return (
    <div id="wildteam-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-wildteam"
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
          name="WildTeam" 
          logo="/logos/WildTeam.png" 
          descriptor="Wildlife Conservation" 
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
        <motion.div variants={fadeUp} className="bg-white/[0.03] border border-slate-800/60 rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0">
            <img 
              src="/images/wildteam/dd55b2_bea383b5cdc54422913780973ec2bd49~mv2.avif" 
              alt="WildTeam Banner" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f] via-[#04060f]/60 to-transparent" />
          </div>
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <PawPrint className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Conservation Initiative
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                WildTeam
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                Protecting Bangladesh's Wildlife & Wild Lands
              </p>
            </div>

            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              A pioneering wildlife conservation initiative dedicated to safeguarding the Royal Bengal Tiger and preserving Bangladesh's rich biodiversity through science, community partnership, and relentless field action.
            </p>
          </div>
        </motion.div>

        {/* Conservation Focus */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Strategic Conservation Priorities
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Conservation Focus
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((focus) => {
              const IconComponent = focus.icon;
              return (
                <GlowCard 
                  key={focus.title}
                  variants={fadeUp}
                  theme="dark"
                  className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl hover:bg-white/[0.05] transition-colors flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-red-950/50 border border-red-900/30 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight">
                      {focus.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-red-500 font-mono font-bold uppercase tracking-wider">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>

        {/* Impact Metrics */}
        <motion.div variants={fadeUp} className="bg-white/[0.03] border border-slate-800/60 p-8 md:p-12 rounded-3xl space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Presence & Partnerships
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Conservation Impact
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              WildTeam combines cutting-edge research, rigorous protection, and grassroots collaboration to secure a future where wildlife and communities thrive together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactMetrics.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <GlowCard 
                  key={idx}
                  theme="dark"
                  className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-950/50 text-red-500 border border-red-900/30 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                      <IconComponent className="w-3 h-3" />
                      {item.title}
                    </div>
                    <span className="block text-2xl md:text-3xl font-black text-white tracking-tight pt-2">
                      {item.metric}
                    </span>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </motion.div>

        {/* Image Gallery (Masonry Grid) */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
                Field Action
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                In The Wild
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Gallery Highlights</span>
            </div>
          </motion.div>
          
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Featured Image - Spans 8 cols */}
            <GlowCard 
              variants={fadeUp}
              theme="dark"
              className="md:col-span-8 h-64 md:h-[500px] rounded-3xl overflow-hidden relative group bg-white/[0.03] border border-slate-800/60"
            >
              <img 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-sm font-bold font-display uppercase tracking-wide text-white">
                  {galleryImages[0].alt}
                </p>
              </div>
            </GlowCard>

            {/* Side Stack - Spans 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
              <GlowCard 
                variants={fadeUp}
                theme="dark"
                className="flex-1 rounded-3xl overflow-hidden relative group bg-white/[0.03] border border-slate-800/60 h-48 md:h-auto"
              >
                <img 
                  src={galleryImages[1].src} 
                  alt={galleryImages[1].alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm font-bold font-display uppercase tracking-wide text-white">
                    {galleryImages[1].alt}
                  </p>
                </div>
              </GlowCard>
              <GlowCard 
                variants={fadeUp}
                theme="dark"
                className="flex-1 rounded-3xl overflow-hidden relative group bg-white/[0.03] border border-slate-800/60 h-48 md:h-auto"
              >
                <img 
                  src={galleryImages[2].src} 
                  alt={galleryImages[2].alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm font-bold font-display uppercase tracking-wide text-white">
                    {galleryImages[2].alt}
                  </p>
                </div>
              </GlowCard>
            </div>
          </motion.div>
        </div>

        {/* Commitment Banner */}
        <motion.div variants={fadeUp} className="bg-gradient-to-r from-red-700 to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase">
                <Heart className="w-3.5 h-3.5" />
                Supported by Cosmos Group
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                Conservation is a Shared Responsibility
              </h3>
              <p className="text-red-100 text-sm md:text-base font-light">
                Through WildTeam, Cosmos Group extends its commitment beyond business — investing in the protection of our nation's most iconic species and the ecosystems that sustain us all.
              </p>
            </div>
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Corporate Brochure Download */}
        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="wildteam" />
        </div>

      </motion.div>
    </div>
  );
}
