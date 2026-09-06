import React from 'react';
import { candidateData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 dark:bg-sky-950/60 dark:text-sky-300">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Educational Credentials
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Demonstrating strong analytical discipline, quantitative foundation, and high academic merit.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {candidateData.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-300 dark:hover:border-sky-700 transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg">
                    <Calendar size={13} className="text-sky-500" />
                    <span>{edu.year}</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {edu.board}
                  </div>
                </div>

                {/* Score Banner */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    Performance:
                  </span>
                  <span className="text-xs font-extrabold text-sky-600 dark:text-sky-400">
                    {edu.score}
                  </span>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Badge Footer */}
              {edu.badge && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  <Award size={16} className="text-emerald-500 shrink-0" />
                  <span>{edu.badge}</span>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
