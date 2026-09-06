import React from 'react';
import { FileText, Download, Printer, ShieldCheck } from 'lucide-react';

interface ResumeCardProps {
  title: string;
  targetRole: string;
  description: string;
  htmlPath: string;
  badge?: string;
  keywords: string[];
}

export const ResumeDownload: React.FC = () => {
  const resumes: ResumeCardProps[] = [
    {
      title: "Master ATS Resume",
      targetRole: "All-Round Telecalling, Support & Sales Roles",
      description: "Complete, balanced profile highlighting 9+ months experience across Bajrang Business Solutions, Fincrif India, and Ambr Homes.",
      htmlPath: "./resumes/Asmita_Yadav_Master_Resume.html",
      badge: "Most Versatile",
      keywords: ["Customer Support", "Debt Recovery", "Inside Sales", "LeadSquared CRM", "MS Excel", "PTP Tracking"]
    },
    {
      title: "Customer Support Executive Resume",
      targetRole: "Voice / Inbound Customer Support & CX Roles",
      description: "Optimized specifically for customer service, dispute resolution, First Contact Resolution (FCR), and helpdesk workflows.",
      htmlPath: "./resumes/Asmita_Yadav_Customer_Support_Resume.html",
      badge: "CX Focused",
      keywords: ["Query Resolution", "De-escalation", "CSAT", "SLA Adherence", "Active Listening", "Ticket Logging"]
    },
    {
      title: "Inside Sales Specialist Resume",
      targetRole: "Tele-sales, BDR & Lead Qualification Roles",
      description: "Tailored for outbound lead generation, BANT prospect screening, property and financial consulting, and sales pipeline tracking.",
      htmlPath: "./resumes/Asmita_Yadav_Inside_Sales_Resume.html",
      badge: "Sales Focused",
      keywords: ["Outbound Cold Calling", "BANT Qualification", "Site Visits", "Consultative Selling", "Pipeline Tracking"]
    },
    {
      title: "Debt Collection & Recovery Resume",
      targetRole: "Fund Collection, Delinquency & Recovery Officer",
      description: "Engineered for financial debt recovery, early/mid-stage delinquency management, and Promise-to-Pay (PTP) negotiation.",
      htmlPath: "./resumes/Asmita_Yadav_Debt_Collection_Resume.html",
      badge: "Recovery Focused",
      keywords: ["Outbound Collections", "PTP Negotiation", "Settlement Plans", "Fair Debt Practices", "Ledger Reconciliation"]
    }
  ];

  return (
    <section id="resumes" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 dark:bg-sky-950/60 dark:text-sky-300">
            ATS-Optimized Resumes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Role-Specific, Clean-Parsed ATS Resume Center
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Engineered for 90–95%+ ATS parsing accuracy with single-column layouts, standard headers, and print-to-PDF formatting.
          </p>
        </div>

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumes.map((res, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-sky-300 dark:hover:border-sky-700 transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {res.title}
                      </h3>
                      {res.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-sky-100 dark:bg-sky-950 dark:text-sky-300 text-sky-800">
                          {res.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                      Target: {res.targetRole}
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-2xl bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-2xs">
                    <FileText size={22} />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {res.description}
                </p>

                {/* Priority Keywords */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Priority Keywords Targeted:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {res.keywords.map((kw, kIdx) => (
                      <span
                        key={kIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-3">
                <a
                  href={res.htmlPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-sm transition-all"
                >
                  <Printer size={15} />
                  <span>Preview & Save to PDF</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Plain Text Download Callout */}
        <div className="mt-8 p-6 rounded-3xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Looking for a 100% Plain ASCII Text Resume (.txt)?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Ideal for legacy ATS portals (Workday, Taleo) that strip styling or reject rich PDF attachments.
              </p>
            </div>
          </div>
          <a
            href="./resumes/Asmita_Yadav_ATS_Resume.txt"
            download="Asmita_Yadav_ATS_Resume.txt"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 font-bold text-xs shadow-sm transition-opacity shrink-0"
          >
            <Download size={15} />
            <span>Download .TXT Resume</span>
          </a>
        </div>

        {/* ATS Formatting Guarantee */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <ShieldCheck size={16} className="text-emerald-500" />
          <span>No tables, no multi-column parsing traps, no graphics replacing words. Standard section headers.</span>
        </div>

      </div>
    </section>
  );
};
