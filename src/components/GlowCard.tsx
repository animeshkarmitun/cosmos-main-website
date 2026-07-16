import React, { useRef, useState } from "react";
import { motion, type MotionProps } from "motion/react";

export interface GlowCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
  glowColor?: string;
  glowSize?: number;
  innerGlowSize?: number;
  showMesh?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  theme = "dark",
  glowColor = "220, 38, 38",
  glowSize = 350,
  innerGlowSize = 280,
  showMesh = false,
  onMouseMove: userOnMouseMove,
  ...motionProps
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    userOnMouseMove?.(e);
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const borderOpacity = theme === "dark" ? "0.25" : "0.18";
  const innerOpacity = theme === "dark" ? "0.05" : "0.04";

  return (
    <motion.div
      {...motionProps}
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* 1px illuminated border flashlight mask */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${glowSize}px circle at ${coords.x}px ${coords.y}px, rgba(${glowColor}, ${borderOpacity}), transparent 80%)`,
          padding: "1px",
          maskImage: "linear-gradient(#fff, #fff) exclude, linear-gradient(#fff, #fff)",
          WebkitMaskComposite: "source-out",
          maskComposite: "subtract",
        }}
      />

      {/* Subtle inner spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(${innerGlowSize}px circle at ${coords.x}px ${coords.y}px, rgba(${glowColor}, ${innerOpacity}), transparent 85%)`,
        }}
      />

      {/* Optional tech grid mesh accent */}
      {showMesh && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />
      )}

      {children}
    </motion.div>
  );
}
