import { useRef } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Tag } from "lucide-react";
import { motion, useInView } from "motion/react";
import { events, type CosmosEvent } from "../data/events";

interface EventsPageProps {
  onBackToHome: () => void;
  onEventSelect: (id: string) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function EventCard({
  event,
  onSelect,
}: {
  event: CosmosEvent;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect(event.id)}
      className="group text-left bg-white border border-slate-200/80 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.coverImage}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
          <CalendarDays className="w-3 h-3 text-red-600" />
          {event.date}
        </div>
      </div>
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest mb-3">
          <Tag className="w-3 h-3" />
          {event.category}
        </div>
        <h3 className="text-base md:text-lg font-bold font-display text-slate-900 leading-snug mb-3 line-clamp-3">
          {event.title}
        </h3>
        <p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-3 mb-5 flex-1">
          {event.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-red-700 transition-colors mt-auto">
          Details
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}

export default function EventsPage({
  onBackToHome,
  onEventSelect,
}: EventsPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  const categories = ["All", ...Array.from(new Set(events.map((e) => e.category)))];

  return (
    <div
      id="events-page"
      className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans"
    >
      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <motion.div
          ref={heroRef}
          variants={fadeUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-3xl bg-[#0B132B] text-white border border-slate-900 shadow-2xl"
        >
          <img
            src="/images/events/China 1e.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/85 to-[#0B132B]/55" />
          <div className="relative z-10 p-8 md:p-16 lg:p-20 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                PR & Events
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight uppercase leading-none">
              Events
              <span className="block text-red-500">& Dialogues</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              A record of Cosmos Group’s forums, dialogues and business events —
              where ideas, partnerships and regional cooperation take shape.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Category filter (future-ready) */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                category === "All"
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-red-600/30 hover:text-red-700"
              }`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Event Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={fadeUp}>
              <EventCard event={event} onSelect={onEventSelect} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
