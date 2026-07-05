import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Zap,
  Building,
  TrendingUp,
  Phone,
  Shirt,
  Gem,
  Printer,
  Ship,
  BookOpen,
  Globe,
  Palette,
  Globe2,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CosmosLogo from "./CosmosLogo";

interface NavbarProps {
  onInvestorClick: () => void;
  currentPage: "home" | "careers" | "energy" | "shipping" | "unb" | "dhaka-courier" | "holdings" | "marketing" | "telecom" | "apparels" | "pearls" | "printing" | "atelier" | "global";
  onPageChange: (page: "home" | "careers" | "energy" | "shipping" | "unb" | "dhaka-courier" | "holdings" | "marketing" | "telecom" | "apparels" | "pearls" | "printing" | "atelier" | "global") => void;
}

export default function Navbar({ onInvestorClick, currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Sectors", href: "#businesses", hasDropdown: true },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-cosmos" },
    { name: "Founder", href: "#founder" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
  ];

  const companies = [
    { name: "Cosmos Energy", subtitle: "Oil, Gas & Power", icon: Zap, href: "#businesses" },
    { name: "Cosmos Holdings", subtitle: "Investment & Holdings", icon: Building, href: "#businesses" },
    { name: "Cosmos Marketing", subtitle: "Consultation Services", icon: TrendingUp, href: "#businesses" },
    { name: "Cosmos Telecom", subtitle: "Telecommunications", icon: Phone, href: "#businesses" },
    { name: "Cosmos Apparels", subtitle: "Garment Manufacturing", icon: Shirt, href: "#businesses" },
    { name: "Pearls Paradise", subtitle: "Jewelry & Gems", icon: Gem, href: "#businesses" },
    { name: "Cosmos Printing", subtitle: "Printing & Publishing", icon: Printer, href: "#businesses" },
    { name: "Cosmos Shipping", subtitle: "Shipping & Logistics", icon: Ship, href: "#businesses" },
    { name: "Dhaka Courier", subtitle: "News Weekly", icon: BookOpen, href: "#businesses" },
    { name: "UNB", subtitle: "News Agency", icon: Globe2, href: "#businesses" },
    { name: "Cosmos Atelier 71", subtitle: "Printmaking Studio", icon: Palette, href: "#businesses" },
    { name: "Cosmos Global", subtitle: "Global Resources", icon: Globe, href: "#businesses" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ${
          scrolled ? "bg-slate-950/95 py-2.5 shadow-2xl border-b border-slate-900/80 backdrop-blur-md" : "bg-transparent py-4 md:py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/30 backdrop-blur-sm border border-white/10 px-6 md:px-8 py-3 rounded-xl">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              onPageChange("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 rounded-md px-2 py-1 whitespace-nowrap"
            aria-label="Cosmos Group Home"
          >
            <CosmosLogo size={34} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8 text-white text-xs xl:text-sm font-medium">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative group py-2">
                    <button className="flex items-center gap-1 nav-variable-hover hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1 py-1 whitespace-nowrap cursor-pointer transition-colors">
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300 text-slate-400" />
                    </button>
                    {/* Mega Dropdown Panel */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[840px] bg-slate-950/95 backdrop-blur-xl border border-slate-800/80 rounded-2xl shadow-2xl p-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                      <div className="flex items-center justify-between border-b border-slate-800/40 pb-3 mb-4">
                        <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase font-bold">
                          Cosmos Conglomerate Portfolio - 12 Divisions
                        </span>
                        <span className="text-[9px] font-mono text-red-500">
                          ESTABLISHED 1972
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {companies.map((company) => {
                          const IconComp = company.icon;
                          const companyToPageMap: Record<string, "energy" | "shipping" | "unb" | "dhaka-courier" | "holdings" | "marketing" | "telecom" | "apparels" | "pearls" | "printing" | "atelier" | "global"> = {
                            "Cosmos Energy": "energy",
                            "Cosmos Shipping": "shipping",
                            "UNB": "unb",
                            "Dhaka Courier": "dhaka-courier",
                            "Cosmos Holdings": "holdings",
                            "Cosmos Marketing": "marketing",
                            "Cosmos Telecom": "telecom",
                            "Cosmos Apparels": "apparels",
                            "Pearls Paradise": "pearls",
                            "Cosmos Printing": "printing",
                            "Cosmos Atelier 71": "atelier",
                            "Cosmos Global": "global",
                          };
                          const targetPage = companyToPageMap[company.name];
                          return (
                            <a
                              key={company.name}
                              href={company.href}
                              onClick={(e) => {
                                if (targetPage) {
                                  e.preventDefault();
                                  onPageChange(targetPage);
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                } else {
                                  onPageChange("home");
                                }
                              }}
                              className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-slate-800/50 transition-all group/item"
                            >
                              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 group-hover/item:text-red-500 group-hover/item:border-red-500/20 group-hover/item:bg-red-950/10 transition-all shrink-0">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-xs font-bold text-slate-200 group-hover/item:text-white transition-colors truncate">
                                  {company.name}
                                </div>
                                <div className="text-[9px] text-slate-500 font-mono mt-0.5 truncate uppercase tracking-wider">
                                  {company.subtitle}
                                </div>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isCareersActive = link.name === "Careers" && currentPage === "careers";
              return (
                <a
                  key={link.name}
                  className={`nav-variable-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded px-1 py-1 whitespace-nowrap transition-colors ${
                    isCareersActive ? "text-red-500 font-bold" : "hover:text-red-500 text-white"
                  }`}
                  href={link.href}
                  onClick={(e) => {
                    if (link.name === "Careers") {
                      e.preventDefault();
                      onPageChange("careers");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      onPageChange("home");
                    }
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA / Mobile Trigger */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onInvestorClick}
              className="hidden sm:inline-flex bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded text-xs xl:text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-95 shadow-md active:shadow-sm whitespace-nowrap cursor-pointer"
              aria-label="Open Investor Hub"
            >
              Investor Hub
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-red-500 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[88px] z-40 lg:hidden px-6"
          >
            <div className="bg-slate-950/95 backdrop-blur-lg border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className="flex flex-col border-b border-slate-800/50 pb-2">
                        <button
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          className="text-white hover:text-red-500 font-medium py-2 text-base flex items-center justify-between w-full focus:outline-none"
                        >
                          <span className="flex items-center gap-2">
                            {link.name}
                            <span className="text-[9px] font-mono px-1.5 py-0.5 bg-red-950/40 border border-red-900/30 text-red-400 rounded uppercase">
                              12 Units
                            </span>
                          </span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180 text-red-500' : ''}`} />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {mobileMenuOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-slate-900/50 rounded-xl px-2 mt-1"
                            >
                              <div className="grid grid-cols-2 gap-2 py-3">
                                 {companies.map((company) => {
                                  const IconComp = company.icon;
                                  const companyToPageMap: Record<string, "energy" | "shipping" | "unb" | "dhaka-courier" | "holdings" | "marketing" | "telecom" | "apparels" | "pearls" | "printing" | "atelier" | "global"> = {
                                    "Cosmos Energy": "energy",
                                    "Cosmos Shipping": "shipping",
                                    "UNB": "unb",
                                    "Dhaka Courier": "dhaka-courier",
                                    "Cosmos Holdings": "holdings",
                                    "Cosmos Marketing": "marketing",
                                    "Cosmos Telecom": "telecom",
                                    "Cosmos Apparels": "apparels",
                                    "Pearls Paradise": "pearls",
                                    "Cosmos Printing": "printing",
                                    "Cosmos Atelier 71": "atelier",
                                    "Cosmos Global": "global",
                                  };
                                  const targetPage = companyToPageMap[company.name];
                                  return (
                                    <a
                                      key={company.name}
                                      href={company.href}
                                      onClick={(e) => {
                                        setIsOpen(false);
                                        setMobileMenuOpen(false);
                                        if (targetPage) {
                                          e.preventDefault();
                                          onPageChange(targetPage);
                                          window.scrollTo({ top: 0, behavior: "smooth" });
                                        } else {
                                          onPageChange("home");
                                        }
                                      }}
                                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-950/80"
                                    >
                                      <div className="w-7 h-7 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-center text-slate-400">
                                        <IconComp className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-[11px] font-bold text-slate-200 truncate">
                                          {company.name}
                                        </div>
                                        <div className="text-[9px] text-slate-500 font-mono truncate uppercase">
                                          {company.subtitle}
                                        </div>
                                      </div>
                                    </a>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  const isCareersActive = link.name === "Careers" && currentPage === "careers";
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        setIsOpen(false);
                        if (link.name === "Careers") {
                          e.preventDefault();
                          onPageChange("careers");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          onPageChange("home");
                        }
                      }}
                      className={`font-medium py-2 border-b border-slate-800/50 text-base flex items-center justify-between transition-colors ${
                        isCareersActive ? "text-red-500 font-bold" : "text-white hover:text-red-500"
                      }`}
                    >
                      {link.name}
                      <ArrowRight className={`w-4 h-4 ${isCareersActive ? "text-red-500" : "text-slate-500"}`} />
                    </a>
                  );
                })}
              </div>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  onInvestorClick();
                }}
                className="w-full bg-red-700 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Investor Hub
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
