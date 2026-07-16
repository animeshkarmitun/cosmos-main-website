import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactLight() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cosmos@cosmosgroup.com.bd",
      href: "mailto:cosmos@cosmosgroup.com.bd",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8802 41030442",
      href: "tel:+880241030442",
    },
    {
      icon: MapPin,
      label: "Corporate Headquarters",
      value: "Cosmos Centre, 69/1 New Circular Road, Malibagh, Dhaka-1217, Bangladesh",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-36 px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-sky-700 mb-6">
              <span className="w-8 h-[1px] bg-sky-700" />
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display mb-6">
              Partner with Cosmos Group
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed max-w-md">
              Establish a partnership, request more information, or send us a message using our contact form.
            </p>
          </motion.div>

          {/* Right: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => {
              const IconComp = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-5 bg-white border border-stone-200/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sky-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 text-sky-700 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-sky-700 group-hover:text-white">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">{item.label}</p>
                    <p className="text-base font-semibold text-slate-900 truncate">{item.value}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-stone-300 transition-all duration-300 group-hover:text-sky-700 group-hover:translate-x-1" />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
