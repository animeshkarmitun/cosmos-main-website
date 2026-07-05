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
      {/* Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-md"
      >
        <defs>
          <clipPath id="cosmos-circle-clip">
            <circle cx="50" cy="50" r="48" />
          </clipPath>
        </defs>
        <g clipPath="url(#cosmos-circle-clip)">
          {/* Solid white background circle to provide perfect white gaps on any background */}
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" />
          
          {/* Top-left green cap */}
          <path d="M -10,67 Q 38.5,38.5 67,-10 L -10,-10 Z" fill="#008447" />
          
          {/* Middle red stripe */}
          <path d="M -10,73 Q 41.5,41.5 73,-10 L 91,-10 Q 50.5,50.5 -10,91 Z" fill="#E31B23" />
          
          {/* Bottom-right green cap */}
          <path d="M -10,97 Q 53.5,53.5 97,-10 L 110,-10 L 110,110 L -10,110 Z" fill="#008447" />
        </g>
      </svg>

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
