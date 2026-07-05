import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Globe,
  Mail,
  Phone,
  Handshake,
  ShieldCheck,
  Send,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Building,
  Lock
} from "lucide-react";
import CosmosLogo from "./CosmosLogo";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormState({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(false);
  };



  return (
    <section id="contact" className="relative py-28 px-6 md:px-8 bg-[#04060f] border-t border-slate-950 overflow-hidden">
      
      {/* Visual Section Divider & Demarcation Line */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute flex items-center gap-2 px-4 py-1.5 bg-slate-950 border border-slate-800/80 rounded-full text-[9px] font-mono tracking-[0.25em] text-slate-500 uppercase translate-y-[13px]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          Contact Us
        </div>
      </div>

      {/* Cyber grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-20" />

      {/* Futuristic glow elements */}
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-red-950/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-cyan-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* ================= HEADER BLOCK ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-slate-800/60 pb-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/30 border border-red-900/30 rounded-full">
              <Handshake className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
                Get In Touch
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none uppercase">
              Partner with <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-cyan-500">
                Cosmos Group
              </span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
              Establish a partnership, request more information, or send us a message using our contact form.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <CosmosLogo variant="vertical" size={72} />
          </div>
        </div>

        {/* ================= MAIN DUAL-COLUMN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Encrypted Communication Terminal (Form) */}
          <div className="lg:col-span-7 bg-slate-900/10 border border-slate-800/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm">
            {/* Fine design touches */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wider uppercase">
                    Contact Us
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Subject of your inquiry"
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors"
                      />
                    </div>

                    {/* Message Body */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800/80 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-slate-600 focus:outline-none focus:border-red-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group overflow-hidden bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 disabled:from-slate-800 disabled:to-slate-800 text-white font-bold text-xs uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-red-500/20"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="py-10 text-center space-y-6 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        MESSAGE SENT SUCCESSFULLY
                      </h4>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. We have received your message and will get back to you shortly.
                      </p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white text-[10px] tracking-widest uppercase rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                Your information is securely processed.
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Physical Registry & Global Channel Blocks (Bento Cards) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* CARD 1: Physical HQ Registry */}
            <div className="bg-slate-900/10 border border-slate-800/80 rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden flex-1 group hover:border-slate-700/80 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-red-500 tracking-widest uppercase font-bold">
                    Physical Registry
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold font-display text-white uppercase tracking-tight">
                    World Headquarters
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <Building className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-200">Cosmos Centre</h4>
                  <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
                    69/1, New Circular Road, Malibagh<br />
                    Dhaka-1217, Bangladesh
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950 border border-slate-900 rounded-full text-[9px] font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  Coordinates: 23.7461° N, 90.4131° E
                </div>
              </div>
            </div>

            {/* CARD 2: Direct Cyber Hotlinks & Audio Channels */}
            <div className="bg-slate-900/10 border border-slate-800/80 rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden flex-1 group hover:border-slate-700/80 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-cyan-400 tracking-widest uppercase font-bold">
                    Contact Channels
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold font-display text-white uppercase tracking-tight">
                    Direct Connections
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {/* Telephone Row */}
                <div className="flex items-center justify-between border-b border-slate-950 pb-2">
                  <span className="text-slate-500 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" /> PHONE:
                  </span>
                  <a
                    href="tel:+880241030442"
                    className="text-slate-200 hover:text-red-400 transition-colors font-bold"
                  >
                    +8802 41030442
                  </a>
                </div>

                {/* Email Row */}
                <div className="flex items-center justify-between border-b border-slate-950 pb-2">
                  <span className="text-slate-500 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> EMAIL:
                  </span>
                  <a
                    href="mailto:cosmos@cosmosgroup.com.bd"
                    className="text-slate-200 hover:text-cyan-400 transition-colors font-bold"
                  >
                    cosmos@cosmosgroup.com.bd
                  </a>
                </div>

                {/* Web Domain Row */}
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-amber-500 shrink-0" /> WEB:
                  </span>
                  <a
                    href="https://www.cosmosgroup.com.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-amber-400 transition-colors font-bold underline decoration-slate-800 underline-offset-4"
                  >
                    www.cosmosgroup.com.bd
                  </a>
                </div>
              </div>
            </div>

            {/* CARD 3: Corporate Integrity Standard */}
            <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/30 border border-emerald-900/30 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Verified In-Country Presence
                </h4>
                <p className="text-[10px] text-slate-500">
                  ISO 9001:2015 & National Defense Cyber Security Compliance Certified.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
