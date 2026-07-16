import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FileText, Download, ArrowLeft } from "lucide-react";
import { brochures } from "../data/brochures";
import BrochureDownloadButton from "./BrochureDownloadButton";

interface ResourcesPageProps {
  onBackToHome?: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function ResourcesPage({ onBackToHome }: ResourcesPageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-[#07122B] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative pt-28 md:pt-32 pb-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          {onBackToHome && (
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-10 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.button>
          )}

          {/* Header */}
          <motion.div
            ref={ref}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-900/30 rounded-full mb-5">
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
                Corporate Resources
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight uppercase leading-tight mb-5">
              Download Brochures
            </h1>
            <p className="text-sm md:text-base lg:text-lg font-light text-slate-300 leading-relaxed">
              Explore detailed company profiles, service overviews, and corporate
              capabilities in downloadable PDF format.
            </p>
          </motion.div>

          {/* Brochure cards grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {brochures.map((brochure) => (
              <motion.div
                key={brochure.id}
                variants={fadeUp}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.05] hover:border-red-500/30 transition-all duration-300 p-6 md:p-8 flex flex-col"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-red-950/50 border border-red-900/30 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight mb-1">
                      {brochure.title}
                    </h2>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                      {brochure.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-auto space-y-5">
                  <div className="flex flex-wrap items-center gap-3 text-[10px] md:text-xs font-mono uppercase tracking-wider text-slate-500">
                    {brochure.fileSize && (
                      <span className="px-2.5 py-1 bg-slate-950/60 border border-slate-800/60 rounded-full">
                        {brochure.fileSize}
                      </span>
                    )}
                    {brochure.pageCount && (
                      <span className="px-2.5 py-1 bg-slate-950/60 border border-slate-800/60 rounded-full">
                        {brochure.pageCount}
                      </span>
                    )}
                    <span className="px-2.5 py-1 bg-slate-950/60 border border-slate-800/60 rounded-full uppercase">
                      {brochure.category}
                    </span>
                  </div>

                  <BrochureDownloadButton
                    brochureId={brochure.id}
                    label="Download PDF"
                    variant="primary"
                    className="w-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming soon hint */}
          {brochures.length <= 2 && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-center text-xs md:text-sm text-slate-500 font-light mt-12"
            >
              More company-specific brochures will be added soon.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
