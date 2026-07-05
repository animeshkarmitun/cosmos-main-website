import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Landmark, FileSignature, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";

interface BentoCardProps {
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
  className?: string;
  index: number;
  key?: React.Key;
}

function BentoCard({ title, description, bullets, icon, className = "", index }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // cinematic crisp ease-out
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={cardVariants}
      className={`relative rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 p-8 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:bg-slate-900/60 hover:shadow-2xl hover:shadow-red-950/10 ${className}`}
    >
      {/* 1px Illuminated Border Flashlight Mask */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(220, 38, 38, 0.25), transparent 80%)`,
          padding: "1px",
          maskImage: "linear-gradient(#fff, #fff) exclude, linear-gradient(#fff, #fff)",
          WebkitMaskComposite: "source-out",
          maskComposite: "subtract",
        }}
      />

      {/* Subtle Inner Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(220, 38, 38, 0.05), transparent 85%)`,
        }}
      />

      {/* Subtle Tech grid mesh accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />

      <div className="relative z-10 space-y-6">
        {/* Top bar with Icon & index */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-center text-red-500 group-hover:text-red-400 group-hover:border-red-500/20 transition-colors shadow-inner duration-300">
            {icon}
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-700 group-hover:text-red-700/60 transition-colors uppercase">
            Service 0{index + 1}
          </span>
        </div>

        {/* Content Panel */}
        <div className="space-y-3">
          <h3 className="text-xl md:text-2xl font-bold font-display text-white group-hover:text-red-500 transition-colors duration-300 flex items-center gap-1.5">
            {title}
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-red-500" />
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Detailed context bullets */}
        <ul className="space-y-2.5 pt-4 border-t border-slate-800/40">
          {bullets.map((bullet, bidx) => (
            <li key={bidx} className="flex items-start gap-2.5 text-xs text-slate-500 line-clamp-2 hover:line-clamp-none transition-all duration-200">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600/60 mt-1.5 shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom corner branding bar */}
      <div className="mt-8 relative z-10 flex items-center justify-between opacity-30 group-hover:opacity-75 transition-opacity duration-300 pt-4 border-t border-slate-800/20 text-[10px] font-mono text-slate-500">
        <span className="flex items-center gap-1.5 uppercase">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
          Operational Desk
        </span>
        <span>Cosmos Services</span>
      </div>
    </motion.div>
  );
}

export default function PartnershipServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const servicesData = [
    {
      title: "Strategic & Government Advisory",
      description: "Provide market intelligence, regulatory updates, and policy insights. Serve as the primary interface with government bodies including the Ministry of Power, Energy and Mineral Resources, Petrobangla, and BPC.",
      icon: <Landmark className="w-5 h-5" />,
      bullets: [
        "Unifying private interest with national development standards.",
        "Comprehensive regulatory modeling and policy frameworks.",
        "Primary coordination channels with administrative ministers.",
      ],
      layoutClass: "lg:col-span-2",
    },
    {
      title: "Regulatory & Tender Support",
      description: "Secure necessary regulatory approvals, including environmental clearances from the DOE. Facilitate tax exemptions and Bangladesh Bank approvals. Provide advisory support during proposal review and documentation.",
      icon: <FileSignature className="w-5 h-5" />,
      bullets: [
        "Environmental Clearance processing with the Department of Environment.",
        "Custom tax and fiscal exemption clearances tailored for FDI.",
        "Bespoke documentation reviews for complex public tenders.",
      ],
      layoutClass: "lg:col-span-1",
    },
    {
      title: "Project & Supply Chain Management",
      description: "Act as the in-country interface throughout project execution. Arrange transportation and customs clearance for project equipment arriving via Chittagong Port. Identify and engage qualified local contractors and suppliers.",
      icon: <Layers className="w-5 h-5" />,
      bullets: [
        "End-to-end custom clearance through major gateways (Chittagong, Mongla).",
        "Engaging verified local specialized contractors and supply networks.",
        "Heavy-load inland logistics modeling and real-time site support.",
      ],
      layoutClass: "lg:col-span-1",
    },
    {
      title: "Operational & Protocol Support",
      description: "Manage employment visa applications, extensions, and renewals. Process work permits and security clearances. Provide qualified Bangladeshi engineers and subject-matter specialists to support project scope.",
      icon: <ShieldCheck className="w-5 h-5" />,
      bullets: [
        "Expatriate visa renewals, extensions, and work permit coordination.",
        "Provisioning of premium-tier electrical, structural, and mechanical engineers.",
        "Comprehensive site protocol structures and necessary security clearances.",
      ],
      layoutClass: "lg:col-span-2",
    },
  ];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-28 px-6 md:px-8 bg-[#04060f] relative overflow-hidden"
    >
      {/* Deluxe Tech Visual Divider / Demarcation Line */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800/80 to-transparent" />
        <div className="absolute flex items-center gap-2 px-4 py-1.5 bg-slate-950 border border-slate-800/80 rounded-full text-[9px] font-mono tracking-[0.25em] text-slate-500 uppercase translate-y-[13px]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          Partnership Scope
        </div>
      </div>

      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-950/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-rose-950/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Dynamic Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-900/30 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              In-Country Representation
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none uppercase">
            In-Country Partnership <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500">
              & Advisory Services
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
            Providing international conglomerates, global investors, and technology partners with comprehensive administrative scaffolding, high-level policy advocacy, and seamless heavy-industry execution channels within Bangladesh.
          </p>
        </div>

        {/* Bento Box Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, index) => (
            <BentoCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              bullets={service.bullets}
              icon={service.icon}
              className={service.layoutClass}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
