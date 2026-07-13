import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Linkedin, Mail, UserCircle2 } from "lucide-react";
import FounderMessage from "./FounderMessage";

interface TeamPageProps {
  onBackToHome: () => void;
}

const teamMembers = [
  { role: "Group President & CEO", name: null, image: null },
  { role: "Vice President", name: "Shawkat Hossain", image: "/images/teams/Shawkat Hossain - Vice President - Cosmos Group.jpeg" },
  { role: "General Manager", name: "G.M. Giasuddin Shahin", image: "/images/teams/G M Giasuddin Shahin - General Manager - Cosmos Group.jpeg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TeamPage({ onBackToHome }: TeamPageProps) {
  return (
    <div className="bg-[#04060f] min-h-screen text-white">
      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex flex-col justify-center pt-24 pb-16 px-6 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

        {/* Film-grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

        <div className="relative max-w-6xl mx-auto w-full">
          {/* Back button */}
          <motion.button
            onClick={onBackToHome}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-10 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] hover:border-red-500/30 rounded-xl transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </motion.button>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-950/50 border border-red-900/30 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              ◆ Leadership
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold font-display tracking-tight uppercase leading-tight mb-6"
          >
            Our{" "}
            <span className="text-red-500">Leadership</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl"
          >
            The visionary minds driving Cosmos Group's legacy across 9 sectors
          </motion.p>
        </div>
      </section>

      {/* ── Leadership Roster ─────────────────────────────────────── */}
      <section className="px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/[0.03] border border-white/[0.06] rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
              Leadership Roster
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight uppercase text-white">
            Executive Leadership
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-light mt-3 max-w-xl mx-auto">
            Portraits and full biographies will be published as each profile is confirmed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-slate-900/50 border border-slate-800/60 rounded-2xl overflow-hidden hover:border-red-500/20 transition-colors duration-500"
            >
              {/* Branded Portrait Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-800/80 via-slate-900 to-[#0B132B] flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img src={member.image} alt={member.name || member.role} className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <>
                    {/* Subtle dot grid */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:18px_18px]" />
                    {/* Soft accent glow on hover */}
                    <div className="absolute inset-0 bg-red-600/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <UserCircle2
                      className="relative w-20 h-20 text-slate-700 group-hover:text-slate-600 transition-colors duration-500"
                      strokeWidth={1}
                    />

                    {/* Forthcoming badge */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-sm border border-slate-700/60">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400">
                        Portrait Forthcoming
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                {/* Name slot (refined placeholder) */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent max-w-[40%]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-600">
                    {member.name || "Name to be announced"}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base md:text-lg tracking-tight">
                  {member.role}
                </h3>
                <p className="text-[11px] font-mono font-bold text-red-400/80 uppercase tracking-wider mt-1.5">
                  Cosmos Group
                </p>

                {/* Muted social actions */}
                <div className="flex items-center gap-2 mt-5">
                  <span className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/40 flex items-center justify-center text-slate-600">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  <span className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/40 flex items-center justify-center text-slate-600">
                    <Mail className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Founder Message ──────────────────────────────────────── */}
      <FounderMessage />
    </div>
  );
}
