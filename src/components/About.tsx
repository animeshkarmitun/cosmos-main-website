import LineRevealText from "./LineRevealText";
import MissionVisionValues from "./MissionVisionValues";

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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: About Text Description */}
          <div className="lg:w-[46%]" data-purpose="about-text">
            <LineRevealText
              text="ABOUT US"
              tag="h2"
              className="text-2xl md:text-3xl font-bold tracking-widest text-slate-900 border-l-4 border-red-700 pl-4 uppercase mb-8"
            />
            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light text-justify">
              <p>
                Cosmos Group is a Bangladesh-born multi-sector conglomerate advancing energy, power, technology, media, logistics, resources, culture, and sustainable development since 1973. Headquartered in Dhaka, the Group brings together specialized companies, experienced professionals, and long-standing institutional partnerships to deliver solutions across strategic sectors of national and global importance.
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
          <div className="lg:w-[54%] w-full grid grid-cols-2 gap-4 md:gap-5" data-purpose="about-gallery">
            {images.map((img, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] md:aspect-[5/4] filter overflow-hidden rounded-xl bg-slate-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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

        <MissionVisionValues
          id="mission-vision-values"
          variant="dark"
          className="mt-16 md:mt-20"
        />
      </div>
    </section>
  );
}
