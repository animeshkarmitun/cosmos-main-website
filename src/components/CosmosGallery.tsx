import React from "react";
import { 
  ArrowLeft, 
  Image as ImageIcon,
  Palette,
  Users,
  Sparkles,
  Frame,
  ArrowUpRight,
  Heart
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";

interface CosmosGalleryProps {
  onBackToHome: () => void;
}

export default function CosmosGallery({ onBackToHome }: CosmosGalleryProps) {
  const galleryHighlights = [
    {
      title: "Contemporary Exhibitions",
      icon: Frame,
      description: "Curated exhibitions showcasing Bangladesh's finest contemporary artists alongside international masters, fostering cultural dialogue.",
      accent: "text-red-600 bg-red-50 border-red-100"
    },
    {
      title: "Young Artist Support",
      icon: Palette,
      description: "Nurturing emerging talent through residencies, workshops, and mentorship programmes that shape the next generation of creative voices.",
      accent: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
      title: "Community Access",
      icon: Users,
      description: "Making art accessible to all through public programmes, educational tours, and inclusive cultural events.",
      accent: "text-green-650 bg-green-50 border-green-100"
    }
  ];

  return (
    <div id="cosmos-gallery-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-gallery"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="Cosmos Gallery" logo="/logos/Gallery Cosmos.png" descriptor="Arts & Culture" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <ImageIcon className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Arts & Culture Division
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Cosmos Gallery
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                A Premier Destination for Fine Arts & Cultural Expression
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              Cosmos Gallery serves as a vibrant cultural hub, celebrating artistic excellence and nurturing creative talent across Bangladesh. Through world-class exhibitions and community programmes, it bridges tradition and contemporary expression.
            </p>
          </div>
        </div>

        {/* Gallery Highlights */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Cultural Excellence
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Gallery Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryHighlights.map((highlight) => {
              const IconComponent = highlight.icon;
              return (
                <div 
                  key={highlight.title}
                  className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${highlight.accent}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                      {highlight.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100/60 flex items-center gap-1.5 text-xs text-red-600 font-mono font-bold uppercase tracking-wider">
                    <span>Discover More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Banner */}
        <div className="bg-gradient-to-r from-red-700 to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase">
                <Heart className="w-3.5 h-3.5" />
                Supported by Cosmos Group
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                Art for Everyone
              </h3>
              <p className="text-red-100 text-sm md:text-base font-light">
                Cosmos Gallery reflects the group's deep commitment to cultural enrichment — creating spaces where art inspires, educates, and unites communities.
              </p>
            </div>
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
