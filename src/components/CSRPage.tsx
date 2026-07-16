import { useRef, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Heart,
  MessageSquare,
  Ban,
  Award,
  HeartHandshake,
  Quote,
  Sparkles,
  Building2,
  Globe2,
  PawPrint,
  Image as ImageIcon,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import Carousel, { type CarouselSlide } from "./Carousel";
import GlowCard from "./GlowCard";

interface CSRPageProps {
  onBackToHome: () => void;
  onNavigate: (page: string) => void;
}

const slides: CarouselSlide[] = [
  {
    src: "/images/cosmos-foundation-1.png",
    alt: "Cosmos Foundation community engagement programme in progress",
    tag: "Cosmos Foundation",
    title: "Engaging the Nation, the Region and the World",
    date: "Community Engagement",
  },
  {
    src: "/images/cosmos-dialogue-2.png",
    alt: "Cosmos Dialogue strategic conversation session",
    tag: "Cosmos Dialogue",
    title: "Strategic Conversation Series",
    date: "Policy & Discourse",
  },
  {
    src: "/images/about-us-5.jpg",
    alt: "Cosmos Group community impact initiatives",
    tag: "Community",
    title: "Supporting Communities Across Bangladesh",
    date: "Social Impact",
  },
  {
    src: "/images/wildteam.jpg",
    alt: "WildTeam wildlife conservation work in the Sundarbans",
    tag: "WildTeam",
    title: "Wildlife Conservation in the Sundarbans",
    date: "Conservation",
  },
  {
    src: "/images/about-us-3.jpg",
    alt: "Education support and scholarship recipients",
    tag: "Education",
    title: "Scholarships for the Next Generation",
    date: "Mentorship & Aid",
  },
  {
    src: "/images/about-us-1.jpeg",
    alt: "ADHUNIK anti-tobacco crusade awareness campaign",
    tag: "ADHUNIK",
    title: "Pioneering the Anti-Tobacco Movement",
    date: "Public Health",
  },
];

const educationTags = [
  "Journalism",
  "Medicine",
  "Engineering",
  "Architecture",
  "Fine Arts",
  "Law",
  "Business",
];

const stats = [
  { value: "50+", label: "Years of Giving" },
  { value: "7", label: "Disciplines Funded" },
  { value: "×2", label: "WHO Gold Medal" },
  { value: "5", label: "Trust Fund Initiatives" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

type CSRSection = {
  id: string;
  icon: typeof GraduationCap;
  iconTint: string;
  kicker: string;
  title: string;
  body: string[];
  image: string;
  imageAlt: string;
  imageRight?: boolean;
  extra?: ReactNode;
  cta?: { label: string; page: string };
};

const sections: CSRSection[] = [
  {
    id: "csr-education",
    icon: GraduationCap,
    iconTint: "bg-red-50 text-red-600 border-red-100",
    kicker: "Scholarship & Mentorship",
    title: "Education Support",
    body: [
      "Our deep-rooted commitment to supporting young talents for higher studies forms the backbone of our contribution to society — identifying, nurturing and championing the next generation of leaders across a broad range of disciplines.",
      "Through sustained scholarships and mentorship, we help students pursue world-class education and return home to shape their fields.",
    ],
    image: "/images/about-us-3.jpg",
    imageAlt: "Education support scholarship recipients",
    extra: (
      <div className="mt-6">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
          Supported Disciplines
        </span>
        <div className="flex flex-wrap gap-2">
          {educationTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-white text-slate-700 text-xs font-bold uppercase tracking-wider rounded-lg border border-slate-200 shadow-sm hover:border-red-500/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "csr-community",
    icon: Heart,
    iconTint: "bg-rose-50 text-rose-600 border-rose-100",
    kicker: "Media · Health · Charity · Arts",
    title: "Community Activities",
    body: [
      "Cosmos Group is a committed supporter of community activities spanning media, health, charitable causes and the artistic fields — believing that resilient communities are built through sustained, hands-on engagement.",
      "From public health drives to cultural festivals, we resource the people and organisations doing vital work on the ground.",
    ],
    image: "/images/about-us-4.jpeg",
    imageAlt: "Cosmos Group community activities",
    imageRight: true,
  },
  {
    id: "csr-dialogue",
    icon: MessageSquare,
    iconTint: "bg-sky-50 text-sky-600 border-sky-100",
    kicker: "Core Mission of Cosmos Foundation",
    title: "Cosmos Dialogue",
    body: [
      "Cosmos Dialogue is a conversation starter — designed to lead healthy discussions and deepen our understanding of the most pressing issues of our time, promoting a culture of constructive debate that acts as a bulwark against violence and confrontation.",
      "Using state-of-the-art facilities at Cosmos Centre and digital technology, the Dialogue bridges physical distances and takes discussion beyond Bangladesh's borders to engage regional and international partners.",
    ],
    image: "/images/about-us-2.jpg",
    imageAlt: "Cosmos Dialogue conversation session",
    extra: (
      <blockquote className="mt-6 border-l-4 border-red-600 pl-4 py-2 italic text-slate-600 font-medium bg-slate-50/70 rounded-r-xl">
        "Promoting constructive debate and tolerance as a bulwark against violence and confrontation."
      </blockquote>
    ),
    cta: { label: "Visit Cosmos Dialogue", page: "dialogue" },
  },
  {
    id: "csr-anti-tobacco",
    icon: Ban,
    iconTint: "bg-red-50 text-red-600 border-red-100",
    kicker: "ADHUNIK Crusade",
    title: "Anti-Tobacco Movement",
    body: [
      "Cosmos Group pioneered a successful anti-tobacco movement in Bangladesh through ADHUNIK — a crusade that helped reshape national public-health policy and awareness around tobacco consumption.",
      "The initiative's impact earned international recognition from the World Health Organization across two consecutive cycles.",
    ],
    image: "/images/about-us-1.jpeg",
    imageAlt: "ADHUNIK anti-tobacco campaign",
    imageRight: true,
    extra: (
      <div className="mt-6 inline-flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl">
        <div className="w-10 h-10 rounded-xl bg-yellow-400 text-red-950 flex items-center justify-center shrink-0 shadow-inner">
          <Award className="w-5 h-5" />
        </div>
        <div className="space-y-0.5">
          <span className="block text-[10px] font-mono font-bold text-red-700 uppercase tracking-widest leading-none">
            WHO Gold Medal
          </span>
          <span className="block text-sm font-bold text-slate-900 leading-none">
            1991–92 &amp; 1992–93
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "csr-trust-funds",
    icon: HeartHandshake,
    iconTint: "bg-emerald-50 text-emerald-600 border-emerald-100",
    kicker: "Asiatic Society Partnership",
    title: "Trust Fund Initiatives",
    body: [
      "Through the Asiatic Society of Bangladesh, Cosmos Group backs a portfolio of trust funds dedicated to knowledge, conservation and exploration — supporting WildTeam, the Noazesh Knowledge Centre, and the Bangla Mountaineering & Trekking Club.",
      "Each fund advances a distinct mission, from protecting the Sundarbans' biodiversity to widening the horizons of Bangladeshi scholarship and adventure.",
    ],
    image: "/images/Wild-Team-card.jpeg",
    imageAlt: "WildTeam conservation initiative",
    cta: { label: "Visit WildTeam", page: "wildteam" },
  },
];

const relatedArms = [
  {
    name: "Cosmos Foundation",
    desc: "Philanthropic arm & CSR umbrella",
    icon: Building2,
    page: "foundation",
  },
  {
    name: "Cosmos Dialogue",
    desc: "Strategic conversation series",
    icon: MessageSquare,
    page: "dialogue",
  },
  {
    name: "WildTeam",
    desc: "Wildlife conservation",
    icon: PawPrint,
    page: "wildteam",
  },
  {
    name: "Cosmos Gallery",
    desc: "Arts & curatorial research",
    icon: ImageIcon,
    page: "gallery",
  },
  {
    name: "Atelier 71",
    desc: "Pioneering printmaking studio",
    icon: Sparkles,
    page: "atelier",
  },
  {
    name: "Cosmos Books",
    desc: "Publishing & knowledge",
    icon: BookOpen,
    page: "books",
  },
];

function renderSection(section: CSRSection, onNavigate: (page: string) => void, index: number) {
  const Icon = section.icon;
  const imageFirst = section.imageRight;
  const delay = index * 4;

  return (
    <div
      key={section.id}
      id={section.id}
      className="scroll-reveal-item grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
      style={{ ["--scroll-delay" as string]: `${delay}%` }}
    >
      <div className={imageFirst ? "md:order-2" : ""}>
        <div className="relative overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-200/80 aspect-[4/3]">
          <img
            src={section.image}
            alt={section.imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className={imageFirst ? "md:order-1" : ""}>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm mb-5 ${section.iconTint}`}>
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-[10px] md:text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-2">
          {section.kicker}
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-slate-900 uppercase mb-4">
          {section.title}
        </h3>
        <div className="space-y-4">
          {section.body.map((p, i) => (
            <p key={i} className="text-sm md:text-base text-slate-600 font-light leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        {section.extra}
        {section.cta && (
          <button
            onClick={() => section.cta && onNavigate(section.cta.page)}
            className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 cursor-pointer group"
          >
            {section.cta.label}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function CSRPage({ onBackToHome, onNavigate }: CSRPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const carouselInView = useInView(carouselRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const quoteInView = useInView(quoteRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <div id="csr-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <motion.div
          ref={heroRef}
          variants={fadeUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-3xl bg-[#0B132B] text-white border border-slate-900 shadow-2xl"
        >
          <img
            src="/images/cosmos-foundation-1.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/85 to-[#0B132B]/55" />
          <div className="relative z-10 p-8 md:p-16 lg:p-20 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Corporate Social Responsibility
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight uppercase leading-none">
              Our Commitment
              <span className="block text-red-500">to Society</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              For over five decades, Cosmos Group has invested in education, community and constructive debate —
              the values that define our social contract. Through the Cosmos Foundation and a family of trust funds,
              we champion scholarship, public health, the arts, conservation and the free exchange of ideas.
            </p>
          </div>
        </motion.div>
      </div>

      {/* CAROUSEL */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <motion.div
          ref={carouselRef}
          variants={fadeUp}
          initial="hidden"
          animate={carouselInView ? "visible" : "hidden"}
        >
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-2">
                In Focus
              </span>
              <h2 className="text-2xl md:text-3xl font-black font-display tracking-tight text-slate-900 uppercase">
                Initiatives in Action
              </h2>
            </div>
          </div>
          <Carousel slides={slides} ariaLabel="CSR initiatives gallery" />
        </motion.div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <GlowCard
          theme="light"
          ref={statsRef}
          variants={fadeUp}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-black font-display text-red-600">
                {s.value}
              </div>
              <div className="mt-2 text-[10px] md:text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </GlowCard>
      </div>

      {/* SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-20 md:space-y-28 mb-16 md:mb-24">
        {sections.map((section, i) => renderSection(section, onNavigate, i))}
      </div>

      {/* FOUNDER QUOTE */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <motion.div
          ref={quoteRef}
          variants={fadeUp}
          initial="hidden"
          animate={quoteInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-3xl bg-[#0B132B] text-white p-8 md:p-16 lg:p-20 border border-slate-900 shadow-xl"
        >
          <Quote className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-24 md:h-24 text-red-600/15" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-3xl font-display font-light leading-relaxed text-slate-100">
              "A corporation's truest balance sheet is measured not in profit, but in the lives it uplifts,
              the ideas it nurtures, and the future it dares to imagine."
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="w-10 h-px bg-red-600" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-400">
                Cosmos Group Philosophy
              </span>
              <span className="w-10 h-px bg-red-600" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* PHILANTHROPIC-ARM GRID */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 md:mb-24">
        <motion.div
          ref={gridRef}
          variants={fadeUp}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-10 md:mb-12">
            <span className="text-[10px] md:text-xs font-mono font-bold text-red-600 uppercase tracking-widest block mb-2">
              Our Philanthropic Arms
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-display tracking-tight text-slate-900 uppercase">
              Explore the Family
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedArms.map((arm) => {
              const Icon = arm.icon;
              return (
                <GlowCard
                  theme="light"
                  key={arm.name}
                  className="group text-left bg-white border border-slate-200/80 hover:border-red-600/30 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 cursor-pointer"
                >
                  <button
                    onClick={() => onNavigate(arm.page)}
                    className="flex items-center gap-4 w-full h-full text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                  >
                    <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-slate-900 text-sm uppercase tracking-tight">{arm.name}</div>
                      <div className="text-xs text-slate-500 font-light mt-0.5">{arm.desc}</div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-red-600 transition-colors" />
                  </button>
                </GlowCard>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-[#0B132B] p-8 md:p-12 text-center border border-slate-800 shadow-xl">
          <Globe2 className="w-8 h-8 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-black font-display uppercase tracking-tight text-white mb-3">
            Want to Partner With Us?
          </h3>
          <p className="text-slate-400 text-sm font-light max-w-xl mx-auto mb-6">
            We welcome institutions, scholars and changemakers who share our vision for a more resilient,
            informed and compassionate Bangladesh.
          </p>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-7 py-3 bg-red-700 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 cursor-pointer"
          >
            Contact Cosmos Group
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
