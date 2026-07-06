import LineRevealText from "./LineRevealText";

export default function About() {
  const images = [
    {
      src: "/images/about-us-1.jpeg",
      alt: "Cosmos Group leadership discussing future technologies in a modern glass boardroom",
    },
    {
      src: "/images/about-us-2.jpg",
      alt: "Professional employees collaborating on advanced technological solutions",
    },
    {
      src: "/images/about-us-3.jpg",
      alt: "Corporate associates monitoring global shipping and sustainable power charts in the office",
    },
    {
      src: "/images/about-us-4.jpeg",
      alt: "A presentation on business projections, regional leadership, and international trade in a modern office setup",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side: About Text Description */}
        <div className="lg:w-1/2" data-purpose="about-text">
          <LineRevealText
            text="ABOUT US"
            tag="h2"
            className="text-2xl md:text-3xl font-bold tracking-widest text-slate-900 border-l-4 border-red-700 pl-4 uppercase mb-8"
          />
          <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
            <p>
              <span className="font-semibold text-slate-900">Cosmos Group</span> is one of Bangladesh’s{" "}
              <span className="font-medium text-slate-900">foremost conglomerates</span>, with a{" "}
              <span className="font-medium text-slate-900">diversified portfolio</span> spanning multiple strategic sectors. Founded with a visionary outlook to deliver{" "}
              <span className="font-medium text-slate-900">world class technologies and solutions</span>, the Group has grown into a trusted name recognized for its commitment to{" "}
              <span className="font-medium text-slate-900">quality, integrity, and innovation</span>.
            </p>
            <p>
              Our core businesses encompass{" "}
              <span className="font-semibold text-slate-900">Energy & Power</span>,{" "}
              <span className="font-semibold text-slate-900">Advanced Technologies</span>,{" "}
              <span className="font-semibold text-slate-900">Shipping & Logistics</span>,{" "}
              <span className="font-semibold text-slate-900">Renewable Energy Networks</span>,{" "}
              <span className="font-semibold text-slate-900">Media Enterprises</span>, and{" "}
              <span className="font-semibold text-slate-900">Defense Systems Coordination</span>. Each division is led by experienced teams dedicated to{" "}
              <span className="font-medium text-slate-900">excellence, regional leadership</span>, and{" "}
              <span className="font-medium text-slate-900">sustainable value creation</span>.
            </p>
            <p>
              Guided by{" "}
              <span className="font-medium text-slate-900">ecological responsibility and community upliftment</span>, Cosmos Group continues to forge{" "}
              <span className="font-medium text-slate-900">international partnerships</span>, introduce{" "}
              <span className="font-medium text-slate-900">cutting edge solutions</span> to regional markets, and strengthen{" "}
              <span className="font-medium text-slate-900">Bangladesh’s position in the global economy</span>.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8 text-center md:text-left">
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-red-700">30+</p>
              <p className="text-slate-500 text-xs md:text-sm mt-1 uppercase tracking-wider font-semibold">Years of Excellence</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-extrabold text-red-700">3.2k+</p>
              <p className="text-slate-500 text-xs md:text-sm mt-1 uppercase tracking-wider font-semibold">Associates and Employees</p>
            </div>
          </div>
        </div>

        {/* Right Side: Grid of Images */}
        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4" data-purpose="about-gallery">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative aspect-video filter overflow-hidden rounded-xl bg-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
