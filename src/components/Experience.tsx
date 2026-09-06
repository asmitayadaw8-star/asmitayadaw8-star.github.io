import React from 'react';
import { candidateData } from '../data/portfolioData';
import { Building2, MapPin, Calendar, CheckCircle2, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 dark:bg-sky-950/60 dark:text-sky-300">
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Frontline track record in fund collection, debt negotiation, inside sales, and customer relationship management.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {candidateData.experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-300 dark:hover:border-sky-700 transition-all hover:shadow-md"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400">
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <MapPin size={15} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg shrink-0">
                  <Calendar size={14} className="text-sky-600 dark:text-sky-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-6 space-y-3">
                {exp.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 size={16} className="text-sky-500 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Achievement Callout */}
              <div className="mt-6 p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/60 flex items-center gap-3 text-xs font-medium text-emerald-800 dark:text-emerald-300">
                <Award size={18} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span><strong>Key Outcome:</strong> {exp.achievement}</span>
              </div>

              {/* Technologies Tag Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">Tools & Scope:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
