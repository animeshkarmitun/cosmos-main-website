import React from "react";
import { motion } from "motion/react";

interface LineRevealTextProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  staggerDelay?: number;
  once?: boolean;
}

export default function LineRevealText({
  text,
  className = "",
  tag = "div",
  staggerDelay = 0.12,
  once = true,
}: LineRevealTextProps) {
  // Split block of text by newlines
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  // Motion variants for staggering container
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  // Snappy but elegant custom bezier curve easing profile: cubic-bezier(0.16, 1, 0.3, 1)
  const lineVariants = {
    initial: {
      y: "110%",
    },
    animate: {
      y: "0%",
      transition: {
        ease: [0.16, 1, 0.3, 1],
        duration: 0.95,
      },
    },
  };

  // Dynamically resolve tag
  const CustomTag = motion[tag] as typeof motion.div;

  return (
    <CustomTag
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once, margin: "-10%" }}
      className={`relative ${className}`}
    >
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden relative">
          <motion.span
            variants={lineVariants}
            className="block origin-bottom filter saturate-[1.1]"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </CustomTag>
  );
}
