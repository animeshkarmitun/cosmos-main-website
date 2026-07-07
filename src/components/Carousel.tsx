import { useState, useEffect, useCallback, useRef, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion, type PanInfo } from "motion/react";

export interface CarouselSlide {
  src: string;
  alt: string;
  title?: string;
  tag?: string;
  date?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  ariaLabel?: string;
}

const SWIPE_THRESHOLD = 50;

export default function Carousel({
  slides,
  autoPlay = true,
  interval = 6000,
  className = "",
  ariaLabel = "Image gallery",
}: CarouselProps) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const count = slides.length;

  const paginate = useCallback(
    (dir: number) => {
      setState(([i]) => [(i + dir + count) % count, dir]);
    },
    [count]
  );

  const goTo = useCallback((target: number) => {
    setState(([i]) => [target, target > i ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (!autoPlay || paused || reduceMotion || count <= 1) return;
    const id = window.setInterval(() => paginate(1), interval);
    return () => window.clearInterval(id);
  }, [autoPlay, paused, reduceMotion, count, interval, paginate]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      paginate(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      paginate(1);
    }
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
  };

  if (count === 0) return null;

  const slide = slides[index];

  const variants = reduceMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
        center: { opacity: 1, x: 0 },
        exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
      };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className={`relative group outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-3xl ${className}`}
    >
      <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/10 aspect-[16/10] md:aspect-[16/8] bg-slate-950">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduceMotion ? 0.25 : 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={onDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            aria-hidden={false}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover select-none"
              loading="lazy"
              draggable={false}
            />
            {(slide.title || slide.tag) && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                  {slide.tag && (
                    <span className="inline-block text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-red-400 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 mb-3">
                      {slide.tag}
                    </span>
                  )}
                  {slide.title && (
                    <h3 className="text-lg md:text-2xl font-black font-display tracking-tight uppercase leading-tight max-w-2xl">
                      {slide.title}
                    </h3>
                  )}
                  {slide.date && (
                    <span className="block mt-1 text-xs font-mono text-slate-300">
                      {slide.date}
                    </span>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/65 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/65 backdrop-blur-md border border-white/15 text-white flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <div className="sr-only" aria-live="polite">
          {`Slide ${index + 1} of ${count}: ${slide.alt}`}
        </div>
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5">
          {slides.map((_s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 cursor-pointer ${
                i === index ? "w-8 bg-red-600" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
