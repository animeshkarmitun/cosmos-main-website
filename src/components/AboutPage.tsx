import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Building2, TrendingUp, Globe } from "lucide-react";
import CosmosStats from "./CosmosStats";
import MajorAchievements from "./MajorAchievements";

interface AboutPageProps {
  onBackToHome: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const miniStats = [
  { value: "52+", label: "Years", icon: Building2 },
  { value: "12", label: "Business Units", icon: TrendingUp },
  { value: "9", label: "Core Sectors", icon: Globe },
];

export default function AboutPage({ onBackToHome }: AboutPageProps) {
  return (
    <div className="bg-[#04060f] min-h-screen pt-24">
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04060f] via-transparent to-[#04060f] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full py-16 md:py-24">
          {/* Back to Home */}
          <motion.button
            onClick={onBackToHome}
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-red-500 text-xs font-mono font-bold uppercase tracking-widest mb-10 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </motion.button>

          {/* Badge */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="text-red-500 font-mono font-bold text-xs uppercase tracking-widest">
              ◆ Corporate Profile
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">ABOUT </span>
            <span className="text-red-500">COSMOS GROUP</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mb-12"
          >
            One of Bangladesh's leading conglomerates since 1972 — Cosmos Group
            has built an enduring legacy across energy, logistics, media,
            telecommunications, and beyond. For over five decades, we have
            championed innovation, corporate governance, and national progress.
          </motion.p>

          {/* Mini Stat Boxes */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            {miniStats.map((stat) => (
              <div
                key={stat.label}
                className="group/stat flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] hover:border-red-500/20 rounded-2xl px-5 py-4 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-red-950/50 text-red-500 flex items-center justify-center shrink-0 group-hover/stat:bg-red-950/70 transition-colors">
                  <stat.icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xl font-bold text-white font-mono tracking-tight leading-none">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Cosmos Stats ────────────────────────────────────────── */}
      <CosmosStats />

      {/* ── Major Achievements ──────────────────────────────────── */}
      <MajorAchievements />
    </div>
  );
}
