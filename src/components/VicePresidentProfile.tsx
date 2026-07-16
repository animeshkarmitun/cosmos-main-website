import React from "react";
import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import ExpandableBio from "./ExpandableBio";

const education = [
  {
    program: "Executive Program in Business Leadership & International Business",
    years: "2007–2008",
    school: "Mays Business School — Texas A&M University",
  },
  {
    program: "Financial Leadership for Non-Financial Leaders",
    years: "2006–2007",
    school: "Mays Business School — Texas A&M University",
  },
  {
    program: "Master of Business Administration (MBA) in International Marketing",
    years: "1996–1998",
    school: "Newport University",
  },
  {
    program: "Bachelor of Commerce (BCom) in Business & Marketing Operations",
    years: null,
    school: "National University of Bangladesh",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const blurFocusVariants = {
  hidden: { filter: "blur(12px)", opacity: 0, y: 30 },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function VicePresidentProfile() {
  return (
    <section
      id="vice-president"
      className="relative py-28 px-6 md:px-8 bg-[#04060f] overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute flex items-center gap-2 px-4 py-1.5 bg-slate-950 border border-slate-800/80 rounded-full text-[9px] font-mono tracking-[0.25em] text-slate-500 uppercase translate-y-[13px]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Senior Vice President Profile
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-900/30 rounded-full mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              Executive Profile
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-widest uppercase">
            Leadership
          </h2>
          <div className="w-24 h-[3px] bg-cyan-400 mx-auto rounded-full shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none bg-slate-900/40 overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.8)] border border-slate-800/60 group lg:sticky lg:top-28">
            <img
              src="/images/teams/Shawkat Hossain - Vice President - Cosmos Group.jpeg"
              alt="Shawkat Hossain, Senior Vice President of Cosmos Group"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800/40 px-4 py-2 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="tracking-wider">SHAWKAT HOSSAIN</span>
              <span className="text-cyan-400 font-bold uppercase">SVP</span>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 text-left"
          >
            <motion.div variants={blurFocusVariants} className="space-y-2">
              <h3 className="text-2xl md:text-4xl font-extrabold font-display text-white tracking-tight uppercase">
                Shawkat Hossain
              </h3>
              <span className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 font-mono font-bold tracking-widest block uppercase">
                Senior Vice President – Cosmos Group
              </span>
            </motion.div>

            <motion.div variants={blurFocusVariants}>
              <ExpandableBio
                teaser={
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                    Shawkat Hossain is a seasoned executive with nearly three decades of leadership
                    experience across the energy and corporate sectors. As Senior Vice President at
                    Cosmos Group (2013–Present), he leads commercial strategy and international partner
                    representation across energy, EPC, seismic, and advisory projects.
                  </p>
                }
              >
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                  He is highly skilled in strategic business development, market entry, and tender
                  governance, with a strong focus on regulated environments and collaboration with
                  government entities, national oil companies, and technical partners.
                </p>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                  Prior to joining Cosmos Group, Shawkat spent over 15 years at Halliburton (1998–2013)
                  as the Country General Manager and Business Development Focal Point for Bangladesh.
                  In this role, he led country-level commercial and operational activities supporting
                  integrated drilling, completions, and oilfield services. He served as the senior
                  commercial and stakeholder focal point for operator and government relationships,
                  overseeing contract execution, compliance, and cross-functional coordination across
                  engineering, operations, finance, and logistics.
                </p>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                  Shawkat excels in aligning diverse stakeholders, driving strategic partnerships, and
                  supporting large-scale energy infrastructure initiatives with a commitment to
                  fostering effective collaboration and value creation. His core competencies also
                  include crisis communications and new business development.
                </p>

                <div className="space-y-5 pt-2">
                  <h4 className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 font-mono border-b border-white/5 pb-2">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    Education & Executive Training
                  </h4>
                  <ul className="space-y-4">
                    {education.map((item) => (
                      <li key={item.program} className="space-y-1">
                        <p className="text-sm text-slate-200 font-medium leading-snug">
                          {item.program}
                          {item.years ? (
                            <span className="text-slate-500 font-mono text-xs ml-2">
                              ({item.years})
                            </span>
                          ) : null}
                        </p>
                        <p className="text-xs font-mono text-cyan-400/80 tracking-wide">
                          {item.school}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </ExpandableBio>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
