import React from "react";
import { 
  ArrowLeft, 
  Gem, 
  Sparkles, 
  Award, 
  CheckCircle, 
  Layers, 
  Heart,
  Palette,
  Anchor
} from "lucide-react";

interface PearlsParadiseProps {
  onBackToHome: () => void;
}

export default function PearlsParadise({ onBackToHome }: PearlsParadiseProps) {
  const pearlCollections = [
    {
      title: "Cultured South Sea Pearls",
      icon: Anchor,
      desc: "Lustrous, organic South Sea and golden pearls sourced directly from sustainable marine oyster farms in Tahiti, Myanmar, and Australia."
    },
    {
      title: "Certified Diamonds & Gems",
      icon: Gem,
      desc: "Ethically-sourced, conflict-free diamonds and exotic colored gemstones. Hand-selected for exceptional cut, color, clarity, and carat."
    },
    {
      title: "Bespoke Artisanal Design",
      icon: Palette,
      desc: "Our resident designers and master goldsmiths craft one-of-a-kind high jewelry heirlooms tailored to your aesthetic criteria."
    }
  ];

  return (
    <div id="pearls-portal-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button-pearls"
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
              <Gem className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
                Luxury Division — Estd. 1999
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3.5xl md:text-5.5xl font-black font-display tracking-tight text-white uppercase leading-none">
                Pearls Paradise
              </h1>
              <p className="text-red-400 font-mono font-bold text-xs md:text-sm uppercase tracking-widest">
                Exquisite Cultured Pearls, Diamonds & Fine Art Jewelry
              </p>
            </div>

            <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl">
              As Bangladesh's premiere high-jewelry house, Pearls Paradise brings the finest pearls, flawless diamonds, and brilliant gemstones to discerning connoisseurs, combining artisanal heritage with timeless modern elegance.
            </p>
          </div>
        </div>

        {/* Dynamic Focus Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block px-1">
              Bespoke Luxury
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Elite Collections & Design
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pearlCollections.map((col, idx) => {
              const IconComp = col.icon;
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
                      {col.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                      {col.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Authenticity Block */}
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
              Certified Authority
            </span>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 uppercase tracking-tight">
              Uncompromising Standards
            </h2>
            <p className="text-slate-500 text-sm md:text-base font-light">
              Every Pearl, Diamond, or Gemstone in our treasury is accompanied by strict certifications of authenticity, quality, and origin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                GIA Standards
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Gemological Certified
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Diamonds appraised and graded according to strict Gemological Institute of America metrics.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                100% Genuine
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                South Sea Origin
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Guaranteed saltwater pearls with exceptional nacre depth, luster, and perfect sphericity.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <span className="block text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Handcrafted
              </span>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono mt-1">
                Bespoke Heirlooms
              </span>
              <p className="text-xs text-slate-500 font-light mt-2">
                Constructed meticulously by multi-generational artisanal goldsmiths in fine 18K and 22K gold.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
