import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface BlurFocusRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function BlurFocusReveal({ children, className = "" }: BlurFocusRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into the scroll progress relative to this specific container
  // "start end": top of the element enters the bottom of the viewport
  // "center center": center of the element reaches the center of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Use a highly damped spring to make the motion feel heavy, deliberate, and satisfyingly smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // Map the spring scroll progress to beautiful visual transformations
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);
  const y = useTransform(smoothProgress, [0, 1], [40, 0]);
  
  // Transform numeric blur value into a full filter string
  const blurValue = useTransform(smoothProgress, [0, 0.95], [12, 0]);
  const filter = useTransform(blurValue, (currentBlur) => `blur(${currentBlur}px)`);

  return (
    <motion.div
      ref={containerRef}
      style={{
        opacity,
        y,
        filter,
      }}
      className={`will-change-[transform,opacity,filter] ${className}`}
    >
      {children}
    </motion.div>
  );
}
