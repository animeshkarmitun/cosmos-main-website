import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  /** Kept for API compatibility — the spring config drives timing, not this. */
  duration?: number;
  /** Optional className for the rendered span; defaults to inheriting from parent. */
  className?: string;
}

/**
 * Counts from 0 → `value` when scrolled into view.
 * Jumps straight to the final value when the user prefers reduced motion.
 */
export default function AnimatedCounter({
  value,
  suffix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !reduceMotion) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix, reduceMotion]);

  const initialValue = reduceMotion
    ? `${value.toLocaleString()}${suffix}`
    : `0${suffix}`;

  return (
    <span ref={ref} className={className}>
      {initialValue}
    </span>
  );
}
