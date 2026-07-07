import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Shield, Scale } from "lucide-react";
import CodeOfGovernance from "./CodeOfGovernance";
import WHSPolicy from "./WHSPolicy";

interface PoliciesPageProps {
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

export default function PoliciesPage({ onBackToHome }: PoliciesPageProps) {
  return (
    <div className="bg-[#04060f] min-h-screen pt-24">
      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
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
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 left-0 w-[350px] h-[350px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none" />

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
              ◆ Corporate Compliance
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
            <span className="text-white">GOVERNANCE </span>
            <span className="text-red-500">& POLICIES</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl mb-12"
          >
            Our corporate governance framework sets the highest standards of
            ethical conduct, transparency, and accountability. Paired with
            rigorous workplace health and safety policies, these principles
            ensure operational excellence and the well-being of every
            stakeholder across the Cosmos Group ecosystem.
          </motion.p>

          {/* Icon Highlights */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] hover:border-red-500/20 rounded-2xl px-5 py-4 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-red-950/50 text-red-500 flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white uppercase tracking-tight leading-none">
                  Code of Governance
                </span>
                <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Ethics & Standards
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] hover:border-red-500/20 rounded-2xl px-5 py-4 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-red-950/50 text-red-500 flex items-center justify-center shrink-0">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white uppercase tracking-tight leading-none">
                  WHS Policy
                </span>
                <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Safety & Compliance
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Code of Governance ──────────────────────────────────── */}
      <CodeOfGovernance />

      {/* ── WHS Policy ──────────────────────────────────────────── */}
      <WHSPolicy />
    </div>
  );
}
