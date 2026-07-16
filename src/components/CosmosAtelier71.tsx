import React from "react";
import { 
  ArrowLeft, 
  Palette, 
  Layers, 
  Users, 
  BookOpen,
} from "lucide-react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface CosmosAtelier71Props {
  onBackToHome: () => void;
}

export default function CosmosAtelier71({ onBackToHome }: CosmosAtelier71Props) {
  return (
    <div id="atelier-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-atelier"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="Cosmos Atelier 71" logo="/logos/Cosmos Atelier 71.png" descriptor="Printmaking Studio" />
      </div>

    <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <Palette className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Fine Arts Division — Estd. 2009
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Cosmos Atelier 71
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                Printmaking Studio, Art Incubation & Cultural Exchange
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              Cosmos Atelier 71 has remained a living site of printmaking practice and artistic exchange for almost two decades. The studio sustains a continuous working environment, encouraging cross-cultural dialogue and experimentation.
            </p>
          </div>
        </div>

        {/* Introduction / About Block */}
        <GlowCard theme="light" className="bg-white border border-slate-200/80 p-8 md:p-12 rounded-3xl shadow-sm text-slate-700 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
           <div className="space-y-6">
             <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">
                A Legacy of Artistic Practice
             </h2>
             <p className="text-sm md:text-base font-light leading-relaxed">
               Over the years, Cosmos Atelier 71 has hosted many international artists, including Toshihiko Ikeda (Japan) and Oona Hyland (Ireland). These residencies frequently culminate in exhibitions at Gallery Cosmos, strengthening the connection between studio-based practice and public presentation. Emerging and self-taught artists are actively encouraged through residencies, workshops, and a year-long membership programme bringing together practitioners from diverse cultural fields.
             </p>
           </div>
           
           <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-slate-100">
              <img 
                src="/images/atelier-studio.jpg" 
                alt="Cosmos Atelier 71 Studio" 
                className="w-full h-full object-cover aspect-video md:aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
           </div>
        </GlowCard>

        {/* Dynamic Focus Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Studio Activities
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Atelier Core Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <GlowCard theme="light" className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                    Intensive Workshops
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                    Organising intensive workshops in printmaking techniques, including etching, woodcut, plate lithography, cyanotype, and drypoint, led by master artists from Bangladesh and abroad.
                  </p>
                </div>
             </GlowCard>

             <GlowCard theme="light" className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                    International Residencies
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                    Hosting local artists alongside an annual international residency programme that encourages cross-cultural dialogue. Participants are selected nationwide to support artistic decentralisation.
                  </p>
                </div>
             </GlowCard>

             <GlowCard theme="light" className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                    Education & Community
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                    In addition to printmaking, the studio regularly organises workshops in ceramics, drawing, and watercolour, while conducting educational programmes with children throughout the year.
                  </p>
                </div>
             </GlowCard>
          </div>
        </div>

      </div>

      {/* Corporate Brochure Download */}
      <div className="mt-12 md:mt-16">
        <CompanyBrochureCTA companyId="atelier" />
      </div>
    </div>
  );
}
