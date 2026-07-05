import React from "react";
import { 
  ArrowLeft, 
  Shirt, 
  Leaf, 
  Globe, 
  Award, 
  Heart, 
  ShieldCheck, 
  Scissors, 
  Truck
} from "lucide-react";

interface CosmosApparelsProps {
  onBackToHome: () => void;
}

export default function CosmosApparels({ onBackToHome }: CosmosApparelsProps) {
  const apparelPillars = [
    {
      title: "Sustainable Manufacturing",
      icon: Leaf,
      desc: "Operating green factory facilities using solar power, rainwater harvesting, and water recycling to minimize environmental footprints."
    },
    {
      title: "Design & Development",
      icon: Scissors,
      desc: "Our state-of-the-art sampling facilities and creative design desks collaborate with European and North American fashion houses."
    },
    {
      title: "Ethical Labor Standards",
      icon: Heart,
      desc: "Providing exceptional safety guidelines, medical coverage, fair living wages, and continuous skill workshops for all artisans."
    }
  ];

  return (
    <div id="apparels-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-apparels"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <Shirt className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Garments Division — Estd. 1989
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Cosmos Apparels Ltd.
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                Sustainable Garments Manufacturing & Global Exports
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              Manufacturing premium, ethically-crafted readymade garments for leading global retail brands. We operate state-of-the-art green facilities that combine environmental stewardship with superior quality and artisanal precision.
            </p>
          </div>
        </div>

        {/* Dynamic Focus Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Industrial Craftsmanship
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Manufacturing & Export Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apparelPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
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
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                      {pillar.desc}
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
              Ethical Production
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Operational Statistics
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              Supplying critical garment solutions globally, ensuring top-tier compliance benchmarks and sustainable operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                3M+ Pieces
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Annual Export Volume
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Delivering high-quality apparel units directly to the European & North American markets.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                100% Green
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Compliance & Standards
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Pioneering eco-friendly manufacturing with complete water recycling systems.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                LEED Certified
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Industrial Facilities
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Operating modern, energy-efficient manufacturing units in key export zones.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
