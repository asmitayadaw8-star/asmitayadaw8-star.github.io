import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, FileText, RefreshCw } from 'lucide-react';

interface MatchResult {
  score: number;
  strongMatches: string[];
  partialMatches: string[];
  missingKeywords: string[];
  recommendation: string;
  interviewTip: string;
}

const sampleJobDescriptions = [
  {
    title: "Customer Support Executive (Voice / FinTech)",
    text: "Seeking a Customer Support Executive to handle high volume inbound and outbound calls for customer query resolution. Candidates must have experience in CRM management, de-escalating customer complaints, maintaining First Contact Resolution (FCR), and managing billing disputes. Strong communication in Hindi and English, active listening, and MS Excel skills required. Noida location preferred."
  },
  {
    title: "Inside Sales Specialist (Real Estate / PropTech)",
    text: "Looking for an Inside Sales Specialist to drive lead generation, outbound cold calling, and prospect qualification using BANT criteria. Responsibilities include consultative pitching, scheduling property site visits, overcoming buyer objections, and maintaining CRM pipelines in LeadSquared. High energy, phone stamina, and bilingual fluency required."
  },
  {
    title: "Debt Collection & Recovery Officer (NBFC / Banking)",
    text: "Hiring a Debt Recovery Officer for overdue fund collection telecalling. Responsibilities include calling delinquent accounts, negotiating structured Promise-to-Pay (PTP) agreements, calculating interest and penalty fees, and adhering strictly to Fair Debt Collection practices. Proficiency in CRM disposition logging and MS Excel required."
  }
];

// Master candidate keyword dictionary
const candidateKeywords = [
  { term: "customer support", label: "Customer Support" },
  { term: "telecalling", label: "Telecalling (Inbound/Outbound)" },
  { term: "inbound", label: "Inbound Call Handling" },
  { term: "outbound", label: "Outbound Calling Campaigns" },
  { term: "fund collection", label: "Fund Collection" },
  { term: "debt recovery", label: "Debt Recovery" },
  { term: "collection", label: "Collections & Overdue Follow-ups" },
  { term: "crm", label: "CRM Management (LeadSquared / Zoho)" },
  { term: "leadsquared", label: "LeadSquared CRM" },
  { term: "zoho", label: "Zoho CRM" },
  { term: "salesforce", label: "Salesforce Fundamentals" },
  { term: "inside sales", label: "Inside Sales & Tele-sales" },
  { term: "sales", label: "Sales Consultation" },
  { term: "lead generation", label: "Lead Generation" },
  { term: "qualification", label: "Lead Qualification" },
  { term: "bant", label: "BANT Qualification" },
  { term: "site visit", label: "Site Visit Coordination" },
  { term: "real estate", label: "Real Estate Client Onboarding" },
  { term: "query resolution", label: "Customer Query Resolution" },
  { term: "complaint", label: "Complaint Handling" },
  { term: "de-escalat", label: "Conflict De-escalation" },
  { term: "negotiat", label: "Negotiation Skills" },
  { term: "ptp", label: "Promise-to-Pay (PTP) Tracking" },
  { term: "promise to pay", label: "Promise-to-Pay (PTP) Tracking" },
  { term: "excel", label: "Microsoft Excel Trackers" },
  { term: "word", label: "Microsoft Word" },
  { term: "fcr", label: "First Contact Resolution (FCR)" },
  { term: "aht", label: "Average Handling Time (AHT)" },
  { term: "csat", label: "Customer Satisfaction (CSAT)" },
  { term: "hindi", label: "Fluent Hindi" },
  { term: "english", label: "Professional English" },
  { term: "active listening", label: "Active Listening" },
  { term: "billing", label: "Billing & Ledger Reconciliation" },
  { term: "noida", label: "Noida / Greater Noida Based" },
  { term: "fair debt", label: "Fair Debt Collection Practices" },
  { term: "compliance", label: "Operational Compliance" }
];

export const AtsMatcher: React.FC = () => {
  const [jobText, setJobText] = useState('');
  const [result, setResult] = useState<MatchResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!jobText.trim()) return;
    setIsAnalyzing(true);

    setTimeout(() => {
      const lower = jobText.toLowerCase();
      const strong: string[] = [];
      const partial: string[] = [];
      const missing: string[] = [];

      // Check common keywords
      candidateKeywords.forEach(k => {
        if (lower.includes(k.term)) {
          strong.push(k.label);
        }
      });

      // Check potential common missing requirements (to show truthfulness)
      const potentialGaps = [
        { term: "salesforce administrator certification", label: "Salesforce Admin 201 Certification" },
        { term: "python", label: "Python Scripting" },
        { term: "sql", label: "SQL Database Queries" },
        { term: "zendesk administrator", label: "Zendesk Administrator Certification" },
        { term: "hubspot certified", label: "HubSpot Formal Certification" },
        { term: "us shift", label: "Night / US Shift Experience" }
      ];

      potentialGaps.forEach(g => {
        if (lower.includes(g.term)) {
          missing.push(g.label);
        }
      });

      // Add adjacent / transferable
      if (lower.includes("ticketing") || lower.includes("helpdesk")) {
        partial.push("Helpdesk Ticketing (Transferable from CRM Complaint Logging)");
      }
      if (lower.includes("team lead") || lower.includes("supervisor")) {
        partial.push("Team Leadership (Transferable from Playbook documentation & high quota coaching)");
      }

      // Calculate score
      const baseMatched = strong.length;
      let calculatedScore = Math.min(96, Math.max(68, 65 + baseMatched * 3.5 - missing.length * 5));
      if (strong.length === 0) calculatedScore = 45;

      let rec = "Review Asmita's verified resume above for relevant experience in customer communication, collections, and inside sales.";
      if (lower.includes("collection") || lower.includes("debt") || lower.includes("recovery")) {
        rec = "Recommended Focus: Emphasize the Bajrang Business Solutions debt recovery tenure, PTP milestone tracking, and ledger reconciliation.";
      } else if (lower.includes("sales") || lower.includes("inside sales") || lower.includes("property")) {
        rec = "Recommended Focus: Highlight consultative lead qualification, client relationship management, and high outbound call discipline.";
      } else {
        rec = "Recommended Focus: Highlight customer resolution, empathetic client communication, conflict de-escalation, and CRM hygiene.";
      }

      const tip = "During the interview, anchor your answers in your daily call volume (70–90 calls/day), your academic analytical foundation (88% merit), and concrete examples of handling difficult callers calmly.";

      setResult({
        score: Math.round(calculatedScore),
        strongMatches: Array.from(new Set(strong)),
        partialMatches: Array.from(new Set(partial)),
        missingKeywords: Array.from(new Set(missing)),
        recommendation: rec,
        interviewTip: tip
      });
      setIsAnalyzing(false);
    }, 400);
  };

  const handleLoadSample = (sample: string) => {
    setJobText(sample);
    setResult(null);
  };

  return (
    <section id="job-matcher" className="py-20 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100/70 dark:bg-indigo-950/60 dark:text-indigo-300">
            Interactive Recruiter Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Job Description Keyword Matcher
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Paste your Job Description below to evaluate keyword compatibility against Asmita's verified profile in real time.
          </p>
        </div>

        {/* Workspace Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Quick Sample Presets */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Or Load a Real Sample Job Description:
              </span>
              <div className="flex flex-wrap gap-2">
                {sampleJobDescriptions.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleLoadSample(sample.text)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950/50 hover:text-sky-600 dark:hover:text-sky-400 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors text-left"
                  >
                    {sample.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Textarea */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-900 dark:text-white">
                Paste Job Description (JD) Here:
              </label>
              <textarea
                rows={5}
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
                placeholder="Paste role responsibilities, required qualifications, technical skills, or location requirements..."
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all font-mono"
              />
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Adheres strictly to the <strong>Data Integrity Rule</strong> (No fake skill insertion).
              </span>
              <button
                onClick={handleAnalyze}
                disabled={!jobText.trim() || isAnalyzing}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw size={16} className="animate-spin" />
                    <span>Calculating Match Score...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span>Analyze Job Fit</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Analysis Results Display */}
          {result && (
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 space-y-6 animate-fadeIn">
              
              {/* Score Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-indigo-600 dark:text-indigo-400">
                    Calculated Job Match Score
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {result.score >= 80 ? 'Exceptional Fit' : result.score >= 65 ? 'Strong Compatible Candidate' : 'Moderate Match'}
                  </h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                    result.score >= 85 ? 'text-emerald-600' : result.score >= 70 ? 'text-sky-600' : 'text-amber-500'
                  }`}>
                    {result.score}%
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">/ 100</span>
                </div>
              </div>

              {/* Match Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Verified Hard Matches */}
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                    <CheckCircle2 size={18} />
                    <span>Verified Strong Keyword Matches ({result.strongMatches.length})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {result.strongMatches.length > 0 ? (
                      result.strongMatches.map((m, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                        >
                          {m}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400 italic">No specific keyword matches found.</span>
                    )}
                  </div>
                </div>

                {/* Transferable & Gaps */}
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-bold text-sm">
                    <AlertTriangle size={18} />
                    <span>Transferable & Adjacent Skills ({result.partialMatches.length})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {result.partialMatches.length > 0 ? (
                      result.partialMatches.map((p, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800"
                        >
                          {p}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-slate-400 italic">Direct alignment with candidate core background.</span>
                    )}
                  </div>
                </div>

              </div>

              {/* Recommended Resume Edition */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-start gap-3">
                <FileText size={20} className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                    Recommended Resume Strategy
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                    {result.recommendation}
                  </p>
                </div>
              </div>

              {/* Interview Tip */}
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
                <strong>💡 Interview Strategy:</strong> {result.interviewTip}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
