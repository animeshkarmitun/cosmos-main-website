import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Handshake, Globe2, Briefcase } from "lucide-react";
import PartnershipServices from "./PartnershipServices";

interface ServicesPageProps {
  onBackToHome: () => void;
}

const upcomingServices = [
  {
    icon: Globe2,
    title: "International Trade Advisory",
    description: "International trade facilitation and cross-border advisory services.",
  },
  {
    icon: Briefcase,
    title: "Strategic Consulting",
    description: "Corporate restructuring and strategic management consulting.",
  },
  {
    icon: Handshake,
    title: "Joint Ventures & Partnerships",
    description: "Joint venture partnerships and investment matchmaking services.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function ServicesPage({ onBackToHome }: ServicesPageProps) {
  return (
    <div className="bg-[#04060f] min-h-screen text-white">
      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

        {/* Film-grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

        <div className="relative max-w-6xl mx-auto w-full">
          {/* Back button */}
          <motion.button
            onClick={onBackToHome}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-10 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] hover:border-red-500/30 rounded-xl transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </motion.button>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-950/50 border border-red-900/30 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              ◆ Service Portfolio
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight uppercase leading-tight mb-6"
          >
            Our{" "}
            <span className="text-red-500">Services</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl"
          >
            Comprehensive advisory, project management, and in-country representation — 
            delivering end-to-end solutions across industries and borders.
          </motion.p>
        </div>
      </section>

      {/* ── Partnership Services Component ───────────────────────── */}
      <PartnershipServices />

      {/* ── Expanding Service Portfolio ──────────────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/[0.03] border border-white/[0.06] rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                Expanding Portfolio
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight uppercase text-white">
              Additional{" "}
              <span className="text-red-500">Capabilities</span>
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-light mt-3 max-w-xl mx-auto">
              Adjacent service lines under active development as we broaden our advisory footprint.
            </p>
          </motion.div>

          {/* Capability Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {upcomingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-900/40 p-8 overflow-hidden hover:border-slate-700 transition-colors duration-500"
                >
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-red-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative">
                    <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-red-950/40 border border-red-900/30 flex items-center justify-center text-red-500 group-hover:bg-red-950/60 transition-colors duration-500">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2 text-center">
                      {service.title}
                    </h3>

                    <p className="text-slate-400 text-sm font-light leading-relaxed text-center">
                      {service.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-800/60 text-center">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                        <span className="w-1 h-1 rounded-full bg-amber-500" />
                        In Development
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
