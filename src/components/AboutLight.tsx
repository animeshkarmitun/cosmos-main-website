import { motion } from "motion/react";
import LineRevealText from "./LineRevealText";

export default function AboutLight() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Cosmos Group leadership discussing future technologies in a modern glass boardroom",
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Professional employees collaborating on advanced technological solutions",
    },
    {
      src: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&h=600&q=80",
      alt: "Corporate associates monitoring global shipping and sustainable power charts in the office",
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&h=600&q=80",
      alt: "A presentation on business projections, regional leadership, and international trade in a modern office setup",
    },
  ];

  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div key={image.src} className={`aspect-video rounded-2xl overflow-hidden shadow-lg group ${index % 2 === 0 ? "mt-8" : ""}`}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-sky-700 text-white rounded-2xl shadow-xl shadow-sky-900/20 p-6">
              <p className="text-3xl md:text-4xl font-extrabold font-display">30+</p>
              <p className="text-sky-100 text-xs uppercase tracking-wider font-semibold mt-1">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-sky-700 mb-6">
              <span className="w-8 h-[1px] bg-sky-700" />
              About Us
            </span>

            <LineRevealText
              text="ABOUT US"
              tag="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-8 font-display"
            />

            <div className="space-y-5 text-slate-600 text-sm md:text-base leading-relaxed font-light">
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

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8">
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-sky-700 font-display">3.2k+</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-1">Associates and Employees</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-sky-700 font-display">30+</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-1">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
