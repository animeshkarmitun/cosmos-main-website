import { useRef } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import AnimatedCounter from "./AnimatedCounter";

type Theme = "dark" | "light";
type Variant = "stats" | "cards" | "dual" | "portrait";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}
interface CardItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ExploreTeaserProps {
  id?: string;
  eyebrow: string;
  title: string;
  summary: string;
  ctaLabel: string;
  onExplore: () => void;
  theme?: Theme;
  variant: Variant;
  stats?: StatItem[];
  cards?: CardItem[];
  imageSrc?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  caption?: { line1: string; line2: string };
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function ExploreTeaser({
  id,
  eyebrow,
  title,
  summary,
  ctaLabel,
  onExplore,
  theme = "dark",
  variant,
  stats = [],
  cards = [],
  imageSrc,
  imageAlt = "",
  imageSide = "left",
  caption,
}: ExploreTeaserProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isDark = theme === "dark";

  const eyebrowColor = isDark ? "text-red-400" : "text-red-600";
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const summaryColor = isDark ? "text-slate-300" : "text-slate-600";
  const accentBar = isDark ? "bg-red-500" : "bg-red-600";

  const darkShade =
    variant === "cards" || variant === "portrait" ? "#081A36" : "#07142E";

  const sectionBg = isDark
    ? variant === "cards" || variant === "portrait"
      ? "bg-[#07122B]"
      : "bg-[#061026]"
    : "bg-slate-50";

  // Consistent shade-only transitions between dark landing sections.
  const bridgeTop = isDark ? (
    <div
      className="h-10 md:h-12"
      style={{ background: `linear-gradient(to bottom, #0B132B 0%, ${darkShade} 100%)` }}
    />
  ) : (
    <div className="h-16 md:h-24 bg-gradient-to-b from-[#0B132B] to-slate-100" />
  );
  const bridgeBottom = isDark ? (
    <div
      className="h-10 md:h-12"
      style={{ background: `linear-gradient(to bottom, ${darkShade} 0%, #0B132B 100%)` }}
    />
  ) : (
    <div className="h-16 md:h-24 bg-gradient-to-b from-slate-50 to-[#0B132B]" />
  );

  // ── Variant visuals ──────────────────────────────────────────
  const renderStats = () => (
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className={`rounded-2xl border p-5 md:p-6 ${
            isDark
              ? "bg-white/[0.03] border-white/[0.06]"
              : "bg-white border-slate-200"
          }`}
        >
          <div className={`text-3xl md:text-4xl font-black font-display ${isDark ? "text-red-500" : "text-red-600"} leading-none`}>
            <AnimatedCounter value={s.value} suffix={s.suffix} />
          </div>
          <div className={`mt-2 text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );

  const renderCards = (isDual = false) => (
    <div className={isDual ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "grid grid-cols-1 gap-3"}>
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <div
            key={c.title}
            className={`group rounded-2xl border p-5 md:p-6 flex items-start gap-4 transition-all ${
              isDark
                ? "bg-white/[0.03] border-white/[0.06] hover:border-red-500/30"
                : "bg-white border-slate-200 hover:border-red-500/30"
            }`}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
              isDark
                ? "bg-red-950/50 text-red-500 border-red-900/30"
                : "bg-red-50 text-red-600 border-red-100"
            }`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className={`text-sm md:text-base font-bold ${titleColor} tracking-tight`}>{c.title}</h4>
              <p className={`text-xs md:text-sm font-light leading-relaxed mt-1 ${summaryColor}`}>{c.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderPortrait = () => (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/10 aspect-[4/5] max-w-sm mx-auto">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
            <div className="text-base md:text-lg font-bold font-display tracking-tight">{caption.line1}</div>
            <div className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-red-400 mt-1">
              {caption.line2}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const visual = () => {
    switch (variant) {
      case "stats": return renderStats();
      case "cards": return renderCards(false);
      case "dual": return renderCards(true);
      case "portrait": return renderPortrait();
    }
  };

  const portraitRight = variant === "portrait" && imageSide === "right";

  return (
    <section id={id} className="relative overflow-hidden">
      {bridgeTop}
      <div className={`${sectionBg} relative`}>
        {isDark && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/[0.035] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/18 to-transparent" />
            <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-sky-400/4 rounded-full blur-[150px]" />
          </div>
        )}
        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Copy column */}
          <div className={portraitRight ? "lg:order-2" : ""}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`w-10 h-1 rounded-full ${accentBar}`} />
              <span className={`text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest ${eyebrowColor}`}>
                {eyebrow}
              </span>
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black font-display tracking-tight uppercase leading-tight mb-5 ${titleColor}`}>
              {title}
            </h2>
            <p className={`text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-xl mb-8 ${summaryColor}`}>
              {summary}
            </p>
            <button
              onClick={onExplore}
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-red-700 to-red-600 border border-red-500/40 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg shadow-red-950/20 transition-all duration-300 hover:from-red-600 hover:to-red-500 hover:shadow-red-950/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 cursor-pointer"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Visual column */}
          <div className={portraitRight ? "lg:order-1" : ""}>
            {visual()}
          </div>
        </motion.div>
      </div>
      {bridgeBottom}
    </section>
  );
}
