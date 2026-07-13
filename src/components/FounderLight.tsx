import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function FounderLight() {
  return (
    <section id="founder" className="py-28 md:py-36 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-stone-200">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_mLNS0l4Na3bFGLtJC-BQevcb-gHMhPELGF38SGivw&s=10"
                  alt="Group President & CEO of Cosmos Group in a formal business portrait"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-sky-100 rounded-3xl" />
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-sky-700 mb-8">
              <span className="w-8 h-[1px] bg-sky-700" />
              Group President & CEO’s Message
            </span>

            <div className="relative">
              <Quote className="absolute -top-4 -left-2 w-16 h-16 text-sky-100" />
              <blockquote className="relative text-2xl md:text-3xl lg:text-4xl font-display font-medium text-slate-900 leading-snug mb-8">
                "Pioneering localized solutions of global standard while driving Bangladesh towards industrial progress."
              </blockquote>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <p className="text-lg font-bold text-slate-900">ENAYETULLAH KHAN</p>
              <p className="text-slate-500 text-sm font-medium">Group President & CEO - Cosmos Group</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
