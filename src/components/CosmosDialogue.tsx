import React from "react";
import { ArrowLeft, MessageSquare } from "lucide-react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";

interface CosmosDialogueProps {
  onBackToHome: () => void;
}

export default function CosmosDialogue({ onBackToHome }: CosmosDialogueProps) {
  return (
    <div id="dialogue-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="Cosmos Dialogue" logo="/logos/Cosmos Logo-01.png" descriptor="Policy Dialogue" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <MessageSquare className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Core Mission of Cosmos Foundation
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Cosmos Dialogue
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                Understanding through Debate
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Block */}
        <div className="bg-white border border-slate-200/80 p-8 md:p-12 rounded-3xl shadow-sm text-slate-700 grid grid-cols-1 gap-8 items-center">
           <div className="space-y-6 max-w-4xl mx-auto text-center md:text-left">
             <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">
                A Conversation Starter
             </h2>
             <p className="text-sm md:text-base font-light leading-relaxed">
               The Cosmos Dialogue, a core mission of Cosmos Foundation, is intended to be a conversation starter that will lead to healthy discussions and deepen our understanding of some the most pressing issues of our time. The Dialogue seeks to promote a culture of constructive debate and tolerance that can act as a bulwark against violence and confrontation. 
             </p>
             <blockquote className="border-l-4 border-red-600 pl-4 py-3 italic text-slate-600 font-medium my-6 bg-slate-50/50 rounded-r-xl">
               As Rabindranath Tagore said: "Where the clear stream of reason and thoughts has not lost its way in the dreary desert of lowly habits and deeds".
             </blockquote>
             <p className="text-sm md:text-base font-light leading-relaxed">
               At Cosmos, we firmly believe that a vibrant democracy needs a continuous exchange of views between stakeholders and that the participation of citizens in the everyday political and socioeconomic process strengthens our democracy further. Taking advantage of state-of-the-art facilities at Cosmos Centre, the Cosmos Dialogue relies heavily on digital technology to bridge physical distances and help bring people together. Cosmos Dialogue takes the discussion beyond Bangladesh's borders and engages regional and international partners.
             </p>
           </div>
        </div>
      </div>

      {/* Corporate Brochure Download */}
      <div className="mt-12 md:mt-16">
        <CompanyBrochureCTA companyId="dialogue" />
      </div>
    </div>
  );
}
