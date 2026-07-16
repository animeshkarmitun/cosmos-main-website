import React from "react";
import { 
  ArrowLeft, 
  Printer, 
  BookOpen, 
  Layers, 
  Award, 
  ShieldCheck, 
  FileText, 
  Feather,
  CheckCircle
} from "lucide-react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";

interface CosmosPrintingProps {
  onBackToHome: () => void;
}

export default function CosmosPrinting({ onBackToHome }: CosmosPrintingProps) {
  const printingPillars = [
    {
      title: "Commercial Offset Printing",
      icon: Printer,
      desc: "Delivering high-volume multi-color publication printing, periodicals, corporate brochures, and luxury packaging under rigorous precision."
    },
    {
      title: "Fine Art & Academic Publishing",
      icon: BookOpen,
      desc: "Proud printer and publisher of high-end art monographs, historical monographs for the Asiatic Society, and the Dhaka Courier newsweekly."
    },
    {
      title: "Eco-Friendly Technology",
      icon: Feather,
      desc: "Committed to sustainable media production, utilizing biodegradable soy-based inks, chemical-free plate processors, and recycled paper stocks."
    }
  ];

  return (
    <div id="printing-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-printing"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="Cosmos Printing" logo="/logos/Cosmos Logo-01.png" descriptor="Printing & Publishing" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <Printer className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Publishing Division — Estd. 1980
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Cosmos Printing & Publications Ltd.
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                High-Precision Industrial Offset Printing & Publisher
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              Setting standards of excellence in print technology and book publication. Armed with state-of-the-art multi-color Heidelberg speedmasters, we serve national institutions, academic publishing, and fine arts press.
            </p>
          </div>
        </div>

        {/* Dynamic Focus Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Press Craftsmanship
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Printing & Publishing Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {printingPillars.map((pillar, idx) => {
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

        {/* Operational Excellence Block */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              Industrial Print Capacity
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Operational Statistics
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              We translate creative visions and academic milestones into premium tangible media, with uncompromised clarity and alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Heidelberg Speed
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                German Machinery
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Utilizing state-of-the-art high-capacity multi-unit offset presses for impeccable registry accuracy.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Soy Inks Only
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Eco-Friendly Raw Materials
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Pioneering eco-conscious publication prints by replacing lead/petroleum elements.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                100% Certified
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Document Security
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Integrating anti-counterfeit elements, watermarks, and security threads for specialized materials.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Corporate Brochure Download */}
      <div className="mt-12 md:mt-16">
        <CompanyBrochureCTA companyId="printing" />
      </div>
    </div>
  );
}
