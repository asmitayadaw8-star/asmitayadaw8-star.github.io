import React from 'react';
import { motion } from 'framer-motion';
import { candidateData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#07090e] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-800/70 text-sky-400 text-xs font-mono mb-2 shadow-md">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Verified Educational Credentials
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Demonstrating analytical rigor, mathematical discipline, and top-tier academic merit.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {candidateData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-600/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                    <GraduationCap size={24} />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-xl">
                    <Calendar size={13} className="text-sky-400" />
                    <span>{edu.year}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-sky-400 mt-1">
                    {edu.institution}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">
                    {edu.board}
                  </div>
                </div>

                {/* Score Banner */}
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    Official Performance:
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {edu.score}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-sky-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Badge Footer */}
              {edu.badge && (
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-mono font-bold text-emerald-300">
                  <Award size={16} className="text-emerald-400 shrink-0" />
                  <span>{edu.badge}</span>
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
