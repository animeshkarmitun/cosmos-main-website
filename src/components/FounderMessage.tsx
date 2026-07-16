import React, { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import ExpandableBio from "./ExpandableBio";

function BioSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs uppercase tracking-widest text-cyan-400/90 font-mono font-bold border-b border-white/[0.06] pb-2">
        {title}
      </h4>
      <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
}

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
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="founder"
      className="relative py-28 px-6 md:px-8 bg-[#04060f] overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute flex items-center gap-2 px-4 py-1.5 bg-slate-950 border border-slate-800/80 rounded-full text-[9px] font-mono tracking-[0.25em] text-slate-500 uppercase translate-y-[13px]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Message from the Group President & CEO
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative aspect-video w-full bg-slate-900/40 overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.8)] border border-slate-800/60 rounded-none group lg:sticky lg:top-28">
            {!isPlaying ? (
              <div
                className="relative w-full h-full cursor-pointer overflow-hidden"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_mLNS0l4Na3bFGLtJC-BQevcb-gHMhPELGF38SGivw&s=10"
                  alt="Enayetullah Khan, Group President & CEO of Cosmos Group, presenting a business vision"
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all duration-300 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-20 h-20 rounded-full bg-red-600/30 animate-pulse" />
                    <div className="absolute w-28 h-28 rounded-full bg-red-600/10" />
                    <div className="w-16 h-16 rounded-full bg-red-600/90 group-hover:bg-red-500 flex items-center justify-center text-white shadow-[0_0_25px_rgba(220,38,38,0.7)] group-hover:shadow-[0_0_35px_rgba(239,68,68,0.9)] transition-all duration-300">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-800/40 px-4 py-2 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="tracking-wider">COSMOS CORPORATE PRESENTATION</span>
                  <span className="text-red-500 font-bold uppercase animate-pulse">01:45</span>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/6_Z4r5A-F5Q?autoplay=1&mute=1&rel=0&modestbranding=1"
                title="Enayetullah Khan, Group President & CEO of Cosmos Group Interview / Corporate presentation"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
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
                Enayetullah Khan
              </h3>
              <span className="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 font-mono font-bold tracking-widest block uppercase">
                Group President & CEO – Cosmos Group
              </span>
            </motion.div>

            <motion.div variants={blurFocusVariants} className="relative">
              <div className="border-l-2 border-cyan-400 pl-6 py-1 space-y-2">
                <span className="absolute -top-6 -left-2 text-8xl font-serif text-cyan-400/10 select-none pointer-events-none">
                  “
                </span>
                <p className="text-lg md:text-xl font-light italic text-slate-100 font-serif leading-relaxed">
                  ‘Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctor, nisi elit consequat ipsum, nec sagittis.’
                </p>
                <span className="block text-[10px] uppercase tracking-widest text-cyan-400 font-mono mt-1 font-bold">
                  Executive Vision
                </span>
              </div>
            </motion.div>

            <motion.div variants={blurFocusVariants}>
              <ExpandableBio
                teaser={
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
                    Enayetullah Khan founded Cosmos Group in 1973. From humble beginnings in trading
                    and shipping, the conglomerate has grown into a multi-sector force spanning oil
                    &amp; gas, mining, telecommunications, media, manufacturing, and more — guided by
                    an unshakable faith in Technology for Empowerment (TFE).
                  </p>
                }
              >
                <BioSection title="Early Life & Education">
                  <p>
                    Enayetullah Khan was born in 1953 in Dhaka, Bangladesh. He is the father of M Masud
                    Khan and Shamsun Nahar Khan. His grandfather Amanat Khan was a prominent member of
                    Chittagong society. Amanat Khan’s philanthropic activities in the education sector
                    convinced the British to appoint him as one of the first Muslim members of the
                    Legislative Assembly, despite being active in the independence-minded Swaraj Party.
                  </p>
                  <p>
                    Enayetullah Khan did his Masters in Mass Communication and Journalism from the
                    University of Dhaka in 1975. Thereafter he taught briefly at the same department
                    before leaving to start his business career.
                  </p>
                </BioSection>

                <BioSection title="The Cosmos Group">
                  <p>
                    Amanat Khan, as an active trader by the standards of the market, maintained strong
                    interests in the shipping industry as well; so it came as no surprise when he was
                    appointed as the first chairman of the Chittagong Port Authority. This winning
                    combination of visionary leadership, social commitment, and targeted philanthropy
                    has formed the cornerstone of the Cosmos Group’s moral blueprint.
                  </p>
                  <blockquote className="border-l-2 border-slate-600 pl-4 py-1 text-slate-400 italic">
                    He was the grandfather of the present group CEO of Cosmos, Enayetullah Khan. The
                    thread laid down by the late Amanat Khan allowed the nascent Cosmos Group to
                    expand.
                  </blockquote>
                  <p>
                    Although the formal commencement of operations began in 1973 for Cosmos Group, it
                    can be fairly said that its earliest roots of existence date back to the early 20th
                    century.
                  </p>
                  <p>
                    With its humble beginnings in the trading industry with shipping interests, the
                    formation of Cosmos Group coincided with that of Bangladesh. In less than four
                    decades, Cosmos has grown into a large conglomerate with a substantial presence in
                    multiple sectors, namely Oil &amp; Gas, mining, telecommunications, instrumentation,
                    shipping &amp; logistics, media, manufacturing, and trading. As a rising Bangladeshi
                    conglomerate, Cosmos Group is steadily leaving a gradually-expanding footprint
                    globally.
                  </p>
                  <p>
                    In line with attaining a truly international outlook, personnel development remains
                    an integral commitment to the group’s corporate vision and positioning Cosmos as a
                    heavyweight corporate organization.
                  </p>
                  <p>
                    At the heart of this vision is an unshakable faith in Technology for Empowerment
                    (TFE); serving as an unprecedented force for delivering a level playing field in
                    global commerce.
                  </p>
                </BioSection>

                <BioSection title="Author">
                  <p>
                    Apart from his entrepreneurial career, he is passionate about promoting and
                    preserving Bangladesh’s history and heritage. He is also involved in
                    environmentalism centering the Royal Bengal Tiger and is an avid promoter of art
                    and music. These passions have most frequently found expression in the form of
                    books he has either authored or co-authored.
                  </p>
                  <p>
                    <cite className="text-slate-200 font-medium not-italic">
                      Bangladesh: Splendours of the Past
                    </cite>{" "}
                    (2001), Khan’s first book, shines a light on Bangladesh’s archaeological heritage
                    and is notable for its exploration of Wari-Batteshwar.
                  </p>
                  <p>
                    His next book remains his most important, a paean to{" "}
                    <cite className="text-slate-200 font-medium not-italic">
                      The Bangladesh Sundarbans
                    </cite>{" "}
                    (2011), that is as much about its most famous resident, the majestic Royal Bengal
                    Tiger, as the bewitching mangrove landscape of the forest. Khan chairs a wildlife
                    conservancy that has done important work to save tigers.
                  </p>
                  <p>
                    Khan’s third book,{" "}
                    <cite className="text-slate-200 font-medium not-italic">
                      Boats: A Treasure of Bangladesh
                    </cite>{" "}
                    (2014) co-authored with French sailing enthusiast and naval architect Yves Marre,
                    is another labour of love, a lament ruing the dying art of boat making in
                    Bangladesh.
                  </p>
                </BioSection>

                <BioSection title="Art and Gallery Cosmos">
                  <p>
                    In 2009, Enayetullah Khan established Cosmos-Atelier71, an integral part of the
                    artistic vision Cosmos seeks to serve in the form of a printmaking studio housing
                    state-of-the-art equipment that is extremely rare in Bangladesh. Till now
                    Cosmos-Atelier71 has succeeded in helping Bangladeshi artists in exploring their
                    creativity, exchange artworks and work alongside international artists for greater
                    exposure.
                  </p>
                  <p>
                    He also established Gallery Cosmos which is a contemporary art space that aims to
                    facilitate creative interventions and collaborations among Bangladesh’s growing
                    band of young artists who are pushing the boundaries of our conception of art, as
                    well as established luminaries.
                  </p>
                  <p>
                    Learn more about Enayetullah Khan on{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/Enayetullah_Khan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-400 font-medium underline underline-offset-4 decoration-red-500/30 hover:decoration-red-400 transition-all"
                    >
                      Wikipedia
                    </a>
                    .
                  </p>
                </BioSection>
              </ExpandableBio>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
