import React from "react";
import { 
  ArrowLeft, 
  Building, 
  TrendingUp, 
  TrendingDown, 
  Layers, 
  ShieldCheck, 
  PieChart, 
  Globe,
  Award,
  DollarSign,
  Briefcase
} from "lucide-react";

import DivisionBrandBanner from "./DivisionBrandBanner";

interface CosmosHoldingsProps {
  onBackToHome: () => void;
}

export default function CosmosHoldings({ onBackToHome }: CosmosHoldingsProps) {
  const investAreas = [
    {
      title: "Strategic Acquisitions",
      icon: Layers,
      desc: "Identifying and integrating market-leading businesses to expand the conglomerate's footprint and generate robust long-term value."
    },
    {
      title: "Venture Capital & Incubation",
      icon: TrendingUp,
      desc: "Nurturing promising startups and technological concepts in South Asia, providing the capital, resources, and corporate backing to scale."
    },
    {
      title: "Asset Management & Real Estate",
      icon: Building,
      desc: "Managing high-end commercial property assets, high-yield land reserves, and institutional portfolios under secure guidelines."
    }
  ];

  return (
    <div id="holdings-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-holdings"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="Cosmos Holdings" logo="/logos/Cosmos Logo-01.png" descriptor="Investment & Holdings" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <Building className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Investment Division — Estd. 1972
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Cosmos Holdings Ltd.
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                Investment, Portfolio Management & Strategic Ventures
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              As the central investment arm of the Cosmos Group, we manage capital deployment, corporate joint ventures, and strategic acquisitions. Over five decades of business incubation has made us a trusted steward of industrial expansion in the region.
            </p>
          </div>
        </div>

        {/* Dynamic Focus Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Capital Stewardship
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Investment Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investAreas.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                      {area.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Growth Statistics Block */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              Performance Markers
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Holdings Strength
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              Underpinned by fiscal prudence and industrial foresight, Cosmos Holdings acts as the stabilizing force of our diversified portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                50+ Years
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Stewardship Legacy
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Managing corporate stability and venture incubation since 1972.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                12 Divisions
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Diversified Portfolio
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Active management across energy, shipping, media, technology, and trade.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Zero-Debt Growth
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Financial Risk Model
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Committed to highly sustainable, low-leverage expansion models.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
