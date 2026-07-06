import React from "react";
import { ArrowLeft, Globe, Heart, BookOpen, Brush } from "lucide-react";

import DivisionBrandBanner from "./DivisionBrandBanner";

interface CosmosFoundationProps {
  onBackToHome: () => void;
}

export default function CosmosFoundation({ onBackToHome }: CosmosFoundationProps) {
  return (
    <div id="foundation-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
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
        <DivisionBrandBanner name="Cosmos Foundation" logo="/logos/Cosmos Foundation.png" descriptor="Social Impact" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-white text-slate-900 rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative">
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-5xl space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full mb-2">
              <Heart className="w-3.5 h-3.5 text-red-600 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-600 uppercase">
                Our Social Commitment
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-slate-900 uppercase leading-none">
                Cosmos Foundation
              </h1>
              <p className="text-slate-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                Engaging the Nation, the Region and the World
              </p>
            </div>
            
            <p className="text-slate-600 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              Cosmos Foundation is a philanthropic arm of the Cosmos Group, registered as a trust dedicated to providing strategic insights and policy solutions to help Bangladesh chart its course toward a better future, apart from discovering, cultivating and disseminating for a global audience, the art of Bangladesh.
            </p>
          </div>
        </div>

        {/* Introduction Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm text-slate-700 flex flex-col gap-6 hover:shadow-md transition-shadow">
             <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm shrink-0">
               <Globe className="w-6 h-6" />
             </div>
             <div>
               <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-3">
                 Nature & Heritage Conservation
               </h2>
               <p className="text-sm md:text-base font-light leading-relaxed">
                 The Foundation also oversees the group's abiding commitment to nature and heritage conservation, where its award-winning work has forged working relationships with institutions of world-renown, such as the Smithsonian. In executing the group's corporate social responsibility, it works through a variety of arrangements, often in partnership with specific individuals and thought-leaders specialised think-tanks and scholarly institutions. It also leverages the group's media holdings, facilitating critical engagement on the most important issues of the day.
               </p>
             </div>
           </div>

           <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm text-slate-700 flex flex-col gap-6 hover:shadow-md transition-shadow">
             <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm shrink-0">
               <Heart className="w-6 h-6" />
             </div>
             <div>
               <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-3">
                 Mental Health & Inclusivity
               </h2>
               <p className="text-sm md:text-base font-light leading-relaxed">
                 Cosmos Foundation raises awareness of mental health issues by organising art, music and sports events featuring differently abled individuals. Cosmos Foundation is organising Bangladesh's first ever festival of disabled artists in collaboration with UNESCO.
               </p>
             </div>
           </div>

           <div className="bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm text-slate-700 flex flex-col gap-6 hover:shadow-md transition-shadow">
             <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 shadow-sm shrink-0">
               <Brush className="w-6 h-6" />
             </div>
             <div>
               <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tight mb-3">
                 Art & Curatorial Research
               </h2>
               <p className="text-sm md:text-base font-light leading-relaxed">
                 The Foundation provides direction to the Group's flagship curatorial space, Gallery Cosmos, and its pioneering printmaking studio, Atelier71, which work in tandem. The purpose is to propagate the efflorescence of the rich Bangladeshi tradition of the (fine) arts, spanning multiple spheres. These include special collections, curatorial research and compelling exhibitions.
               </p>
             </div>
           </div>

           <div className="bg-[#0B132B] border border-slate-900 p-8 rounded-3xl shadow-sm text-slate-300 flex flex-col gap-6 hover:shadow-md transition-shadow">
             <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center border border-slate-700 shadow-sm shrink-0">
               <BookOpen className="w-6 h-6" />
             </div>
             <div>
               <h2 className="text-xl font-bold text-white uppercase tracking-tight mb-3">
                 Global Engagement
               </h2>
               <p className="text-sm md:text-base font-light leading-relaxed">
                 Through its collection of galleries, exhibitions, publications, symposia and digital platforms, the Foundation aims to engage both local and global audiences in artistic and intellectual interventions that aim to illuminate the past, examine the present, and imagine the future.
               </p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
