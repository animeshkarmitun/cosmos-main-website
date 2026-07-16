import React from "react";
import { 
  ArrowLeft, 
  Globe, 
  Award, 
  CheckCircle, 
  Layers, 
  ShieldCheck, 
  Truck, 
  Workflow, 
  Settings
} from "lucide-react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface CosmosGlobalProps {
  onBackToHome: () => void;
}

export default function CosmosGlobal({ onBackToHome }: CosmosGlobalProps) {
  const globalPillars = [
    {
      title: "Commodity & Resource Trading",
      icon: Layers,
      desc: "Managing high-volume international imports of industrial raw materials, minerals, heavy coal, energy commodities, and specialized machinery."
    },
    {
      title: "Supply Chain & Logistics Grid",
      icon: Truck,
      desc: "Constructing and managing seamless, end-to-end bulk logistics grids, secure warehousing, and rapid customs clearance paths."
    },
    {
      title: "Global Procurement Alliances",
      icon: Workflow,
      desc: "Maintaining strong procurement and supply-side partnerships with raw materials producers across North America, Australia, and East Asia."
    }
  ];

  return (
    <div id="global-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-global"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="Cosmos Global" logo="/logos/Cosmos Resources Pte Ltd.png" descriptor="Global Resources" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <Globe className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                International Division — Estd. 2005
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Cosmos Global Resources
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                International Commodity Trading, Resources Procurement & Supply Chains
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              Constructing vital, compliant corridors for essential resources. We manage international commodity networks, bulk logistics, and raw material procurement channels to keep domestic industrial processing plants operating efficiently.
            </p>
          </div>
        </div>

        {/* Dynamic Focus Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Global Supply Alliances
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Trade & Logistics Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {globalPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <GlowCard 
                  theme="light"
                  key={idx}
                  className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>

        {/* Compliance Block */}
        <GlowCard theme="light" className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              Reliable Corridors
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Operational Statistics
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              Supplying industrial hubs nationwide, ensuring top-tier trade certifications and uninterrupted import networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard theme="light" className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                1M+ Tons
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Annually Procured Materials
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Coordinating massive physical volumes of essential industrial minerals and minerals.
              </p>
            </GlowCard>

            <GlowCard theme="light" className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                15+ Nations
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Active Source Markets
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Managing reliable vendor relationships spanning several continents.
              </p>
            </GlowCard>

            <GlowCard theme="light" className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                100% Certified
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Compliant Customs Clearing
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Utilizing state-of-the-art compliance structures for seamless, rapid custom clearances.
              </p>
            </GlowCard>
          </div>
        </GlowCard>

      </div>

      {/* Corporate Brochure Download */}
      <div className="mt-12 md:mt-16">
        <CompanyBrochureCTA companyId="global" />
      </div>
    </div>
  );
}
