import React from "react";
import { 
  ArrowLeft, 
  Ship, 
  Settings, 
  Handshake, 
  MapPin, 
  Check, 
  Anchor, 
  Clock, 
  Globe2, 
  Layers,
  ChevronRight,
  Shield
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface ShippingLogisticsProps {
  onBackToHome: () => void;
}

export default function ShippingLogistics({ onBackToHome }: ShippingLogisticsProps) {
  const locations = ["Chattogram", "Khulna", "Matarbari"];
  const tags = ["EPC", "Security", "Gas Fields", "Terminals", "LPG Plants", "Power Plants"];
  const checklist = [
    "Ship operators/owners agents",
    "Charterers' agents/brokers",
    "Freight forwarders",
    "Ship breakers"
  ];

  return (
    <div id="shipping-logistics-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-shipping"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="Cosmos Shipping & Logistics" logo="/logos/Cosmos Shipping and Logistics.png" descriptor="Shipping & Logistics" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header - Top Left */}
        <div className="mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/40 rounded-full">
            <Anchor className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              Maritime Division
            </span>
          </div>
          <h1 className="text-3xl md:text-4.5xl font-black font-display tracking-tight text-slate-900 uppercase">
            Shipping & Logistics
          </h1>
          <p className="text-slate-500 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
            Maritime Excellence Since 1980
          </p>
        </div>

        {/* Asymmetric Split Screen 60/40 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Detailed Cards - 60% width on desktop) */}
          {/* order-2 puts it below the sidebar on mobile, lg:order-1 puts it first on desktop */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            
            {/* Card 1: Cosmos Shipping & Logistics (CSL) */}
            <GlowCard theme="light" className="bg-white border border-slate-200/80 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                  <Ship className="w-5 h-5" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-tight">
                  Cosmos Shipping & Logistics (CSL)
                </h2>
              </div>
              
              <p className="text-slate-650 text-sm md:text-base font-light leading-relaxed">
                The maritime arm of Cosmos Group, providing logistics support to prestigious projects in Power, Oil & Gas, and infrastructure sectors.
              </p>

              <div className="space-y-2.5">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  Strategic Port Hubs
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {locations.map((loc) => (
                    <span 
                      key={loc}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200/65 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm"
                    >
                      <MapPin className="w-3 h-3 text-red-600" />
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>

            {/* Card 2: Civic Engineering */}
            <GlowCard theme="light" className="bg-white border border-slate-200/80 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
                  <Settings className="w-5 h-5 animate-spin-slow" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-tight">
                  Civic Engineering
                </h2>
              </div>

              <p className="text-slate-650 text-sm md:text-base font-light leading-relaxed">
                Operating since 1982, undertaking comprehensive EPC projects across multiple sectors.
              </p>

              <div className="space-y-2.5">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  EPC Scope & Solutions
                </span>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-semibold uppercase tracking-wider rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>

            {/* Card 3: Service Portfolio (Dark Navy Blue) */}
            <div className="bg-[#0B132B] text-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-900 space-y-6">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-red-950 text-red-400 flex items-center justify-center border border-red-900/30">
                  <Handshake className="w-5 h-5" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">
                  Service Portfolio
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3.5 bg-slate-900/40 border border-slate-800/60 rounded-2xl hover:border-red-900/30 transition-colors">
                    <div className="w-5 h-5 rounded-md bg-red-950 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs md:text-sm text-slate-200 font-light leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (Sticky Sidebar - 40% width on desktop) */}
          {/* order-1 puts it on top on mobile, lg:order-2 puts it second on desktop */}
          <div className="lg:col-span-5 bg-[#0B132B] text-white p-8 md:p-10 rounded-3xl lg:sticky lg:top-24 h-auto space-y-8 shadow-xl border border-slate-900 order-1 lg:order-2">
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-950 border border-red-900/40 text-red-400 flex items-center justify-center shadow-lg">
                <Anchor className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white leading-none">
                  Comprehensive Maritime Solutions
                </h3>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mt-1">
                  Global Integration Hub
                </span>
              </div>
            </div>

            {/* Feature List */}
            <div className="space-y-6 pt-4 border-t border-slate-800">
              
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-red-500 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    On-Time Delivery
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Efficient transportation and freight management services delivered on time and within budget.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-red-500 flex items-center justify-center shrink-0">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Global Partnerships
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Association with renowned global companies for world-class logistics solutions.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-red-500 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Project Support
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    Specialized logistics for power, oil & gas, and infrastructure projects of all scales.
                  </p>
                </div>
              </div>

            </div>

            {/* Footer Quote */}
            <div className="pt-6 border-t border-slate-800/80 text-center">
              <span className="block text-sm font-serif italic text-red-400">
                "Connecting Bangladesh to the World"
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Corporate Brochure Download */}
      <div className="mt-12 md:mt-16">
        <CompanyBrochureCTA companyId="shipping" />
      </div>
    </div>
  );
}
