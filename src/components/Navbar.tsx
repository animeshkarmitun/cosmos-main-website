import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Zap,
  TrendingUp,
  Ship,
  BookOpen,
  Globe2,
  ChevronDown,
  Cpu,
  PawPrint,
  Image as ImageIcon,
  Gem,
  Printer,
  Globe,
  Palette,
  MessageSquare,
  HandHeart,
  Home,
  Sun
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CosmosLogo from "./CosmosLogo";

interface NavbarProps {
  currentPage: "home" | "home2" | "careers" | "energy" | "shipping" | "unb" | "dhaka-courier" | "marketing" | "technology" | "pearls" | "printing" | "atelier" | "global" | "wildteam" | "gallery" | "dialogue" | "foundation" | "books" | "csr" | "about-page" | "team" | "policies" | "services";
  onPageChange: (page: "home" | "home2" | "careers" | "energy" | "shipping" | "unb" | "dhaka-courier" | "marketing" | "technology" | "pearls" | "printing" | "atelier" | "global" | "wildteam" | "gallery" | "dialogue" | "foundation" | "books" | "csr" | "about-page" | "team" | "policies" | "services") => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const isLight = currentPage === "home2";
  const isHomeActive = currentPage === "home" || currentPage === "home2";
  const isHomeVariant = currentPage === "home" || currentPage === "home2";
  const useSolidDarkShell = !isLight && !isHomeVariant;

  const handleHashLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetHomePage = currentPage === "home2" ? "home2" : "home";
    onPageChange(targetHomePage);
    const targetId = href.replace("#", "");
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 120);
  };

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
    { name: "Home", href: "#home", hasDropdown: true, isHome: true },
    { name: "About Us", href: "#about", page: "about-page" as const },
    { name: "Companies", href: "#businesses", hasDropdown: true },
    { name: "Services", href: "#services", page: "services" as const },
    { name: "Why Us", href: "#why-cosmos" },
    { name: "Team", href: "#founder", page: "team" as const },
    { name: "Careers", href: "#careers" },
  ];

  const homeOptions = [
    { name: "Home (Default)", page: "home" as const, icon: Home, desc: "Dark corporate theme" },
    { name: "Home 2", page: "home2" as const, icon: Sun, desc: "Light modern theme" },
  ];

  const companies = [
    { name: "Cosmos Energy", subtitle: "Leading the transition to sustainable energy solutions across the region.", icon: Zap, href: "#businesses" },
    { name: "Cosmos Marketing", subtitle: "Comprehensive consultation and marketing strategies.", icon: TrendingUp, href: "#businesses" },
    { name: "Cosmos Shipping & Logistics", subtitle: "Global logistics and freight management with unparalleled efficiency.", icon: Ship, href: "#businesses" },
    { name: "Cosmos Technology", subtitle: "Advanced telecommunication and technology infrastructure.", icon: Cpu, href: "#businesses" },
    { name: "UNB", subtitle: "United News of Bangladesh - the leading news agency.", icon: Globe2, href: "#businesses" },
    { name: "Dhaka Courier", subtitle: "The premier English-language news weekly.", icon: BookOpen, href: "#businesses" },
    { name: "Cosmos Books", subtitle: "Publishing meaningful titles that enrich thought, culture, and knowledge.", icon: BookOpen, href: "#businesses" },
    { name: "WildTeam", subtitle: "Wildlife conservation initiative.", icon: PawPrint, href: "#businesses" },
    { name: "Cosmos Gallery", subtitle: "A premier destination for fine arts and cultural expression.", icon: ImageIcon, href: "#businesses" },
    { name: "Pearls Paradise", subtitle: "Exquisite jewelry and precious gems.", icon: Gem, href: "#businesses" },
    { name: "Cosmos Printing", subtitle: "Advanced printing and commercial publishing solutions.", icon: Printer, href: "#businesses" },
    { name: "Cosmos Atelier 71", subtitle: "A premier printmaking studio promoting fine arts.", icon: Palette, href: "#businesses" },
    { name: "Cosmos Global", subtitle: "Global resources and international trade ventures.", icon: Globe, href: "#businesses" },
    { name: "Cosmos Dialogue", subtitle: "Thought leadership platform for policy dialogue.", icon: MessageSquare, href: "#businesses" },
    { name: "Cosmos Foundation", subtitle: "Social impact initiatives advancing education and public health.", icon: HandHeart, href: "#businesses" },
  ];

  const companyToPageMap: Record<string, "energy" | "shipping" | "unb" | "dhaka-courier" | "marketing" | "technology" | "books" | "wildteam" | "gallery" | "pearls" | "printing" | "atelier" | "global" | "dialogue" | "foundation"> = {
    "Cosmos Energy": "energy",
    "Cosmos Marketing": "marketing",
    "Cosmos Shipping & Logistics": "shipping",
    "Cosmos Technology": "technology",
    "UNB": "unb",
    "Dhaka Courier": "dhaka-courier",
    "Cosmos Books": "books",
    "WildTeam": "wildteam",
    "Cosmos Gallery": "gallery",
    "Pearls Paradise": "pearls",
    "Cosmos Printing": "printing",
    "Cosmos Atelier 71": "atelier",
    "Cosmos Global": "global",
    "Cosmos Dialogue": "dialogue",
    "Cosmos Foundation": "foundation",
  };

  // Theme-aware class sets
  const headerClasses = isLight
    ? `fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ${
        scrolled ? "bg-white/90 py-2.5 shadow-sm border-b border-stone-200/70 backdrop-blur-md" : "bg-white/60 py-4 md:py-6"
      }`
    : `fixed top-0 left-0 right-0 z-50 px-4 md:px-6 transition-all duration-300 ${
        useSolidDarkShell
          ? "bg-slate-950/95 py-2.5 shadow-2xl border-b border-slate-900/80 backdrop-blur-md"
          : scrolled
            ? "bg-slate-950/95 py-2.5 shadow-2xl border-b border-slate-900/80 backdrop-blur-md"
            : "bg-transparent py-4 md:py-6"
      }`;

  const navContainerClasses = isLight
    ? "max-w-7xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-sm border border-stone-200/60 px-6 md:px-8 py-3 rounded-xl"
    : `max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-3 rounded-xl ${
        useSolidDarkShell
          ? "bg-slate-950 border border-slate-800/80"
          : "bg-slate-900/30 backdrop-blur-sm border border-white/10"
      }`;

  const linkTextClasses = isLight
    ? "text-slate-700 hover:text-sky-700"
    : "text-white hover:text-red-500";

  const activeClasses = isLight
    ? "text-sky-700 font-bold"
    : "text-red-500 font-bold";

  const ctaClasses = isLight
    ? "hidden sm:inline-flex bg-sky-700 hover:bg-sky-600 text-white px-5 py-2 rounded text-xs xl:text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-95 shadow-md active:shadow-sm whitespace-nowrap cursor-pointer"
    : "hidden sm:inline-flex bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded text-xs xl:text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 active:scale-95 shadow-md active:shadow-sm whitespace-nowrap cursor-pointer";

  const mobileButtonClasses = isLight
    ? "lg:hidden text-slate-700 hover:text-sky-700 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded"
    : "lg:hidden text-white hover:text-red-500 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded";

  return (
    <>
      <header className={headerClasses}>
        <nav className={navContainerClasses}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              const targetHomePage = currentPage === "home2" ? "home2" : "home";
              onPageChange(targetHomePage);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`focus-visible:outline-none focus-visible:ring-2 rounded-md px-2 py-1 whitespace-nowrap ${
              isLight ? "focus-visible:ring-sky-600" : "focus-visible:ring-red-600 focus-visible:ring-offset-2"
            }`}
            aria-label="Cosmos Group Home"
          >
            <CosmosLogo size={34} />
          </a>

          {/* Desktop Navigation Links */}
          <div className={`hidden lg:flex items-center space-x-5 xl:space-x-8 text-xs xl:text-sm font-medium ${isLight ? "text-slate-700" : "text-white"}`}>
            {navLinks.map((link) => {
              if (link.isHome) {
                return (
                  <div
                    key={link.name}
                    className="relative group py-2"
                    onMouseEnter={() => setHomeDropdownOpen(true)}
                    onMouseLeave={() => setHomeDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 nav-variable-hover focus-visible:outline-none focus-visible:ring-2 rounded px-1 py-1 whitespace-nowrap cursor-pointer transition-colors ${
                        isLight ? "focus-visible:ring-sky-600 hover:text-sky-700" : "focus-visible:ring-red-600 hover:text-red-500"
                      } ${isHomeActive ? activeClasses : ""}`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${homeDropdownOpen ? "rotate-180" : ""} ${isLight ? "text-slate-400" : "text-slate-400"}`} />
                    </button>
                    <div
                      className="absolute top-full left-0 right-0 h-3"
                      aria-hidden="true"
                    />
                    {/* Home Dropdown Panel */}
                    <AnimatePresence>
                      {homeDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 border rounded-2xl shadow-2xl p-3 z-50 ${
                            isLight ? "bg-white/95 border-stone-200 backdrop-blur-xl" : "bg-slate-950/95 border-slate-800/80 backdrop-blur-xl"
                          }`}
                        >
                          {homeOptions.map((option) => {
                            const IconComp = option.icon;
                            const isActive = currentPage === option.page;
                            return (
                              <button
                                key={option.name}
                                onClick={() => {
                                  onPageChange(option.page);
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                  setHomeDropdownOpen(false);
                                }}
                                className={`w-full flex items-center gap-3.5 p-3 rounded-xl transition-all text-left ${
                                  isLight
                                    ? `hover:bg-stone-50 ${isActive ? "bg-sky-50 border border-sky-100" : "border border-transparent"}`
                                    : `hover:bg-white/[0.04] ${isActive ? "bg-sky-950/20 border border-sky-900/30" : "border border-transparent"}`
                                }`}
                              >
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                                  isActive
                                    ? (isLight ? "bg-sky-700 text-white" : "bg-sky-700 text-white")
                                    : (isLight ? "bg-stone-100 text-slate-500" : "bg-slate-900 border border-slate-800 text-slate-400")
                                }`}>
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className={`text-xs font-bold truncate ${isLight ? "text-slate-900" : "text-slate-200"}`}>
                                    {option.name}
                                  </div>
                                  <div className={`text-[9px] font-mono mt-0.5 truncate uppercase tracking-wider ${isLight ? "text-slate-500" : "text-slate-500"}`}>
                                    {option.desc}
                                  </div>
                                </div>
                                {isActive && (
                                  <div className={`ml-auto w-1.5 h-1.5 rounded-full ${isLight ? "bg-sky-700" : "bg-sky-500"}`} />
                                )}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative group py-2">
                    <button className={`flex items-center gap-1 nav-variable-hover focus-visible:outline-none focus-visible:ring-2 rounded px-1 py-1 whitespace-nowrap cursor-pointer transition-colors ${
                      isLight ? "focus-visible:ring-sky-600 hover:text-sky-700" : "focus-visible:ring-red-600 hover:text-red-500"
                    }`}>
                      <span>{link.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300 text-slate-400" />
                    </button>
                    <div
                      className="absolute top-full left-0 right-0 h-3"
                      aria-hidden="true"
                    />
                    {/* Mega Dropdown Panel */}
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[840px] border rounded-2xl shadow-2xl p-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 ${
                      isLight ? "bg-white/95 border-stone-200 backdrop-blur-xl" : "bg-slate-950/95 border-slate-800/80 backdrop-blur-xl"
                    }`}>
                      <div className={`flex items-center justify-between border-b pb-3 mb-4 ${isLight ? "border-stone-200" : "border-slate-800/40"}`}>
                        <span className={`text-[10px] font-mono tracking-[0.2em] uppercase font-bold ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                          Cosmos Conglomerate Portfolio - 15 Divisions
                        </span>
                        <span className={`text-[9px] font-mono ${isLight ? "text-sky-700" : "text-red-500"}`}>
                          ESTABLISHED 1972
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {companies.map((company) => {
                          const IconComp = company.icon;
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
                              className={`flex items-center gap-3.5 p-2.5 rounded-xl transition-all group/item ${
                                isLight
                                  ? "hover:bg-stone-50 border border-transparent hover:border-stone-200"
                                  : "hover:bg-white/[0.04] border border-transparent hover:border-slate-800/50"
                              }`}
                            >
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                                isLight
                                  ? "bg-stone-100 text-slate-500 group-hover/item:text-sky-700 group-hover/item:bg-sky-50"
                                  : "bg-slate-900 border border-slate-800/80 text-slate-400 group-hover/item:text-red-500 group-hover/item:border-red-500/20 group-hover/item:bg-red-950/10"
                              }`}>
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className={`text-xs font-bold transition-colors truncate ${isLight ? "text-slate-900 group-hover/item:text-sky-700" : "text-slate-200 group-hover/item:text-white"}`}>
                                  {company.name}
                                </div>
                                <div className={`text-[9px] font-mono mt-0.5 truncate uppercase tracking-wider ${isLight ? "text-slate-500" : "text-slate-500"}`}>
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

              const isPageLink = 'page' in link && link.page;
              const isCareersActive = link.name === "Careers" && currentPage === "careers";
              const isPageActive = isPageLink && currentPage === link.page;
              const isActive = isCareersActive || isPageActive;
              return (
                <a
                  key={link.name}
                  className={`nav-variable-hover relative focus-visible:outline-none focus-visible:ring-2 rounded px-1 py-1 whitespace-nowrap transition-colors after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive ? `${activeClasses} after:scale-x-100` : linkTextClasses
                  } ${isLight ? "focus-visible:ring-sky-600 after:bg-sky-700" : "focus-visible:ring-red-600 after:bg-red-500"}`}
                  href={link.href}
                  onClick={(e) => {
                    if (link.name === "Careers") {
                      e.preventDefault();
                      onPageChange("careers");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else if (isPageLink) {
                      e.preventDefault();
                      onPageChange(link.page!);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      handleHashLink(e, link.href);
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
              onClick={(e) => handleHashLink(e, "#contact")}
              className={ctaClasses}
              aria-label="Go to Contact section"
            >
              Contact Us
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={mobileButtonClasses}
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
            className={`fixed inset-x-0 top-[88px] z-40 lg:hidden px-6`}
          >
            <div className={`border rounded-2xl p-6 shadow-2xl space-y-6 max-h-[80vh] overflow-y-auto ${
              isLight ? "bg-white/95 border-stone-200 backdrop-blur-lg" : "bg-slate-950/95 border-slate-800 backdrop-blur-lg"
            }`}>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  if (link.isHome) {
                    return (
                      <div key={link.name} className={`flex flex-col border-b pb-2 ${isLight ? "border-stone-200" : "border-slate-800/50"}`}>
                        <button
                          onClick={() => setHomeDropdownOpen(!homeDropdownOpen)}
                          className={`font-medium py-2 text-base flex items-center justify-between w-full focus:outline-none ${
                            isLight ? "text-slate-900 hover:text-sky-700" : "text-white hover:text-red-500"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {link.name}
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase ${
                              isLight ? "bg-sky-50 text-sky-700 border border-sky-100" : "bg-red-950/40 border border-red-900/30 text-red-400"
                            }`}>
                              2 Versions
                            </span>
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${homeDropdownOpen ? "rotate-180" : ""} ${isLight ? "text-slate-400" : "text-slate-400"}`} />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {homeDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className={`overflow-hidden rounded-xl px-2 mt-1 ${isLight ? "bg-stone-50" : "bg-slate-900/50"}`}
                            >
                              <div className="flex flex-col py-3 gap-2">
                                {homeOptions.map((option) => {
                                  const IconComp = option.icon;
                                  const isActive = currentPage === option.page;
                                  return (
                                    <button
                                      key={option.name}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setHomeDropdownOpen(false);
                                        onPageChange(option.page);
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                      }}
                                      className={`flex items-center gap-2 p-2 rounded-lg transition-colors text-left ${
                                        isActive
                                          ? (isLight ? "bg-sky-50 text-sky-700" : "bg-sky-950/30 text-sky-400")
                                          : (isLight ? "hover:bg-stone-100 text-slate-700" : "hover:bg-slate-950/80 text-slate-200")
                                      }`}
                                    >
                                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                                        isActive
                                          ? (isLight ? "bg-sky-700 text-white" : "bg-sky-700 text-white")
                                          : (isLight ? "bg-stone-200 text-slate-500" : "bg-slate-950 border border-slate-800 text-slate-400")
                                      }`}>
                                        <IconComp className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-[11px] font-bold truncate">{option.name}</div>
                                        <div className={`text-[9px] font-mono truncate uppercase ${isLight ? "text-slate-500" : "text-slate-500"}`}>
                                          {option.desc}
                                        </div>
                                      </div>
                                    </button>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className={`flex flex-col border-b pb-2 ${isLight ? "border-stone-200" : "border-slate-800/50"}`}>
                        <button
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                          className={`font-medium py-2 text-base flex items-center justify-between w-full focus:outline-none ${
                            isLight ? "text-slate-900 hover:text-sky-700" : "text-white hover:text-red-500"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {link.name}
                            <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase ${
                              isLight ? "bg-sky-50 text-sky-700 border border-sky-100" : "bg-red-950/40 border border-red-900/30 text-red-400"
                            }`}>
                              15 Units
                            </span>
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileMenuOpen ? "rotate-180" : ""} ${isLight ? "text-slate-400" : "text-slate-400"}`} />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {mobileMenuOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className={`overflow-hidden rounded-xl px-2 mt-1 ${isLight ? "bg-stone-50" : "bg-slate-900/50"}`}
                            >
                              <div className="grid grid-cols-2 gap-2 py-3">
                                {companies.map((company) => {
                                  const IconComp = company.icon;
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
                                      className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                                        isLight ? "hover:bg-stone-100" : "hover:bg-slate-950/80"
                                      }`}
                                    >
                                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                                        isLight ? "bg-stone-200 text-slate-500" : "bg-slate-950 border border-slate-800/80 text-slate-400"
                                      }`}>
                                        <IconComp className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className={`text-[11px] font-bold truncate ${isLight ? "text-slate-900" : "text-slate-200"}`}>
                                          {company.name}
                                        </div>
                                        <div className={`text-[9px] font-mono truncate uppercase ${isLight ? "text-slate-500" : "text-slate-500"}`}>
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

                  const isPageLink = 'page' in link && link.page;
                  const isCareersActive = link.name === "Careers" && currentPage === "careers";
                  const isPageActive = isPageLink && currentPage === link.page;
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
                        } else if (isPageLink) {
                          e.preventDefault();
                          onPageChange(link.page!);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        } else {
                          handleHashLink(e, link.href);
                        }
                      }}
                      className={`font-medium py-2 border-b text-base flex items-center justify-between transition-colors ${
                        isLight ? "border-stone-200" : "border-slate-800/50"
                      } ${
                        (isCareersActive || isPageActive)
                          ? activeClasses
                          : (isLight ? "text-slate-700 hover:text-sky-700" : "text-white hover:text-red-500")
                      }`}
                    >
                      {link.name}
                      <ArrowRight className={`w-4 h-4 ${(isCareersActive || isPageActive) ? (isLight ? "text-sky-700" : "text-red-500") : (isLight ? "text-slate-400" : "text-slate-500")}`} />
                    </a>
                  );
                })}
              </div>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  const targetHomePage = currentPage === "home2" ? "home2" : "home";
                  onPageChange(targetHomePage);
                  setTimeout(() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    } else {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }, 120);
                }}
                className={`w-full font-semibold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  isLight
                    ? "bg-sky-700 hover:bg-sky-600 text-white"
                    : "bg-red-700 hover:bg-red-600 text-white"
                }`}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
