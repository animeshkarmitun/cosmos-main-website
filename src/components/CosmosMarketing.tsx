import React from "react";
import { 
  ArrowLeft, 
  TrendingUp, 
  ShieldCheck, 
  Briefcase, 
  FileText, 
  Users, 
  Map, 
  Compass, 
  HelpCircle,
  Handshake
} from "lucide-react";

interface CosmosMarketingProps {
  onBackToHome: () => void;
}

export default function CosmosMarketing({ onBackToHome }: CosmosMarketingProps) {
  const marketingPillars = [
    {
      title: "Business Representation",
      icon: Handshake,
      desc: "Acting as the local partner and exclusive representative of Fortune 500 consortiums, contractors, and industrial conglomerates in Bangladesh."
    },
    {
      title: "Market Entry & Consulting",
      icon: Compass,
      desc: "Delivering detailed feasibility studies, economic mapping, regulatory gap analysis, and tailored strategies for complex market entries."
    },
    {
      title: "B2B Procurement & Tender Bid Advice",
      icon: FileText,
      desc: "Providing precise intelligence, legal framework navigation, and technical bid advisory services for mega-scale national infrastructure contracts."
    }
  ];

  return (
    <div id="marketing-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-marketing"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12">
        {/* Hero Section */}
        <div className="bg-[#0B132B] text-white rounded-3xl overflow-hidden border border-slate-900 shadow-2xl relative">
          <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/60 border border-red-900/40 rounded-full">
              <Briefcase className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Consultation Division — Estd. 1978
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Cosmos Marketing Ltd.
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                High-Level Consultation, Advisory & B2B Representation
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              We provide unparalleled local partnership, corporate representation, and advisory solutions in energy, high technology, and defense sectors, guiding global partners through successful, highly compliant entries in South Asia.
            </p>
          </div>
        </div>

        {/* Dynamic Focus Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              B2B Strategic Growth
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Marketing & Advisory Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/80 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-red-200 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Competence Metrics */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              Market Authority
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Why Partner With Cosmos Marketing
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              Our deeply rooted relationships, legal expertise, and industrial insights provide a seamless corridor to successful ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                40+ Partners
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Global Consortiums
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Representing multi-billion dollar industrial, logistics, and resource corporations.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                100% Win-Compliance
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Integrity & Governance
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Strict adherence to TRACE compliance and global anti-corruption standards.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                $2B+ Contracts
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Facilitated Projects
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Advised and supported major power plants, geological studies, and port networks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
