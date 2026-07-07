import React, { useState, useEffect } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  X, 
  Shield, 
  FileText, 
  Briefcase, 
  Globe, 
  BarChart3, 
  Compass,
  Building,
  HelpCircle,
  FileCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CosmosLogo from "./CosmosLogo";

type DocType = "privacy" | "terms" | "careers" | "news" | "investor" | "disclaimer" | "audit";

interface FooterProps {
  onCareersClick?: () => void;
  onCsrClick?: () => void;
  onPoliciesClick?: () => void;
}

export default function Footer({ onCareersClick, onCsrClick, onPoliciesClick }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeDoc, setActiveDoc] = useState<DocType | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  // Keyboard navigation for closing modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDoc(null);
      }
    };
    if (activeDoc) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDoc]);

  const docMetadata = {
    privacy: {
      title: "Privacy Charter & Data Governance",
      subtitle: "Directive #2026-PC-09",
      icon: Shield,
      content: (
        <div className="space-y-6 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            The <strong className="text-white font-semibold">Cosmos Group Privacy Charter</strong> defines our strict data security guidelines, covering physical, technological, and procedural protocols for safeguarding proprietary data.
          </p>
          <div className="border-l-2 border-red-600 pl-4 space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">1. High-Stakes Integrity</h5>
            <p className="text-slate-400">
              Cosmos Group enforces AES-256-GCM encryption on all public communication dispatcher terminals and corporate database structures. We never monetize or trade corporate data vectors.
            </p>
          </div>
          <div className="border-l-2 border-red-600 pl-4 space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">2. Regulatory Compliance</h5>
            <p className="text-slate-400">
              Our framework complies with the Information and Communication Technology Act of Bangladesh and follows international ISO/IEC 27001 parameters to preserve secure digital transactions.
            </p>
          </div>
          <div className="border-l-2 border-red-600 pl-4 space-y-2">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider">3. Third-Party Restrictions</h5>
            <p className="text-slate-400">
              No metadata, personnel telemetry, or trade volume documentation is shared with external vendors without verified administrative warrants or direct corporate delegation.
            </p>
          </div>
        </div>
      )
    },
    terms: {
      title: "Terms of Corporate Service",
      subtitle: "Framework Contract #72-B",
      icon: FileText,
      content: (
        <div className="space-y-6 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            These <strong className="text-white font-semibold">Terms of Corporate Service</strong> outline the mandatory operational framework governing industrial partnerships, joint tenders, and technical integrations with Cosmos Group.
          </p>
          <div className="space-y-4">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono text-red-500 block uppercase mb-1">§ 1. Jurisdiction</span>
              <p className="text-slate-400 text-xs">All joint ventures, procurement channels, and trade tenders are subject to the exclusive jurisdiction of the judicial courts of Dhaka, People's Republic of Bangladesh.</p>
            </div>
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono text-red-500 block uppercase mb-1">§ 2. Compliance and Anti-Bribery</span>
              <p className="text-slate-400 text-xs">Parties agree to uphold absolute transparency, strict anti-corruption measures, and zero-tolerance compliance protocols throughout all execution lifecycles.</p>
            </div>
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono text-red-500 block uppercase mb-1">§ 3. Intellectual Protection</span>
              <p className="text-slate-400 text-xs">Proprietary blueprints, software structures, shipping network data, and geological surveys remain the sole protected property of Cosmos Group and its direct affiliates.</p>
            </div>
          </div>
        </div>
      )
    },
    careers: {
      title: "Careers & Leadership Opportunities",
      subtitle: "Vanguard Recruitment Programme",
      icon: Briefcase,
      content: (
        <div className="space-y-6 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            Join one of Bangladesh’s most influential conglomerates. At <strong className="text-white font-semibold">Cosmos Group</strong>, we build resilient infrastructure, drive energy transitions, and pioneer advanced technologies.
          </p>
          <div className="space-y-4">
            <h5 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              Active Strategic Openings
            </h5>
            
            {/* Job 1 */}
            <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-white text-xs uppercase">Lead Operations Engineer (Solar integrations)</span>
                <span className="text-[9px] bg-red-950 text-red-400 px-2 py-0.5 rounded border border-red-900/30 uppercase font-mono">Energy</span>
              </div>
              <p className="text-slate-400 text-xs mb-3 font-light">Overseeing high-yield utility-scale wind and solar grid integration pipelines in Chittagong division.</p>
              <span className="text-[10px] text-slate-500 font-mono block">Required: 6+ Years Exp - B.Sc. in Electrical Engineering</span>
            </div>

            {/* Job 2 */}
            <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-white text-xs uppercase">Senior Network Infrastructure Architect</span>
                <span className="text-[9px] bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-900/30 uppercase font-mono">Technologies</span>
              </div>
              <p className="text-slate-400 text-xs mb-3 font-light">Designing secure government network layers, custom enterprise databases, and secure communication software.</p>
              <span className="text-[10px] text-slate-500 font-mono block">Required: 5+ Years Exp - Deep understanding of cybersecurity</span>
            </div>

            {/* Job 3 */}
            <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-white text-xs uppercase">Admiralty & Maritime Counsel</span>
                <span className="text-[9px] bg-amber-950 text-amber-400 px-2 py-0.5 rounded border border-amber-900/30 uppercase font-mono">Shipping</span>
              </div>
              <p className="text-slate-400 text-xs mb-3 font-light">Managing regulatory maritime compliance, automated customs, and deep-sea route legal logistics.</p>
              <span className="text-[10px] text-slate-500 font-mono block">Required: LL.B / LL.M - Expertise in international maritime codes</span>
            </div>
          </div>
          <div className="p-4 bg-red-950/20 border border-red-900/30 rounded-xl text-center space-y-2">
            <p className="text-xs text-slate-300">To apply, please transmit your comprehensive CV and strategic thesis paper to:</p>
            <a href="mailto:careers@cosmosgroup.com.bd" className="font-mono text-red-400 hover:text-red-300 font-bold hover:underline text-xs md:text-sm">
              careers@cosmosgroup.com.bd
            </a>
          </div>
        </div>
      )
    },
    news: {
      title: "Newsroom & Press Releases",
      subtitle: "Official Global Communications Desk",
      icon: Globe,
      content: (
        <div className="space-y-6 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            Keep up to date with the latest strategic moves, operational expansions, and institutional partnerships directly from the <strong className="text-white font-semibold">Cosmos Communications Desk</strong>.
          </p>
          <div className="space-y-6">
            <article className="border-b border-slate-800/60 pb-4">
              <span className="text-[10px] font-mono text-slate-500 block">JULY 2026 - LOGISTICS UPDATE</span>
              <h6 className="font-bold text-white text-sm uppercase tracking-tight mt-1 mb-2 hover:text-red-400 transition-colors">
                Successful Expansion of Deep-Sea Shipping Fleets for Q3
              </h6>
              <p className="text-slate-400 text-xs font-light">
                Cosmos Group’s maritime division has confirmed the integration of four state-of-the-art bulk carrier vessels, optimizing deep-sea cargo pathways across Asia-Pacific corridors and streamlining customs brokering.
              </p>
            </article>

            <article className="border-b border-slate-800/60 pb-4">
              <span className="text-[10px] font-mono text-slate-500 block">JUNE 2026 - RENEWABLES LAUNCH</span>
              <h6 className="font-bold text-white text-sm uppercase tracking-tight mt-1 mb-2 hover:text-red-400 transition-colors">
                Cosmos Energy Launches Landmark Utility-Scale Solar Integration
              </h6>
              <p className="text-slate-400 text-xs font-light">
                Deploying high-yield solar integrations and cutting-edge wind trackers, Cosmos Energy is feeding an additional 150MW capacity into the regional power grid, advancing the nation’s decarbonization index.
              </p>
            </article>

            <article className="pb-4">
              <span className="text-[10px] font-mono text-slate-500 block">MAY 2026 - CORPORATE HONORS</span>
              <h6 className="font-bold text-white text-sm uppercase tracking-tight mt-1 mb-2 hover:text-red-400 transition-colors">
                Cosmos Group Recognized for Regional Industrial Excellence
              </h6>
              <p className="text-slate-400 text-xs font-light">
                The Board is pleased to announce our formal recognition at the Regional Industrial Assembly for visionary leadership, unwavering code of compliance, and impactful corporate social responsibility programs.
              </p>
            </article>
          </div>
        </div>
      )
    },
    investor: {
      title: "Investor Relations & Equity metrics",
      subtitle: "Fiscal Advisory - ESG Standards",
      icon: BarChart3,
      content: (
        <div className="space-y-6 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            With excellent fiscal health, five decades of robust growth, and institutional stability, <strong className="text-white font-semibold">Cosmos Group</strong> is a trusted anchor for international and local capital.
          </p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
              <span className="block text-xl md:text-2xl font-black text-red-500">50+ Years</span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mt-1">Industrial Legacy</span>
            </div>
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-center">
              <span className="block text-xl md:text-2xl font-black text-white">100%</span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest block mt-1">Regulatory Compliance</span>
            </div>
          </div>
          <div className="space-y-3">
            <h6 className="font-bold text-white text-xs uppercase tracking-wider">Strategic Capital Directives</h6>
            <p className="text-slate-400 text-xs font-light">
              We allocate over 35% of capital expenditure specifically to clean energy pipelines and high-yield technology systems, ensuring long-term ESG stability and highly resilient risk structures.
            </p>
            <p className="text-slate-400 text-xs font-light">
              Our Next Annual General Meeting is officially scheduled for <strong className="text-white">August 2026</strong>. Shareholders will receive digital bulletins and proxy documentation directly.
            </p>
          </div>
          <div className="bg-red-950/20 p-4 rounded-xl border border-red-900/30">
            <p className="text-xs text-center text-slate-300">
              For immediate corporate inquiries, active equity prospectus requests, and administrative audits, please consult our secure:
            </p>
            <div className="text-center mt-3">
              <a 
                href="#news-ticker"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveDoc(null);
                  setTimeout(() => {
                    const el = document.getElementById("news-ticker");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }} 
                className="inline-block bg-red-700 hover:bg-red-600 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Go to Corporate Updates
              </a>
            </div>
          </div>
        </div>
      )
    },
    disclaimer: {
      title: "Security and Compliance Disclaimers",
      subtitle: "Regulatory Framework DISC-99",
      icon: Compass,
      content: (
        <div className="space-y-6 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            The <strong className="text-white font-semibold">Security and Compliance Disclaimer</strong> applies to all communication networks, data transmissions, and operations conducted by Cosmos Group.
          </p>
          <div className="space-y-4 text-slate-400 text-xs">
            <p>
              <strong>1. Operational Integrity:</strong> All activities, tenders, and geological data structures are compiled with extreme professional diligence. However, direct feasibility studies must be signed independently for each sector project.
            </p>
            <p>
              <strong>2. Environmental Clearance:</strong> Real-time environmental metrics are subject to Department of Environment (DOE) local monitoring parameters, which are updated periodically on site.
            </p>
            <p>
              <strong>3. Third-party representation:</strong> Affiliates and specialized contractors bear direct responsibility to comply with the statutory policies outlined in the Cosmos Code of Governance.
            </p>
          </div>
        </div>
      )
    },
    audit: {
      title: "Regulatory Audit Dispatches",
      subtitle: "Fiscal Year 2025/2026",
      icon: FileCheck,
      content: (
        <div className="space-y-6 text-slate-300 text-xs md:text-sm leading-relaxed font-light">
          <p>
            Cosmos Group publishes annual <strong className="text-white font-semibold">Regulatory Audit Dispatches</strong>, certifying full conformance with regional financial protocols, environmental clearance directives, and labor statutes.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono text-emerald-400 block uppercase mb-1">Status: Fully Verified</span>
              <p className="text-slate-300 text-xs font-bold">Wages & Fair Labor Audit</p>
              <p className="text-slate-400 text-xs font-light mt-1">Confirmed 100% compliance with standard national living wages, equal opportunities payroll audits, and strict zero-tolerance of child labor.</p>
            </div>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
              <span className="text-[10px] font-mono text-emerald-400 block uppercase mb-1">Status: Confirmed</span>
              <p className="text-slate-300 text-xs font-bold">Environmental Impact Index</p>
              <p className="text-slate-400 text-xs font-light mt-1">Our carbon footprint reduction vectors and pollution prevention methodologies in Cosmos Energy were validated as clean by local regulatory authorities.</p>
            </div>
          </div>
        </div>
      )
    }
  };

  const openDocModal = (type: DocType) => {
    setActiveDoc(type);
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-8 px-6 border-t border-slate-900 relative z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
        {/* Contact info column */}
        <div data-purpose="footer-col-1">
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8 border-b border-slate-800 pb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
            Contact Info
          </h4>
          <ul className="space-y-4 text-xs md:text-sm text-slate-400">
            <li className="flex items-start gap-3 leading-relaxed">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
              <span>Cosmos Centre, 69/1, New Circular Road, Malibagh, Dhaka-1217, Bangladesh</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-red-500 shrink-0" aria-hidden="true" />
              <a
                href="tel:+880241030442"
                className="hover:text-red-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1"
              >
                +8802 41030442
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-red-500 shrink-0" aria-hidden="true" />
              <a
                href="mailto:cosmos@cosmosgroup.com.bd"
                className="hover:text-red-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1"
              >
                cosmos@cosmosgroup.com.bd
              </a>
            </li>
          </ul>
        </div>

        {/* Corporate Summary column */}
        <div data-purpose="footer-col-2">
          <div className="mb-6 md:mb-8 border-b border-slate-800 pb-2 flex items-center">
            <CosmosLogo size={32} showText={true} />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            A pioneering Bangladeshi multi-sector conglomerate engineered specifically for the transition towards renewable energy structures, defense systems support, and international high technology pipelines.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-700 hover:border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              aria-label="Follow Cosmos Group on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-700 hover:border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              aria-label="Follow Cosmos Group on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-700 hover:border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
              aria-label="Follow Cosmos Group on Linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Corporate Resources Column */}
        <div data-purpose="footer-col-3">
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8 border-b border-slate-800 pb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
            Governance Hub
          </h4>
          <ul className="space-y-3 text-xs text-slate-400">
            <li>
              <button
                onClick={() => openDocModal("privacy")}
                className="hover:text-red-400 transition-colors focus-visible:outline-none text-left cursor-pointer font-light"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => openDocModal("terms")}
                className="hover:text-red-400 transition-colors focus-visible:outline-none text-left cursor-pointer font-light"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  if (onCareersClick) {
                    onCareersClick();
                  } else {
                    openDocModal("careers");
                  }
                }}
                className="hover:text-red-400 transition-colors focus-visible:outline-none text-left cursor-pointer font-light flex items-center gap-2"
              >
                <span>Careers / Jobs</span>
                <span className="text-[8px] bg-red-950 border border-red-900/30 text-red-400 px-1.5 py-0.2 rounded font-mono font-bold uppercase">Open</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onCsrClick && onCsrClick()}
                disabled={!onCsrClick}
                className={`hover:text-red-400 transition-colors focus-visible:outline-none text-left font-light flex items-center gap-2 ${onCsrClick ? "cursor-pointer" : "cursor-default opacity-70"}`}
              >
                <span>CSR &amp; Responsibility</span>
                <span className="text-[8px] bg-amber-950 border border-amber-900/30 text-amber-400 px-1.5 py-0.2 rounded font-mono font-bold uppercase">Hub</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => openDocModal("news")}
                className="hover:text-red-400 transition-colors focus-visible:outline-none text-left cursor-pointer font-light"
              >
                News & Press
              </button>
            </li>
            <li>
              <button
                onClick={() => openDocModal("investor")}
                className="hover:text-red-400 transition-colors focus-visible:outline-none text-left cursor-pointer font-light"
              >
                Investor Relations
              </button>
            </li>
            <li>
              <button
                onClick={() => onPoliciesClick && onPoliciesClick()}
                disabled={!onPoliciesClick}
                className={`hover:text-red-400 transition-colors focus-visible:outline-none text-left font-light flex items-center gap-2 ${onPoliciesClick ? "cursor-pointer" : "cursor-default opacity-70"}`}
              >
                <span>Governance & Policies</span>
                <span className="text-[8px] bg-slate-800 border border-slate-700/30 text-slate-400 px-1.5 py-0.2 rounded font-mono font-bold uppercase">Hub</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Press / Media column */}
        <div data-purpose="footer-col-4">
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8 border-b border-slate-800 pb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
            Latest Releases
          </h4>
          <ul className="space-y-3.5 text-xs text-slate-400">
            <li>
              <button
                onClick={() => openDocModal("news")}
                className="hover:text-red-400 text-left block transition-colors leading-snug font-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1"
              >
                Cosmos Energy expands solar integrations in Chittagong division
              </button>
            </li>
            <li>
              <button
                onClick={() => openDocModal("disclaimer")}
                className="hover:text-red-400 text-left block transition-colors leading-snug font-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1"
              >
                National Security forum signs supply-chain trust pact
              </button>
            </li>
          </ul>
        </div>

        {/* Dynamic Newsletter signup column */}
        <div data-purpose="footer-col-5">
          <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-6 md:mb-8 border-b border-slate-800 pb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
            Circulars & reports
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed font-light mb-4">
            Subscribe to our weekly corporate bulletins, investor briefings, and ESG compliance reports.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="investor@domain.com"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-4 pr-12 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                aria-label="Email address for corporate newsletters"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-red-700 hover:bg-red-600 transition-colors rounded-lg flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1.5 mt-2 animate-fade-in">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Subscription successful!</span>
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-xs">
        <p>Copyright © {new Date().getFullYear()} Cosmos Group of Bangladesh. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center sm:justify-end">
          <a href="#" onClick={(e) => { e.preventDefault(); onPoliciesClick && onPoliciesClick(); }} className={`hover:text-slate-300 transition-colors ${onPoliciesClick ? 'cursor-pointer' : 'cursor-default opacity-70'}`}>Governance & Policies</a>
          <button
            onClick={() => onCsrClick && onCsrClick()}
            disabled={!onCsrClick}
            className={`hover:text-slate-300 transition-colors ${onCsrClick ? "cursor-pointer" : "cursor-default opacity-70"}`}
          >
            CSR &amp; Responsibility
          </button>
          <button onClick={() => openDocModal("privacy")} className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Charter</button>
          <button onClick={() => openDocModal("disclaimer")} className="hover:text-slate-300 transition-colors cursor-pointer">Security Disclaimers</button>
          <button onClick={() => openDocModal("audit")} className="hover:text-slate-300 transition-colors cursor-pointer">Audit Dispatches</button>
        </div>
      </div>

      {/* Document Portal Modal */}
      <AnimatePresence>
        {activeDoc && (
          <div 
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="doc-title"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative text-white"
            >
              {/* Close Button on Top Right (Mobile/Global) */}
              <button
                onClick={() => setActiveDoc(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-950/60 p-2 rounded-full border border-slate-800 hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all z-20"
                aria-label="Close document modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Document Tab Selector */}
              <div className="bg-slate-950/60 p-6 md:w-72 shrink-0 border-b md:border-b-0 md:border-r border-slate-800/60 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.25em] text-red-500 block uppercase font-bold">Cosmos Group</span>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mt-1">Corporate Directives</h3>
                  </div>

                  <nav className="space-y-1">
                    {(Object.keys(docMetadata) as DocType[]).map((key) => {
                      const isActive = activeDoc === key;
                      const IconComponent = docMetadata[key].icon;
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveDoc(key)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-xs transition-all cursor-pointer ${
                            isActive 
                              ? "bg-red-700/10 border border-red-500/20 text-red-400 font-bold" 
                              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent"
                          }`}
                        >
                          <IconComponent className={`w-4 h-4 shrink-0 ${isActive ? 'text-red-500' : 'text-slate-500'}`} />
                          <span className="capitalize">{key === "disclaimer" ? "Disclaimers" : key === "audit" ? "Audit Log" : key}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                <div className="hidden md:block pt-6 border-t border-slate-800/50 text-[10px] font-mono text-slate-500">
                  <span>CORPORATE PORTAL</span>
                  <span className="block mt-1">DHAKA, BANGLADESH</span>
                </div>
              </div>

              {/* Right Side: Document Content Reader */}
              <div className="flex-1 p-6 md:p-10 overflow-y-auto flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Active Doc Header */}
                  <div className="border-b border-slate-800 pb-4">
                    <span className="text-[10px] font-mono text-slate-500 block uppercase tracking-widest">{docMetadata[activeDoc].subtitle}</span>
                    <h4 id="doc-title" className="text-xl md:text-2xl font-bold font-display text-white mt-1 uppercase">
                      {docMetadata[activeDoc].title}
                    </h4>
                  </div>

                  {/* Active Doc Content */}
                  <div className="py-2">
                    {docMetadata[activeDoc].content}
                  </div>
                </div>

                {/* Footer close option */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Secure Document Session
                  </span>
                  <button
                    onClick={() => setActiveDoc(null)}
                    className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
                  >
                    Dismiss Viewer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
