import React from "react";
import { Megaphone } from "lucide-react";

export default function NewsTicker() {
  const newsItems = [
    {
      text: "Cosmos Group announces the successful expansion of our deep-sea shipping fleets for Q3.",
      id: 1
    },
    {
      text: "Cosmos Energy launches new high-yield utility-scale solar integration project.",
      id: 2
    },
    {
      text: "Cosmos Group recognized for regional industrial excellence and visionary leadership.",
      id: 3
    },
    {
      text: "Next Annual General Meeting scheduled for August 2026.",
      id: 4
    }
  ];

  // Repeat items to fill container width for a seamless infinite loop
  const tickerItems = [...newsItems, ...newsItems, ...newsItems];

  return (
    <div 
      id="news-ticker"
      className="relative z-30 w-full bg-[#081730] border-y border-[#13294A] flex items-center h-11 overflow-hidden select-none"
    >
      {/* Fixed Label on the Left */}
      <div className="relative z-10 bg-red-700 text-white font-display text-xs font-extrabold tracking-wider px-4 md:px-6 h-full flex items-center uppercase shrink-0 select-none shadow-[6px_0_15px_rgba(0,0,0,0.6)]">
        <span className="flex items-center gap-2">
          <Megaphone className="w-3.5 h-3.5 animate-pulse text-red-100" />
          <span>LATEST UPDATES</span>
        </span>
        {/* Angled badge cut/edge design */}
        <div className="absolute top-0 right-[-10px] w-0 h-0 border-t-[44px] border-t-red-700 border-r-[10px] border-r-transparent" />
      </div>

      {/* Scrolling Text Container */}
      <div className="ticker-wrap flex-1 h-full flex items-center pl-6">
        <div className="ticker-content flex items-center">
          {tickerItems.map((item, index) => (
            <div key={index} className="flex items-center shrink-0">
              <a
                href={`#news-${item.id}`}
                className="text-slate-200 hover:text-white hover:underline hover:opacity-100 opacity-90 transition-all duration-200 text-xs md:text-sm font-medium tracking-wide decoration-red-500/50 underline-offset-4 focus:outline-none focus:text-red-400"
              >
                {item.text}
              </a>
              {/* Vertical elegant divider */}
              <span className="mx-8 text-red-500 font-extrabold text-xs md:text-sm tracking-widest opacity-80 select-none" aria-hidden="true">
                •
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
