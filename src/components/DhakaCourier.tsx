import React from "react";
import { 
  ArrowLeft, 
  BookOpen, 
  TrendingUp, 
  Globe, 
  Leaf, 
  Scale, 
  Shield, 
  Link, 
  CheckCircle, 
  ArrowUpRight,
  Bookmark
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";

interface DhakaCourierProps {
  onBackToHome: () => void;
}

export default function DhakaCourier({ onBackToHome }: DhakaCourierProps) {
  const editorialFocus = [
    {
      title: "Political Analysis",
      icon: Shield,
      description: "Critical, unbiased insights and commentary regarding national governance, political shifts, and policy updates across South Asia.",
      accent: "text-red-600 bg-red-50 border-red-100"
    },
    {
      title: "Environmental Issues",
      icon: Leaf,
      description: "Pioneering climate reporting, investigating water management, delta challenges, and biodiversity preservation in the subcontinent.",
      accent: "text-green-650 bg-green-50 border-green-100"
    },
    {
      title: "Human Rights Reporting",
      icon: Scale,
      description: "Defending civic liberties and bringing social justice, equality, community resilience, and grassroots struggles into focal visibility.",
      accent: "text-blue-600 bg-blue-50 border-blue-100"
    }
  ];

  const circulationMetrics = [
    {
      title: "Highest Circulation",
      metric: "Rank #1 Weekly",
      description: "The most widely read and trusted English language newsweekly in Bangladesh."
    },
    {
      title: "100K+ Readership",
      metric: "100,000+",
      description: "Dedicated monthly readership across print editions and online platforms (www.dhakacourier.com.bd)."
    },
    {
      title: "Global Distribution",
      metric: "50+ Countries",
      description: "Reaching diplomatic channels, educational hubs, and global diaspora networks worldwide."
    }
  ];

  return (
    <div id="dhaka-courier-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-courier"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="Dhaka Courier" logo="/logos/Dhaka Courier.png" descriptor="News Weekly" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Editorial Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <BookOpen className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Publications Division — Estd. 1984
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Dhaka Courier
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                Bangladesh's Leading English Language Newsweekly
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              Maintaining an independent editorial stance and continuous publication since 1984. Dhaka Courier provides depth, context, and rigorous investigative columns on matters that shape the nation.
            </p>
          </div>
        </div>

        {/* Editorial Focus (3-Column Layout) */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Rigorous Journalistic Coverage
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Editorial Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editorialFocus.map((focus) => {
              const IconComponent = focus.icon;
              return (
                <div 
                  key={focus.title}
                  className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${focus.accent}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                      {focus.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100/60 flex items-center gap-1.5 text-xs text-red-600 font-mono font-bold uppercase tracking-wider">
                    <span>Read Columns</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reach & Circulation (Visual Stats Section) */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              Influence and Distribution
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Reach & Circulation
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              As Bangladesh's premiere English language newsweekly, Dhaka Courier enjoys broad authority across policy, diplomatic, and public corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {circulationMetrics.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-50 text-red-600 border border-red-100 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                    <Bookmark className="w-3 h-3" />
                    {item.title}
                  </div>
                  <span className="block text-2.5xl md:text-3xl font-black text-slate-900 tracking-tight pt-2">
                    {item.metric}
                  </span>
                  <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.title === "100K+ Readership" && (
                  <div className="pt-4 border-t border-slate-200/60">
                    <a 
                      href="https://www.dhakacourier.com.bd" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-red-600 hover:text-red-700 hover:underline transition-colors cursor-pointer"
                    >
                      <Link className="w-3.5 h-3.5" />
                      Visit Portal
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
