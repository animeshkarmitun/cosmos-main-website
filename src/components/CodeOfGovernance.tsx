import React from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Scale, 
  Award, 
  Leaf, 
  Heart, 
  FileText, 
  ShieldAlert, 
  ArrowRight 
} from "lucide-react";
import LineRevealText from "./LineRevealText";

export default function CodeOfGovernance() {
  const pillars = [
    {
      title: "Human Rights & Nondiscrimination",
      description: "We support universal human rights as defined by the UN. Cosmos is an equal opportunities employer, explicitly prohibiting discrimination based on gender, race, religion, and other protected statuses.",
      icon: Users,
      color: "border-red-600/30 text-red-700 hover:border-red-600/60 bg-red-50/40",
      accent: "bg-red-600",
    },
    {
      title: "Fair Employment",
      description: "We scrupulously observe local laws regarding wages, ensuring employees earn a living wage adequate by national standards. We maintain a strict zero-tolerance policy for child labor.",
      icon: Scale,
      color: "border-slate-300 text-slate-800 hover:border-slate-500 bg-slate-50/50",
      accent: "bg-slate-800",
    },
    {
      title: "Commitment to Quality",
      description: "Our interaction with clients is based on trust, transparency, honesty, and mutual gain. We promote the development of our human talent and support innovative solutions to facilitate our clients' success.",
      icon: Award,
      color: "border-red-600/30 text-red-700 hover:border-red-600/60 bg-red-50/40",
      accent: "bg-red-600",
    },
    {
      title: "Health, Safety & Environment",
      description: "We aim for incident-free work environments. Our environmental policy actively promotes practices that reduce our carbon footprint, prevent pollution, and utilize efficient, recyclable resources.",
      icon: Leaf,
      color: "border-slate-300 text-slate-800 hover:border-slate-500 bg-slate-50/50",
      accent: "bg-slate-800",
    },
    {
      title: "Corporate Social Responsibility",
      description: "We view CSR as a way of giving back. Through initiatives like WildTeam® (conserving the Royal Bengal Tiger), Gallery Cosmos (nourishing young artistic talent), and our independent media houses (UNB and Dhaka Courier), we actively support the social well-being and economic growth of our communities.",
      icon: Heart,
      color: "border-red-600/30 text-red-700 hover:border-red-600/60 bg-red-50/40",
      accent: "bg-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="governance" className="py-20 md:py-28 px-6 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50/30 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50/50 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Upper Layout: Title and Context Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-16 border-b border-slate-100 mb-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-700 uppercase">
                Ethical Framework
              </span>
            </div>
            
            <LineRevealText
              text="CODE OF GOVERNANCE"
              tag="h2"
              className="text-2xl md:text-4xl font-extrabold font-display tracking-tight text-slate-900 border-l-4 border-red-700 pl-4 uppercase"
            />
          </div>

          <div className="lg:col-span-7 space-y-4">
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-light">
              The <span className="font-semibold text-slate-900">Code of Governance (CoG) of Cosmos</span> comprises the policies that set forth the framework under which we conduct our business. It addresses the standards, principles, laws, and regulations that impact our operations and outlines our expectations for employee behavior.
            </p>
            <p className="text-slate-500 text-xs font-mono uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-red-600" />
              Corporate Mandate - Governance Pillars Active
            </p>
          </div>
        </div>

        {/* Lower Layout: Responsive Grid of Pillars */}
        <div className="space-y-8">
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-wider font-display flex items-center gap-2">
              Key Pillars of Our Governance
            </h3>
            <p className="text-slate-500 text-xs font-mono mt-1 uppercase tracking-widest">
              Executing strategic responsibility and trust
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              const isCSR = index === 4; // CSR pillar can span full width on large screen or have featured treatment
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`border p-6 md:p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                    isCSR ? "md:col-span-2 lg:col-span-1 shadow-lg border-red-600/20 bg-gradient-to-br from-red-50/[0.15] via-transparent to-transparent" : "border-slate-200/80 bg-slate-50/[0.2] hover:bg-white"
                  } hover:shadow-xl hover:border-slate-300`}
                >
                  {/* Subtle top spotlight */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="space-y-6">
                    {/* Icon and Accent */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 ${pillar.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors uppercase">
                        Pillar 0{index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h4 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-red-700 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 group-hover:text-red-600 transition-colors text-[10px] font-mono tracking-widest uppercase">
                    <span>Active Standard</span>
                    <ArrowRight className="w-3.5 h-3.5 transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
