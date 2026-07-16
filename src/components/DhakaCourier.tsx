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
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

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

  const recentIssues = [
    {
      title: "DhakaCourier Vol 42 Issue 51",
      date: "July 10, 2026",
      image: "https://sgp1.digitaloceanspaces.com/dc2/dhaka_courier/F4ZVUPr0LYTO00aaZTaRSA5SqFfg5G9Yi4bA72y2.jpg",
      link: "https://drive.google.com/file/d/1TkPqxZniCiqdN4xRCSmp00cpERP2Vrm2/view?usp=drive_link"
    },
    {
      title: "DhakaCourier Vol 42 Issue 50",
      date: "July 03, 2026",
      image: "https://sgp1.digitaloceanspaces.com/dc2/dhaka_courier/1tPlR856QMJaHISq1lQXubnBKWFFO0zrg77ksUDg.jpg",
      link: "https://drive.google.com/file/d/1Wq76pOuODL9r3HpNnIkV4ih9fvsQTGXa/view?usp=drive_link"
    },
    {
      title: "DhakaCourier Vol 42 Issue 49",
      date: "June 26, 2026",
      image: "https://sgp1.digitaloceanspaces.com/dc2/dhaka_courier/WfOiv2lXbu2Opxl7TZduuXpZJwK4lhp7XYtmmWHt.jpg",
      link: "https://drive.google.com/file/d/1i4pnvwgfnADzN6Zv9O2CalE8Ae3_NTtu/view?usp=drive_link"
    },
    {
      title: "DhakaCourier Vol 42 Issue 48",
      date: "June 19, 2026",
      image: "https://sgp1.digitaloceanspaces.com/dc2/dhaka_courier/jXIQkTDcrryco0JhlUkAPKiNw8dDr0w4GnCRTl7e.jpg",
      link: "https://drive.google.com/file/d/1yVUuRMvLDZHxoYOcob4RHDZSoRhARLmU/view?usp=drive_link"
    },
    {
      title: "DhakaCourier Vol 42 Issue 47",
      date: "June 12, 2026",
      image: "https://sgp1.digitaloceanspaces.com/dc2/dhaka_courier/nMcsyonrG1Ga7DnGHyldGEwoJAGAd1U7PAN1DUSt.jpg",
      link: "https://drive.google.com/file/d/1sqxFThLkE94jMd66SYkYW7NhfHGuGIpA/view?usp=drive_link"
    },
    {
      title: "DhakaCourier Vol 42 Issue 36",
      date: "June 05, 2026",
      image: "https://sgp1.digitaloceanspaces.com/dc2/dhaka_courier/v1DIE2GUqc2oGWo9hCnkL7JVkuWeXscOAyxFDSRR.jpg",
      link: "https://drive.google.com/file/d/1_qbXBq1ZKf5gl_3M-3Hhph-hphDT0egb/view?usp=sharing"
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
                <GlowCard 
                  theme="light"
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
                </GlowCard>
              );
            })}
          </div>
        </div>

        {/* Reach & Circulation (Visual Stats Section) */}
        <GlowCard theme="light" className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
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
              <GlowCard 
                theme="light"
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
              </GlowCard>
            ))}
          </div>
        </GlowCard>

      </div>

      {/* Recent Issues / Magazine Archive */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-16 mb-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Magazine Archive
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
                Recent Issues
              </h2>
              <a 
                href="https://www.dhakacourier.com.bd/archive" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-red-600 hover:text-red-700 transition-colors"
              >
                View Full Archive
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentIssues.map((issue, idx) => (
              <GlowCard
                theme="light"
                key={idx}
                className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <a
                  href={issue.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                    <img 
                      src={issue.image} 
                      alt={issue.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] md:text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
                        {issue.date}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight line-clamp-2">
                        {issue.title}
                      </h3>
                    </div>
                    <div className="pt-3 border-t border-slate-100/60 flex items-center gap-1.5 text-xs text-slate-600 group-hover:text-red-600 font-mono font-bold uppercase tracking-wider transition-colors">
                      <span>Read Issue</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Brochure Download */}
      <div className="mt-12 md:mt-16">
        <CompanyBrochureCTA companyId="dhaka-courier" />
      </div>
    </div>
  );
}
