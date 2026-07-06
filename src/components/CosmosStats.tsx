import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import {
  Award,
  Calendar,
  Layers,
  Activity,
  Globe,
  MapPin,
  ArrowUpRight,
  TrendingUp,
  Users,
  Compass,
  Map,
  Building,
  Flag
} from "lucide-react";

// Helper Component for Animated Numbers
function AnimatedCounter({ value, duration = 2, suffix = "" }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="font-display font-extrabold">0{suffix}</span>;
}

export default function CosmosStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStat, setActiveStat] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const statsData = [
    {
      id: 1,
      number: 52,
      suffix: "+",
      label: "Years of Excellence",
      title: "Five Decades of Industrial Leadership",
      description: "Over half a century of unbroken resilience, delivering high-stakes national infrastructure and cross-border partnerships since the dawn of Bangladesh's independence.",
      icon: <Award className="w-6 h-6" />,
      colorClass: "from-red-500 to-rose-600 shadow-red-950/20",
      accent: "#ef4444",
      miniVisual: (
        <div className="h-10 w-full flex items-end gap-1 px-2 border-b border-slate-800 pb-1 mt-3">
          {[40, 55, 62, 78, 85, 92, 100].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ height: 0 }}
              whileInView={{ height: `${val}%` }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`flex-1 rounded-t-sm ${idx === 6 ? 'bg-red-500' : 'bg-slate-700'}`}
              viewport={{ once: true }}
            />
          ))}
        </div>
      )
    },
    {
      id: 2,
      number: 1973,
      suffix: "",
      label: "Year Established",
      title: "Pioneering the Modern Era",
      description: "Founded shortly after liberation, Cosmos Group laid the foundational brick of Bangladesh's industrial framework, scaling national energy and infrastructure channels.",
      icon: <Calendar className="w-6 h-6" />,
      colorClass: "from-amber-500 to-orange-600 shadow-amber-950/20",
      accent: "#f59e0b",
      miniVisual: (
        <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>1973 (Founding)</span>
          <div className="flex-1 mx-2 h-[1px] bg-gradient-to-r from-amber-500/50 to-transparent relative">
            <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-amber-500 animate-ping" />
          </div>
          <span>Active Era</span>
        </div>
      )
    },
    {
      id: 3,
      number: 12,
      suffix: "",
      label: "Business Units",
      title: "Flagship Corporate Divisions",
      description: "Twelve independent, highly integrated commercial divisions executing national power, technologies, shipping networks, and specialized security solutions.",
      icon: <Layers className="w-6 h-6" />,
      colorClass: "from-cyan-500 to-blue-600 shadow-cyan-950/20",
      accent: "#06b6d4",
      miniVisual: (
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="h-3 rounded-sm bg-slate-800 border border-slate-700/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-colors"
              viewport={{ once: true }}
              title="Autonomous Division"
            />
          ))}
        </div>
      )
    },
    {
      id: 4,
      number: 9,
      suffix: "",
      label: "Core Sectors",
      title: "Diversified Industrial Sectors",
      description: "Direct operations in critical sectors including deep-sea logistics, cybersecurity, clean energy grids, and digital media.",
      icon: <Activity className="w-6 h-6" />,
      colorClass: "from-emerald-500 to-teal-600 shadow-emerald-950/20",
      accent: "#10b981",
      miniVisual: (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Energy", "Tech", "Logistics", "Media", "Defense", "Renewables"].map((t, idx) => (
            <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 bg-slate-900 border border-slate-800 text-red-400 rounded-full uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>
      )
    },
    {
      id: 5,
      number: 4,
      suffix: "",
      label: "Overseas Offices",
      title: "Global Strategic Presence",
      description: "Active regional trade hubs, foreign offices, and logistics liaisons coordinating international joint ventures and FDI pathways.",
      icon: <Globe className="w-6 h-6" />,
      colorClass: "from-indigo-500 to-purple-600 shadow-indigo-950/20",
      accent: "#6366f1",
      miniVisual: (
        <div className="mt-4 flex items-center justify-between font-mono text-[9px] text-slate-500">
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Singapore</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> London</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> New York</span>
        </div>
      )
    },
    {
      id: 6,
      number: 64,
      suffix: "",
      label: "Districts Covered",
      title: "100% Nationwide Presence",
      description: "Complete localized penetration, ensuring logistics routing, shipping delivery networks, and administrative support are active in all Bangladeshi districts.",
      icon: <MapPin className="w-6 h-6" />,
      colorClass: "from-rose-500 to-pink-600 shadow-rose-950/20",
      accent: "#f43f5e",
      miniVisual: (
        <div className="mt-3 flex items-center justify-between">
          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-red-500 to-rose-500"
              viewport={{ once: true }}
            />
          </div>
          <span className="text-[10px] font-mono text-slate-400 ml-3 shrink-0">100% COVERAGE</span>
        </div>
      )
    }
  ];

  // Manpower Growth Chart Coordinate calculations:
  // x range: 40 to 460
  // y range: 210 to 40
  const lineChartPoints = [
    { year: 1971, employees: 9, x: 40, y: 210 },
    { year: 1980, employees: 150, x: 110, y: 201.9 },
    { year: 1990, employees: 450, x: 180, y: 185.6 },
    { year: 2000, employees: 900, x: 250, y: 161.2 },
    { year: 2010, employees: 1500, x: 320, y: 128.6 },
    { year: 2020, employees: 2500, x: 390, y: 74.3 },
    { year: 2025, employees: 3028, x: 460, y: 45.7 }
  ];

  // Create smooth bezier SVG path logic
  const svgPathD = "M 40 210 C 80 205, 100 202, 110 201.9 C 140 201, 160 190, 180 185.6 C 215 178, 235 168, 250 161.2 C 285 145, 305 135, 320 128.6 C 355 110, 375 85, 390 74.3 C 425 48, 445 46, 460 45.7";

  return (
    <section
      id="infographics"
      ref={containerRef}
      className="relative py-28 px-6 md:px-8 bg-[#04060f] border-t border-slate-950 overflow-hidden"
    >
      {/* Visual Divider Demarcation Line */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute flex items-center gap-2 px-4 py-1.5 bg-slate-950 border border-slate-800/80 rounded-full text-[9px] font-mono tracking-[0.25em] text-slate-500 uppercase translate-y-[13px]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          Group Key Metrics
        </div>
      </div>

      {/* Cyber mesh grid background layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-30" />

      {/* Subtle radial gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-cyan-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* ================= HEADER BLOCK ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-slate-800/60 pb-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/30 border border-red-900/30 rounded-full">
              <TrendingUp className="w-3.5 h-3.5 text-red-500 animate-bounce" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Enterprise At A Glance
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none uppercase">
              Corporate <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-500">
                Infographics
              </span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
              Real-time operational parameters, spatial footprint coverage, and developmental data reflecting the robust footprint and economic contribution of Cosmos Group.
            </p>
          </div>

          <div className="shrink-0 text-slate-500 text-xs font-mono border border-slate-800/80 px-4 py-2 rounded-xl bg-slate-900/40 backdrop-blur">
            Verified Operational Data
          </div>
        </div>

        {/* ================= PRIMARY KEY METRICS CARDS GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              onMouseEnter={() => setActiveStat(stat.id)}
              onMouseLeave={() => setActiveStat(null)}
              className="relative rounded-3xl bg-slate-900/10 backdrop-blur-md border border-slate-800/70 p-8 flex flex-col justify-between overflow-hidden group hover:bg-slate-900/30 hover:border-slate-700/80 transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Animated top spotlight based on active card */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(150px circle at 50% 0px, ${stat.accent}15, transparent 80%)`,
                }}
              />

              <div className="space-y-6">
                {/* Header Icon Block */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-all duration-300 group-hover:shadow-lg`}
                       style={{ borderColor: activeStat === stat.id ? `${stat.accent}30` : '' }}
                  >
                    {stat.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-slate-600 group-hover:text-slate-400 transition-colors uppercase">
                    Metric {stat.id.toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Big Number Representation */}
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight flex items-baseline">
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                    {stat.label}
                  </p>
                </div>

                {/* Description texts */}
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                    {stat.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Bottom Mini Infographic Panel */}
              <div className="pt-6 border-t border-slate-900 mt-6 relative z-10">
                {stat.miniVisual}
              </div>

              {/* Hover Arrow Link indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-50 transition-opacity duration-300 text-slate-500 hover:text-white">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= SECONDARY DUAL VISUAL DIVIDER ================= */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-800/80"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 py-2 rounded-full border border-slate-800 bg-[#04060f] text-xs font-mono font-bold tracking-[0.25em] text-cyan-400 uppercase">
              Global Footprint & Strategic Reach
            </span>
          </div>
        </div>

        {/* ================= DYNAMIC MANPOWER GROWTH CHART & INTERNATIONAL PERSPECTIVE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT BLOCK: Manpower Growth Chart Panel (8 Columns on Large) */}
          <div className="lg:col-span-7 bg-slate-900/10 border border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-950/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-red-500 tracking-widest uppercase flex items-center gap-2">
                  <Users className="w-4 h-4 text-red-500" />
                  Manpower Growth
                </span>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  Timeline: 1971 — 2025
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold font-display text-white tracking-tight uppercase">
                Corporate Staffing Timeline
              </h3>
            </div>

            {/* Redesigned Clean, Readable CSS Bar Chart / Structured Flexbox Infographic */}
            <div className="space-y-4">
              {/* On Mobile: Horizontal Bar Chart Infographic */}
              <div className="flex md:hidden flex-col gap-3.5 bg-slate-950/30 rounded-2xl border border-slate-800/40 p-4">
                {[
                  { year: 1971, employees: 9, percent: 1 },
                  { year: 1980, employees: 150, percent: 5 },
                  { year: 1990, employees: 450, percent: 15 },
                  { year: 2000, employees: 900, percent: 30 },
                  { year: 2010, employees: 1500, percent: 50 },
                  { year: 2020, employees: 2500, percent: 82 },
                  { year: 2025, employees: 3028, percent: 100 }
                ].map((item, index) => (
                  <div key={item.year} className="flex items-center gap-3 group">
                    <span className="text-xs font-mono font-bold text-slate-400 w-10 shrink-0">
                      {item.year}
                    </span>
                    <div className="flex-1 bg-slate-900/60 h-7 rounded-lg overflow-hidden border border-slate-850 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500"
                      />
                      <span className="absolute inset-y-0 right-3 flex items-center text-[11px] font-mono font-bold text-white drop-shadow-md">
                        {item.employees.toLocaleString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* On Desktop: Vertical Bar Chart Infographic */}
              <div className="hidden md:flex flex-col justify-between relative bg-slate-950/30 rounded-2xl border border-slate-850 p-6 h-[320px] overflow-visible">
                {/* Grid guidelines */}
                <div className="absolute left-4 top-4 bottom-14 w-12 flex flex-col justify-between text-[10px] font-mono text-slate-500 text-right pr-2 border-r border-slate-800/60 pointer-events-none">
                  <span>3,000</span>
                  <span>2,000</span>
                  <span>1,000</span>
                  <span>0</span>
                </div>
                
                <div className="flex-1 flex items-end justify-between gap-6 pl-14">
                  {[
                    { year: 1971, employees: 9, percent: 2 },
                    { year: 1980, employees: 150, percent: 8 },
                    { year: 1990, employees: 450, percent: 18 },
                    { year: 2000, employees: 900, percent: 32 },
                    { year: 2010, employees: 1500, percent: 52 },
                    { year: 2020, employees: 2500, percent: 82 },
                    { year: 2025, employees: 3028, percent: 100 }
                  ].map((item, index) => (
                    <div key={item.year} className="flex-1 flex flex-col items-center gap-2.5 group h-full justify-end">
                      {/* Count label */}
                      <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-white transition-colors opacity-80 group-hover:opacity-100 select-none">
                        {item.employees.toLocaleString()}
                      </span>
                      
                      {/* Bar */}
                      <div className="w-10 bg-slate-900/60 rounded-t-lg overflow-hidden h-[180px] relative border border-slate-850 group-hover:border-red-500/30 transition-all duration-300 flex items-end">
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${item.percent}%` }}
                          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="w-full bg-gradient-to-t from-red-600 via-rose-500 to-amber-500 rounded-t-lg"
                        />
                      </div>
                      
                      {/* Year Label */}
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-red-400 transition-colors">
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick summary footer bar */}
            <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/40 pt-4">
              <span>INITIAL EMPLOYEES: 9 (1971)</span>
              <span>GROWTH MULTIPLE: 336x OVER OUR HISTORY</span>
              <span className="text-red-500 font-bold animate-pulse">ACTIVE GROWTH RECORD</span>
            </div>

          </div>

          {/* RIGHT BLOCK: International Perspective & Multi-Regional Map Data (5 Columns on Large) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Upper Card: International Perspective Intro & Side Stats */}
            <div className="bg-slate-900/10 border border-slate-800/80 rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-950/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center">
                    <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold font-display text-white uppercase tracking-tight">
                    International Perspective
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                  Cosmos Group strives to position itself as a Bangladeshi conglomerate with a truly international perspective, expanding our global footprint while maintaining strong local roots.
                </p>
              </div>

              {/* Side Stats list from screenshot */}
              <div className="grid grid-cols-1 gap-4 pt-4 border-t border-slate-900">
                
                {/* Stat 1: 3,028 Employees */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-red-950/40 border border-red-900/30 flex flex-col items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-red-500">2025</span>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-extrabold font-display text-white tracking-tight leading-none">
                      <AnimatedCounter value={3028} suffix="" />
                    </h4>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      Total Employees (As of 2025)
                    </p>
                  </div>
                </div>

                {/* Stat 2: 336x Growth */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/40 border border-cyan-800/30 flex flex-col items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-cyan-400">336x</span>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-extrabold font-display text-white tracking-tight leading-none">
                      336x Growth
                    </h4>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      Growth Multiple (Since 1971)
                    </p>
                  </div>
                </div>

                {/* Stat 3: 4 Continents */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-amber-950/40 border border-amber-900/30 flex flex-col items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-amber-500">04</span>
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-extrabold font-display text-white tracking-tight leading-none">
                      4 Continents
                    </h4>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      Global Presence Footprint
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Lower Card: In-Country & Overseas Command Center Panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Box A: In-Country Offices */}
              <div className="bg-slate-900/10 border border-slate-800/80 rounded-3xl p-5 space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-900 pb-2">
                  <Building className="w-4 h-4 text-red-500" />
                  <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                    In-Country Offices
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-400">
                  {["Dhaka", "Chattogram", "Khulna", "Rajshahi", "Sylhet", "Barisal", "Rangpur"].map((city) => (
                    <div key={city} className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      {city}
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-900 pt-2 text-[9px] font-mono text-slate-500 uppercase tracking-widest leading-relaxed">
                  Media operations in all 64 districts
                </div>
              </div>

              {/* Box B: Overseas Offices */}
              <div className="bg-slate-900/10 border border-slate-800/80 rounded-3xl p-5 space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-900 pb-2">
                  <Flag className="w-4 h-4 text-cyan-400" />
                  <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                    Overseas Offices
                  </h4>
                </div>

                <div className="space-y-2.5">
                  {["Singapore", "United Kingdom", "United States", "Canada"].map((country) => (
                    <div key={country} className="flex items-center text-xs font-mono">
                      <span className="text-slate-200 hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ================= GLOBAL HIGHLIGHT AUDIT COMPLIANCE BAR ================= */}
        <div className="bg-slate-950/60 border border-slate-900 p-6 md:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-950/50 border border-red-900/40 flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            </div>
            <div>
              <p className="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">Audit Compliance</p>
              <p className="text-sm font-semibold text-white">Full Operational Integrity & Audit Conformance</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest hidden lg:inline font-bold">
            Verified Audit Compliance Record
          </span>
        </div>

      </div>
    </section>
  );
}
