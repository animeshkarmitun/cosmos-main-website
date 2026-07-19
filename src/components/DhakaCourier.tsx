import React from "react";
import {
  ArrowLeft,
  BookOpen,
  Leaf,
  Scale,
  Shield,
  Link,
  ArrowUpRight,
  Bookmark,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface DhakaCourierProps {
  onBackToHome: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function DhakaCourier({ onBackToHome }: DhakaCourierProps) {
  const editorialFocus = [
    {
      title: "Political Analysis",
      icon: Shield,
      description:
        "Critical, unbiased insights and commentary regarding national governance, political shifts, and policy updates across South Asia.",
    },
    {
      title: "Environmental Issues",
      icon: Leaf,
      description:
        "Pioneering climate reporting, investigating water management, delta challenges, and biodiversity preservation in the subcontinent.",
    },
    {
      title: "Human Rights Reporting",
      icon: Scale,
      description:
        "Defending civic liberties and bringing social justice, equality, community resilience, and grassroots struggles into focal visibility.",
    },
  ];

  const circulationMetrics = [
    {
      title: "Highest Circulation",
      metric: "Rank #1 Weekly",
      description: "The most widely read and trusted English language newsweekly in Bangladesh.",
    },
    {
      title: "100K+ Readership",
      metric: "100,000+",
      description: "Dedicated monthly readership across print editions and online platforms (www.dhakacourier.com.bd).",
      showLink: true,
    },
    {
      title: "Global Distribution",
      metric: "50+ Countries",
      description: "Reaching diplomatic channels, educational hubs, and global diaspora networks worldwide.",
    },
  ];

  // Covers sourced from dhakacourier.com.bd/archive — only issues with loadable images
  const recentIssues = [
    {
      title: "DhakaCourier Vol 42 Issue 44-45",
      date: "May 22, 2026",
      image: "/images/dhaka-courier/issues/vol-42-issue-44-45.jpg",
      link: "https://drive.google.com/file/d/12PygAfqqIZGWeiBYGt_i_wEI_3eC5gZq/view?usp=sharing",
    },
    {
      title: "DhakaCourier Vol 42 Issue 43",
      date: "May 15, 2026",
      image: "/images/dhaka-courier/issues/vol-42-issue-43.jpg",
      link: "https://drive.google.com/file/d/14dDigS7_-qIatPXqGsWBIoaQyl9fJReg/view?usp=drive_link",
    },
    {
      title: "DhakaCourier Vol 42 Issue 42",
      date: "May 08, 2026",
      image: "/images/dhaka-courier/issues/vol-42-issue-42.jpg",
      link: "https://drive.google.com/file/d/1svB_4kMUDbbpa1PooEzXM28Uw7BI3aGm/view?usp=sharing",
    },
    {
      title: "DhakaCourier Vol 42 Issue 41",
      date: "May 01, 2026",
      image: "/images/dhaka-courier/issues/vol-42-issue-41.jpg",
      link: "https://drive.google.com/file/d/126EzBUDU5l4nn-y1mqDL8Vqo4xe7Y8gY/view?usp=drive_link",
    },
    {
      title: "DhakaCourier Vol 42 Issue 40",
      date: "April 24, 2026",
      image: "/images/dhaka-courier/issues/vol-42-issue-40.jpg",
      link: "https://drive.google.com/file/d/1eXOFS4MsW-Bk4v51t2Rj3NxMUQ0KFZyz/view?usp=drive_link",
    },
    {
      title: "DhakaCourier Vol 42 Issue 39",
      date: "April 17, 2026",
      image: "/images/dhaka-courier/issues/vol-42-issue-39.jpg",
      link: "https://drive.google.com/file/d/1DY4HCi5p-duQKpLBv-HeyHajlplF_f-f/view?usp=drive_link",
    },
  ];

  return (
    <div id="dhaka-courier-portal-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-courier"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-7xl mx-auto px-4 md:px-6 mb-12"
      >
        <DivisionBrandBanner
          name="Dhaka Courier"
          logo="/logos/Dhaka Courier.png"
          descriptor="News Weekly"
          theme="dark"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 pb-24"
      >
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          className="bg-white/[0.03] border border-slate-800/60 rounded-3xl overflow-hidden relative shadow-2xl"
        >
          <div className="absolute inset-0">
            <img
              src="/images/dhaka-courier/sv-dc-updatev1.jpg"
              alt="Dhaka Courier"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/85 via-[#04060f]/20 to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <BookOpen className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Publications Division — Estd. 1984
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white uppercase leading-none">
                Dhaka Courier
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                Bangladesh&apos;s Leading English Language Newsweekly
              </p>
            </div>

            <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              Maintaining an independent editorial stance and continuous publication since 1984. Dhaka Courier provides depth, context, and rigorous investigative columns on matters that shape the nation.
            </p>
          </div>
        </motion.div>

        {/* Editorial Focus */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Rigorous Journalistic Coverage
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Editorial Focus
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editorialFocus.map((focus) => {
              const IconComponent = focus.icon;
              return (
                <GlowCard
                  key={focus.title}
                  variants={fadeUp}
                  theme="dark"
                  className="bg-white/[0.03] border border-slate-800/60 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-950/50 text-red-400 flex items-center justify-center border border-red-900/30">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight mb-3">
                      {focus.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-red-500 font-mono font-bold uppercase tracking-wider">
                    <span>Read Columns</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </GlowCard>
              );
            })}
          </motion.div>
        </div>

        {/* Reach & Circulation */}
        <div className="space-y-8">
          <motion.div variants={fadeUp} className="max-w-3xl space-y-2">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
              Influence and Distribution
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
              Reach & Circulation
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              As Bangladesh&apos;s premiere English language newsweekly, Dhaka Courier enjoys broad authority across policy, diplomatic, and public corridors.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {circulationMetrics.map((item) => (
              <GlowCard
                key={item.title}
                variants={fadeUp}
                theme="dark"
                className="bg-[#0B132B] border border-slate-800/60 p-6 rounded-2xl flex flex-col justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-950/50 text-red-400 border border-red-900/30 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
                    <Bookmark className="w-3 h-3" />
                    {item.title}
                  </div>
                  <span className="block text-2xl md:text-3xl font-black text-white tracking-tight pt-2">
                    {item.metric}
                  </span>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.showLink && (
                  <div className="pt-4 border-t border-slate-800/60">
                    <a
                      href="https://www.dhakacourier.com.bd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors cursor-pointer"
                    >
                      <Link className="w-3.5 h-3.5" />
                      Visit Portal
                    </a>
                  </div>
                )}
              </GlowCard>
            ))}
          </motion.div>
        </div>

        {/* Recent Issues — only covers verified from archive */}
        <div className="space-y-8">
          <motion.div
            variants={fadeUp}
            className="max-w-full flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div className="space-y-2">
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
                Magazine Archive
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                Recent Issues
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-slate-400">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Latest Editions</span>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentIssues.map((issue) => (
              <GlowCard
                key={issue.title}
                variants={fadeUp}
                theme="dark"
                className="group bg-white/[0.03] border border-slate-800/60 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors flex flex-col"
              >
                <a
                  href={issue.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
                        {issue.date}
                      </span>
                      <h3 className="text-lg font-bold text-white uppercase tracking-tight line-clamp-2">
                        {issue.title}
                      </h3>
                    </div>
                    <div className="pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-red-500 font-mono font-bold uppercase tracking-wider transition-colors">
                      <span>Read Issue</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>
              </GlowCard>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="dhaka-courier" />
        </div>
      </motion.div>
    </div>
  );
}
