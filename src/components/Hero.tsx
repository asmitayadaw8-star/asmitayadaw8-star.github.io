import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, Briefcase, Mail, ShieldCheck, CheckCircle2, ChevronDown 
} from 'lucide-react';
import { candidateData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const resumeUrl = "./resumes/Asmita_Yadav_Resume.pdf";

  return (
    <section id="overview" className="min-h-screen flex items-center justify-center pt-28 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Details */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Job Seeker Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/70 border border-sky-700/60 text-sky-400 text-xs font-mono font-semibold mb-6 backdrop-blur-md shadow-lg shadow-sky-950/40">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>OPEN TO WORK • CUSTOMER SUPPORT & INSIDE SALES SPECIALIST</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Driving Consultative <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400">
                  Client Relationships
                </span>
                <br />& High-Impact Voice Operations
              </h1>

              {/* Value Proposition */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                Performance-driven <strong className="text-white font-semibold">Customer Support Executive</strong> and <strong className="text-sky-400 font-semibold">Inside Sales Specialist</strong> currently serving as <strong className="text-white font-semibold">Sales Executive</strong> at <strong className="text-sky-400 font-semibold">Ambr Homes Private Limited</strong>. Demonstrated excellence across high-volume telecalling (<strong className="text-white">70–90 calls/day</strong>), <strong className="text-emerald-400">95%+ Promise-to-Pay</strong> recovery agreements at Bajrang Business Solutions, and consultative financial qualification at Fincrif India. Backed by <strong className="text-purple-400 font-semibold">88.33% academic merit</strong> in UPMSP Board examinations.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="#experience"
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] hover:-translate-y-1"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Explore Career Journey</span>
                </a>
                
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Asmita_Yadav_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-sky-500/50 font-semibold text-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/50"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Download Official Resume</span>
                </a>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-slate-900/60 text-slate-400 hover:text-white border border-transparent hover:border-slate-800 text-sm font-medium transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>Let's Connect</span>
                </a>
              </div>

              {/* Data Integrity Statement */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Truthful Data — Verified against Experience Letters & Official UPMSP Marks</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Candidate Portrait with Cyber Halos */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-72 sm:w-80 lg:w-96"
            >
              {/* Radial Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-600/30 via-cyan-500/20 to-indigo-600/30 rounded-3xl blur-2xl opacity-75 animate-pulse" />
              
              {/* Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl group">
                {!imageError ? (
                  <img
                    src="./assets/candidate_portrait.png"
                    alt={candidateData.name}
                    onError={() => setImageError(true)}
                    className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-96 flex flex-col items-center justify-center bg-slate-800 text-slate-400 p-6 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-sky-600/20 border border-sky-500/40 flex items-center justify-center text-sky-400 font-bold text-2xl mb-3">
                      AY
                    </div>
                    <span className="font-bold text-white text-lg">{candidateData.name}</span>
                    <span className="text-xs text-slate-400 mt-1">{candidateData.title}</span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />

                {/* Candidate Name Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{candidateData.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    </div>
                    <div className="text-[11px] text-sky-400 font-mono">Current: Sales Executive @ Ambr Homes</div>
                  </div>
                  <div className="px-2 py-1 rounded-lg bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-[10px] font-mono font-bold">
                    ACTIVE
                  </div>
                </div>
              </div>

              {/* Floating Pill 1: 70-90 Calls/Day */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-[#0d121d]/95 backdrop-blur-md border border-sky-500/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 hover:scale-105 hover:border-sky-400 transition-all cursor-default"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
                <div>
                  <div className="text-[11px] font-bold text-white">70–90 Calls/Day</div>
                  <div className="text-[9px] text-slate-400 font-mono">High-Volume Capacity</div>
                </div>
              </motion.div>

              {/* Floating Pill 2: 95%+ PTP Fulfillment */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-[#0d121d]/95 backdrop-blur-md border border-emerald-500/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 hover:scale-105 hover:border-emerald-400 transition-all cursor-default"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <div>
                  <div className="text-[11px] font-bold text-white">95%+ PTP Fulfillment</div>
                  <div className="text-[9px] text-slate-400 font-mono">Settlement Recovery</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-500 text-xs font-mono">
        <span>Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-sky-400" />
      </div>
    </section>
  );
};
