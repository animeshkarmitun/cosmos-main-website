import { companies } from "../data/companies";

interface LogoMarqueeProps {
  onNavigate: (page: string) => void;
}

export default function LogoMarquee({ onNavigate }: LogoMarqueeProps) {
  // Render the set twice so the -50% keyframe loops seamlessly.
  const loop = [...companies, ...companies];

  return (
    <section
      aria-label="Cosmos Group divisions"
      className="bg-[#07122B] py-10 md:py-12 border-y border-[#13294A]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6 md:mb-7 flex items-center justify-center gap-3">
        <span className="w-8 h-px bg-slate-700" />
        <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.25em] text-slate-500">
          {companies.length} Divisions · One Group
        </span>
        <span className="w-8 h-px bg-slate-700" />
      </div>

      <div
        className="ticker-wrap"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="ticker-content items-center">
          {loop.map((company, i) => (
            <button
              key={`${company.id}-${i}`}
              type="button"
              onClick={() => onNavigate(company.page)}
              aria-label={`Visit ${company.title}`}
              className="inline-flex items-center shrink-0 mx-3 md:mx-4 h-14 md:h-16 px-5 md:px-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
            >
              <img
                src={company.logo}
                alt={company.title}
                className="h-6 md:h-8 w-auto object-contain"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
