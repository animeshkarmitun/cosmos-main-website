import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Award, Building2, Calendar, Expand, X, FileBadge2 } from "lucide-react";

interface CertificationsPageProps {
  onBackToHome: () => void;
}

interface Credential {
  id: string;
  title: string;
  issuer: string;
  date: string;
  project: string;
  scope: string;
  recipient: string;
  image: string;
  type: string;
}

const credentials: Credential[] = [
  {
    id: "bhel-2019",
    title: "Letter of Appreciation",
    issuer: "Bharat Heavy Electricals Limited (BHEL)",
    date: "September 2019",
    project: "Maitree 1320 MW Super Thermal Coal Project, Rampal",
    scope: "Catering & Transportation Services",
    recipient: "Cosmos Energy Services (Pvt.) Ltd.",
    image: "/images/certifications/image-1.jpeg",
    type: "Client Recognition",
  },
  {
    id: "lt-2021",
    title: "Satisfactory Work Completion Certificate",
    issuer: "Larsen & Toubro Limited",
    date: "July 2021",
    project: "Bangladesh Gas-Based Power Projects",
    scope: "Visa & Work Permit Services",
    recipient: "Cosmos Energy Services (Pvt.) Ltd.",
    image: "/images/certifications/image-2.jpeg",
    type: "Work Completion",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function CertificationsPage({ onBackToHome }: CertificationsPageProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeCredential = credentials.find((item) => item.id === activeId) ?? null;

  useEffect(() => {
    if (!activeId) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeId]);

  return (
    <div className="bg-[#04060f] min-h-screen text-white">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[48vh] flex items-center overflow-hidden pt-24">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04060f] via-transparent to-[#04060f] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 left-0 w-[350px] h-[350px] bg-red-900/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full py-16 md:py-24">
          <motion.button
            onClick={onBackToHome}
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest mb-10 transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </motion.button>

          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="text-red-500 font-mono font-bold text-[10px] md:text-xs uppercase tracking-widest">
              ◆ Client Credentials
            </span>
          </motion.div>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold font-display tracking-tight uppercase mb-6"
          >
            <span className="text-white">Certifications</span>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl mb-12"
          >
            Official letters of appreciation and work completion certificates
            issued by international partners recognising Cosmos Energy Services
            for delivery excellence across major power projects in Bangladesh.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl px-5 py-4">
              <div className="w-9 h-9 rounded-xl bg-red-950/50 text-red-500 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white uppercase tracking-tight leading-none">
                  {credentials.length} Credentials
                </span>
                <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Verified Documents
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] rounded-2xl px-5 py-4">
              <div className="w-9 h-9 rounded-xl bg-red-950/50 text-red-500 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white uppercase tracking-tight leading-none">
                  BHEL &amp; L&amp;T
                </span>
                <span className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mt-1">
                  Global Partners
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Certificate Gallery ──────────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16 max-w-2xl"
          >
            <span className="text-red-500 font-mono font-bold text-[10px] md:text-xs uppercase tracking-widest block mb-3">
              Document Archive
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display tracking-tight uppercase text-white mb-4">
              Official Recognitions
            </h2>
            <p className="text-sm md:text-base font-light text-slate-400 leading-relaxed">
              Select a document to view the full certificate. Each letter is
              presented as issued by the client organisation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          >
            {credentials.map((credential) => (
              <motion.article
                key={credential.id}
                variants={cardVariants}
                className="group bg-white/[0.03] border border-slate-800/60 rounded-2xl overflow-hidden hover:border-red-500/30 transition-colors duration-300"
              >
                <button
                  type="button"
                  onClick={() => setActiveId(credential.id)}
                  className="w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#04060f]"
                  aria-label={`View ${credential.title} from ${credential.issuer}`}
                >
                  <div className="relative aspect-[4/3] bg-[#0B132B] overflow-hidden border-b border-slate-800/60">
                    <img
                      src={credential.image}
                      alt={`${credential.title} — ${credential.issuer}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/80 via-transparent to-transparent opacity-80 pointer-events-none" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-red-950/80 border border-red-900/40 text-red-400 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm">
                        <FileBadge2 className="w-3 h-3" />
                        {credential.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Expand className="w-3 h-3" />
                      View Full
                    </div>
                  </div>

                  <div className="p-6 md:p-8 space-y-5">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold font-display tracking-tight text-white mb-2">
                        {credential.title}
                      </h3>
                      <p className="text-sm font-light text-slate-400 leading-relaxed">
                        Issued to {credential.recipient}
                      </p>
                    </div>

                    <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <dt className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 mb-1.5 flex items-center gap-1.5">
                          <Building2 className="w-3 h-3" />
                          Issuer
                        </dt>
                        <dd className="text-slate-300 font-light leading-snug">
                          {credential.issuer}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 mb-1.5 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          Date
                        </dt>
                        <dd className="text-slate-300 font-light leading-snug">
                          {credential.date}
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 mb-1.5">
                          Project / Scope
                        </dt>
                        <dd className="text-slate-300 font-light leading-snug">
                          {credential.project}
                          <span className="text-slate-500"> · </span>
                          {credential.scope}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </button>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeCredential && (
          <div
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="credential-title"
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#0B132B] border border-slate-800/60 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 p-4 md:p-5 border-b border-slate-800/60 shrink-0">
                <div className="min-w-0">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-500 mb-1.5">
                    {activeCredential.type}
                  </p>
                  <h3
                    id="credential-title"
                    className="text-base md:text-xl font-semibold font-display text-white tracking-tight truncate"
                  >
                    {activeCredential.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 font-light mt-1 truncate">
                    {activeCredential.issuer} · {activeCredential.date}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveId(null)}
                  className="shrink-0 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-red-500/40 transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Close certificate viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto p-4 md:p-6 bg-[#04060f]/40">
                <img
                  src={activeCredential.image}
                  alt={`${activeCredential.title} — full document from ${activeCredential.issuer}`}
                  className="w-full h-auto rounded-xl border border-slate-800/60 bg-white"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
