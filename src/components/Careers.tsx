import React, { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Upload, 
  Check, 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Building2,
  Calendar,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CareersProps {
  onBackToHome: () => void;
}

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export default function Careers({ onBackToHome }: CareersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  
  // Application Form State
  const [applyJob, setApplyJob] = useState<Job | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    portfolioUrl: ""
  });

  const jobs: Job[] = [
    {
      id: "job-1",
      title: "Senior Backend Developer (Node.js/Laravel)",
      department: "Technologies",
      location: "Dhaka (HQ)",
      type: "Full-time",
      experience: "5+ Years",
      description: "We are seeking an exceptionally skilled Senior Backend Developer experienced in Node.js and Laravel. You will spearhead the design and development of robust microservices, scale enterprise databases, and collaborate closely with our high-tech systems division to power mission-critical corporate applications.",
      responsibilities: [
        "Architect and implement secure, high-performance API services.",
        "Design scalable schema structures and optimize SQL/NoSQL databases.",
        "Integrate external web services, payment gateways, and enterprise CRM solutions.",
        "Mentor junior developers and participate in code quality reviews."
      ],
      requirements: [
        "Strong proficiency in Node.js (Express, NestJS) and Laravel framework.",
        "Deep understanding of relational database design (PostgreSQL, MySQL).",
        "Experience with Docker containerization and AWS/GCP hosting.",
        "Solid grasp of clean code architectures and security best practices."
      ]
    },
    {
      id: "job-2",
      title: "Cloud Infrastructure Engineer",
      department: "Technologies",
      location: "Dhaka (HQ)",
      type: "Full-time",
      experience: "4+ Years",
      description: "Looking for an infrastructure professional experienced with cloud automation, container orchestration (Docker/Kubernetes), and CI/CD pipelines. You will manage, optimize, and secure our highly resilient server environments across our global offices and local energy installations.",
      responsibilities: [
        "Manage, monitor, and provision multi-cloud infrastructure assets.",
        "Maintain zero-downtime CI/CD deployment pipelines.",
        "Implement automated scaling policies and load-balancing architectures.",
        "Establish stringent system audit controls and security parameters."
      ],
      requirements: [
        "Proven experience as a Cloud DevOps or Infrastructure Engineer.",
        "Hands-on expertise with Kubernetes, Docker, and Terraform.",
        "Excellent proficiency with cloud platforms (AWS, GCP, or Azure).",
        "Experience in managing database replications and high availability."
      ]
    },
    {
      id: "job-3",
      title: "Digital Marketing Manager",
      department: "Media Enterprises",
      location: "Dhaka (HQ)",
      type: "Full-time",
      experience: "5+ Years",
      description: "Seeking a dynamic marketing leader to drive our digital brand positioning, manage content campaigns, and analyze corporate media growth. You will be responsible for defining and executing marketing strategies that reinforce Cosmos Group's commitment to industrial and ecological excellence.",
      responsibilities: [
        "Formulate and execute comprehensive B2B/B2C digital marketing campaigns.",
        "Manage corporate communications, brand assets, and multi-channel content.",
        "Analyze digital campaign traffic, conversion metrics, and audience engagement.",
        "Collaborate with Dhaka Courier and UNB design wings for rich-media assets."
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related fields.",
        "Demonstrated track record of scaling digital presence for premier corporate brands.",
        "Deep expertise with Google Analytics, SEO, SEM, and modern marketing suites.",
        "Outstanding written communication and executive presentation skills."
      ]
    }
  ];

  const departments = ["All", "Technologies", "Media Enterprises"];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setApplyJob(null);
      setFileName(null);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
        portfolioUrl: ""
      });
    }, 2500);
  };

  const toggleExpandJob = (id: string) => {
    setExpandedJobId(prev => (prev === id ? null : id));
  };

  return (
    <div id="careers-page" className="pt-24 pb-20 bg-slate-50 min-h-screen text-slate-800">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-red-700 bg-white border border-slate-200 hover:border-red-600/30 rounded-xl transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 cursor-pointer"
          id="back-home-button"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portal Home
        </button>
      </div>

      {/* 1. Hero Section */}
      <section id="careers-hero" className="relative overflow-hidden bg-slate-950 text-white py-16 md:py-24 px-4 md:px-6 mb-16 rounded-3xl max-w-7xl mx-auto shadow-2xl border border-slate-900">
        <div className="absolute inset-0 bg-radial-gradient from-red-950/20 via-slate-950/90 to-slate-950 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-red-950/50 border border-red-900/30 rounded-full mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
              Join Our Mission
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight uppercase">
            Build Your Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-500">
              with Cosmos Group
            </span>
          </h1>
          
          <p className="text-slate-300 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Join a fast-paced, entrepreneurial culture where highly talented and passionate people thrive.
          </p>
        </div>
      </section>

      {/* 2. Company Culture & Environment */}
      <section id="careers-culture" className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full pointer-events-none border-b border-l border-slate-100" />
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-red-600 font-mono font-bold uppercase tracking-wider text-xs md:text-sm">
              <span className="h-[2px] w-8 bg-red-600" />
              Organizational Environment
            </div>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 tracking-tight uppercase">
              Life at Cosmos
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              Cosmos is committed to developing an inclusive work environment where diversity of thought, style, culture, and skill is valued in support of individual performance and potential, as well as our business goals and mission. Respect and tolerance for others are the watchwords in our workplace.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Training and Development Programs */}
      <section id="careers-training" className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-red-600 font-mono font-bold uppercase tracking-wider text-xs md:text-sm">
              <span className="h-[2px] w-8 bg-red-600" />
              Empowering Talents
            </div>
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 tracking-tight uppercase">
              Empowering Our People
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed">
              We believe in helping our employees realize their true potential. We offer robust professional development opportunities, including designed programmes to prepare our teams for the complexities of global industries.
            </p>
            <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-xs text-red-900/80 leading-relaxed">
                Our workforce has grown over <strong className="text-red-950">336x</strong> since 1971, supported by systematic talent acquisition and lifetime professional coaching.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 gap-4">
            {/* Program 1 */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-red-500 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  MTP
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900 uppercase tracking-tight">
                    Management Training Programme (MTP)
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 font-light mt-1.5 leading-relaxed">
                    For fresh graduates to gain exposure to all facets of our business. Includes multi-division rotations, strategic planning exposure, and hand-on engineering/business development modules.
                  </p>
                </div>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-red-500 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  EMP
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900 uppercase tracking-tight">
                    Executive Management Programme (EMP)
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 font-light mt-1.5 leading-relaxed">
                    Designed to provide middle-level management with opportunities to enhance leadership skills. Focuses on change management, cross-functional organizational efficiency, and corporate governance standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-red-500 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  MLDP
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900 uppercase tracking-tight">
                    Management Leadership Development Programme (MLDP)
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 font-light mt-1.5 leading-relaxed">
                    Equipping managers with diverse knowledge to handle global business challenges. Prepares our senior directors and divisional leads for joint venture models and complex international public tenders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Employee Benefits */}
      <section id="careers-benefits" className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 border border-slate-900 shadow-xl relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-red-400 font-mono font-bold uppercase tracking-wider text-xs md:text-sm">
                <span className="h-[2px] w-8 bg-red-500" />
                Guaranteed Support
              </div>
              <h2 className="text-2xl md:text-3.5xl font-black text-white tracking-tight uppercase">
                Value & Rewards
              </h2>
              <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                We scrupulously observe industry best practices regarding employee wages, ensuring our team earns a living wage that allows them to live adequately by national standards. We provide comprehensive health and wellness programmes and competitive compensation to help our employees multiply impact both on the job and in their personal lives.
              </p>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-950 text-red-400 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-white">Wellness Care</h5>
                <p className="text-[11px] text-slate-400 font-light leading-normal">
                  Comprehensive health support & regular medical checkups.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="w-8 h-8 rounded-lg bg-red-950 text-red-400 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h5 className="font-bold text-xs uppercase tracking-wider text-white">Living Wage</h5>
                <p className="text-[11px] text-slate-400 font-light leading-normal">
                  Wages tailored to exceed local living expense guidelines.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl space-y-2 col-span-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-950 text-red-400 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-white">Full Regulatory Alignment</h5>
                    <p className="text-[11px] text-slate-400 font-light leading-normal mt-0.5">
                      Compliant with ILO provisions and local employment standard mandates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Open Positions */}
      <section id="careers-positions" className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="space-y-6 mb-8">
          <div className="inline-flex items-center gap-2 text-red-600 font-mono font-bold uppercase tracking-wider text-xs md:text-sm">
            <span className="h-[2px] w-8 bg-red-600" />
            Current Opportunities
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3.5xl font-black text-slate-900 tracking-tight uppercase">
              Current Opportunities
            </h2>
            <p className="text-slate-550 text-xs md:text-sm font-light max-w-sm leading-relaxed">
              Explore open roles in our technology division or strategic media publications and submit your application online.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row gap-3 items-center shadow-sm">
          {/* Keyword Search */}
          <div className="relative w-full sm:flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role or keywords..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/10 rounded-xl text-sm outline-none transition-all"
            />
          </div>
          
          {/* Dept Dropdown */}
          <div className="flex gap-2 w-full sm:w-auto">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all cursor-pointer select-none ${
                  selectedDept === dept 
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm" 
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {dept === "All" ? "All Sectors" : dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Listings: Clean Interactive Accordions */}
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              return (
                <div 
                  key={job.id} 
                  className={`bg-white border rounded-2xl transition-all duration-300 shadow-sm overflow-hidden ${
                    isExpanded ? "border-red-600/35 ring-4 ring-red-600/[0.03]" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Job Header Row */}
                  <div 
                    onClick={() => toggleExpandJob(job.id)}
                    className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-900 text-red-400 border border-slate-850 rounded uppercase tracking-wider">
                          {job.department}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 text-slate-600 rounded uppercase">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-light">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {job.experience} Experience Required
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setApplyJob(job);
                        }}
                        className="px-5 py-2.5 bg-red-700 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all active:scale-95 shadow-sm hover:shadow cursor-pointer"
                      >
                        Apply Now
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50 transition-colors">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content with slide animation */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="border-t border-slate-100 bg-slate-50/50"
                      >
                        <div className="p-6 md:p-8 space-y-6">
                          <div className="space-y-2">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                              Role Overview
                            </h5>
                            <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
                              {job.description}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Key Responsibilities */}
                            <div className="space-y-3">
                              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                                Key Responsibilities
                              </h5>
                              <ul className="space-y-2">
                                {job.responsibilities.map((resp, i) => (
                                  <li key={i} className="text-xs md:text-sm text-slate-600 font-light flex items-start gap-2">
                                    <span className="text-red-500 font-bold mt-0.5">•</span>
                                    <span>{resp}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Key Requirements */}
                            <div className="space-y-3">
                              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                                Qualifications & Skills
                              </h5>
                              <ul className="space-y-2">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="text-xs md:text-sm text-slate-600 font-light flex items-start gap-2">
                                    <span className="text-red-500 font-bold mt-0.5">•</span>
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-slate-100 flex justify-end">
                            <button
                              onClick={() => setApplyJob(job)}
                              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all hover:shadow cursor-pointer"
                            >
                              Submit Candidacy File
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white border border-slate-200 rounded-2xl">
              <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 text-sm font-light">
                No matching open positions found. Please refine your search keyword.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Application Submission Dialog Modal */}
      <AnimatePresence>
        {applyJob && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="apply-modal-title">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl relative p-6 md:p-8"
            >
              {/* Header */}
              <div className="border-b border-slate-100 pb-4 mb-6">
                <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest block mb-1">
                  Application Dossier
                </span>
                <h3 id="apply-modal-title" className="text-base md:text-lg font-bold text-slate-900 uppercase">
                  Apply for {applyJob.title}
                </h3>
                <p className="text-xs text-slate-500 font-light mt-1">
                  Sectored Division: <span className="text-slate-800 font-semibold">{applyJob.department}</span>
                </p>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="applicant-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="applicant-name"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Ahsan Kabir"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/10 rounded-xl py-2 px-3 text-sm text-slate-850 placeholder:text-slate-400 outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="applicant-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        id="applicant-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="a.kabir@example.com"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/10 rounded-xl py-2 px-3 text-sm text-slate-850 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="applicant-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Contact Number
                      </label>
                      <input
                        id="applicant-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 17XX XXXXXX"
                        className="w-full bg-slate-50 border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/10 rounded-xl py-2 px-3 text-sm text-slate-850 placeholder:text-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Portfolio or Linkedin URL */}
                  <div>
                    <label htmlFor="applicant-url" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Professional Link (LinkedIn / GitHub / Portfolio)
                    </label>
                    <input
                      id="applicant-url"
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="https://github.com/my-profile"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/10 rounded-xl py-2 px-3 text-sm text-slate-850 placeholder:text-slate-400 outline-none transition-all"
                    />
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Upload Resume (PDF / DOCX)
                    </label>
                    <div 
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all relative ${
                        dragActive 
                          ? "border-red-600 bg-red-50/20" 
                          : fileName 
                            ? "border-emerald-500/50 bg-emerald-50/5" 
                            : "border-slate-200 hover:border-slate-300 bg-slate-50"
                      }`}
                    >
                      <input
                        type="file"
                        id="cv-file-upload"
                        required
                        accept=".pdf,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                      />
                      <div className="space-y-2 pointer-events-none">
                        <Upload className={`w-6 h-6 mx-auto ${fileName ? "text-emerald-500" : "text-slate-400"}`} />
                        {fileName ? (
                          <div className="space-y-1">
                            <p className="text-xs font-bold text-slate-800">{fileName}</p>
                            <p className="text-[10px] text-emerald-600 flex items-center justify-center gap-1">
                              <Check className="w-3 h-3" /> CV successfully loaded
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <p className="text-xs text-slate-600 font-medium">
                              Drag and drop your file here, or <span className="text-red-600 underline font-bold">browse</span>
                            </p>
                            <p className="text-[10px] text-slate-400 font-light">
                              Supported file formats: PDF, DOCX (Max size: 10MB)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label htmlFor="applicant-letter" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Brief Cover Note
                    </label>
                    <textarea
                      id="applicant-letter"
                      rows={3}
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      placeholder="Share what excites you about building your future with Cosmos Group..."
                      className="w-full bg-slate-50 border border-slate-200 focus:border-red-600 focus:ring-2 focus:ring-red-600/10 rounded-xl py-2 px-3 text-sm text-slate-850 placeholder:text-slate-400 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setApplyJob(null)}
                      className="flex-1 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold py-2.5 rounded-xl transition-colors text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-[2] bg-red-700 hover:bg-red-600 text-white font-bold py-2.5 rounded-xl transition-colors text-xs uppercase tracking-wider shadow-sm cursor-pointer"
                    >
                      Transmit Dossier
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-emerald-600 animate-bounce" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">
                    Dossier Logged Successfully
                  </h3>
                  <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed font-light">
                    Your candidate dossier has been successfully synchronized with the Cosmos HR Portal. Our recruiting desk will analyze your profile and trigger contact shortly.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
