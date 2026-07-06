import { motion } from "motion/react";
import { Building2, Shield, Globe2 } from "lucide-react";

export default function WhyCosmosLight() {
  const reasons = [
    {
      icon: Shield,
      title: "5 Decades of Legacy",
      description:
        "Over five decades of active operations and execution in Bangladesh’s dynamic energy, infrastructure, and industrial landscapes. A legacy built on unwavering resilience and reliable services.",
    },
    {
      icon: Building2,
      title: "Unrivaled Sector Relationships",
      description:
        "Established, direct primary relationships with government departments and key regulatory agencies including EMRD, Petrobangla, BAPEX, BPC, ERL, and essential administrative sectors.",
    },
    {
      icon: Globe2,
      title: "Full In-Country Coverage",
      description:
        "End-to-end active operational coverage with premier physical offices across strategic corporate hubs including Dhaka, Chittagong Port terminals, and immediate project sites.",
    },
  ];

  return (
    <section id="why-cosmos" className="py-28 md:py-36 px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-sky-700 mb-6"
          >
            <span className="w-8 h-[1px] bg-sky-700" />
            Our Legacy
            <span className="w-8 h-[1px] bg-sky-700" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display"
          >
            Why Cosmos Group?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-base md:text-lg font-light mt-5 leading-relaxed"
          >
            Consistently bridging international joint ventures with localized logistics, regulatory clearances, and strategic advisory. We serve as the trusted industrial partner of choice for Bangladesh’s future.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComp = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200/60 text-sky-700 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:bg-sky-700 group-hover:text-white group-hover:border-sky-700">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
