import { motion } from "motion/react";
import {
  Zap,
  Building,
  TrendingUp,
  Phone,
  Shirt,
  Gem,
  Printer,
  Ship,
  BookOpen,
  Globe,
  Palette,
  Globe2,
  PawPrint,
  Image as ImageIcon,
  ArrowUpRight,
} from "lucide-react";

interface BusinessUnitsLightProps {
  onNavigate: (page: string) => void;
}

export default function BusinessUnitsLight({ onNavigate }: BusinessUnitsLightProps) {
  const companies = [
    { name: "Cosmos Energy", subtitle: "Leading the transition to sustainable energy solutions across the region.", icon: Zap, page: "energy", image: "/images/energy.jpg" },
    { name: "Cosmos Holdings", subtitle: "Investment and holding management driving diverse portfolios.", icon: Building, page: "holdings", image: "/images/holdings.jpg" },
    { name: "Cosmos Marketing", subtitle: "Comprehensive consultation and marketing strategies.", icon: TrendingUp, page: "marketing", image: "/images/marketing.jpg" },
    { name: "Cosmos Telecom", subtitle: "Connecting the nation with advanced telecommunication infrastructure.", icon: Phone, page: "telecom", image: "/images/telecom.jpg" },
    { name: "Cosmos Apparels", subtitle: "High-quality garment manufacturing with international standards.", icon: Shirt, page: "apparels", image: "/images/apparels.jpg" },
    { name: "Pearls Paradise", subtitle: "Exquisite jewelry and precious gems.", icon: Gem, page: "pearls", image: "/images/pearls.jpg" },
    { name: "Cosmos Printing", subtitle: "Advanced printing and commercial publishing solutions.", icon: Printer, page: "printing", image: "/images/printing.jpg" },
    { name: "Cosmos Shipping", subtitle: "Global logistics and freight management with unparalled efficiency.", icon: Ship, page: "shipping", image: "/images/shipping.jpg" },
    { name: "Dhaka Courier", subtitle: "The premier English-language news weekly.", icon: BookOpen, page: "dhaka-courier", image: "/images/brochure_extracts/Dhaka-courier.jpeg" },
    { name: "UNB", subtitle: "United News of Bangladesh - the leading news agency.", icon: Globe2, page: "unb", image: "/images/unb.jpeg" },
    { name: "Cosmos Atelier 71", subtitle: "A premier printmaking studio promoting fine arts.", icon: Palette, page: "atelier", image: "/images/atelier.jpeg" },
    { name: "Cosmos Global", subtitle: "Global resources and international trade ventures.", icon: Globe, page: "global", image: "/images/global.jpg" },
    { name: "WildTeam", subtitle: "Wildlife conservation initiative protecting Bangladesh's rich biodiversity.", icon: PawPrint, page: "wildteam", image: "/images/wildteam.jpg" },
    { name: "Cosmos Gallery", subtitle: "A premier destination for fine arts and cultural expression.", icon: ImageIcon, page: "gallery", image: "/images/gallery.jpeg" },
  ];

  return (
    <section id="businesses" className="py-28 md:py-36 px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-sky-700 mb-6"
          >
            <span className="w-8 h-[1px] bg-sky-700" />
            Our Conglomerate
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display"
          >
            Diverse Divisions, One Vision
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg font-light mt-5 leading-relaxed"
          >
            From energy to media, our fourteen divisions operate at the forefront of Bangladesh’s economic growth.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {companies.map((company, index) => {
            const IconComp = company.icon;
            return (
              <motion.button
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => onNavigate(company.page)}
                className="group relative overflow-hidden text-left bg-white border border-stone-200/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-stone-200/50 hover:border-sky-200"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-25"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-100/25 via-white/80 to-white/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between mb-5">
                  <div className="relative z-10 w-11 h-11 rounded-xl bg-stone-100 text-slate-500 flex items-center justify-center transition-all duration-300 group-hover:bg-sky-700 group-hover:text-white">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="relative z-10 w-5 h-5 text-stone-300 transition-all duration-300 group-hover:text-sky-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <h3 className="relative z-10 text-sm font-bold text-slate-900 mb-1 transition-colors group-hover:text-sky-700">
                  {company.name}
                </h3>
                <p className="relative z-10 text-[11px] text-slate-500 font-light leading-relaxed">
                  {company.subtitle}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
