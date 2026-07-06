import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Compass, Eye, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  title: string;
  subtitle: string;
  highlightText: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroLight() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides: SlideData[] = [
    {
      title: "Powering Progress,",
      highlightText: "Sustaining Tomorrow",
      subtitle:
        "Cosmos Group integrates hydrocarbons and renewables, delivering reliable energy solutions with integrity, compliance, and visionary leadership for lasting impact",
      image: "/images/header-1.jpg",
      ctaText: "Discover Our Strategy",
      ctaLink: "#about",
    },
    {
      title: "Transitioning Power,",
      highlightText: "Empowering Tomorrow",
      subtitle:
        "Cosmos Energy leads the transition with highyield solar integrations and wind projects, driving sustainable growth and resilient infrastructure for future generations.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDvvC_Ag5hoq9txF_2OGUGKuzDKk3P0DvG1iJvSwXuq9WI4IBoPFOIvk7MUKhz6pfhqpIOWLYlUDz_CcWb3BGKIq81EWE3VeCHhJEbAe4Ii65NBBd41Lqq2_mW5x1sNzDW5qvCaR9_Fxf47nkL9OfJ2P7xCAqdbbbM30VZKjDljZJTqWARmy7OWpF9ufhrJdFNKZc0HsGxHaEvqXuVWa9N5cc36-N4T9spP5WgGaiDORgFqYzOQ1CV68iS-2-75tba6O7cOeX40-Pw",
      ctaText: "Explore Energy Portfolio",
      ctaLink: "#businesses",
    },
    {
      title: "Innovating",
      highlightText: "Intelligent Futures",
      subtitle:
        "Cosmos Group pioneers digital networks, advanced enterprise systems for empowering institutions with innovation, compliance, and trust",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC5LwdWY6qNBLTvN0Cko-8qaRDmuTnL-7TO3mY9Xdn5zMrTOf_d_49kKHRfCJhNupI1Kwn4pMQLWTakcQK2zMNd50YgNM4_s1vWjbzMUukOFx7I_HWQOqaiaGtoc5dHuQ7MRzpjSuirSBWYJ2IbqO6eICxY5_CjTZsxab20onT5IVKo_k5zolKsJV1xi8x2X8PgYV90daQTv72wB1yqJz2r30jnKGP3ePhu2lOt_ptsmIKgrueM_kHb-FL8Q3eX2a4vvqmmHSVW0mo",
      ctaText: "Explore Technology Systems",
      ctaLink: "#businesses",
    },
    {
      title: "Navigating Global",
      highlightText: "Trade Horizons",
      subtitle:
        "Cosmos Group expands deepsea fleets, modern harbor networks, and automated customs solutions, delivering reliability, and seamless connectivity across international shipping channels.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCuU9MLY9rHbgdFgRFGYyM48ucgckz6d47UKDgLPNPdKks3IdhBYPEXB7Zki1xZz1sqqLWFfxFiQc6t94OoVZk-juI4CyuJwqssn9wk2q2E4U6fP1ZpZ6zN-6VbTqUr5iZ172bihqSmTwJxm6fwazsh6d_5I-S6v52w_b9yNUrp_-VFkisXJH1Mw2CI-Dx7e1Ws9W2dSwtozQEtFRPHi85cL1OJHofB0Pxibi0k360AV2G62YEU-Jb83NjXpMwWkyDrBA6nO9XUMuU",
      ctaText: "Explore Logistics Fleets",
      ctaLink: "#businesses",
    },
  ];

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

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF8F5]">
      <div className="relative min-h-[780px] md:min-h-[830px] flex items-center pt-24 pb-32">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSlide.image}
              src={activeSlide.image}
              alt=""
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5]/50" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl space-y-7">
            <span className="inline-flex bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Primary Business Sectors
            </span>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase font-display">
              {activeSlide.title}
              <br />
              <span className="text-sky-700">{activeSlide.highlightText}</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl leading-relaxed">
              {activeSlide.subtitle}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={activeSlide.ctaLink}
                className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 focus-visible:ring-4 focus-visible:ring-sky-500/30 shadow-lg shadow-sky-900/10 active:scale-95"
              >
                <span>{activeSlide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center bg-white/85 hover:bg-white border border-stone-300 text-slate-900 font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 focus-visible:ring-4 focus-visible:ring-sky-500/20"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-6 bottom-16 md:right-8 z-30 flex flex-col space-y-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "h-8 bg-sky-700" : "h-3 bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute left-6 bottom-16 z-30 flex gap-3">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="w-12 h-12 rounded-xl bg-white/85 hover:bg-white border border-stone-300 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600"
            aria-label="Previous corporate slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="w-12 h-12 rounded-xl bg-white/85 hover:bg-white border border-stone-300 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-sky-600"
            aria-label="Next corporate slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative -mt-12 sm:-mt-16 md:-mt-20 z-20 w-full px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-stone-200/80 p-6 md:p-8 rounded-3xl shadow-xl shadow-stone-200/40">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
              className={`p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl ${
                index !== cards.length - 1 ? "border-b md:border-b-0 md:border-r border-stone-100" : ""
              }`}
            >
              <div className="w-12 h-12 bg-sky-700 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-sky-900/20">
                {card.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold tracking-wide text-slate-900 uppercase">{card.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-light">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
