import React from "react";
import {
  ArrowLeft,
  ExternalLink,
  Library,
  Globe,
  Bookmark,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

import DivisionBrandBanner from "./DivisionBrandBanner";
import CompanyBrochureCTA from "./CompanyBrochureCTA";
import GlowCard from "./GlowCard";

interface CosmosBooksProps {
  onBackToHome: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function CosmosBooks({ onBackToHome }: CosmosBooksProps) {
  const books = [
    {
      id: "the-little-prince",
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      translatedBy: "Haider A. Khan",
      price: "৳500.00",
      description:
        "Antoine de Saint-Exupéry wrote the classic The Little Prince in 1943. Reading it even today, we are struck by the uncanny ability of the author to enter completely the imaginative universe of a child's mind. The current translation also highlights from a postcolonial perspective his implicit and complex engagement with the colonial world.",
      image: "/images/cosmos-books/the-little-prince.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=129",
    },
    {
      id: "art-against-genocide",
      title: "Art Against Genocide",
      author: "Various Artists",
      price: "৳5,250.00",
      description:
        "Cosmos Books has earned the distinction of bringing out the first publication on the Rohingya crisis, documenting the ordeal and artistic protests. Published in association with Cosmos Foundation, it features 30 artworks in various mediums derived from Gallery Cosmos and Cox's Bazar Art Club, alongside expert analysis.",
      image: "/images/cosmos-books/art-against-genocide.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=125",
    },
    {
      id: "sundarbans",
      title: "The Bangladesh Sundarbans",
      author: "Enayetullah Khan",
      price: "Available",
      description:
        "This book unfolds the story of the biggest mangrove forest in the world, delving into its unique flora and fauna. It gives readers an intimate glimpse into the lifestyle, beliefs, social mores, legendary myths, and the mysterious bond that links the inhabitants with the profound solitude of the forest.",
      image: "/images/cosmos-books/sundarbans.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=120",
    },
    {
      id: "bangabandhu",
      title: "Bangabandhu – Epitome of A Nation",
      author: "Cosmos Books",
      price: "৳2,500.00",
      description:
        "A comprehensive publication honoring the life and legacy of Bangabandhu Sheikh Mujibur Rahman, detailing his monumental role in the creation of Bangladesh.",
      image: "/images/cosmos-books/bangabandhu.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=126",
    },
    {
      id: "symphony-earth",
      title: "Symphony Of The Earth",
      author: "Enayetullah Khan",
      price: "৳4,000.00",
      description:
        "A captivating exploration of the earth's natural beauty, weaving together stunning visuals and insightful commentary to celebrate the wonders of our planet.",
      image: "/images/cosmos-books/symphony-earth.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=119",
    },
    {
      id: "ballads-paintings",
      title: "Ballads And Paintings: SHAKOOR",
      author: "Cosmos Books",
      price: "৳1,000.00",
      description:
        "A brilliant collection of artworks and ballads by Shakoor, reflecting the vibrant cultural heritage and artistic expression of Bangladesh.",
      image: "/images/cosmos-books/shakoor.png",
      url: "https://cosmosbooks.com.bd/index.php?route=product/product&product_id=127",
    },
  ];

  return (
    <div id="cosmos-books-page" className="bg-[#04060f] min-h-screen text-white font-sans selection:bg-red-500/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-red-400 bg-white/[0.04] border border-white/[0.06] rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-7xl mx-auto px-4 md:px-6 mb-12"
      >
        <DivisionBrandBanner
          name="Cosmos Books"
          logo="/logos/Cosmos Logo-01.png"
          descriptor="Publishing & Literature"
          theme="dark"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-24 pb-24"
      >
        {/* Hero Section */}
        <motion.div
          variants={fadeUp}
          className="bg-white/[0.03] border border-slate-800/60 rounded-3xl overflow-hidden relative shadow-2xl"
        >
          <div className="absolute inset-0">
            <img
              src="/images/cosmos-books/Bangladesh - Splendors of the past.jpeg"
              alt="Cosmos Books — Bangladesh Splendors of the Past"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04060f]/75 via-[#04060f]/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060f]/40 via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-16 lg:p-20 relative z-10 max-w-4xl space-y-8 mt-24 md:mt-32">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/50 border border-red-900/30 rounded-full">
              <Library className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Knowledge & Culture
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-white leading-[1.1]">
                Publishing Meaningful Titles for a Broad Readership
              </h1>
              <p className="text-red-500 font-mono font-bold text-sm md:text-base uppercase tracking-widest">
                Curated Literature, Culture & Contemporary Thought
              </p>
            </div>

            <p className="text-slate-100 text-sm md:text-lg font-light leading-relaxed max-w-3xl drop-shadow-md">
              Cosmos Books curates and publishes impactful literary works spanning culture, policy, contemporary thought, and the arts, fostering a deeper understanding of Bangladesh and the world.
            </p>
          </div>
        </motion.div>

        {/* Featured Publications */}
        <div className="space-y-8">
          <motion.div
            variants={fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div className="space-y-2">
              <span className="text-[10px] md:text-xs font-mono font-bold text-red-500 uppercase tracking-widest block">
                Curated Collection
              </span>
              <h2 className="text-2xl md:text-4xl font-bold font-display text-white uppercase tracking-tight">
                Featured Publications
              </h2>
            </div>
            <a
              href="https://cosmosbooks.com.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors"
            >
              Visit Full Store
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <GlowCard
                key={book.id}
                variants={fadeUp}
                theme="dark"
                className="group flex flex-col bg-white/[0.03] border border-slate-800/60 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors"
              >
                <div className="relative h-72 w-full flex items-center justify-center p-8 bg-[#0B132B] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="relative z-10 h-full w-full flex justify-center items-center group-hover:-translate-y-2 transition-transform duration-500">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="flex flex-col flex-grow p-8 space-y-6">
                  <div className="space-y-3 flex-grow">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-xl font-bold font-display text-white leading-tight uppercase tracking-tight">
                        {book.title}
                      </h3>
                      <span className="shrink-0 text-sm font-mono font-bold text-slate-400 bg-white/[0.04] border border-slate-700/60 px-2 py-1 rounded">
                        {book.price}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-300">By {book.author}</p>
                      {book.translatedBy && (
                        <p className="text-xs text-slate-500">Translated by {book.translatedBy}</p>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-4 font-light">
                      {book.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-800/60">
                    <a
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-red-950/50 border border-red-900/30 text-red-400 text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-red-950/70 hover:text-red-300 transition-colors focus:ring-2 focus:ring-red-600"
                    >
                      <Bookmark className="w-4 h-4" />
                      View on Store
                    </a>
                  </div>
                </div>
              </GlowCard>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div variants={fadeUp}>
          <GlowCard
            theme="dark"
            className="bg-[#0B132B] border border-slate-800/60 rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden"
          >
            <div className="absolute -left-12 -bottom-12 opacity-10">
              <Globe className="w-48 h-48 text-red-500" />
            </div>
            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white uppercase tracking-tight">
                Discover More at Cosmos Books
              </h3>
              <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">
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
        </motion.div>

        <div className="mt-12 md:mt-16">
          <CompanyBrochureCTA companyId="books" />
        </div>
      </motion.div>
    </div>
  );
}
