import React from "react";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Radio,
  Users,
  ArrowUpRight,
  Image as ImageIcon,
  Globe,
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface UNBProps {
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

export default function UNB({ onBackToHome }: UNBProps) {
  const globalPartners = [
    {
      name: "Associated Press (AP)",
      role: "Principal Partner",
      description:
        "As the principal partner, AP has a longstanding strategic alliance with UNB, facilitating seamless real-time news syndication and visual coverage.",
      icon: "AP",
      featured: true,
    },
    {
      name: "Thomson Reuters",
      role: "Global News Exchange Partner",
      description:
        "Collaborating on worldwide geopolitical columns, financial briefs, and international press wire feeds.",
      icon: "TR",
      featured: false,
    },
    {
      name: "Dow Jones",
      role: "Financial News Exchange Partner",
      description:
        "Partnering to deliver institutional economic reports, global stock indicators, and corporate bulletins to the region.",
      icon: "DJ",
      featured: false,
    },
  ];

  const galleryImages = [
    { src: "/images/unb/9572445_jpg.webp", alt: "UNB Newsroom Operations" },
    { src: "/images/unb/6805988_jpg.webp", alt: "Field Reporting Coverage" },
    { src: "/images/unb/7827012_jpg.webp", alt: "Press Conference Coverage" },
    { src: "/images/unb/5690874_jpg.webp", alt: "National Event Reporting" },
    { src: "/images/unb/4603398_jpg.webp", alt: "Editorial Team at Work" },
    { src: "/images/unb/8183222_jpg.webp", alt: "Breaking News Dispatch" },
    { src: "/images/unb/2725150_jpg.webp", alt: "Correspondent Network" },
    { src: "/images/unb/9902770_jpg.webp", alt: "Media Syndication Hub" },
    { src: "/images/unb/6234963_jpg.webp", alt: "On-Ground Journalism" },
    { src: "/images/unb/3300992_jpg.webp", alt: "Regional News Bureau" },
    { src: "/images/unb/7104913_jpg.webp", alt: "Wire Service Operations" },
    { src: "/images/unb/6553933_jpg.webp", alt: "International News Exchange" },
    { src: "/images/unb/7748030_jpg.webp", alt: "Digital News Platform" },
    { src: "/images/unb/1679510_jpg.webp", alt: "Parliament & Policy Coverage" },
    { src: "/images/unb/1368702_jpg.webp", alt: "Community Storytelling" },
    { src: "/images/unb/1267152_jpg.webp", alt: "Election & Civic Reporting" },
    { src: "/images/unb/3400240_jpg.webp", alt: "Business & Economy Desk" },
    { src: "/images/unb/6436199_jpg.webp", alt: "Sports & Culture Coverage" },
    { src: "/images/unb/8233889_jpg.webp", alt: "Photojournalism in Action" },
    { src: "/images/unb/7387367_jpg.webp", alt: "Nationwide News Network" },
  ];

  return (
    <div id="unb-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-unb"
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
          name="United News of Bangladesh"
          logo="/logos/United News of Bangladesh.png"
          descriptor="News Agency"
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
              src="/images/unb/sv-unb-cover.jpg"
              alt="United News of Bangladesh"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04060f]/75 via-[#04060f]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/40 via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Media Division — Estd. 1988
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none drop-shadow-md">
                United News of Bangladesh (UNB)
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                The First Digital Wire Service in South Asia&apos;s Private Sector
              </p>
            </div>

            <p className="text-slate-100 text-sm md:text-lg font-light leading-relaxed max-w-3xl drop-shadow-md">
              Informing and connecting Bangladesh with the world since 1988. As the nation&apos;s premier independent news agency, UNB delivers robust, authoritative, and real-time coverage across all media platforms.
            </p>
          </div>
        </motion.div>

        {/* Global Partnerships Section */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              International Networks
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Global Partnerships
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              UNB partners with the world&apos;s leading news agencies to ensure robust news exchange, bringing unbiased global news directly to Bangladesh and syndicating national reportage worldwide.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {globalPartners.map((partner) => (
              <GlowCard
                key={partner.name}
                variants={fadeUp}
                theme="dark"
                className={`p-8 rounded-2xl border flex flex-col justify-between gap-6 transition-colors ${
                  partner.featured
                    ? "bg-red-950/20 border-red-900/40 hover:border-red-800/60"
                    : "bg-white/[0.03] border-slate-800/60 hover:bg-white/[0.05]"
                }`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-14 h-10 rounded-xl flex items-center justify-center font-black font-mono tracking-tighter text-sm border shadow-sm ${
                      partner.featured
                        ? "bg-red-950/50 text-red-400 border-red-900/40"
                        : "bg-white/[0.04] text-slate-300 border-slate-700/60"
                    }`}
                  >
                    {partner.icon}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight">
                      {partner.name}
                    </h3>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                        partner.featured ? "text-red-500" : "text-slate-500"
                      }`}
                    >
                      {partner.role}
                    </span>
                  </div>

                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono font-bold text-slate-500">
                  <span>SYNDICATED FEED</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>

        {/* News Coverage Gallery */}
        <div className="space-y-8">
          <motion.div
            variants={fadeUp}
            className="max-w-2xl flex flex-col md:flex-row md:items-end justify-between gap-4 w-full"
          >
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
                Journalism in Action
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                News Coverage
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Field Highlights</span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {galleryImages.map((img, index) => (
              <GlowCard
                key={index}
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

          {/* Audience & Presence Metrics */}
          <motion.div variants={fadeUp} className="space-y-4 pt-6">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block px-1">
              Audience & Presence Metrics
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
                <Users className="w-6 h-6 text-red-500 mb-4" />
                <h4 className="text-2xl md:text-3xl font-black font-display text-white mb-1 tracking-tight">
                  20M+
                </h4>
                <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Global Reach
                </p>
                <p className="text-sm text-slate-400 font-light">
                  Across readers, listeners, and viewers worldwide.
                </p>
              </GlowCard>

              <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
                <MapPin className="w-6 h-6 text-red-500 mb-4" />
                <h4 className="text-2xl md:text-3xl font-black font-display text-white mb-1 tracking-tight">
                  64 Districts
                </h4>
                <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Correspondent Grid
                </p>
                <p className="text-sm text-slate-400 font-light">
                  Comprehensive nationwide network of field reporters.
                </p>
              </GlowCard>

              <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
                <Globe className="w-6 h-6 text-red-500 mb-4" />
                <h4 className="text-2xl md:text-3xl font-black font-display text-white mb-1 tracking-tight">
                  1988
                </h4>
                <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Year Established
                </p>
                <p className="text-sm text-slate-400 font-light">
                  First private wire service in South Asia.
                </p>
              </GlowCard>
            </div>
          </motion.div>
        </div>

        {/* Corporate Brochure Download */}
        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="unb" />
        </div>
      </motion.div>
    </div>
  );
}
