import React from 'react';
import { candidateData } from '../data/portfolioData';
import { PhoneCall, ShieldAlert, TrendingUp, Users, Wrench, Globe, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Voice & Calling Operations":
        return <PhoneCall size={20} className="text-sky-600 dark:text-sky-400" />;
      case "Debt Collection & Recovery":
        return <ShieldAlert size={20} className="text-rose-600 dark:text-rose-400" />;
      case "Inside Sales & Conversion":
        return <TrendingUp size={20} className="text-emerald-600 dark:text-emerald-400" />;
      case "Customer Experience (CX)":
        return <Users size={20} className="text-amber-600 dark:text-amber-400" />;
      case "CRM & Productivity Tools":
        return <Wrench size={20} className="text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Globe size={20} className="text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 dark:bg-sky-950/60 dark:text-sky-300">
            Competency Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Skills & Operational Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Organized across voice operations, debt negotiation, sales conversion, and CRM management.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidateData.skillsByCategory.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-sky-300 dark:hover:border-sky-700 transition-all hover:shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200 dark:border-slate-700">
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-700 shadow-xs">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-600 shadow-2xs hover:border-sky-400 dark:hover:border-sky-500 transition-colors"
                  >
                    <CheckCircle2 size={12} className="text-sky-500 shrink-0" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Footnote */}
        <div className="mt-12 p-4 rounded-xl bg-sky-50/60 dark:bg-slate-800/40 border border-sky-100 dark:border-slate-700 text-center text-xs text-slate-600 dark:text-slate-400">
          ✨ <strong>Recruiter Note:</strong> All skills listed above are directly verified through verified employment at Bajrang Business Solutions and Fincrif India, as well as formal UP Board educational records.
        </div>

      </div>
    </section>
  );
};
