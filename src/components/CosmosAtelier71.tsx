import React from "react";
import {
  ArrowLeft,
  Palette,
  Layers,
  Users,
  BookOpen,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface CosmosAtelier71Props {
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

export default function CosmosAtelier71({ onBackToHome }: CosmosAtelier71Props) {
  const corePillars = [
    {
      title: "Intensive Workshops",
      icon: Layers,
      description:
        "Organising intensive workshops in printmaking techniques, including etching, woodcut, plate lithography, cyanotype, and drypoint, led by master artists from Bangladesh and abroad.",
    },
    {
      title: "International Residencies",
      icon: Users,
      description:
        "Hosting local artists alongside an annual international residency programme that encourages cross-cultural dialogue. Participants are selected nationwide to support artistic decentralisation.",
    },
    {
      title: "Education & Community",
      icon: BookOpen,
      description:
        "In addition to printmaking, the studio regularly organises workshops in ceramics, drawing, and watercolour, while conducting educational programmes with children throughout the year.",
    },
  ];

  const galleryImages = [
    { src: "/images/atelier-studio.jpg", alt: "Cosmos Atelier 71 Studio" },
    { src: "/images/cosmos-atelier/sv-ca71-updatev1.jpg", alt: "Printmaking at Atelier 71" },
    { src: "/images/atelier.jpeg", alt: "Cosmos Atelier 71 Printmaking" },
  ];

  return (
    <div id="atelier-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-atelier"
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
          name="Cosmos Atelier 71"
          logo="/logos/Cosmos Atelier 71.png"
          descriptor="Printmaking Studio"
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
              src="/images/cosmos-atelier/sv-ca71-updatev1.jpg"
              alt="Cosmos Atelier 71"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/85 via-[#04060f]/20 to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <Palette className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Fine Arts Division — Estd. 2009
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Cosmos Atelier 71
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                Printmaking Studio, Art Incubation & Cultural Exchange
              </p>
            </div>

            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              Cosmos Atelier 71 has remained a living site of printmaking practice and artistic exchange for almost two decades. The studio sustains a continuous working environment, encouraging cross-cultural dialogue and experimentation.
            </p>
          </div>
        </motion.div>

        {/* Legacy & Practice */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Studio Heritage
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              A Legacy of Artistic Practice
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlowCard
              variants={fadeUp}
              theme="dark"
              className="bg-white/[0.03] border border-slate-800/60 p-8 md:p-10 rounded-2xl flex flex-col justify-center"
            >
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                Over the years, Cosmos Atelier 71 has hosted many international artists, including Toshihiko Ikeda (Japan) and Oona Hyland (Ireland). These residencies frequently culminate in exhibitions at Gallery Cosmos, strengthening the connection between studio-based practice and public presentation.
              </p>
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed mt-4">
                Emerging and self-taught artists are actively encouraged through residencies, workshops, and a year-long membership programme bringing together practitioners from diverse cultural fields.
              </p>
            </GlowCard>

            <GlowCard
              variants={fadeUp}
              theme="dark"
              className="bg-white/[0.03] border border-slate-800/60 rounded-2xl overflow-hidden group"
            >
              <img
                src="/images/atelier-studio.jpg"
                alt="Cosmos Atelier 71 Studio"
                className="w-full h-full min-h-[280px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </GlowCard>
          </motion.div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Studio Activities
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Atelier Core Pillars
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePillars.map((pillar) => {
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

        {/* Studio Highlights */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
                Printmaking in Practice
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                Studio Highlights
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Atelier 71</span>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm font-bold font-display uppercase tracking-wide text-white">{img.alt}</p>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="atelier" />
        </div>
      </motion.div>
    </div>
  );
}
