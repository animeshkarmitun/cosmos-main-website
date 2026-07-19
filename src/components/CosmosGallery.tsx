import React from "react";
import {
  ArrowLeft,
  Image as ImageIcon,
  Palette,
  Users,
  Frame,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface CosmosGalleryProps {
  onBackToHome: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function CosmosGallery({ onBackToHome }: CosmosGalleryProps) {
  const galleryHighlights = [
    {
      title: "Contemporary Exhibitions",
      icon: Frame,
      description:
        "Curated exhibitions showcasing Bangladesh's finest contemporary artists alongside international voices, fostering cultural dialogue across generations.",
    },
    {
      title: "Young Artist Support",
      icon: Palette,
      description:
        "Nurturing emerging talent through residencies, workshops, and mentorship programmes that shape the next generation of creative voices.",
    },
    {
      title: "Community Access",
      icon: Users,
      description:
        "Making art accessible to all through public programmes, educational tours, and inclusive cultural events open to the wider community.",
    },
  ];

  const collectionImages = [
    {
      src: "/images/cosmos-gallery/cosmos-gallery.webp",
      alt: "Oil painting of a collective march through tall grass",
    },
    {
      src: "/images/cosmos-gallery/page1-6.webp",
      alt: "Ink drawing of two bulls in struggle by Zainul Abedin",
    },
    {
      src: "/images/cosmos-gallery/page1-8.webp",
      alt: "Contemporary artwork from the Gallery Cosmos collection",
    },
    {
      src: "/images/cosmos-gallery/page1-9.webp",
      alt: "Figurative work from the Gallery Cosmos collection",
    },
    {
      src: "/images/cosmos-gallery/page1-10.webp",
      alt: "Minimal ink study from the Gallery Cosmos collection",
    },
    {
      src: "/images/cosmos-gallery/page2-24.webp",
      alt: "Exhibition opening at Gallery Cosmos",
    },
    {
      src: "/images/cosmos-gallery/page4-36.webp",
      alt: "Art Against Fake News gathering at Cosmos",
    },
    {
      src: "/images/cosmos-gallery/page4-37.webp",
      alt: "Visitors engaging with artwork at Gallery Cosmos",
    },
    {
      src: "/images/cosmos-gallery/page4-38.webp",
      alt: "Gallery Cosmos exhibition floor view",
    },
    {
      src: "/images/cosmos-gallery/page4-39.webp",
      alt: "Artists and guests at a Gallery Cosmos event",
    },
    {
      src: "/images/cosmos-gallery/page4-40.webp",
      alt: "Public programme hosted by Gallery Cosmos",
    },
    {
      src: "/images/cosmos-gallery/page5-44.webp",
      alt: "Large-scale installation at Gallery Cosmos",
    },
    {
      src: "/images/cosmos-gallery/page6-48.webp",
      alt: "Printmakers presenting their work after a studio session",
    },
    {
      src: "/images/cosmos-gallery/page6-49.webp",
      alt: "Collaborative workshop session at Cosmos",
    },
    {
      src: "/images/cosmos-gallery/page6-50.webp",
      alt: "Artists gathered during a Gallery Cosmos programme",
    },
    {
      src: "/images/cosmos-gallery/page6-51.webp",
      alt: "Community workshop participants at Cosmos",
    },
    {
      src: "/images/cosmos-gallery/page6-52.webp",
      alt: "Portrait study from the Gallery Cosmos collection",
    },
    {
      src: "/images/cosmos-gallery/page6-53.webp",
      alt: "Landscape work from the Gallery Cosmos collection",
    },
    {
      src: "/images/cosmos-gallery/page6-54.webp",
      alt: "Figurative painting from the Gallery Cosmos collection",
    },
    {
      src: "/images/cosmos-gallery/page7-60.webp",
      alt: "Featured artwork from a Gallery Cosmos exhibition",
    },
    {
      src: "/images/cosmos-gallery/cosmos-atelier-1.webp",
      alt: "Studio practice connected with Gallery Cosmos programmes",
    },
    {
      src: "/images/cosmos-gallery/cosmos-atelier-3.webp",
      alt: "Printmaking and studio craft linked to Gallery Cosmos",
    },
  ];

  return (
    <div id="cosmos-gallery-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-gallery"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-7xl mx-auto px-4 md:px-6 mb-12"
      >
        <DivisionBrandBanner
          name="Cosmos Gallery"
          logo="/logos/Gallery Cosmos.png"
          descriptor="Arts & Culture"
          theme="dark"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 pb-24"
      >
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          className="bg-white/[0.03] border border-slate-800/60 rounded-3xl overflow-hidden relative shadow-2xl"
        >
          <div className="absolute inset-0">
            <img
              src="/images/cosmos-gallery/page2-24.webp"
              alt="Gallery Cosmos exhibition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04060f]/75 via-[#04060f]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/40 via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <ImageIcon className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Contemporary Art Space of Cosmos Foundation
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Cosmos Gallery
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                A Premier Destination for Fine Arts
              </p>
            </div>

            <p className="text-slate-100 text-sm md:text-lg font-light leading-relaxed max-w-3xl drop-shadow-md">
              Gallery Cosmos is a contemporary art space facilitating creative interventions among Bangladesh&apos;s artists. Dedicated to visual art exhibitions, workshops, residencies, and art camps, it holds a collection of over 11,000 original artworks.
            </p>
          </div>
        </motion.div>

        {/* About */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Purpose & Vision
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Art that Engages
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlowCard
              variants={fadeUp}
              theme="dark"
              className="bg-white/[0.03] border border-slate-800/60 p-8 md:p-10 rounded-2xl space-y-6"
            >
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                Cosmos Gallery serves as a vibrant cultural hub, celebrating artistic excellence and nurturing creative talent across Bangladesh. Through world-class exhibitions and community programmes, it bridges tradition and contemporary expression.
              </p>
              <blockquote className="border-l-4 border-red-600 pl-4 py-3 italic text-slate-300 font-medium bg-[#0B132B]/60 rounded-r-xl">
                Discovering, cultivating, and disseminating the art of Bangladesh for a global audience.
              </blockquote>
            </GlowCard>

            <GlowCard
              variants={fadeUp}
              theme="dark"
              className="bg-white/[0.03] border border-slate-800/60 p-8 md:p-10 rounded-2xl flex flex-col justify-center"
            >
              <Sparkles className="w-6 h-6 text-red-500 mb-4" />
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                From landmark exhibitions and artist residencies to public programmes such as Art Against Fake News, Gallery Cosmos creates spaces where art inspires debate, education, and cultural exchange.
              </p>
              <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed mt-4">
                Working alongside Cosmos Atelier 71 and the wider Foundation network, the gallery connects studio practice with public presentation — bringing artists and audiences together.
              </p>
            </GlowCard>
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Cultural Excellence
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Gallery Highlights
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryHighlights.map((highlight) => {
              const IconComp = highlight.icon;
              return (
                <GlowCard
                  key={highlight.title}
                  variants={fadeUp}
                  theme="dark"
                  className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-950/50 text-red-400 flex items-center justify-center border border-red-900/30">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>

        {/* Collection Gallery (Foundation masonry pattern) */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
                Collection & Programmes
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                Gallery in Focus
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Collection Highlights</span>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {collectionImages.map((img) => (
              <GlowCard
                key={img.src}
                variants={fadeUp}
                theme="dark"
                className="break-inside-avoid bg-white/[0.03] border border-slate-800/60 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors group relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm font-bold font-display uppercase tracking-wide text-white">
                    {img.alt}
                  </p>
                </div>
              </GlowCard>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <Frame className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">Exhibitions</h4>
              <p className="text-sm text-slate-400 font-light">Staging contemporary shows that place Bangladeshi art in conversation with regional and international practice.</p>
            </GlowCard>
            <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <Palette className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">Residencies</h4>
              <p className="text-sm text-slate-400 font-light">Supporting artists through workshops, residencies, and studio programmes that feed into public exhibitions.</p>
            </GlowCard>
            <GlowCard theme="dark" className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <Users className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">Public Programmes</h4>
              <p className="text-sm text-slate-400 font-light">Hosting forums and cultural interventions that open art to wider audiences and civic conversation.</p>
            </GlowCard>
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="gallery" />
        </div>
      </motion.div>
    </div>
  );
}
