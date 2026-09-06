import React from 'react';
import { FileText, Download, Eye, ShieldCheck, CheckCircle2, Award, Building2 } from 'lucide-react';

export const ResumeDownload: React.FC = () => {
  const resumePdfPath = "./resumes/Asmita_Yadav_Resume.pdf";

  return (
    <section id="resume" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 dark:bg-sky-950/60 dark:text-sky-300">
            Official Curriculum Vitae
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Latest Professional Resume
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Verified frontline voice operations, debt collection, inside sales consulting, and educational credentials.
          </p>
        </div>

        {/* Single Featured Resume Showcase */}
        <div className="max-w-3xl mx-auto bg-slate-50 dark:bg-slate-800/60 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-8 sm:p-10 shadow-sm hover:border-sky-300 dark:hover:border-sky-700 transition-all hover:shadow-md space-y-8">
          
          {/* Top Info Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shrink-0">
                <FileText size={28} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Asmita Yadav — Official Resume
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    Latest Edition
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                  Format: Standard PDF (238 KB) • Verified Experience & Education
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-600 text-xs font-bold border border-slate-200 dark:border-slate-600 shadow-2xs transition-all"
              >
                <Eye size={16} />
                <span>View Online</span>
              </a>
              <a
                href={resumePdfPath}
                download="Asmita_Yadav_Resume.pdf"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-sm transition-all"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Verified Work Experience:
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-sky-500 mt-0.5 shrink-0" />
                <span><strong>Sales Executive</strong> — Ambr Homes Private Limited</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-sky-500 mt-0.5 shrink-0" />
                <span><strong>Fund Collection Executive</strong> — Bajrang Business Solutions (6 Mos)</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={16} className="text-sky-500 mt-0.5 shrink-0" />
                <span><strong>Assistant Sales Consultant</strong> — Fincrif India Private Limited (3 Mos)</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Academic Merit & Systems:
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <Award size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                <span><strong>12th Science (Biology Distinction)</strong> — UPMSP First Division</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <Award size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                <span><strong>10th High School (88.33% Merit)</strong> — Maths: 94, English: 90</span>
              </div>
              <div className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                <Building2 size={16} className="text-indigo-500 mt-0.5 shrink-0" />
                <span><strong>Systems & CRM:</strong> LeadSquared, Zoho CRM, MS Excel</span>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
            <ShieldCheck size={20} className="text-emerald-500 shrink-0" />
            <span>
              <strong>Recruiter Guarantee:</strong> All employment dates, organizations, and marks in this resume are directly verified against authentic experience letters and UP Board certificates.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
