import React from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import WhyCosmosGroup from "./WhyCosmosGroup";

interface WhyUsPageProps {
  onBackToHome: () => void;
}

export default function WhyUsPage({ onBackToHome }: WhyUsPageProps) {
  return (
    <div className="bg-[#04060f] min-h-screen">
      {/* Back navigation sits above the reused landing section */}
      <div className="pt-28 md:pt-32 pb-2 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.button
          onClick={onBackToHome}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="group inline-flex items-center gap-2 text-slate-500 hover:text-red-500 text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </motion.button>
      </div>

      {/* Reuse the landing page "Why Cosmos Group" section as a standalone page */}
      <WhyCosmosGroup />
    </div>
  );
}
