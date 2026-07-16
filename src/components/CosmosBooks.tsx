import React from "react";
import { ArrowLeft, ExternalLink, Library, Globe, Bookmark, Feather } from "lucide-react";
import { motion } from "motion/react";
import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface CosmosBooksProps {
  onBackToHome: () => void;
}

export default function CosmosBooks({ onBackToHome }: CosmosBooksProps) {
  const books = [
    {
      id: "the-little-prince",
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      translatedBy: "Haider A. Khan",
      price: "৳500.00",
      description: "Antoine de Saint-Exupéry wrote the classic The Little Prince in 1943. Reading it even today, we are struck by the uncanny ability of the author to enter completely the imaginative universe of a child’s mind. The current translation also highlights from a postcolonial perspective his implicit and complex engagement with the colonial world.",
      image: "/images/cosmos-books/the-little-prince.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=129",
      accent: "from-amber-600 to-yellow-500",
      bgAccent: "bg-amber-50 border-amber-200"
    },
    {
      id: "art-against-genocide",
      title: "Art Against Genocide",
      author: "Various Artists",
      price: "৳5,250.00",
      description: "Cosmos Books has earned the distinction of bringing out the first publication on the Rohingya crisis, documenting the ordeal and artistic protests. Published in association with Cosmos Foundation, it features 30 artworks in various mediums derived from Gallery Cosmos and Cox's Bazar Art Club, alongside expert analysis.",
      image: "/images/cosmos-books/art-against-genocide.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=125",
      accent: "from-red-700 to-red-500",
      bgAccent: "bg-red-50 border-red-200"
    },
    {
      id: "sundarbans",
      title: "The Bangladesh Sundarbans",
      author: "Enayetullah Khan",
      price: "Available",
      description: "This book unfolds the story of the biggest mangrove forest in the world, delving into its unique flora and fauna. It gives readers an intimate glimpse into the lifestyle, beliefs, social mores, legendary myths, and the mysterious bond that links the inhabitants with the profound solitude of the forest.",
      image: "/images/cosmos-books/sundarbans.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=120",
      accent: "from-emerald-700 to-green-500",
      bgAccent: "bg-emerald-50 border-emerald-200"
    },
    {
      id: "bangabandhu",
      title: "Bangabandhu – Epitome of A Nation",
      author: "Cosmos Books",
      price: "৳2,500.00",
      description: "A comprehensive publication honoring the life and legacy of Bangabandhu Sheikh Mujibur Rahman, detailing his monumental role in the creation of Bangladesh.",
      image: "/images/cosmos-books/bangabandhu.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=126",
      accent: "from-blue-700 to-blue-500",
      bgAccent: "bg-blue-50 border-blue-200"
    },
    {
      id: "symphony-earth",
      title: "Symphony Of The Earth",
      author: "Enayetullah Khan",
      price: "৳4,000.00",
      description: "A captivating exploration of the earth's natural beauty, weaving together stunning visuals and insightful commentary to celebrate the wonders of our planet.",
      image: "/images/cosmos-books/symphony-earth.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=119",
      accent: "from-indigo-700 to-indigo-500",
      bgAccent: "bg-indigo-50 border-indigo-200"
    },
    {
      id: "ballads-paintings",
      title: "Ballads And Paintings: SHAKOOR",
      author: "Cosmos Books",
      price: "৳1,000.00",
      description: "A brilliant collection of artworks and ballads by Shakoor, reflecting the vibrant cultural heritage and artistic expression of Bangladesh.",
      image: "/images/cosmos-books/shakoor.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=127",
      accent: "from-purple-700 to-purple-500",
      bgAccent: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <div id="cosmos-books-page" className="pt-24 pb-20 bg-[#Fdfbf7] min-h-screen text-slate-800 font-sans selection:bg-red-200">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <DivisionBrandBanner name="Cosmos Books" logo="/logos/Cosmos Logo-01.png" descriptor="Publishing & Literature" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-2xl border border-slate-800">
          <div className="absolute inset-0">
            <img
              src="/images/cosmos-books/Bangladesh - Splendors of the past.jpeg"
              alt="Cosmos Books — Bangladesh Splendors of the Past"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
          </div>

          <div className="relative z-10 p-8 md:p-16 lg:p-20 max-w-4xl space-y-8 mt-24 md:mt-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"
            >
              <Library className="w-3.5 h-3.5 text-red-400" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-300 uppercase">
                Knowledge & Culture
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white leading-[1.1]">
                Publishing Meaningful Titles for a Broad Readership.
              </h1>
              <p className="text-slate-300 font-light text-base md:text-lg max-w-2xl leading-relaxed">
                Cosmos Books curates and publishes impactful literary works spanning culture, policy, contemporary thought, and the arts, fostering a deeper understanding of Bangladesh and the world.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Featured Books Section */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest block">
                Curated Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Featured Publications
              </h2>
            </div>
            <a 
              href="https://cosmosbooks.com.bd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 transition-colors group"
            >
              Visit Full Store
              <ArrowLeft className="w-4 h-4 rotate-135 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <GlowCard
                theme="light"
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500`}
              >
                {/* Book Cover Area */}
                <div className={`relative h-72 w-full flex items-center justify-center p-8 bg-slate-100 overflow-hidden`}>
                  {/* Decorative background blur */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${book.accent} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {book.isPlaceholder ? (
                    <div className="relative z-10 w-44 h-60 bg-slate-800 rounded shadow-2xl flex flex-col items-center justify-center p-6 text-center border-l-4 border-slate-600 group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
                      <Feather className="w-8 h-8 text-slate-400 mb-4 opacity-50" />
                      <h3 className="text-white font-serif font-bold text-lg leading-tight mb-2 z-10">{book.title}</h3>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wider z-10">{book.author}</p>
                    </div>
                  ) : (
                    <div className="relative z-10 h-full w-full flex justify-center items-center group-hover:-translate-y-2 transition-transform duration-500">
                      <img 
                        src={book.image} 
                        alt={book.title} 
                        className="h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow p-8 space-y-6">
                  <div className="space-y-3 flex-grow">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">
                        {book.title}
                      </h3>
                      <span className="shrink-0 text-sm font-mono font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {book.price}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-700">
                        By {book.author}
                      </p>
                      {book.translatedBy && (
                        <p className="text-xs text-slate-500">
                          Translated by {book.translatedBy}
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                      {book.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-slate-900 text-white text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-red-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                    >
                      <Bookmark className="w-4 h-4" />
                      View on Store
                    </a>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <GlowCard theme="light" className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -left-12 -bottom-12 opacity-10">
            <Globe className="w-48 h-48 text-red-600" />
          </div>
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
              Discover More at Cosmos Books
            </h3>
            <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
              Explore our extensive collection of publications covering arts, culture, history, and contemporary affairs. Join our community of readers.
            </p>
            <div className="pt-4">
              <a 
                href="https://cosmosbooks.com.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 transition-all text-sm"
              >
                Browse Full Catalog
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </GlowCard>

      </div>

      {/* Corporate Brochure Download */}
      <div className="mt-12 md:mt-16">
        <CompanyBrochureCTA companyId="books" />
      </div>
    </div>
  );
}
