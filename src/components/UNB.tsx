import React from "react";
import { 
  ArrowLeft, 
  Globe2, 
  MapPin, 
  Calendar, 
  Radio, 
  Users, 
  Award, 
  ArrowUpRight,
  Newspaper,
  Flame,
  Globe
} from "lucide-react";
import { motion } from "motion/react";

interface UNBProps {
  onBackToHome: () => void;
}

export default function UNB({ onBackToHome }: UNBProps) {
  const globalPartners = [
    {
      name: "Associated Press (AP)",
      role: "Principal Partner",
      description: "As the principal partner, AP has a longstanding strategic alliance with UNB, facilitating seamless real-time news syndication and visual coverage.",
      icon: "AP",
      accent: "bg-red-500/10 text-red-500 border-red-500/20"
    },
    {
      name: "Thomson Reuters",
      role: "Global News Exchange Partner",
      description: "Collaborating on worldwide geopolitical columns, financial briefs, and international press wire feeds.",
      icon: "TR",
      accent: "bg-slate-900/50 text-slate-300 border-slate-800"
    },
    {
      name: "Dow Jones",
      role: "Financial News Exchange Partner",
      description: "Partnering to deliver institutional economic reports, global stock indicators, and corporate bulletins to the region.",
      icon: "DJ",
      accent: "bg-slate-900/50 text-slate-300 border-slate-800"
    }
  ];

  return (
    <div id="unb-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-unb"
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
              <Radio className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Media Division — Estd. 1988
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                United News of Bangladesh (UNB)
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                The First Digital Wire Service in South Asia's Private Sector
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              Informing and connecting Bangladesh with the world since 1988. As the nation's premier independent news agency, UNB delivers robust, authoritative, and real-time coverage across all media platforms.
            </p>
          </div>
        </div>

        {/* Key Impact Metrics Stats Bar */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
            Audience & Presence Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Metric 1 */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm flex items-center gap-5 hover:border-red-200 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  20M+
                </span>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Global Reach
                </span>
                <span className="block text-xs text-slate-500 font-light">
                  Across readers, listeners, & viewers
                </span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm flex items-center gap-5 hover:border-red-200 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  64 Districts
                </span>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Correspondent Grid
                </span>
                <span className="block text-xs text-slate-500 font-light">
                  Comprehensive nationwide network
                </span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm flex items-center gap-5 hover:border-red-200 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  1988
                </span>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                  Year Established
                </span>
                <span className="block text-xs text-slate-500 font-light">
                  First private wire service in SA
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Global Partnerships Section */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              International Networks
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Global Partnerships
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              UNB partners with the world's leading news agencies to ensure robust news exchange, bringing unbiased global news directly to Bangladesh and syndicating national reportage worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {globalPartners.map((partner) => (
              <div 
                key={partner.name}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  partner.name.includes("Associated Press")
                    ? "bg-red-50/40 border-red-200/80 hover:border-red-300 shadow-sm"
                    : "bg-slate-50 border-slate-200 hover:border-slate-350"
                }`}
              >
                <div className="space-y-4">
                  {/* Styled Mock Logo Badge */}
                  <div className={`w-14 h-10 rounded-xl flex items-center justify-center font-black font-mono tracking-tighter text-sm border shadow-sm ${partner.accent}`}>
                    {partner.icon}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 uppercase tracking-tight">
                      {partner.name}
                    </h3>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${
                      partner.name.includes("Associated Press") ? "text-red-600" : "text-slate-400"
                    }`}>
                      {partner.role}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {partner.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-bold text-slate-400">
                  <span>SYNDICATED FEED</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
