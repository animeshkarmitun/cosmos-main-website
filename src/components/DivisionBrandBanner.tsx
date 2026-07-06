interface DivisionBrandBannerProps {
  name: string;
  logo: string;
  descriptor: string;
}

export default function DivisionBrandBanner({
  name,
  logo,
  descriptor,
}: DivisionBrandBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white to-slate-50/60 pointer-events-none" />
      <div className="relative z-10 flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
        <div className="min-w-0">
          <p className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.2em] text-red-600">
            Division Identity
          </p>
          <h2 className="mt-1 text-base md:text-lg font-black uppercase tracking-tight text-slate-900 truncate">
            {name}
          </h2>
          <p className="text-[11px] md:text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mt-1">
            {descriptor}
          </p>
        </div>

        <div className="shrink-0 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-sm">
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
