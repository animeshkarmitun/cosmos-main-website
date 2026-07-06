import { motion } from "motion/react";
import { Landmark, FileSignature, Layers, ShieldCheck } from "lucide-react";

export default function ServicesLight() {
  const services = [
    {
      icon: Landmark,
      title: "Strategic & Government Advisory",
      description: "Provide market intelligence, regulatory updates, and policy insights. Serve as the primary interface with government bodies including the Ministry of Power, Energy and Mineral Resources, Petrobangla, and BPC.",
      featured: true,
    },
    {
      icon: FileSignature,
      title: "Regulatory & Tender Support",
      description: "Secure necessary regulatory approvals, including environmental clearances from the DOE. Facilitate tax exemptions and Bangladesh Bank approvals. Provide advisory support during proposal review and documentation.",
      featured: false,
    },
    {
      icon: Layers,
      title: "Project & Supply Chain Management",
      description: "Act as the in-country interface throughout project execution. Arrange transportation and customs clearance for project equipment arriving via Chittagong Port. Identify and engage qualified local contractors and suppliers.",
      featured: false,
    },
    {
      icon: ShieldCheck,
      title: "Operational & Protocol Support",
      description: "Manage employment visa applications, extensions, and renewals. Process work permits and security clearances. Provide qualified Bangladeshi engineers and subject-matter specialists to support project scope.",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-28 md:py-36 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-sky-700 mb-6"
            >
              <span className="w-8 h-[1px] bg-sky-700" />
              In-Country Representation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display"
            >
              In-Country Partnership & Advisory Services
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg font-light max-w-md leading-relaxed"
          >
            Providing international conglomerates, global investors, and technology partners with comprehensive administrative scaffolding, high-level policy advocacy, and seamless heavy-industry execution channels within Bangladesh.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.featured
                    ? "bg-sky-700 text-white md:col-span-2 lg:col-span-1 lg:row-span-2"
                    : "bg-[#FAF8F5] border border-stone-200/60 hover:border-sky-200"
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                  service.featured ? "bg-white/20 text-white" : "bg-white text-sky-700 shadow-sm"
                }`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${service.featured ? "text-white" : "text-slate-900"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${service.featured ? "text-sky-100" : "text-slate-500"}`}>
                  {service.description}
                </p>
                {service.featured && (
                  <div className="absolute bottom-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <IconComp className="w-32 h-32" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
