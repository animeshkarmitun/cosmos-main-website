import { useRef } from "react";
import {
  GraduationCap,
  Heart,
  MessageSquare,
  Ban,
  Award,
  HeartHandshake,
} from "lucide-react";
import { motion, useInView } from "motion/react";

interface OurCommitmentProps {
  onDialogueClick?: () => void;
  onFoundationClick?: () => void;
}

// ── Animation variants ─────────────────────────────────────────────
const photoStripVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const photoItemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ── Hero Photo Strip ───────────────────────────────────────────────
const heroPhotos = [
  {
    src: "/images/cosmos-foundation-1.png",
    alt: "Cosmos Foundation community engagement",
    height: "h-52 md:h-64",
  },
  {
    src: "/images/about-us-5.jpg",
    alt: "Cosmos Group community impact",
    height: "h-44 md:h-56",
  },
  {
    src: "/images/cosmos-dialogue-2.png",
    alt: "Cosmos Dialogue event",
    height: "h-48 md:h-60",
  },
  {
    src: "/images/wildteam.jpg",
    alt: "WildTeam conservation initiative",
    height: "h-44 md:h-52",
  },
];

// ── Card hover class ───────────────────────────────────────────────
const cardHoverEffect =
  "hover:scale-[1.015] hover:shadow-md transition-all duration-300 ease-out border border-slate-200/80";

// ── Education tags ─────────────────────────────────────────────────
const educationTags = [
  "Journalism",
  "Medicine",
  "Engineering",
  "Architecture",
  "Fine Arts",
  "Law",
  "Business",
];

export default function OurCommitment({
  onDialogueClick,
  onFoundationClick,
}: OurCommitmentProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const photoStripRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const isPhotoStripInView = useInView(photoStripRef, {
    once: true,
    margin: "-80px",
  });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });
  const isCardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      id="our-commitment-section"
      className="relative overflow-hidden"
    >
      {/* ── Top gradient transition from dark section above ──────── */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-[#0B132B] to-slate-100" />

      {/* ── Main content area (light background) ────────────────── */}
      <div className="bg-slate-50 pb-16 md:pb-24">
        {/* ── Subtle warm radial glow ────────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[160px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* ═══════════════════════════════════════════════════════
              HERO PHOTO STRIP — 4 staggered photos
          ═══════════════════════════════════════════════════════ */}
          <motion.div
            ref={photoStripRef}
            variants={photoStripVariants}
            initial="hidden"
            animate={isPhotoStripInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-end pt-8 md:pt-12 pb-14 md:pb-20"
          >
            {heroPhotos.map((photo, i) => (
              <motion.div
                key={photo.src}
                variants={photoItemVariants}
                className={`relative ${photo.height} rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/80 ${i % 2 === 0 ? "mt-0" : "mt-4 md:mt-8"}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Soft bottom gradient for depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              SECTION HEADER — Two-column with photo
          ═══════════════════════════════════════════════════════ */}
          <motion.div
            ref={headerRef}
            variants={headerVariants}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 mb-12 md:mb-16"
            id="commitment-header"
          >
            {/* Left: Title + subtitle */}
            <div className="flex items-end gap-6 lg:gap-10">
              <div className="space-y-3">
                <div className="w-16 h-1 bg-red-600 rounded-full" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-slate-900 uppercase tracking-tight">
                  Our Commitment
                </h2>
                <p className="text-slate-500 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                  To Society & Community
                </p>
              </div>

              {/* Accompanying circular photo (desktop only) */}
              <div className="hidden lg:block shrink-0">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden ring-2 ring-red-600/20 shadow-md">
                  <img
                    src="/images/about-us-5.jpg"
                    alt="Community work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right: Foundation CTA */}
            <div className="md:text-right shrink-0">
              <button
                onClick={onFoundationClick}
                className={`inline-block text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate-500 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-red-600 ${onFoundationClick ? "hover:bg-red-50 hover:text-red-700 hover:border-red-200 cursor-pointer" : ""}`}
              >
                COSMOS FOUNDATION PHILANTHROPIC ARM
              </button>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              BENTO CARD GRID
          ═══════════════════════════════════════════════════════ */}
          <motion.div
            ref={cardsRef}
            variants={cardContainerVariants}
            initial="hidden"
            animate={isCardsInView ? "visible" : "hidden"}
            className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
          >
            {/* ── Floating accent image #1 (between left-column cards, desktop) */}
            <div className="hidden lg:block absolute -left-4 top-[55%] -translate-y-1/2 z-20 pointer-events-none">
              <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                <img
                  src="/images/cosmos-foundation-1.png"
                  alt=""
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* ── Floating accent image #2 (bottom-right area, desktop) */}
            <div className="hidden lg:block absolute -right-3 bottom-12 z-20 pointer-events-none">
              <div className="w-16 h-16 rounded-xl overflow-hidden ring-4 ring-white shadow-lg rotate-6">
                <img
                  src="/images/cosmos-dialogue-2.png"
                  alt=""
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* ── Left Column (lg:col-span-5) ──────────────────── */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {/* Card 1: Education Support */}
              <motion.div
                variants={cardVariants}
                id="card-education-support"
                className={`relative overflow-hidden bg-white p-6 md:p-8 rounded-3xl shadow-sm flex flex-col justify-between h-full ${cardHoverEffect}`}
              >
                <img
                  src="/images/about-us-3.jpg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-[0.38] pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/65 to-white/45 pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shadow-sm">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                      Education Support
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                      Deep-rooted commitment to supporting young talents for
                      higher studies as part of our contribution to society.
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-8 space-y-3">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    Supported Disciplines
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {educationTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/80 backdrop-blur-sm text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-200/60 shadow-sm hover:border-red-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Community Activities */}
              <motion.div
                variants={cardVariants}
                id="card-community-activities"
                className={`relative overflow-hidden bg-white p-6 md:p-8 rounded-3xl shadow-sm ${cardHoverEffect} flex items-start gap-5`}
              >
                <img
                  src="/images/about-us-4.jpeg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-[0.38] pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/65 to-white/50 pointer-events-none" />
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shadow-sm shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div className="relative z-10 space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-tight">
                    Community Activities
                  </h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">
                    Committed supporter of community activities in media,
                    health, charitable, and artistic fields.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ── Right Column (lg:col-span-7) ─────────────────── */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Card 3: Cosmos Dialogue (Dark Navy) */}
              <motion.div
                variants={cardVariants}
                id="card-cosmos-dialogue"
                onClick={onDialogueClick}
                className={`relative overflow-hidden bg-[#0B132B] text-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-900 flex flex-col md:flex-row gap-6 items-start transition-all duration-300 ease-out ${onDialogueClick ? "cursor-pointer hover:scale-[1.015] hover:shadow-xl" : "hover:scale-[1.015] hover:shadow-xl"}`}
              >
                <img
                  src="/images/about-us-2.jpg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-[0.42] pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B]/85 via-[#0B132B]/72 to-[#0B132B]/60 pointer-events-none" />
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-red-950/80 border border-red-900/40 text-red-400 flex items-center justify-center shadow-lg shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                      Cosmos Dialogue
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                      Strategic Conversation Series
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                    A core mission of Cosmos Foundation, intended to be a
                    conversation starter leading to healthy discussions and
                    deeper understanding of pressing issues.
                  </p>
                  <div className="pt-4 border-t border-slate-800/80">
                    <p className="text-xs md:text-sm text-slate-400 italic font-light leading-relaxed">
                      "Promoting constructive debate and tolerance as a bulwark
                      against violence and confrontation."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Nested Grid for Cards 4 & 5 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 4: Anti-Tobacco Movement (Red) */}
                <motion.div
                  variants={cardVariants}
                  id="card-anti-tobacco"
                  className="relative overflow-hidden bg-red-600 text-white p-6 md:p-8 rounded-3xl shadow-md flex flex-col justify-between hover:scale-[1.015] hover:shadow-lg transition-all duration-300 ease-out"
                >
                  <img
                    src="/images/about-us-1.jpeg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.38] pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-700/80 via-red-600/68 to-red-600/50 pointer-events-none" />
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-sm">
                      <Ban className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight">
                        Anti-Tobacco Movement
                      </h3>
                      <p className="text-red-100 text-xs font-mono font-bold uppercase tracking-wider">
                        ADHUNIK Crusade
                      </p>
                    </div>
                    <p className="text-red-50 text-xs md:text-sm font-light leading-relaxed">
                      Pioneered a successful anti-tobacco movement in Bangladesh
                      through ADHUNIK.
                    </p>
                  </div>

                  {/* WHO Medal Highlight */}
                  <div className="relative z-10 mt-8 p-3 bg-red-700/60 border border-white/10 rounded-2xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-400 text-red-950 flex items-center justify-center shrink-0 shadow-inner">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[10px] font-mono font-bold text-yellow-300 uppercase tracking-widest leading-none">
                        WHO Gold Medal
                      </span>
                      <span className="block text-[11px] font-bold text-white leading-none">
                        1991-92 & 1992-93
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 5: Trust Fund Initiatives */}
                <motion.div
                  variants={cardVariants}
                  id="card-trust-funds"
                  className={`relative overflow-hidden bg-white p-6 md:p-8 rounded-3xl shadow-sm flex flex-col justify-between ${cardHoverEffect}`}
                >
                  <img
                    src="/images/Wild-Team-card.jpeg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-[0.38] pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/62 to-white/45 pointer-events-none" />
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shadow-sm shrink-0">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-tight">
                      Trust Fund Initiatives
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed">
                      Supporting WildTeam, Noazesh Knowledge Centre, and Bangla
                      Mountaineering & Trekking Club through Asiatic Society of
                      Bangladesh.
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-slate-100 text-[10px] font-mono text-slate-400 uppercase tracking-widest text-right">
                    Asiatic Society Partnership
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════
              EXPLORE CTA
          ═══════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="flex justify-center mt-12 md:mt-16"
          >
            <button
              onClick={onFoundationClick}
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-red-700 hover:shadow-red-900/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              <span>Explore Our Initiatives</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom gradient transition to dark section below ──── */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-slate-50 to-[#0B132B]" />
    </section>
  );
}
