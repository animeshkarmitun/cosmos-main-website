import React from "react";

interface CosmosLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  textColor?: string;
  textClassName?: string;
  variant?: "horizontal" | "vertical";
}

export default function CosmosLogo({
  size = 40,
  className = "",
  showText = true,
  textColor = "text-white",
  textClassName = "",
  variant = "horizontal",
}: CosmosLogoProps) {
  return (
    <div className={`flex ${variant === "horizontal" ? "items-center gap-3" : "flex-col items-center gap-2.5"} ${className}`}>
      {/* Official Cosmos Group Logo Mark */}
      <div
        className="shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden"
        style={{ width: size, height: size }}
      >
        <img
          src="/logos/Cosmos Logo-01.png"
          alt="Cosmos Group"
          width={size}
          height={size}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text */}
      {showText && (
        <div className={`flex flex-col select-none leading-none ${variant === "horizontal" ? "text-left" : "text-center"} ${textColor} ${textClassName}`}>
          <span className="font-sans font-extrabold tracking-wider uppercase text-sm md:text-base">
            Cosmos
          </span>
          <span className="font-sans font-medium tracking-[0.25em] uppercase text-[9px] md:text-[10px] opacity-90 mt-0.5">
            Group
          </span>
        </div>
      )}
    </div>
  );
}
