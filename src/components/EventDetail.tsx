import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Tag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import {
  getEventById,
  getAdjacentEvents,
  type CosmosEvent,
} from "../data/events";

interface EventDetailProps {
  eventId: string;
  onBackToEvents: () => void;
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
      staggerChildren: 0.08,
    },
  },
};

function NotFound({
  onBackToEvents,
}: {
  onBackToEvents: () => void;
}) {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen text-center px-4">
      <h2 className="text-2xl md:text-4xl font-black font-display text-slate-900 mb-4">
        Event Not Found
      </h2>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        The event you are looking for does not exist or may have been moved.
      </p>
      <button
        onClick={onBackToEvents}
        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Events
      </button>
    </div>
  );
}

function AdjacentLink({
  event,
  direction,
  onSelect,
}: {
  event: CosmosEvent;
  direction: "prev" | "next";
  onSelect: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect(event.id)}
      className={`group flex items-center gap-3 md:gap-4 text-left bg-white border border-slate-200/80 hover:border-red-600/30 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 flex-1 ${
        direction === "next" ? "flex-row-reverse text-right" : ""
      }`}
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-5 h-5 text-slate-400 group-hover:text-red-600 transition-colors shrink-0" />
      ) : (
        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-red-600 transition-colors shrink-0" />
      )}
      <div className="min-w-0">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
          {direction === "prev" ? "Previous Event" : "Next Event"}
        </span>
        <span className="text-sm font-bold text-slate-900 group-hover:text-red-700 transition-colors line-clamp-2">
          {event.title}
        </span>
      </div>
    </button>
  );
}

export default function EventDetail({
  eventId,
  onBackToEvents,
  onBackToHome,
  onEventSelect,
}: EventDetailProps) {
  const event = getEventById(eventId);
  const { prev, next } = getAdjacentEvents(eventId);

  const heroRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const bodyInView = useInView(bodyRef, { once: true, margin: "-60px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-60px" });

  if (!event) {
    return <NotFound onBackToEvents={onBackToEvents} />;
  }

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onBackToEvents}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </button>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-slate-700 bg-white/60 border border-slate-200 hover:border-slate-300 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 cursor-pointer"
          >
            Home
          </button>
        </div>
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
            src={event.coverImage}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/80 to-[#0B132B]/40" />
          <div className="relative z-10 p-8 md:p-16 lg:p-20 min-h-[360px] md:min-h-[440px] flex flex-col justify-end">
            <div className="max-w-4xl space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-950/60 border border-red-900/40 rounded-full text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase">
                  <Tag className="w-3 h-3" />
                  {event.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/10 rounded-full text-[10px] font-mono font-bold tracking-widest text-slate-300 uppercase">
                  <CalendarDays className="w-3 h-3" />
                  {event.date}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black font-display tracking-tight leading-tight">
                {event.title}
              </h1>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={bodyRef}
            variants={fadeUp}
            initial="hidden"
            animate={bodyInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {event.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-base md:text-lg text-slate-600 font-light leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <motion.div
          ref={galleryRef}
          variants={fadeUp}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
        >
          <div className="mb-8">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-2">
              Gallery
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-display tracking-tight text-slate-900 uppercase">
              Event Highlights
            </h2>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={galleryInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {event.gallery.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl aspect-[4/3] ring-1 ring-slate-200/80 shadow-sm group"
              >
                <img
                  src={image}
                  alt={`${event.title} highlight ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Adjacent events */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row gap-4">
          {prev ? (
            <AdjacentLink
              event={prev}
              direction="prev"
              onSelect={onEventSelect}
            />
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <AdjacentLink
              event={next}
              direction="next"
              onSelect={onEventSelect}
            />
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-[#0B132B] p-8 md:p-12 text-center border border-slate-800 shadow-xl">
          <h3 className="text-xl md:text-2xl font-black font-display uppercase tracking-tight text-white mb-3">
            Explore More Events
          </h3>
          <p className="text-slate-400 text-sm font-light max-w-xl mx-auto mb-6">
            Discover our full calendar of dialogues, forums and business events.
          </p>
          <button
            onClick={onBackToEvents}
            className="inline-flex items-center gap-2 px-7 py-3 bg-red-700 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 cursor-pointer"
          >
            View All Events
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
