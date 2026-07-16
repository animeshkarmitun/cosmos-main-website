import { Compass, Eye, ShieldCheck, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface MissionVisionValuesProps {
  variant?: "dark" | "light";
  className?: string;
  id?: string;
}

interface PrincipleItem {
  title: string;
  text: string;
  icon: LucideIcon;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    title: "Mission Statement",
    icon: Compass,
    text: "To strengthen our leadership profile by providing the most efficient and cost effective services to our clients, be it in energy, mining, shipping, information technology, media, or any endeavour to benefit our future.",
  },
  {
    title: "Our Vision",
    icon: Eye,
    text: "To serve as the preferred partner in providing quality services & solutions to our stakeholders & clients.",
  },
  {
    title: "Values",
    icon: ShieldCheck,
    text: "Uncompromising integrity, environmental standards, deep-rooted commitment to quality, and enriching regional technical capacity.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function MissionVisionValues({
  variant = "dark",
  className = "",
  id,
}: MissionVisionValuesProps) {
  const isDark = variant === "dark";

  return (
    <div id={id} className={className}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8 rounded-3xl shadow-2xl border ${
          isDark
            ? "bg-[#081730]/90 backdrop-blur-xl border-white/10"
            : "bg-white border-stone-200/80 shadow-stone-200/40"
        }`}
      >
        {PRINCIPLES.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className={`p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 transition-all duration-300 rounded-2xl ${
                isDark
                  ? "text-white hover:bg-white/5"
                  : "hover:-translate-y-1 hover:shadow-lg"
              } ${
                index !== PRINCIPLES.length - 1
                  ? isDark
                    ? "border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0"
                    : "border-b md:border-b-0 md:border-r border-stone-100 pb-6 md:pb-0"
                  : ""
              }`}
            >
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${
                  isDark
                    ? "bg-red-700 shadow-red-900/40"
                    : "bg-sky-700 shadow-sky-900/20"
                }`}
              >
                <Icon className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div className="space-y-1.5">
                <h3
                  className={`text-lg font-bold tracking-wide uppercase ${
                    isDark ? "text-slate-100" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed font-light ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
