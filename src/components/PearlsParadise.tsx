import React from "react";
import {
  ArrowLeft,
  Gem,
  Palette,
  Anchor,
  Globe,
  Handshake,
  Crown,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "motion/react";
import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface PearlsParadiseProps {
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

const distinguishedPatrons = [
  "Her Majesty Queen Elizabeth II",
  "Her Majesty Queen Sirikit of Thailand",
  "Her Majesty Queen Fabiola of Belgium",
  "The late Prime Minister Indira Gandhi of India",
  "Prime Minister Benazir Bhutto of Pakistan",
  "Her Majesty Rani Aishwarya of Nepal",
  "Her Majesty Empress Michiko of Japan",
  "His Highness Prince Karim Aga Khan",
];

export default function PearlsParadise({ onBackToHome }: PearlsParadiseProps) {
  const heritagePillars = [
    {
      title: "Pink Pearls in Gold Ornaments",
      icon: Anchor,
      desc: "One of Pearls Paradise's main product lines is setting pink pearls in gold ornaments. The pearls used are cultivated in the sweet waters of Bangladesh.",
    },
    {
      title: "Precious & Semi-Precious Stones",
      icon: Gem,
      desc: "Hand crafting jewelry with pink pearls, precious and semi-precious stones — reflecting the rich and exuberant cultural heritage of Bangladesh in traditional jewelry.",
    },
    {
      title: "Traditional Artisan Craftsmanship",
      icon: Palette,
      desc: "Pearls Paradise Jewelry is handmade by its own artisans, belonging to a traditional class of craftsmen.",
    },
  ];

  const productImages = [
    { src: "/images/pearls-paradise/image-2.jpg.jpeg", alt: "Pearls Paradise jewelry collection" },
    { src: "/images/pearls-paradise/image-3.jpg.jpeg", alt: "Pearls Paradise jewelry collection" },
    { src: "/images/pearls-paradise/image-4.jpeg", alt: "Pearls Paradise jewelry collection" },
    { src: "/images/pearls-paradise/image-5.jpeg", alt: "Pearls Paradise jewelry collection" },
    { src: "/images/pearls-paradise/image-6.jpeg", alt: "Pearls Paradise jewelry collection" },
    { src: "/images/pearls-paradise/image-7.jpeg", alt: "Pearls Paradise jewelry collection" },
    { src: "/images/pearls-paradise/image-8.jpeg", alt: "Pearls Paradise jewelry collection" },
  ];

  const portraitImages = [
    { src: "/images/pearls-paradise/image-face-1.jpg.jpeg", alt: "Pearls Paradise jewelry portrait" },
    { src: "/images/pearls-paradise/image-face-2.jpeg", alt: "Pearls Paradise jewelry portrait" },
    { src: "/images/pearls-paradise/image-face-3.jpeg", alt: "Pearls Paradise jewelry portrait" },
    { src: "/images/pearls-paradise/image-face-4.jpeg", alt: "Pearls Paradise jewelry portrait" },
    { src: "/images/pearls-paradise/image-face-5.jpeg", alt: "Pearls Paradise jewelry portrait" },
  ];

  return (
    <div id="pearls-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-pearls"
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
          name="Pearls Paradise"
          logo="/logos/Pearls Paradise.png"
          descriptor="Jewelry & Gems"
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
              src="/images/pearls-paradise/image-1.jpg"
              alt="Pearls Paradise Banner"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f] via-[#04060f]/60 to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <Gem className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Established 1959 — Incorporated 1980
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Pearls Paradise
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                Traditional Jewelry & Pink Pearls
              </p>
            </div>

            <div className="space-y-5 text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              <p>
                The rich and exuberant cultural heritage of Bangladesh is depicted vividly in our traditional jewelry. Pearls Paradise was established in 1959, and incorporated in 1980 as a Private Limited Company; hand crafting jewelry, pink pearls, precious and semi-precious stones.
              </p>
              <p>
                One of Pearls Paradise's main product lines is setting pink pearls in gold ornaments. The pearls used are cultivated in the sweet waters of Bangladesh. Pearls Paradise Jewelry is handmade by its own artisans, belonging to a traditional class of craftsmen.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Heritage & Craft */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Heritage & Craft
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Our Specializations
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {heritagePillars.map((pillar) => {
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

        {/* Distinguished Patrons */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              International Recognition
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Distinguished Patrons
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mt-4">
              Pearls Paradise has the privilege of supplying jewelry to such distinguished personalities as:
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {distinguishedPatrons.map((patron) => (
              <GlowCard
                key={patron}
                variants={fadeUp}
                theme="dark"
                className="bg-white/[0.03] border border-slate-800/60 p-5 rounded-2xl flex items-start gap-3 hover:bg-white/[0.05] transition-colors"
              >
                <Crown className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 font-light leading-snug">{patron}</p>
              </GlowCard>
            ))}
          </motion.div>
        </div>

        {/* Jewelry Collections */}
        <div className="space-y-8">
          <motion.div
            variants={fadeUp}
            className="max-w-2xl flex flex-col md:flex-row md:items-end justify-between gap-4 w-full"
          >
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
                Product Showcase
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                Jewelry Collections
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Collection Highlights</span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {productImages.map((img) => (
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
              </GlowCard>
            ))}
          </motion.div>
        </div>

        {/* Portrait Gallery */}
        <div className="space-y-8">
          <motion.div
            variants={fadeUp}
            className="max-w-2xl flex flex-col md:flex-row md:items-end justify-between gap-4 w-full"
          >
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
                Styled With Elegance
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                Portrait Collection
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Model Portraits</span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {portraitImages.map((img) => (
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
              </GlowCard>
            ))}
          </motion.div>
        </div>

        {/* Future Growth */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Looking Forward
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Growth & Collaboration
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <Globe className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                Export Plans
              </h4>
              <p className="text-sm text-slate-400 font-light">
                Pearls Paradise plans to export jewelry abroad.
              </p>
            </GlowCard>
            <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <Handshake className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">
                Australian Collaboration
              </h4>
              <p className="text-sm text-slate-400 font-light">
                Pearls Paradise is entering a joint venture with Australian collaboration for pearl cultivation.
              </p>
            </GlowCard>
          </motion.div>
        </div>

        {/* Corporate Brochure Download */}
        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="pearls" />
        </div>
      </motion.div>
    </div>
  );
}
