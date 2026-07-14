import React from "react";
import { ArrowLeft, Globe, Heart, BookOpen, Brush, Image as ImageIcon } from "lucide-react";
import { motion } from "motion/react";
import DivisionBrandBanner from "./DivisionBrandBanner";

interface CosmosFoundationProps {
  onBackToHome: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

export default function CosmosFoundation({ onBackToHome }: CosmosFoundationProps) {
  const galleryImages = [
    { src: "/images/cosmosfoundation/A33I0091-min-scaled.jpg", alt: "Cosmos Gallery Artwork 1" },
    { src: "/images/cosmosfoundation/e09f08c5-6cf4-465d-b71f-c37a8acd1ff6.jpg", alt: "Venice Biennale Exhibition 1" },
    { src: "/images/cosmosfoundation/3-2-min.jpg", alt: "Cosmos Gallery Artwork 2" },
    { src: "/images/cosmosfoundation/cg-everest.jpg", alt: "BMTC Everest Expedition" },
    { src: "/images/cosmosfoundation/d89877c4-b41f-4272-8f24-9e0150bf9347.jpg", alt: "Venice Biennale Exhibition 2" },
    { src: "/images/cosmosfoundation/new.jpg", alt: "Bangladesh Discovery Ride" },
  ];

  return (
    <div id="foundation-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
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
          name="Cosmos Foundation" 
          logo="/logos/Cosmos Foundation.png" 
          descriptor="Social Impact & Philanthropy" 
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
        <motion.div variants={fadeUp} className="bg-white/[0.03] border border-slate-800/60 rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0">
            <img 
              src="/images/cosmosfoundation/A33I0091-min-scaled.jpg" 
              alt="Cosmos Foundation Banner" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f] via-[#04060f]/60 to-transparent" />
          </div>
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Philanthropic Arm of Cosmos Group
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Cosmos Foundation
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                Engaging the Nation, the Region and the World
              </p>
            </div>
            
            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              Cosmos Foundation is registered as a trust dedicated to providing strategic insights and policy solutions to help Bangladesh chart its course toward a better future. The Foundation oversees the group's abiding commitment to nature and heritage conservation, while also discovering, cultivating, and disseminating the art of Bangladesh for a global audience.
            </p>
          </div>
        </motion.div>

        {/* Initiatives & Affiliates */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
              Partners & Institutions
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Our Initiatives
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.05] transition-colors">
              <div className="h-12 w-auto flex justify-start">
                <img src="/images/cosmosfoundation/cosmos-gallery-300x86.png" alt="Gallery Cosmos" className="h-full object-contain brightness-0 invert opacity-80" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-3">
                  Gallery Cosmos
                </h3>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  A contemporary art space facilitating creative interventions among Bangladesh's artists. Dedicated to visual art exhibitions, workshops, residencies, and art camps, featuring a collection of over 11,000 original artworks.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.05] transition-colors">
              <div className="h-12 w-auto flex justify-start">
                <img src="/images/cosmosfoundation/a71.png" alt="Cosmos Atelier 71" className="h-full object-contain brightness-0 invert opacity-80" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-3">
                  Cosmos Atelier 71
                </h3>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  A printmaking studio housing state-of-the-art equipment. It breaks new ground by facilitating the emergence of Arts in Bangladesh and offers residency programs for leading artists worldwide.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.05] transition-colors">
              <div className="h-12 w-auto flex justify-start">
                <img src="/images/cosmosfoundation/wt.png" alt="WildTeam" className="h-full object-contain brightness-0 invert opacity-80" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-3">
                  WildTeam
                </h3>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  Initiated in 2003 by dedicated conservationists led by Enayetullah Khan, WildTeam works to improve the conservation status of key species and habitats, most notably implementing USAID's Bagh Activity to save tigers in the Sundarbans.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.05] transition-colors">
              <div className="h-12 w-auto flex justify-start">
                <img src="/images/cosmosfoundation/Bay-of-Bengal-Institute-Logo.png" alt="Bay of Bengal Institute" className="h-full object-contain brightness-0 invert opacity-80" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-3">
                  Bay of Bengal Institute
                </h3>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  Set up to promote governance, dialogue, and conflict management in the Indo-Pacific. BBI focuses on Track II diplomacy, the blue economy, and strategic security issues in the region.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Global & Cultural Impact (Masonry Gallery) */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-2xl flex flex-col md:flex-row md:items-end justify-between gap-4 w-full">
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-2">
                Cultural Expeditions & Exhibitions
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                Global Impact
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Gallery Highlights</span>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants} 
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp} 
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
              </motion.div>
            ))}
          </motion.div>
          
          {/* Summary Text for Gallery */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <Globe className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">Venice Biennale</h4>
              <p className="text-sm text-slate-400 font-light">Continued support for Bangladesh's participation, enriching the pavilion through compelling national and international art.</p>
            </div>
            <div className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <Globe className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">BMTC Expeditions</h4>
              <p className="text-sm text-slate-400 font-light">Supporting Bangla Mountaineering and Trekking Club, including successful summits of Chulu West, Mera Peak, and Mt. Chekigo.</p>
            </div>
            <div className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl">
              <Globe className="w-6 h-6 text-red-500 mb-4" />
              <h4 className="text-lg font-bold font-display uppercase tracking-tight text-white mb-2">Discovery Ride</h4>
              <p className="text-sm text-slate-400 font-light">Sponsoring cultural exchange cycling events to promote tourism and showcase the indigenous beauty of Bangladesh.</p>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}
