import React, { useRef, useEffect, useState } from "react";
import {
  Zap,
  Building2,
  Award,
  Leaf,
  Flame,
  Droplets,
  Radio,
  MapPin,
  ChevronRight,
  Factory,
} from "lucide-react";
import { motion, useInView } from "motion/react";

// ── useCountUp hook ────────────────────────────────────────────────
function useCountUp(
  target: number,
  duration: number = 2000,
  trigger: boolean = false
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, trigger]);

  return count;
}

// ── Animated Stat Counter ──────────────────────────────────────────
interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  delay: number;
  isInView: boolean;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix,
  label,
  icon: Icon,
  delay,
  isInView,
}) => {
  const count = useCountUp(value, 2200, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative text-center"
    >
      <div className="absolute inset-0 bg-red-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-4 md:p-6">
        <div className="mx-auto mb-3 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-red-400/80">
          <Icon className="w-5 h-5" />
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-none">
          {count.toLocaleString()}
          <span className="text-red-400">{suffix}</span>
        </div>
        <p className="mt-2 text-[10px] md:text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

// ── Data ────────────────────────────────────────────────────────────

// Sector-specific stats only (general group stats are in CosmosStats)
const heroStats = [
  { value: 2534, suffix: "+", label: "MW Power Capacity", icon: Zap },
  { value: 15, suffix: "+", label: "Substations Built", icon: Building2 },
  { value: 400, suffix: "kV", label: "Highest Voltage", icon: Flame },
  { value: 300, suffix: " MW", label: "Renewable Target", icon: Leaf },
  { value: 2, suffix: "x", label: "WHO Gold Medals", icon: Award },
  { value: 1320, suffix: " MW", label: "Largest Plant", icon: Factory },
];

const landmarkFirsts = [
  {
    number: "01",
    title: "First Geological Study of Bangladesh",
    description:
      "Petroleum Geology Study — Cosmos-Corelab-BAPEX Joint Venture",
    year: "1982",
  },
  {
    number: "02",
    title: "First Oil Field Discovery",
    description:
      "Haripur Oil Field — provided all third-party services and materials",
    year: "1990",
  },
  {
    number: "03",
    title: "Bangladesh's First CIPP",
    description:
      "Captive Independent Power Producer in partnership with Rolls Royce Power Ventures, UK",
    year: "2005",
  },
  {
    number: "04",
    title: "First ISO 9001 Certification",
    description:
      "For O&M of Captive Power Plant — first organization in Bangladesh",
    year: "2005",
  },
];

const sectorAchievements = [
  {
    title: "Energy & Oil/Gas",
    icon: Droplets,
    color: "from-amber-500/20 to-orange-600/10",
    borderColor: "border-amber-500/20",
    accentColor: "text-amber-400",
    items: [
      "Sangu Gas Field for Cairn Energy",
      "Lakatura 300 MMSCFD Plant",
      "Silica Gel 90 MMSCFD Plant",
      "Chevron PSC Block evaluation",
      "SPM Project under BPC/ERL",
    ],
  },
  {
    title: "Power Generation",
    icon: Zap,
    color: "from-red-500/20 to-rose-600/10",
    borderColor: "border-red-500/20",
    accentColor: "text-red-400",
    items: [
      "Ashuganj 400 MW Combined Cycle (2018)",
      "Bibiyana South 400 MW Gas (2017)",
      "Maitree Super Thermal 1320 MW (2017)",
      "Bheramara CCPP 414 MW (2015)",
    ],
  },
  {
    title: "Transmission & Infrastructure",
    icon: Radio,
    color: "from-cyan-500/20 to-blue-600/10",
    borderColor: "border-cyan-500/20",
    accentColor: "text-cyan-400",
    items: [
      "400kV & 230kV transmission lines",
      "Rooppur-Dhaka, Western Zone projects",
      "200 MW Solar PV by Sun Edison",
      "100 MW Wind Power by VESTAS",
      "Smart grid & network automation",
    ],
  },
];

// ── Animation variants ─────────────────────────────────────────────
const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const firstCardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const sectorContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const sectorCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ── Component ──────────────────────────────────────────────────────

export default function MajorAchievements() {
  const statsRef = useRef<HTMLDivElement>(null);
  const firstsRef = useRef<HTMLDivElement>(null);
  const sectorsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isStatsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const isFirstsInView = useInView(firstsRef, { once: true, margin: "-60px" });
  const isSectorsInView = useInView(sectorsRef, {
    once: true,
    margin: "-60px",
  });

  return (
    <section
      id="major-achievements-section"
      className="relative bg-[#0B132B] py-24 md:py-32 overflow-hidden"
    >
      {/* ── Background decorations ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-950/30 rounded-full blur-[160px]" />
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── Top divider line ─────────────────────────────────────── */}
      <div className="absolute top-0 inset-x-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════
            SECTION HEADER
        ═══════════════════════════════════════════════════════ */}
        <motion.div
          ref={headerRef}
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-red-600" />
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-400/80 uppercase tracking-widest">
              Track Record
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-white uppercase tracking-tight">
            Major{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-300">
              Achievements
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-400 font-light max-w-2xl leading-relaxed">
            Milestones that define our legacy — from pioneering energy
            exploration to powering Bangladesh's national grid.
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════
            ZONE 1: ANIMATED COUNTER STATS (sector-specific)
        ═══════════════════════════════════════════════════════ */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 mb-20 md:mb-28"
        >
          {heroStats.map((stat, i) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              delay={i * 0.1}
              isInView={isStatsInView}
            />
          ))}
        </div>

        {/* ── Divider: Landmark Firsts ───────────────────────────── */}
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-900/80 border border-slate-800/60 rounded-full">
            <MapPin className="w-3 h-3 text-red-400" />
            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
              Landmark Firsts
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════════════════
            ZONE 2: LANDMARK "FIRST" CARDS
        ═══════════════════════════════════════════════════════ */}
        <div
          ref={firstsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-20 md:mb-28"
        >
          {landmarkFirsts.map((first, i) => (
            <motion.div
              key={first.number}
              variants={firstCardVariants}
              initial="hidden"
              animate={isFirstsInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.12 }}
              className="group relative flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-red-500/20 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* Number badge */}
              <div className="shrink-0 w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center">
                <span className="text-sm font-mono font-bold text-red-400">
                  {first.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm md:text-base font-bold text-white leading-tight">
                    {first.title}
                  </h3>
                  <span className="shrink-0 text-[10px] font-mono font-bold text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded-md border border-slate-700/40">
                    {first.year}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                  {first.description}
                </p>
              </div>

              {/* Hover arrow */}
              <ChevronRight className="shrink-0 w-4 h-4 text-slate-600 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all duration-300 mt-1" />
            </motion.div>
          ))}
        </div>

        {/* ── Divider: Sector Highlights ──────────────────────────── */}
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-900/80 border border-slate-800/60 rounded-full">
            <Building2 className="w-3 h-3 text-red-400" />
            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
              Sector Highlights
            </span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        </div>

        {/* ═══════════════════════════════════════════════════════
            ZONE 3: SECTOR ACHIEVEMENT CARDS
        ═══════════════════════════════════════════════════════ */}
        <motion.div
          ref={sectorsRef}
          variants={sectorContainerVariants}
          initial="hidden"
          animate={isSectorsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {sectorAchievements.map((sector) => {
            const SectorIcon = sector.icon;
            return (
              <motion.div
                key={sector.title}
                variants={sectorCardVariants}
                className={`group relative p-6 md:p-7 rounded-2xl bg-gradient-to-br ${sector.color} border ${sector.borderColor} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center ${sector.accentColor}`}
                  >
                    <SectorIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-tight">
                    {sector.title}
                  </h3>
                </div>

                {/* Items list */}
                <ul className="space-y-2.5">
                  {sector.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 font-light leading-relaxed"
                    >
                      <span
                        className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${sector.accentColor.replace("text-", "bg-")}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Subtle bottom shine */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
