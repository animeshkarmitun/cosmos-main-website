import React, { useState, useEffect, useRef } from "react";
import { Eye, Compass, ShieldCheck, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useSpring, useReducedMotion } from "motion/react";

interface SlideData {
  title: string;
  subtitle: string;
  highlightText: string;
  image: string;
  imagePosition?: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Subtle mouse parallax for depth (disabled when reduced motion is preferred)
  const reduceMotion = useReducedMotion();
  const parallaxX = useSpring(0, { damping: 40, stiffness: 150 });
  const parallaxY = useSpring(0, { damping: 40, stiffness: 150 });

  const handleParallax = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    parallaxX.set(nx * 24);
    parallaxY.set(ny * 24);
  };

  const resetParallax = () => {
    parallaxX.set(0);
    parallaxY.set(0);
  };

  const slides: SlideData[] = [
    {
      title: "Powering Progress,",
      highlightText: "Sustaining Tomorrow",
      subtitle: "Cosmos Group integrates hydrocarbons and renewables, delivering reliable energy solutions with integrity, compliance, and visionary leadership for lasting impact",
      image: "/images/header-1.jpg",
      imagePosition: "72% center",
      ctaText: "Discover Our Strategy",
      ctaLink: "#about",
    },
    {
      title: "Transitioning Power,",
      highlightText: "Empowering Tomorrow",
      subtitle: "Cosmos Energy leads the transition with highyield solar integrations and wind projects, driving sustainable growth and resilient infrastructure for future generations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvvC_Ag5hoq9txF_2OGUGKuzDKk3P0DvG1iJvSwXuq9WI4IBoPFOIvk7MUKhz6pfhqpIOWLYlUDz_CcWb3BGKIq81EWE3VeCHhJEbAe4Ii65NBBd41Lqq2_mW5x1sNzDW5qvCaR9_Fxf47nkL9OfJ2P7xCAqdbbbM30VZKjDljZJTqWARmy7OWpF9ufhrJdFNKZc0HsGxHaEvqXuVWa9N5cc36-N4T9spP5WgGaiDORgFqYzOQ1CV68iS-2-75tba6O7cOeX40-Pw",
      ctaText: "Explore Energy Portfolio",
      ctaLink: "#businesses",
    },
    {
      title: "Innovating",
      highlightText: "Intelligent Futures",
      subtitle: "Cosmos Group pioneers digital networks, advanced enterprise systems for empowering institutions with innovation, compliance, and trust",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5LwdWY6qNBLTvN0Cko-8qaRDmuTnL-7TO3mY9Xdn5zMrTOf_d_49kKHRfCJhNupI1Kwn4pMQLWTakcQK2zMNd50YgNM4_s1vWjbzMUukOFx7I_HWQOqaiaGtoc5dHuQ7MRzpjSuirSBWYJ2IbqO6eICxY5_CjTZsxab20onT5IVKo_k5zolKsJV1xi8x2X8PgYV90daQTv72wB1yqJz2r30jnKGP3ePhu2lOt_ptsmIKgrueM_kHb-FL8Q3eX2a4vvqmmHSVW0mo",
      ctaText: "Explore Technology Systems",
      ctaLink: "#businesses",
    },
    {
      title: "Navigating Global",
      highlightText: "Trade Horizons",
      subtitle: "Cosmos Group expands deepsea fleets, modern harbor networks, and automated customs solutions, delivering reliability, and seamless connectivity across international shipping channels.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuU9MLY9rHbgdFgRFGYyM48ucgckz6d47UKDgLPNPdKks3IdhBYPEXB7Zki1xZz1sqqLWFfxFiQc6t94OoVZk-juI4CyuJwqssn9wk2q2E4U6fP1ZpZ6zN-6VbTqUr5iZ172bihqSmTwJxm6fwazsh6d_5I-S6v52w_b9yNUrp_-VFkisXJH1Mw2CI-Dx7e1Ws9W2dSwtozQEtFRPHi85cL1OJHofB0Pxibi0k360AV2G62YEU-Jb83NjXpMwWkyDrBA6nO9XUMuU",
      ctaText: "Explore Logistics Fleets",
      ctaLink: "#businesses",
    },
  ];

  const startAutoplay = () => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => stopAutoplay();
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
    } else if (e.key === "ArrowRight") {
      handleNext();
    }
  };

  const cards = [
    {
      title: "Mission Statement",
      icon: <Compass className="w-5 h-5 text-white" aria-hidden="true" />,
      text: "To strengthen our leadership profile by providing the most efficient and cost effective services to our clients, be it in energy, mining, shipping, information technology, media, or any endeavour to benefit our future.",
    },
    {
      title: "Our Vision",
      icon: <Eye className="w-5 h-5 text-white" aria-hidden="true" />,
      text: "To serve as the preferred partner in providing quality services & solutions to our stakeholders & clients.",
    },
    {
      title: "Values",
      icon: <ShieldCheck className="w-5 h-5 text-white" aria-hidden="true" />,
      text: "Uncompromising integrity, environmental standards, deep-rooted commitment to quality, and enriching regional technical capacity.",
    },
  ];

  return (
    <section
      id="home"
      className="relative mb-16 md:mb-24 overflow-hidden focus:outline-none bg-[#07122B]"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Cosmos Group Corporate Showcase Slider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetParallax();
      }}
      onMouseMove={handleParallax}
    >
      {/* Dynamic Animated Slides Block */}
      <div className="relative min-h-[780px] xs:min-h-[700px] sm:min-h-[750px] md:min-h-[800px] lg:min-h-[850px] flex items-center bg-[#07122B]">
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, idx) =>
              idx === currentSlide && (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full flex items-center"
                >
                  {/* Background display featuring image with sturdy fallbacks */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.img
                      src={slide.image}
                      alt=""
                      className="w-full h-full object-cover select-none"
                      style={{
                        objectPosition: slide.imagePosition ?? "center",
                        x: parallaxX,
                        y: parallaxY,
                        scale: 1.08,
                      }}
                      referrerPolicy="no-referrer"
                    />

                    {/* Slow-moving, subtle background gradient orbs for difference inversion */}
                    <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-amber-500 to-red-600 blur-3xl opacity-80 animate-orb-one pointer-events-none mix-blend-screen" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-red-500 to-orange-400 blur-3xl opacity-80 animate-orb-two pointer-events-none mix-blend-screen" />

                    {/* Dark gradient mapping designed to maximize white text legibility 100% */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#07122B] via-[#07122B]/85 to-[#081730]/45"></div>
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07122B] to-transparent"></div>
                  </div>

                  {/* Text panel overlay aligned left for ideal readability */}
                  <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 mt-12 xs:mt-16 sm:mt-24 md:mt-24 pb-20 sm:pb-28">
                    <div className="max-w-3xl space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <span className="inline-flex bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-2 shadow-lg shadow-black/40">
                          Primary Business Sectors
                        </span>
                      </motion.div>

                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight uppercase font-display mix-blend-difference"
                      >
                        {slide.title} <br />
                        <span className="text-white">
                          {slide.highlightText}
                        </span>
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-slate-300 text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-wide max-w-2xl leading-relaxed"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="pt-4 flex flex-wrap gap-4"
                      >
                        <a
                          href={slide.ctaLink}
                          className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 focus-visible:ring-4 focus-visible:ring-red-500 shadow-xl shadow-red-950/20 active:scale-95"
                        >
                          <span>{slide.ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                          href="#contact"
                          className="inline-flex items-center bg-[#081730]/70 hover:bg-[#081730] border border-slate-700 hover:border-slate-500 text-slate-100 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 focus-visible:ring-4 focus-visible:ring-slate-500"
                        >
                          Contact Us
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>

        {/* Carousel Slide Indicators */}
        <div className="absolute right-6 bottom-16 xs:bottom-20 sm:bottom-24 md:right-8 z-30 flex flex-col space-y-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "h-8 bg-red-600" : "h-3 bg-slate-700 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === currentSlide ? "true" : "false"}
            />
          ))}
        </div>

        {/* Slider Navigation Arrow Controls (Absolute Positioned) */}
        <div className="absolute left-6 bottom-16 xs:bottom-20 sm:bottom-24 z-30 flex gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-xl bg-[#081730]/55 hover:bg-[#081730]/85 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Previous corporate slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-xl bg-[#081730]/55 hover:bg-[#081730]/85 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-red-600"
            aria-label="Next corporate slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Corporate Overlapping Cards (Mission/Vision/Values) */}
      <div className="relative -mt-10 xs:-mt-14 sm:-mt-16 md:-mt-20 lg:-mt-24 z-20 w-full px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#081730]/72 backdrop-blur-xl border border-white/10 p-6 md:p-6 rounded-3xl shadow-2xl">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className={`p-6 text-white flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 transition-all duration-300 hover:bg-white/5 rounded-2xl ${
                index !== cards.length - 1 ? "border-b md:border-b-0 md:border-r border-white/10 pb-6 sm:pb-0" : ""
              }`}
            >
              <div className="w-12 h-12 bg-red-700 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-red-900/40">
                {card.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold tracking-wide text-slate-100 uppercase">{card.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
