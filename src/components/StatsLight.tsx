import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    setCount(0);
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(easeOut * value);
      setCount(start);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsLight() {
  const stats: StatItem[] = [
    { value: 52, suffix: "+", label: "Years of Excellence" },
    { value: 1973, suffix: "", label: "Year Established" },
    { value: 12, suffix: "", label: "Business Units" },
    { value: 9, suffix: "", label: "Core Sectors" },
    { value: 4, suffix: "", label: "Overseas Offices" },
    { value: 64, suffix: "", label: "Districts Covered" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 md:gap-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${index !== stats.length - 1 ? "md:border-r md:border-stone-200" : ""}`}
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-sky-700 font-display">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
