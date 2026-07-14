interface DivisionBrandBannerProps {
  name: string;
  logo: string;
  descriptor: string;
  theme?: "light" | "dark";
}

export default function DivisionBrandBanner({
  name,
  logo,
  descriptor,
  theme = "light",
}: DivisionBrandBannerProps) {
  const isDark = theme === "dark";

  return (
    <div className={`relative overflow-hidden rounded-2xl border shadow-sm ${
      isDark ? "bg-[#0B132B] border-slate-800/60" : "bg-white border-slate-200"
    }`}>
      <div className={`absolute inset-0 pointer-events-none ${
        isDark 
          ? "bg-gradient-to-r from-slate-900/50 via-[#0B132B] to-slate-900/20" 
          : "bg-gradient-to-r from-slate-50 via-white to-slate-50/60"
      }`} />
      
      <div className="relative z-10 flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
        <div className="min-w-0">
          <p className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em] text-red-500">
            Division Identity
          </p>
          <h2 className={`mt-1 text-base md:text-lg font-black uppercase tracking-tight truncate ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {name}
          </h2>
          <p className={`text-[11px] md:text-xs font-mono font-bold uppercase tracking-wider mt-1 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}>
            {descriptor}
          </p>
        </div>

        <div className={`shrink-0 rounded-xl border px-3 py-2 shadow-sm ${
          isDark ? "bg-white border-slate-800" : "bg-white/90 border-slate-200"
        }`}>
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-9 md:h-10 w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
