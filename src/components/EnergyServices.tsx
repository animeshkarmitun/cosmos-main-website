import React from "react";
import { 
  ArrowLeft, 
  CheckCircle, 
  Star, 
  Calendar, 
  Users, 
  Compass, 
  Award,
  Flame,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Map
} from "lucide-react";
import { motion } from "motion/react";

interface EnergyServicesProps {
  onBackToHome: () => void;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  isRecent?: boolean;
}

export default function EnergyServices({ onBackToHome }: EnergyServicesProps) {
  const achievements: Achievement[] = [
    {
      id: "ach-1",
      title: "First Geological Study of Bangladesh",
      description: "Petroleum Geology Study (Cosmos-Corelab-BAPEX JV)"
    },
    {
      id: "ach-2",
      title: "First Oil Field Discovery",
      description: "Haripur Oil Field - Provided all third-party services and materials"
    },
    {
      id: "ach-3",
      title: "Major Gas Field Projects",
      description: "Sangu Gas Field for Cairn Energy, Lakatura 300 MMSCFD Plant, Silica Gel 90 MMCFD Plant"
    },
    {
      id: "ach-4",
      title: "Infrastructure Development",
      description: "Pipeline projects, drilling rig supplies, refinery FEED, SCADA systems"
    },
    {
      id: "ach-5",
      title: "Recent Achievements",
      description: "Chevron PSC Block evaluation, SPM Project under BPC/ERL, Black Ash Study under GTCL",
      isRecent: true
    }
  ];

  return (
    <div id="energy-services-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-energy"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Two-Column split screen layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          
          {/* Left Column (Sticky Intro on Desktop) */}
          <div className="lg:col-span-5 bg-[#0B132B] text-white p-8 md:p-12 lg:sticky lg:top-24 h-auto lg:h-[calc(100vh-140px)] flex flex-col justify-between overflow-y-auto z-10">
            <div className="space-y-8">
              {/* Top tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/50 border border-red-900/35 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-red-400 uppercase">
                  Division Dossier
                </span>
              </div>

              {/* Title Section */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                  Cosmos Energy Services
                </h1>
                <p className="text-red-500 font-mono font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-500" />
                  Oil & Gas Excellence
                </p>
              </div>

              {/* Division Timelines */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                  Key Timelines
                </h3>
                
                <div className="relative pl-6 border-l-2 border-red-600/30 space-y-6">
                  {/* Timeline 1982 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-red-600 border-4 border-[#0B132B]" />
                    <span className="block text-red-400 font-mono font-bold text-sm">1982</span>
                    <span className="text-sm font-semibold text-white">Operations Began</span>
                  </div>

                  {/* Timeline 1997 */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-red-600 border-4 border-[#0B132B]" />
                    <span className="block text-red-400 font-mono font-bold text-sm">1997</span>
                    <span className="text-sm font-semibold text-white">Incorporated as Limited Company</span>
                  </div>
                </div>
              </div>

              {/* Professional Team Description */}
              <div className="space-y-3 pt-6 border-t border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono flex items-center gap-2">
                  <Users className="w-4 h-4 text-red-500" />
                  Professional Team
                </h3>
                <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">
                  Professional team including geoscientists, economists, geologists, and electrical, mechanical & civil engineers with unrivaled experience in petroleum and power sectors.
                </p>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="pt-8 mt-8 border-t border-slate-800/60 text-[10px] font-mono text-slate-500 hidden lg:flex items-center justify-between">
              <span>COSMOS ENERGY SERVICES LTD.</span>
              <span>ESTD. 1982</span>
            </div>
          </div>

          {/* Right Column (Achievements) */}
          <div className="lg:col-span-7 bg-slate-50 p-8 md:p-12 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
                Historical Track Record
              </span>
              <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 tracking-tight uppercase">
                Major Achievements
              </h2>
              <p className="text-slate-500 text-xs md:text-sm font-light">
                Landmark Projects in Oil & Gas Sector
              </p>
            </div>

            {/* Achievements Vertical Cards */}
            <div className="space-y-4">
              {achievements.map((ach) => (
                <div 
                  key={ach.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex items-start gap-5 ${
                    ach.isRecent 
                      ? "bg-red-50/70 border-red-200 shadow-md shadow-red-950/[0.02] scale-[1.01] hover:bg-red-50 hover:border-red-300" 
                      : "bg-white border-slate-200/80 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  {/* Left Column Icon */}
                  <div className="shrink-0 mt-0.5">
                    {ach.isRecent ? (
                      <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-500/25">
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-red-600 flex items-center justify-center border border-slate-200">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Right Column Details */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className={`text-base font-bold tracking-tight uppercase ${
                        ach.isRecent ? "text-red-950" : "text-slate-900"
                      }`}>
                        {ach.title}
                      </h4>
                      {ach.isRecent && (
                        <span className="text-[9px] bg-red-200 text-red-800 font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                          Key Highlight
                        </span>
                      )}
                    </div>
                    <p className={`text-xs md:text-sm font-light leading-relaxed ${
                      ach.isRecent ? "text-red-900/80" : "text-slate-600"
                    }`}>
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Informative Grid below achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-sm">
                <span className="text-2xl font-black text-[#0B132B]">40+ Years</span>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Sector Leadership</p>
                <p className="text-xs text-slate-500 font-light leading-normal">
                  Guiding deep-resource evaluations and critical energy infrastructure buildouts in Bangladesh since 1982.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-sm">
                <span className="text-2xl font-black text-red-600">First-in-Country</span>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Exploration Pioneers</p>
                <p className="text-xs text-slate-500 font-light leading-normal">
                  Instrumental in discovering Bangladesh’s initial oil reserves and designing nation-scale processing facilities.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
