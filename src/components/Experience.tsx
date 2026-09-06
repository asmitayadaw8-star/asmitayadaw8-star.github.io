import React from 'react';
import { motion } from 'framer-motion';
import { candidateData } from '../data/portfolioData';
import { Building2, MapPin, Calendar, CheckCircle2, Award, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#07090e] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-800/70 text-sky-400 text-xs font-mono mb-2 shadow-md">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Verified Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Demonstrated operational track record across real estate client onboarding, debt recovery operations, and inside sales consulting.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {candidateData.experiences.map((exp, idx) => {
            const isCurrent = exp.id === 'ambr-homes';

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                  isCurrent
                    ? 'bg-gradient-to-br from-[#0c1322] via-[#0b0f19] to-slate-900 border-sky-500/50 shadow-[0_0_30px_rgba(56,189,248,0.15)]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                }`}
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${
                          isCurrent
                            ? 'bg-sky-950/80 text-sky-300 border-sky-600/60 shadow-sm'
                            : 'bg-slate-800 text-slate-300 border-slate-700'
                        }`}>
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold">
                      <div className="flex items-center gap-1.5 text-sky-400">
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin size={15} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-800/90 border border-slate-700/60 px-3.5 py-1.5 rounded-xl shrink-0">
                    <Calendar size={14} className="text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="mt-6 space-y-3">
                  {exp.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 size={16} className="text-sky-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Achievement Callout */}
                <div className="mt-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/50 flex items-center gap-3 text-xs text-emerald-300">
                  <Award size={18} className="shrink-0 text-emerald-400" />
                  <span><strong>Key Outcome:</strong> {exp.achievement}</span>
                </div>

                {/* Technologies Tag Footer */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">Systems &amp; Frameworks:</span>
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-xl text-xs font-mono bg-slate-800/80 text-sky-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
