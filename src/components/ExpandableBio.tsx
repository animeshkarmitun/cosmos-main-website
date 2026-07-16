import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface ExpandableBioProps {
  teaser: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onOpenChange?: (isOpen: boolean) => void;
}

/**
 * Progressive disclosure for long executive bios.
 * Collapsed: short teaser. Expanded: full biography with smooth height reveal.
 */
export default function ExpandableBio({
  teaser,
  children,
  className = "",
  onOpenChange,
}: ExpandableBioProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => {
      const next = !prev;
      onOpenChange?.(next);
      return next;
    });
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="space-y-4">{teaser}</div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="extended-bio"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-6 pt-1 border-t border-white/[0.06]">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        aria-expanded={isOpen}
        onClick={toggleOpen}
        className="group inline-flex items-center gap-2 mt-1 px-4 py-2.5 rounded-full border border-cyan-900/40 bg-cyan-950/30 text-cyan-300 hover:text-cyan-200 hover:border-cyan-700/50 hover:bg-cyan-950/50 transition-all text-[11px] font-mono font-bold uppercase tracking-[0.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60"
      >
        {isOpen ? "Show less" : "Read full biography"}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}
