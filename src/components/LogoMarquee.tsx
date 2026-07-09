interface LogoItem {
  src: string;
  name: string;
}

const logos: LogoItem[] = [
  { src: "/logos/Cosmos Energy Services.png", name: "Cosmos Energy" },
  { src: "/logos/Cosmos Shipping and Logistics.png", name: "Cosmos Shipping" },
  { src: "/logos/Cosmos Technologies.png", name: "Cosmos Technologies" },
  { src: "/logos/Cosmos Resources Pte Ltd.png", name: "Cosmos Resources" },
  { src: "/logos/Cosmos Foundation.png", name: "Cosmos Foundation" },
  { src: "/logos/Cosmos Books.png", name: "Cosmos Books" },
  { src: "/logos/Cosmos Atelier 71.png", name: "Atelier 71" },
  { src: "/logos/Gallery Cosmos.png", name: "Gallery Cosmos" },
  { src: "/logos/Dhaka Courier.png", name: "Dhaka Courier" },
  { src: "/logos/United News of Bangladesh.png", name: "UNB" },
  { src: "/logos/Pearls Paradise.png", name: "Pearls Paradise" },
  { src: "/logos/WildTeam.png", name: "WildTeam" },
];

export default function LogoMarquee() {
  // Render the set twice so the -50% keyframe loops seamlessly.
  const loop = [...logos, ...logos];

  return (
    <section
      aria-label="Cosmos Group divisions"
      className="bg-[#07122B] py-10 md:py-12 border-y border-[#13294A]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6 md:mb-7 flex items-center justify-center gap-3">
        <span className="w-8 h-px bg-slate-700" />
        <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.25em] text-slate-500">
          14 Divisions · One Group
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
          {loop.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="inline-flex items-center shrink-0 mx-3 md:mx-4 h-14 md:h-16 px-5 md:px-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-6 md:h-8 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
