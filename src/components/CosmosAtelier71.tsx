import React from "react";
import { 
  ArrowLeft, 
  Palette, 
  Award, 
  CheckCircle, 
  Layers, 
  Users, 
  Sparkles,
  BookOpen,
  Compass
} from "lucide-react";

interface CosmosAtelier71Props {
  onBackToHome: () => void;
}

export default function CosmosAtelier71({ onBackToHome }: CosmosAtelier71Props) {
  const artPillars = [
    {
      title: "Fine Art Printmaking",
      icon: Layers,
      desc: "Promoting specialized print methods (etching, lithography, woodcut, and silk-screen printing) as an expressive high-art discipline."
    },
    {
      title: "Artist Residencies & Exchanges",
      icon: Users,
      desc: "Providing cross-border artistic residencies, bridging visual artists from South Asia, Europe, and the Americas for mutual growth."
    },
    {
      title: "Workshops & Masterclasses",
      icon: Sparkles,
      desc: "Hosting intensive masterclasses led by esteemed local masters and international printmaking icons to educate young contemporary talents."
    }
  ];

  return (
    <div id="atelier-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-atelier"
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
              <Palette className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Fine Arts Division — Estd. 2009
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Cosmos Atelier 71
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                Printmaking Studio, Art Incubation & Cultural Exchange
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              Bangladesh's premiere private printmaking studio, serving as a creative incubator for visual artists. We organize workshops, publish premium art portfolios, host esteemed local and international resident artists, and foster cultural diplomacy.
            </p>
          </div>
        </div>

        {/* Dynamic Focus Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Creative Incubation
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Atelier Creative Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {artPillars.map((pillar, idx) => {
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

        {/* Global Impact Block */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              Artistic Diplomacy
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Atelier Impact Numbers
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              Through collaborative print projects and curated group galleries, Cosmos Atelier 71 bridges the local creative community with global fine arts corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                200+ Artists
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Supported Creators
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Providing specialized studio resources, presses, and acid-rooms for diverse printmaking artists.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                50+ Portfolios
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Art Monographs & Prints
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Successfully published premium limited-edition print portfolios of national masters.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Global Showcases
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                International Exhibitions
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Organizing diplomatic visual exchanges in tandem with embassies and international centers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
