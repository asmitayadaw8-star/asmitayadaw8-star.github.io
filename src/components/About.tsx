import React from 'react';
import { Award, HeartHandshake, Headphones, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 dark:bg-sky-950/60 dark:text-sky-300">
            Professional Story
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connecting People, Resolving Friction, Delivering Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A customer experience advocate combining high call resilience with intellectual precision and data integrity.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            <p>
              I am an energetic, disciplined, and customer-oriented professional specialized in <strong>Customer Support, Telecalling Operations, and Inside Sales</strong>. Over the past 9+ months across corporate hubs in Noida, I have worked directly on the frontline of customer interactions—handling complex payment disputes, delinquent debt recovery, financial product advisory, and real estate sales consultations.
            </p>
            <p>
              During my 6-month tenure at <strong>Bajrang Business Solutions</strong>, I dialed between 70 to 90 customer accounts daily as a Fund Collection Executive. In this high-stakes environment, I mastered the art of <em>Listen-Validate-Reframe</em>: de-escalating angry callers, clarifying interest calculations, and negotiating structured <strong>Promise-to-Pay (PTP)</strong> schedules that preserved customer dignity while achieving company recovery quotas with zero compliance grievances.
            </p>
            <p>
              My time at <strong>Fincrif India Private Limited</strong> and my current appointment as Sales Executive at <strong>Ambr Homes Private Limited</strong> expanded my capabilities into consultative inside sales—qualifying buyer intent using BANT frameworks, booking site walkthroughs, overcoming price objections, and maintaining strict CRM pipeline hygiene.
            </p>
            <p>
              Beyond the headset, I bring a strong analytical and quantitative foundation, having graduated with <strong>First Division in 12th Science (Biology Distinction)</strong> and earning an <strong>88.33% academic merit</strong> in 10th standard (94 in Mathematics, 90 in English). I believe every customer conversation is an opportunity to strengthen brand trust.
            </p>

            {/* Language Badges */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Languages:</span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-sm">
                Hindi (Native / Fluent)
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-sm">
                English (Professional Working - B1)
              </span>
            </div>
          </div>

          {/* Core Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/50 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0">
                <Headphones size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">High Call Stamina & Composure</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Proven ability to execute 70–90+ calls daily while maintaining calm, respectful, and energetic articulation on every single dial.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">De-escalation & Conflict Resolution</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Adept at transforming heated objections and delinquent payment anxiety into constructive, structured payment solutions.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <Shield size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">CRM Discipline & Data Integrity</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Meticulous note-taking, precise disposition tagging (PTP, Callback, Escalated), and zero lead leakage in LeadSquared and Zoho.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Strong Academic Foundation</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Scored 94/100 in Mathematics and 90/100 in English in 10th (88.33% overall) and Biology distinction in 12th Science.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
