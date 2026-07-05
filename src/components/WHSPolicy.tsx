import React from "react";
import { motion } from "motion/react";
import {
  ShieldAlert,
  Users,
  Briefcase,
  UserCheck,
  CheckCircle,
  ShieldCheck,
  CheckSquare,
  ClipboardList,
  AlertTriangle,
  Lightbulb,
  Wrench,
  Activity,
  Trash2,
  HardHat
} from "lucide-react";

export default function WHSPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const principles = [
    {
      num: "01",
      text: "Do not endanger yourself or others.",
      icon: ShieldAlert,
      color: "border-red-500/30 hover:border-red-500/60 bg-red-950/10 text-red-400"
    },
    {
      num: "02",
      text: "Obey all rules, signs and instructions.",
      icon: CheckSquare,
      color: "border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-950/10 text-cyan-400"
    },
    {
      num: "03",
      text: "Keep your work area clean and tidy.",
      icon: Trash2,
      color: "border-amber-500/30 hover:border-amber-500/60 bg-amber-950/10 text-amber-400"
    },
    {
      num: "04",
      text: "Wear protective clothing and equipment as required.",
      icon: HardHat,
      color: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/10 text-emerald-400"
    },
    {
      num: "05",
      text: "Report all accidents, incidents and near misses to your manager.",
      icon: AlertTriangle,
      color: "border-red-500/30 hover:border-red-500/60 bg-red-950/10 text-red-400"
    },
    {
      num: "06",
      text: "Do not adjust, modify or repair any piece of work equipment unless you are competent and authorized to do so.",
      icon: Wrench,
      color: "border-amber-500/30 hover:border-amber-500/60 bg-amber-950/10 text-amber-400"
    },
    {
      num: "07",
      text: "Use only the correct tools and equipment for the job.",
      icon: ClipboardList,
      color: "border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-950/10 text-cyan-400"
    },
    {
      num: "08",
      text: "Before lifting, assess the load and your capability to move it.",
      icon: Activity,
      color: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/10 text-emerald-400"
    },
    {
      num: "09",
      text: "If you have any suggestions to improve safety in your workplace, tell your supervisor or manager.",
      icon: Lightbulb,
      color: "border-blue-500/30 hover:border-blue-500/60 bg-blue-950/10 text-blue-400"
    }
  ];

  const managementResponsibilityList = [
    "Provide and maintain a safe working environment, safe systems of work, and sufficient workplace safety facilities.",
    "Conduct regular risk assessments, facility maintenance, and disaster preparation drills.",
    "Ensure sufficient lighting, prevent workplace injuries from hazards, and provide necessary safety training and supervision."
  ];

  const workerResponsibilityList = [
    "Ensure personal health and safety, and comply with all management directions, safe work practices, and protective equipment requirements.",
    "Keep work areas clean, avoid blocking emergency exits, and observe ordinary safety rules and smoking regulations.",
    "Immediately report all accidents, incidents, and known hazards to a supervisor or manager."
  ];

  return (
    <section
      id="whs-policy"
      className="relative py-28 px-6 md:px-8 bg-[#0B132B] overflow-hidden"
    >
      {/* Visual Section Divider & Demarcation Line */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute flex items-center gap-2 px-4 py-1.5 bg-slate-950 border border-slate-800/80 rounded-full text-[9px] font-mono tracking-[0.25em] text-slate-500 uppercase translate-y-[13px]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          Safety Compliance
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/30 rounded-full mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
              WHS Charter
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-widest uppercase">
            WHS POLICY
          </h2>
          <div className="w-24 h-[3px] bg-red-600 mx-auto rounded-full shadow-[0_0_12px_rgba(220,38,38,0.7)]" />
        </div>

        {/* Our Commitment Highlight Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-slate-900/45 border border-slate-800/75 p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          {/* Subtle Background Icon */}
          <ShieldCheck className="absolute right-4 bottom-4 w-32 h-32 text-slate-800/10 pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider font-display flex items-center gap-2">
                Our Commitment
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                Cosmos Group's management is firmly committed to carrying out all work activities safely and taking all possible measures to reduce risks to the health, safety, and welfare of workers, contractors, and visitors. The ultimate goal is to ensure a safe environment for anyone affected by our business operations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Shared Responsibilities Column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Management Responsibilities */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/30 border border-slate-800/50 hover:border-slate-800 p-6 md:p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-800/40 pb-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">
                    Management Responsibilities
                  </h4>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-0.5">
                    Executive Mandate & Compliance
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {managementResponsibilityList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-5 h-5 rounded-full bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Worker Responsibilities */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/30 border border-slate-800/50 hover:border-slate-800 p-6 md:p-8 rounded-2xl transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-800/40 pb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/30 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white uppercase tracking-wider">
                    Worker Responsibilities
                  </h4>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-0.5">
                    Individual Vigilance & Care
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {workerResponsibilityList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-5 h-5 rounded-full bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Nine Key Safety Principles Grid */}
        <div className="space-y-8 max-w-6xl mx-auto">
          <div className="text-center md:text-left border-b border-slate-800 pb-4">
            <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider font-display flex items-center justify-center md:justify-start gap-2.5">
              <ClipboardList className="w-5 h-5 text-red-500" />
              Nine Key Safety Principles
            </h3>
            <p className="text-slate-500 text-xs font-mono mt-1 uppercase tracking-widest">
              Standard Operating Safety Conduct
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {principles.map((p, index) => {
              const IconComponent = p.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-900/25 border border-slate-800/60 p-5 rounded-xl hover:bg-slate-900/40 transition-all duration-300 group flex items-start gap-4 relative overflow-hidden"
                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Icon Container */}
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${p.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Principle Content */}
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">
                        Rule
                      </span>
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 bg-slate-950 border border-slate-800 text-red-500 rounded-md">
                        {p.num}
                      </span>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed font-light">
                      {p.text}
                    </p>
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
