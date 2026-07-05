import React, { useState } from "react";
import { motion } from "motion/react";
import { Play, CheckCircle } from "lucide-react";

export default function FounderMessage() {
  const [isPlaying, setIsPlaying] = useState(false);

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
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="founder"
      className="relative py-28 px-6 md:px-8 bg-[#04060f] overflow-hidden"
    >
      {/* Deluxe Tech Visual Divider / Demarcation Line */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute flex items-center gap-2 px-4 py-1.5 bg-slate-950 border border-slate-800/80 rounded-full text-[9px] font-mono tracking-[0.25em] text-slate-500 uppercase translate-y-[13px]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Message from the Founder
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Centered Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-900/30 rounded-full mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
              Keynote Address
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-widest uppercase">
            MESSAGE
          </h2>
          <div className="w-24 h-[3px] bg-cyan-400 mx-auto rounded-full shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
        </div>

        {/* 2 Column CSS Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Video Section) with Video Facade Pattern */}
          <div className="relative aspect-video w-full bg-slate-900/40 overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.8)] border border-slate-800/60 rounded-none group">
            {!isPlaying ? (
              <div
                className="relative w-full h-full cursor-pointer overflow-hidden"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_mLNS0l4Na3bFGLtJC-BQevcb-gHMhPELGF38SGivw&s=10"
                  alt="Enayetullah Khan, founder of Cosmos Group, presenting a business vision"
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Glowing red play button overlay */}
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-300 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full bg-red-600/30 animate-pulse" />
                    <div className="absolute w-28 h-28 rounded-full bg-red-600/10" />
                    <div className="w-16 h-16 rounded-full bg-red-600/90 group-hover:bg-red-500 flex items-center justify-center text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] group-hover:shadow-[0_0_35px_rgba(239,68,68,0.9)] transition-all duration-300">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                {/* Elegant caption signature bar */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800/40 px-4 py-2 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="tracking-wider">COSMOS CORPORATE PRESENTATION</span>
                  <span className="text-red-500 font-bold uppercase animate-pulse">01:45</span>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/6_Z4r5A-F5Q?autoplay=1&mute=1&rel=0&modestbranding=1"
                title="Enayetullah Khan, Founder of Cosmos Group Interview / Corporate presentation"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          {/* Right Column (Typography & Content) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 text-left"
          >
            {/* Title */}
            <motion.div variants={blurFocusVariants} className="space-y-2">
              <h3 className="text-2xl md:text-4xl font-extrabold font-display text-white tracking-tight uppercase">
                ENAYETULLAH KHAN, <br />
                <span className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 font-mono font-bold tracking-widest block mt-1 uppercase">
                  Founder – Cosmos Group
                </span>
              </h3>
            </motion.div>

            {/* Prominent Executive Quotation Quote */}
            <motion.div variants={blurFocusVariants} className="relative">
              <div className="border-l-2 border-cyan-400 pl-6 py-1 space-y-2">
                <span className="absolute -top-6 -left-2 text-8xl font-serif text-cyan-400/10 select-none pointer-events-none">“</span>
                <p className="text-lg md:text-xl font-light italic text-slate-100 font-serif leading-relaxed">
                  "Pioneering localized solutions of global standard while driving Bangladesh towards industrial progress."
                </p>
                <span className="block text-[10px] uppercase tracking-widest text-cyan-400 font-mono mt-1 font-bold">
                  EXECUTIVE VISION
                </span>
              </div>
            </motion.div>

            {/* Staggered Bullet Points */}
            <motion.div variants={blurFocusVariants} className="space-y-6">
              <h4 className="text-xs uppercase tracking-widest text-slate-500 font-mono border-b border-white/5 pb-2">
                CONGLOMERATE MILESTONES & MEDIA LEGACY
              </h4>
              
              <ul className="space-y-5">
                <li className="flex items-start gap-4 group">
                  <div className="w-5 h-5 rounded bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-red-500/30 transition-colors">
                    <CheckCircle className="w-3 h-3 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">FOUNDATIONAL ESTABLISHMENT - 1973</p>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      Enayetullah Khan founded <strong className="text-white hover:text-red-500 transition-colors font-medium">Cosmos Group</strong> in 1973. Head-quartered in Dhaka, the Bangladeshi conglomerate incorporates over a dozen companies operating at home and abroad.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 group">
                  <div className="w-5 h-5 rounded bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-red-500/30 transition-colors">
                    <CheckCircle className="w-3 h-3 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">SOUTH ASIA DIGITAL WIRE SERVICE - 1988</p>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      As a media entrepreneur, Khan established <a href="https://unb.com.bd" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 font-medium underline underline-offset-4 decoration-red-500/30 hover:decoration-red-400 transition-all">United News of Bangladesh (UNB)</a> in 1988, the first fully digitalized wire service in South Asia.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 group">
                  <div className="w-5 h-5 rounded bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-red-500/30 transition-colors">
                    <CheckCircle className="w-3 h-3 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">NATIONAL COURIER EDITORIAL - 1984</p>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      He is also the founder-editor of <a href="https://dhakacourier.com.bd" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 font-medium underline underline-offset-4 decoration-red-500/30 hover:decoration-red-400 transition-all">‘Dhaka Courier’</a>, a national newsweekly launched in 1984.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
