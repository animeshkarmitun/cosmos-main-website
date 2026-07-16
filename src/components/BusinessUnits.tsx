import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Zap,
  Ship,
  Globe2,
  TrendingUp,
  Gem,
  Printer,
  Globe,
  Palette,
  BookOpen,
  PawPrint,
  Image as ImageIcon,
  MessageSquare,
  HandHeart,
  ChevronDown,
  ChevronUp,
  Cpu,
} from "lucide-react";
import BrochureDownloadButton from "./BrochureDownloadButton";
import GlowCard from "./GlowCard";
import { companies } from "../data/companies";

interface BusinessUnitsProps {
  onNavigate: (page: string) => void;
}

const companyIcons: Record<string, React.ReactNode> = {
  energy: <Zap className="w-5 h-5 text-red-500" />,
  marketing: <TrendingUp className="w-5 h-5 text-red-500" />,
  shipping: <Ship className="w-5 h-5 text-red-500" />,
  technology: <Cpu className="w-5 h-5 text-red-500" />,
  unb: <Globe2 className="w-5 h-5 text-red-500" />,
  dhakacourier: <BookOpen className="w-5 h-5 text-red-500" />,
  books: <BookOpen className="w-5 h-5 text-red-500" />,
  wildteam: <PawPrint className="w-5 h-5 text-red-500" />,
  gallery: <ImageIcon className="w-5 h-5 text-red-500" />,
  pearls: <Gem className="w-5 h-5 text-red-500" />,
  printing: <Printer className="w-5 h-5 text-red-500" />,
  atelier: <Palette className="w-5 h-5 text-red-500" />,
  global: <Globe className="w-5 h-5 text-red-500" />,
  dialogue: <MessageSquare className="w-5 h-5 text-red-500" />,
  foundation: <HandHeart className="w-5 h-5 text-red-500" />,
};

export default function BusinessUnits({ onNavigate }: BusinessUnitsProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleUnits = showAll ? companies : companies.slice(0, 6);

  return (
    <section id="businesses" className="py-20 md:py-28 px-6 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="text-center md:text-left">
            <div className="inline-block bg-red-950/40 border border-red-500/30 px-3 py-1 rounded-full text-red-400 text-xs font-semibold tracking-wider uppercase mb-4">
              Our Enterprise Spheres
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Our Companies
            </h2>
            <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl font-light">
              Each business division is operated by leading sector professionals, working with international standards to deliver industrial excellence.
            </p>
          </div>
          <div className="flex justify-center md:justify-end shrink-0">
            <BrochureDownloadButton
              brochureId="cosmos-group"
              label="Cosmos Group Brochure"
              variant="secondary"
            />
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleUnits.map((unit, index) => (
              <GlowCard
                key={unit.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.96 }}
                transition={{
                  duration: 0.35,
                  delay: showAll && index >= 6 ? (index - 6) * 0.06 : index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
                tabIndex={0}
                onClick={() => onNavigate(unit.page)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onNavigate(unit.page);
                  }
                }}
                theme="dark"
                className="group aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 transition-all duration-500 transform hover:-translate-y-1"
                role="button"
                aria-label={`Visit ${unit.title} portal`}
              >
                <img
                  src={unit.image}
                  alt={`${unit.title} background`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/20 transition-opacity duration-500 group-hover:via-slate-950/70" />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors duration-500" />

                <div className="absolute top-5 left-5 w-10 h-10 rounded-xl bg-slate-950/60 backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-red-600/90 group-hover:border-red-500/30">
                  {companyIcons[unit.id]}
                </div>

                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
                  <ArrowUpRight className="w-5 h-5" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-wide text-white group-hover:text-red-400 transition-colors">
                    {unit.title}
                  </h3>
                  <p className="text-sm text-slate-300 line-clamp-2 font-light leading-relaxed mb-4">
                    {unit.tagline}
                  </p>
                  <div className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-widest font-mono transition-all duration-300 group-hover:text-red-300">
                    <span>Explore Portfolio</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </GlowCard>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 text-white hover:text-red-100 transition-all font-semibold text-sm uppercase tracking-wider bg-gradient-to-r from-red-700 to-red-600 border border-red-500/40 px-6 py-3 rounded-full hover:from-red-600 hover:to-red-500 hover:shadow-lg hover:shadow-red-950/30 hover:-translate-y-0.5 active:translate-y-0"
            aria-expanded={showAll}
          >
            {showAll ? (
              <>
                Show Featured <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              </>
            ) : (
              <>
                View All {companies.length} Divisions{" "}
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </>
            )}
            <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              {companies.length}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
