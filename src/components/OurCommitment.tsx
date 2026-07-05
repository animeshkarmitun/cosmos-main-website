import React from "react";
import { 
  GraduationCap, 
  Heart, 
  MessageSquare, 
  Ban, 
  Award, 
  HeartHandshake 
} from "lucide-react";
import { motion } from "motion/react";

export default function OurCommitment() {
  const educationTags = [
    "Journalism", 
    "Medicine", 
    "Engineering", 
    "Architecture", 
    "Fine Arts", 
    "Law", 
    "Business"
  ];

  // Animation variants
  const cardHoverEffect = "hover:scale-[1.015] hover:shadow-md transition-all duration-300 ease-out border border-slate-200/80";

  return (
    <section id="our-commitment-section" className="py-24 px-4 md:px-6 lg:px-8 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" id="commitment-header">
          <div className="space-y-3">
            {/* Red Accent Line */}
            <div className="w-16 h-1 bg-red-600 rounded-full" />
            <h2 className="text-3xl md:text-4.5xl font-black font-display text-slate-900 uppercase tracking-tight">
              Our Commitment
            </h2>
            <p className="text-slate-500 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
              To Society & Community
            </p>
          </div>
          <div className="md:text-right shrink-0">
            <span className="inline-block text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate-500 bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
              COSMOS FOUNDATION PHILANTHROPIC ARM
            </span>
          </div>
        </div>

        {/* Bento Box CSS Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Card 1: Education Support */}
            <div 
              id="card-education-support"
              className={`bg-white p-6 md:p-8 rounded-3xl shadow-sm flex flex-col justify-between h-full ${cardHoverEffect}`}
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                    Education Support
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
                    Deep-rooted commitment to supporting young talents for higher studies as part of our contribution to society.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Supported Disciplines
                </span>
                <div className="flex flex-wrap gap-2">
                  {educationTags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-200/60 shadow-sm hover:border-red-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Community Activities */}
            <div 
              id="card-community-activities"
              className={`bg-white p-6 md:p-8 rounded-3xl shadow-sm ${cardHoverEffect} flex items-start gap-5`}
            >
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shadow-sm shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-tight">
                  Community Activities
                </h3>
                <p className="text-slate-650 text-sm font-light leading-relaxed">
                  Committed supporter of community activities in media, health, charitable, and artistic fields.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Card 3: Cosmos Dialogue (Dark Navy Background) */}
            <div 
              id="card-cosmos-dialogue"
              className="bg-[#0B132B] text-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-900 flex flex-col md:flex-row gap-6 items-start hover:scale-[1.015] hover:shadow-xl transition-all duration-300 ease-out"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-950/80 border border-red-900/40 text-red-400 flex items-center justify-center shadow-lg shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                    Cosmos Dialogue
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                    Strategic Conversation Series
                  </span>
                </div>
                <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                  A core mission of Cosmos Foundation, intended to be a conversation starter leading to healthy discussions and deeper understanding of pressing issues.
                </p>
                <div className="pt-4 border-t border-slate-800/80">
                  <p className="text-xs md:text-sm text-slate-400 italic font-light leading-relaxed">
                    "Promoting constructive debate and tolerance as a bulwark against violence and confrontation."
                  </p>
                </div>
              </div>
            </div>

            {/* Nested Grid for Cards 4 & 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 4: Anti-Tobacco Movement (Solid Red/Coral Background) */}
              <div 
                id="card-anti-tobacco"
                className="bg-red-600 text-white p-6 md:p-8 rounded-3xl shadow-md flex flex-col justify-between hover:scale-[1.015] hover:shadow-lg transition-all duration-300 ease-out"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-sm">
                    <Ban className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight">
                      Anti-Tobacco Movement
                    </h3>
                    <p className="text-red-100 text-xs font-mono font-bold uppercase tracking-wider">
                      ADHUNIK Crusade
                    </p>
                  </div>
                  <p className="text-red-50 text-xs md:text-sm font-light leading-relaxed">
                    Pioneered a successful anti-tobacco movement in Bangladesh through ADHUNIK.
                  </p>
                </div>

                {/* WHO Medal Highlight */}
                <div className="mt-8 p-3 bg-red-700/60 border border-white/10 rounded-2xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-400 text-red-950 flex items-center justify-center shrink-0 shadow-inner">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-[10px] font-mono font-bold text-yellow-300 uppercase tracking-widest leading-none">
                      WHO Gold Medal
                    </span>
                    <span className="block text-[11px] font-bold text-white leading-none">
                      1991-92 & 1992-93
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 5: Trust Fund Initiatives */}
              <div 
                id="card-trust-funds"
                className={`bg-white p-6 md:p-8 rounded-3xl shadow-sm flex flex-col justify-between ${cardHoverEffect}`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shadow-sm shrink-0">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-tight">
                    Trust Fund Initiatives
                  </h3>
                  <p className="text-slate-650 text-xs md:text-sm font-light leading-relaxed">
                    Supporting WildTeam, Noazesh Knowledge Centre, and Bangla Mountaineering & Trekking Club through Asiatic Society of Bangladesh.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 text-[10px] font-mono text-slate-400 uppercase tracking-widest text-right">
                  Asiatic Society Partnership
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
