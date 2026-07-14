import React from "react";
import { 
  ArrowLeft, 
  PawPrint, 
  MapPin, 
  Leaf, 
  Users, 
  Binoculars,
  Heart,
  Shield,
  ArrowUpRight,
  Globe
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";

interface WildTeamProps {
  onBackToHome: () => void;
}

export default function WildTeam({ onBackToHome }: WildTeamProps) {
  const focusAreas = [
    {
      title: "Tiger Conservation",
      icon: PawPrint,
      description: "Protecting the endangered Royal Bengal Tiger through anti-poaching patrols, corridor monitoring, and community-based stewardship across critical habitats.",
      accent: "text-orange-600 bg-orange-50 border-orange-100"
    },
    {
      title: "Habitat Restoration",
      icon: Leaf,
      description: "Restoring forest ecosystems, wetlands, and wildlife corridors to ensure safe passage and breeding grounds for threatened species.",
      accent: "text-green-650 bg-green-50 border-green-100"
    },
    {
      title: "Community Engagement",
      icon: Users,
      description: "Empowering local communities with sustainable livelihoods, education, and conservation training to reduce human-wildlife conflict.",
      accent: "text-blue-600 bg-blue-50 border-blue-100"
    }
  ];

  const impactMetrics = [
    {
      title: "Flagship Species",
      metric: "Royal Bengal Tiger",
      description: "Core conservation focus across Bangladesh's last tiger landscapes."
    },
    {
      title: "Field Presence",
      metric: "24/7 Patrols",
      description: "Continuous monitoring and rapid response teams in protected areas."
    },
    {
      title: "Partnerships",
      metric: "Global Network",
      description: "Collaborating with international wildlife and research organizations."
    }
  ];

  return (
    <div id="wildteam-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-wildteam"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="WildTeam" logo="/logos/WildTeam.png" descriptor="Wildlife Conservation" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <PawPrint className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Conservation Initiative
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                WildTeam
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                Protecting Bangladesh's Wildlife & Wild Lands
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              A pioneering wildlife conservation initiative dedicated to safeguarding the Royal Bengal Tiger and preserving Bangladesh's rich biodiversity through science, community partnership, and relentless field action.
            </p>
          </div>
        </div>

        {/* Conservation Focus */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Strategic Conservation Priorities
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Conservation Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((focus) => {
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
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              Presence & Partnerships
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Conservation Impact
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              WildTeam combines cutting-edge research, rigorous protection, and grassroots collaboration to secure a future where wildlife and communities thrive together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactMetrics.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-50 text-red-600 border border-red-100 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                    {idx === 0 && <PawPrint className="w-3 h-3" />}
                    {idx === 1 && <Binoculars className="w-3 h-3" />}
                    {idx === 2 && <Globe className="w-3 h-3" />}
                    {item.title}
                  </div>
                  <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-2">
                    {item.metric}
                  </span>
                  <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery (Masonry Grid) */}
        <div className="space-y-6 pt-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Field Action
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              In The Wild
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Featured Image - Spans 8 cols */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-8 h-64 md:h-[500px] rounded-3xl overflow-hidden relative group shadow-sm"
            >
              <img 
                src="/images/wildteam/dd55b2_bea383b5cdc54422913780973ec2bd49~mv2.avif" 
                alt="WildTeam Conservation Work" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Side Stack - Spans 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-4 md:gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-1 rounded-3xl overflow-hidden relative group shadow-sm h-48 md:h-auto"
              >
                <img 
                  src="/images/wildteam/HTC demonstration 2_JPG.avif" 
                  alt="HTC Demonstration" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-1 rounded-3xl overflow-hidden relative group shadow-sm h-48 md:h-auto"
              >
                <img 
                  src="/images/wildteam/VTRT rally_JPG.avif" 
                  alt="VTRT Rally" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Commitment Banner */}
        <div className="bg-gradient-to-r from-red-700 to-red-600 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase">
                <Heart className="w-3.5 h-3.5" />
                Supported by Cosmos Group
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                Conservation is a Shared Responsibility
              </h3>
              <p className="text-red-100 text-sm md:text-base font-light">
                Through WildTeam, Cosmos Group extends its commitment beyond business — investing in the protection of our nation's most iconic species and the ecosystems that sustain us all.
              </p>
            </div>
            <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
