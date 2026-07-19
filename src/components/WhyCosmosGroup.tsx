import React, { useRef } from "react";
import { motion } from "motion/react";
import { Shield, Sparkles, Building2, HelpCircle } from "lucide-react";

interface TrustPointProps {
  index: number;
  numberStr: string;
  title: string;
  description: string;
  key?: React.Key;
}

function TrustPoint({ index, numberStr, title, description }: TrustPointProps) {
  // Stagger variants for the split-line masked reveals
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: index * 0.15,
      },
    },
  };

  const lineMaskVariants = {
    hidden: { y: "105%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // cinematic crisp smooth ease
      },
    },
  };

  const textFadeVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 py-10 border-b border-white/5 last:border-b-0"
    >
      {/* Decorative vertical mask line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-700/0 group-hover:bg-red-700/40 transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100" />

      {/* Styled index signature */}
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-[11px] font-mono font-bold tracking-widest text-red-500/80 bg-red-950/40 px-2 py-1 rounded border border-red-900/30">
          Pillar 0{index + 1}
        </span>
        <div className="overflow-hidden">
          <motion.span
            variants={lineMaskVariants}
            className="block text-4xl md:text-5xl font-mono font-bold text-slate-800 group-hover:text-red-900/40 select-none tracking-tight transition-colors duration-500"
          >
            {numberStr}
          </motion.span>
        </div>
      </div>

      {/* Core Split-Line Masked up Text Container */}
      <div className="flex-1 space-y-2">
        <div className="overflow-hidden h-7 md:h-8 flex items-center">
          <motion.h4
            variants={lineMaskVariants}
            className="text-lg md:text-2xl font-bold font-display text-white group-hover:text-red-500 transition-colors duration-300"
          >
            {title}
          </motion.h4>
        </div>

        <div className="overflow-hidden">
          <motion.p
            variants={textFadeVariants}
            className="text-sm md:text-base text-slate-400 font-light leading-relaxed max-w-4xl"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyCosmosGroup() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const trustPoints = [
    {
      numberStr: "50+",
      title: "5 Decades of Legacy",
      description: "Over five decades of active operations and execution in Bangladesh’s dynamic energy, infrastructure, and industrial landscapes. A legacy built on unwavering resilience and reliable services.",
    },
    {
      numberStr: "01.",
      title: "Unrivaled Sector Relationships",
      description: "Established, direct primary relationships with government departments and key regulatory agencies including EMRD, Petrobangla, BAPEX, BPC, ERL, and essential administrative sectors.",
    },
    {
      numberStr: "100%",
      title: "Full In-Country Coverage",
      description: "End-to-end active operational coverage with premier physical offices across strategic corporate hubs including Dhaka, Chittagong Port terminals, and immediate project sites.",
    },
  ];

  return (
    <section
      id="why-cosmos"
      ref={containerRef}
      className="relative py-28 px-6 md:px-8 bg-[#0B132B] overflow-hidden"
    >
      {/* Deluxe Tech Visual Divider / Demarcation Line */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute flex items-center gap-2 px-4 py-1.5 bg-slate-950 border border-slate-800/80 rounded-full text-[9px] font-mono tracking-[0.25em] text-slate-500 uppercase translate-y-[13px]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          Our Legacy
        </div>
      </div>

      {/* Cinematic Film Grain Overlay (Exclusive styled layout) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] select-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTAsIiBoZWlnaHQ9IjE1MCUiPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjkyIiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+")`
        }} 
        aria-hidden="true"
      />

      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Prelude Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative mb-12 md:mb-16 rounded-3xl overflow-hidden border border-slate-800/70 shadow-2xl shadow-black/35"
        >
          <img
            src="/images/why-cosmos-group.webp"
            alt="Why Cosmos Group thematic visual"
            className="w-full h-56 md:h-80 object-cover object-center"
            loading="lazy"
          />
          {/* Light edge blend only — keep the photo readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/35 via-transparent to-[#0B132B]/10" />
          <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-red-950/70 border border-red-900/40 rounded-full text-[10px] font-mono font-bold tracking-widest text-red-300 uppercase backdrop-blur-sm">
            Strategic Trust Framework
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
          {/* Left Side: Editorial Context Branding */}
          <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/40 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              Operational Excellence
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold font-display text-white tracking-tight leading-none uppercase">
            Why <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
              Cosmos Group?
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
            Consistently bridging international joint ventures with localized logistics, regulatory clearances, and strategic advisory. We serve as the trusted industrial partner of choice for Bangladesh’s future.
          </p>

          <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <span className="block text-2xl font-bold font-display text-white">50+ Yrs</span>
              <span className="block text-xs text-slate-500 uppercase font-mono tracking-wider">Industrial Track</span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-bold font-display text-white">100%</span>
              <span className="block text-xs text-slate-500 uppercase font-mono tracking-wider">Compliance Record</span>
            </div>
          </div>
          </div>

          {/* Right Side: Masked Reveal Bullet Points */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col h-full justify-center"
            >
              {trustPoints.map((point, index) => (
                <TrustPoint
                  key={index}
                  index={index}
                  numberStr={point.numberStr}
                  title={point.title}
                  description={point.description}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
