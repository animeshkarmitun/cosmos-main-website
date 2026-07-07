import { useRef } from "react";
import { ArrowRight, GraduationCap, Heart, HeartHandshake } from "lucide-react";
import { motion, useInView } from "motion/react";

interface OurCommitmentProps {
  onCsrClick?: () => void;
}

const pillars = [
  { icon: GraduationCap, label: "Education" },
  { icon: Heart, label: "Community" },
  { icon: HeartHandshake, label: "Philanthropy" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export default function OurCommitment({ onCsrClick }: OurCommitmentProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const bodyInView = useInView(bodyRef, { once: true, margin: "-60px" });

  return (
    <section id="our-commitment-section" className="relative overflow-hidden">
      {/* Top gradient transition from dark section above */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-[#0B132B] to-slate-100" />

      {/* Main content area (light background) */}
      <div className="bg-slate-50 pb-16 md:pb-24">
        {/* Subtle warm radial glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[160px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-50/40 rounded-full blur-[140px]" />
        </div>

        <motion.div
          ref={bodyRef}
          variants={stagger}
          initial="hidden"
          animate={bodyInView ? "visible" : "hidden"}
          className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* LEFT: copy */}
          <div className="space-y-6">
            <motion.div variants={fadeUp} className="space-y-3">
              <div className="w-16 h-1 bg-red-600 rounded-full" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-slate-900 uppercase tracking-tight">
                Our Commitment
              </h2>
              <p className="text-slate-500 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                To Society &amp; Community
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-sm md:text-lg font-light leading-relaxed max-w-xl"
            >
              For over five decades, Cosmos Group has invested in education, community and constructive
              debate — the values that define our social contract.
            </motion.p>

            {/* Pillar chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.label}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-red-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      {pillar.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Explore CSR CTA */}
            <motion.div variants={fadeUp} className="pt-2">
              <button
                onClick={onCsrClick}
                className={`group inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white text-sm font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-red-700 hover:shadow-red-900/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                  onCsrClick ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <span>Explore CSR</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT: hero image */}
          <motion.div
            ref={headerRef}
            variants={fadeUp}
            initial="hidden"
            animate={bodyInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/80 aspect-[4/3] md:aspect-[5/4]">
              <img
                src="/images/cosmos-foundation-1.png"
                alt="Cosmos Foundation community engagement"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating accent badge */}
            <div className="hidden md:block absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-200 px-5 py-3">
              <span className="block text-2xl font-black font-display text-red-600 leading-none">50+</span>
              <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">
                Years of Giving
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient transition to dark section below */}
      <div className="h-16 md:h-24 bg-gradient-to-b from-slate-50 to-[#0B132B]" />
    </section>
  );
}
