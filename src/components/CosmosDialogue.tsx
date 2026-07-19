import React from "react";
import {
  ArrowLeft,
  MessageSquare,
  Users,
  Globe,
  Monitor,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface CosmosDialogueProps {
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

export default function CosmosDialogue({ onBackToHome }: CosmosDialogueProps) {
  const dialoguePillars = [
    {
      title: "Constructive Debate",
      icon: MessageSquare,
      description:
        "Promoting a culture of constructive debate and tolerance that can act as a bulwark against violence and confrontation on the most pressing issues of our time.",
    },
    {
      title: "Democratic Participation",
      icon: Users,
      description:
        "A vibrant democracy needs continuous exchange of views between stakeholders. Citizen participation in everyday political and socioeconomic processes strengthens our democracy further.",
    },
    {
      title: "Digital & Global Reach",
      icon: Monitor,
      description:
        "Leveraging state-of-the-art facilities at Cosmos Centre and digital technology to bridge physical distances, bring people together, and engage regional and international partners.",
    },
  ];

  const galleryImages = [
    {
      src: "/images/cosmos-dialogue/hero.webp",
      alt: "Ambassadors' Lecture Series on Bangladesh-Nepal relations",
    },
    {
      src: "/images/cosmos-dialogue/image-1.webp",
      alt: "Distinguished Speaker's Lecture on the EU and the contemporary global scenario",
    },
    {
      src: "/images/cosmos-dialogue/image-2.webp",
      alt: "Panel discussion on values in foreign policy",
    },
    {
      src: "/images/cosmos-dialogue/image-3.webp",
      alt: "Ambassadors' Lecture Series on Bangladesh-European Union relations",
    },
  ];

  return (
    <div id="dialogue-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
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
          name="Cosmos Dialogue"
          logo="/logos/Cosmos Logo-01.png"
          descriptor="Policy Dialogue"
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
              src="/images/cosmos-dialogue/hero.webp"
              alt="Cosmos Dialogue Ambassadors' Lecture Series"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04060f]/75 via-[#04060f]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/40 via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <MessageSquare className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Core Mission of Cosmos Foundation
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Cosmos Dialogue
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                Understanding through Debate
              </p>
            </div>

            <p className="text-slate-100 text-sm md:text-lg font-light leading-relaxed max-w-3xl drop-shadow-md">
              The Cosmos Dialogue is intended to be a conversation starter that leads to healthy discussions and deepens our understanding of some of the most pressing issues of our time.
            </p>
          </div>
        </motion.div>

        {/* About */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Purpose & Philosophy
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              A Conversation Starter
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlowCard
              variants={fadeUp}
              theme="dark"
              className="bg-white/[0.03] border border-slate-800/60 p-8 md:p-10 rounded-2xl space-y-6"
            >
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                The Cosmos Dialogue, a core mission of Cosmos Foundation, seeks to promote a culture of constructive debate and tolerance that can act as a bulwark against violence and confrontation.
              </p>
              <blockquote className="border-l-4 border-red-600 pl-4 py-3 italic text-slate-300 font-medium bg-[#0B132B]/60 rounded-r-xl">
                As Rabindranath Tagore said: &ldquo;Where the clear stream of reason and thoughts has not lost its way in the dreary desert of lowly habits and deeds&rdquo;.
              </blockquote>
            </GlowCard>

            <GlowCard
              variants={fadeUp}
              theme="dark"
              className="bg-white/[0.03] border border-slate-800/60 p-8 md:p-10 rounded-2xl flex flex-col justify-center"
            >
              <Globe className="w-6 h-6 text-red-500 mb-4" />
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                At Cosmos, we firmly believe that a vibrant democracy needs a continuous exchange of views between stakeholders and that the participation of citizens in the everyday political and socioeconomic process strengthens our democracy further.
              </p>
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed mt-4">
                Taking advantage of state-of-the-art facilities at Cosmos Centre, the Cosmos Dialogue relies heavily on digital technology to bridge physical distances and help bring people together. Cosmos Dialogue takes the discussion beyond Bangladesh&apos;s borders and engages regional and international partners.
              </p>
            </GlowCard>
          </motion.div>
        </div>

        {/* Dialogue Pillars */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              How We Engage
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Dialogue Principles
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dialoguePillars.map((pillar) => {
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

        {/* Event Gallery (Foundation masonry pattern) */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
                Lectures & Conversations
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                Dialogue in Action
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Event Highlights</span>
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
              <Globe className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">Ambassadors&apos; Series</h4>
              <p className="text-sm text-slate-400 font-light">Hosting envoys and diplomats to examine bilateral partnerships and regional futures with Bangladesh at the centre.</p>
            </GlowCard>
            <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <MessageSquare className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">Distinguished Speakers</h4>
              <p className="text-sm text-slate-400 font-light">Bringing global leaders and scholars into open conversation on governance, foreign policy, and shared challenges.</p>
            </GlowCard>
            <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <Users className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">Public Forums</h4>
              <p className="text-sm text-slate-400 font-light">Creating space for policymakers, academics, and citizens to exchange views that strengthen democratic debate.</p>
            </GlowCard>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="dialogue" />
        </div>
      </motion.div>
    </div>
  );
}
