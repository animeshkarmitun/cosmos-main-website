import React from "react";
import { 
  ArrowLeft, 
  Phone, 
  Wifi, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Network, 
  Zap,
  Radio,
  Server
} from "lucide-react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import GlowCard from "./GlowCard";

interface CosmosTelecomProps {
  onBackToHome: () => void;
}

export default function CosmosTelecom({ onBackToHome }: CosmosTelecomProps) {
  const telecomSolutions = [
    {
      title: "Optical Transmission & Fiber Networks",
      icon: Network,
      desc: "Deploying high-speed Synchronous Digital Hierarchy (SDH) and Dense Wavelength Division Multiplexing (DWDM) optical terminals nationwide."
    },
    {
      title: "Microwave Transmission & Wireless Links",
      icon: Radio,
      desc: "Supplying advanced point-to-point and point-to-multipoint digital microwave systems to bridge geographic and remote connectivity gaps."
    },
    {
      title: "Billing & Core Network Systems",
      icon: Server,
      desc: "Integrating state-of-the-art telecommunications billing infrastructure, subscriber servers, and dynamic cloud databases for top operators."
    }
  ];

  return (
    <div id="telecom-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-telecom"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="Cosmos Telecom" logo="/logos/Cosmos Technologies.png" descriptor="Telecommunications" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Technology Division — Estd. 1995
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Cosmos Telecom Ltd.
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                High-Capacity Infrastructure, Signaling & System Integration
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              Driving digital transformation with enterprise-grade telecommunications infrastructure. We supply, integrate, and maintain high-capacity fiber optical terminals and microwave transmission networks for major national operators.
            </p>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Digital Signal Corridors
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Telecom Services & Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {telecomSolutions.map((sol, idx) => {
              const IconComp = sol.icon;
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
                      {sol.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>

        {/* Stats Block */}
        <GlowCard theme="light" className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              Reliable Gridways
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Infrastructure Metrics
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              Supplying critical equipment to national networks, keeping millions of subscribers connected round the clock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard theme="light" className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                99.999%
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Carrier-Grade Uptime
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Delivering resilient telecommunications signaling and terminal equipment.
              </p>
            </GlowCard>

            <GlowCard theme="light" className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                10K+ KM
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Fiber Network Support
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Supported through our state-of-the-art SDH / DWDM terminals.
              </p>
            </GlowCard>

            <GlowCard theme="light" className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Top Operators
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Active Clients
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Strategic provider to major mobile telecommunication companies.
              </p>
            </GlowCard>
          </div>
        </GlowCard>

      </div>
    </div>
  );
}
