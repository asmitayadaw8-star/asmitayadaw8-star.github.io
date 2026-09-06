import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneCall, Users, ShieldCheck, MapPin, Database, 
  CheckCircle2, Sparkles, MessageCircle, BarChart3 
} from 'lucide-react';

interface Stage {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  metric: string;
  metricLabel: string;
  tools: string[];
  workflow: string[];
  dialogueSnippet: {
    caller: string;
    asmita: string;
  };
  impact: string;
}

export const OperationalPlaybook: React.FC = () => {
  const stages: Stage[] = [
    {
      id: "voice-engine",
      title: "1. High-Volume Voice Engine",
      subtitle: "Daily Stamina & Active Listening",
      icon: <PhoneCall className="w-5 h-5 text-sky-400" />,
      metric: "70–90+",
      metricLabel: "Daily Outbound Calls",
      tools: ["Cloud Telephony", "Auto-Dialers", "Call Logging Trackers"],
      workflow: [
        "Rapid lead contact within 3 minutes of fresh inquiry submission.",
        "Calm, articulate greeting establishing instant rapport and trust.",
        "Active listening to identify root pain points and urgency levels.",
        "Instant disposition logging to categorize lead temperature."
      ],
      dialogueSnippet: {
        caller: "\"I filled out a property form yesterday, but I don't want anyone spamming my phone with calls.\"",
        asmita: "\"I completely understand and respect your time, sir. I am only calling to confirm the exact property configuration you requested so I only share verified options within your budget. Would a 2-minute overview work right now?\""
      },
      impact: "Maintained consistent high-volume operational discipline with zero dropped call queues across assigned shift hours."
    },
    {
      id: "bant-qualification",
      title: "2. BANT Lead Qualification",
      subtitle: "High-Value Buyer Intent Profiling",
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      metric: "100%",
      metricLabel: "Pre-Screening Accuracy",
      tools: ["BANT Matrix", "LeadSquared CRM", "Zoho CRM"],
      workflow: [
        "Budget: Establish verified capital readiness and financing expectations.",
        "Authority: Confirm decision-maker involvement (family, partners, sole buyer).",
        "Need: Extract exact space, amenities, and connectivity requirements.",
        "Timeline: Prioritize buyers ready to inspect and finalize within 30 days."
      ],
      dialogueSnippet: {
        caller: "\"We are looking for a 3 BHK in Greater Noida West, but our budget is capped at 75 Lakhs.\"",
        asmita: "\"That is a realistic budget for high-demand ready-to-move projects. Are you planning self-funding or a pre-approved home loan, and would you be available for a Saturday morning walkthrough with your family?\""
      },
      impact: "Eliminated unqualified site visits and boosted sales closure velocity by 25% for senior relationship managers."
    },
    {
      id: "ptp-negotiation",
      title: "3. Empathetic PTP Negotiation",
      subtitle: "Calm Conflict De-escalation & Recovery",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      metric: "95%+",
      metricLabel: "PTP Fulfillment Rate",
      tools: ["Debt Recovery Protocols", "RBI Fair Practices", "Payment Gateways"],
      workflow: [
        "De-escalate angry or defensive customers through non-adversarial empathy.",
        "Transparently calculate and explain remaining balances and accrued interest.",
        "Negotiate realistic, structured installment plans tailored to cashflow.",
        "Lock in binding Promise-to-Pay (PTP) commitments with confirmation SMS."
      ],
      dialogueSnippet: {
        caller: "\"I have financial issues and cannot pay the entire lump sum overdue amount today! Stop calling me!\"",
        asmita: "\"I hear you, and my goal today is to assist you in protecting your credit standing, not add stress. Let us split this balance into two manageable installments so you can pay comfortably without additional penalty fees. Can we set the first installment for this Friday?\""
      },
      impact: "Maintained a 95%+ PTP fulfillment rate across 6 months at Bajrang Business Solutions with zero compliance violations."
    },
    {
      id: "site-visit",
      title: "4. Site Visit & Client Onboarding",
      subtitle: "Ambr Homes Real Estate Pipeline",
      icon: <MapPin className="w-5 h-5 text-amber-400" />,
      metric: "0",
      metricLabel: "Dropped Inquiries",
      tools: ["WhatsApp Business API", "Google Maps Pins", "Brochure PDFs"],
      workflow: [
        "Instant dispatch of digital brochures and floor plans upon call conclusion.",
        "Automated WhatsApp confirmation containing exact Google Maps pin and point-of-contact.",
        "24-hour courtesy reminder call confirming transport and visitor headcount.",
        "Post-visit satisfaction follow-up to address remaining contract queries."
      ],
      dialogueSnippet: {
        caller: "\"Can you send me the exact project location and master layout so I can review it before driving down?\"",
        asmita: "\"I have just dispatched the high-resolution master brochure, approved layout plans, and live Google Maps pin directly to your WhatsApp. I will be on standby at the experience center to welcome you personally.\""
      },
      impact: "Maximized physical attendance rates for weekend property walkthroughs across Greater Noida West projects."
    },
    {
      id: "crm-hygiene",
      title: "5. CRM Pipeline & Data Hygiene",
      subtitle: "Zero-Defect Tracking & Reporting",
      icon: <Database className="w-5 h-5 text-purple-400" />,
      metric: "100%",
      metricLabel: "CRM Data Fidelity",
      tools: ["LeadSquared", "Zoho CRM", "MS Excel VLOOKUP"],
      workflow: [
        "Real-time update of call disposition codes, timestamps, and customer notes.",
        "Categorization into High-Intent, Scheduled Visit, Follow-up, or Nurture.",
        "Daily reconciliation with senior management to identify pipeline bottlenecks.",
        "Ensuring complete compliance with privacy standards and internal SOPs."
      ],
      dialogueSnippet: {
        caller: "[Internal Record Audit]",
        asmita: "\"100% of calls, rescheduled appointments, and payment commitments logged within 5 minutes of call completion, ensuring transparent visibility for management and underwriting teams.\""
      },
      impact: "Seamless handoffs to underwriting and senior sales executives with zero data ambiguity or missed follow-ups."
    }
  ];

  const [activeStageId, setActiveStageId] = useState<string>(stages[0].id);
  const currentStage = stages.find(s => s.id === activeStageId) || stages[0];

  return (
    <section id="playbook" className="py-24 bg-[#07090e] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.06),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-800/70 text-sky-400 text-xs font-mono mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE CALL &amp; RELATIONSHIP PLAYBOOK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            How I Drive Operational Results
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore the 5-stage communication architecture I execute daily to transform cold calls into satisfied clients, recovered accounts, and closed real estate site visits.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="bg-[#0b0f19] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {stages.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-sky-950/60 border-sky-500/60 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                      : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                      {stage.icon}
                    </div>
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-sky-400' : 'text-slate-500'}`}>
                      {stage.metric}
                    </span>
                  </div>
                  <div>
                    <div className={`text-xs font-bold leading-snug ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {stage.title}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 font-mono line-clamp-1">
                      {stage.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Display Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              
              {/* Left Details: Workflow & Tools */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                      OPERATIONAL METHODOLOGY
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-[10px] font-mono font-bold">
                      VERIFIED TENURE
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {currentStage.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    {currentStage.subtitle}
                  </p>
                </div>

                {/* Workflow Checklist */}
                <div className="space-y-3">
                  <div className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
                    Execution Steps:
                  </div>
                  <div className="space-y-2">
                    {currentStage.workflow.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Tech Badges */}
                <div>
                  <div className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Systems &amp; Platforms Utilized:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentStage.tools.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-xl bg-slate-800/80 border border-slate-700/60 text-sky-300 text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Details: Dialogue Simulation & Quantified Impact */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Metric Spotlight Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-950/50 via-slate-900/80 to-slate-900 border border-sky-800/40">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-3xl font-extrabold text-white font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                        {currentStage.metric}
                      </div>
                      <div className="text-xs font-semibold text-slate-300 mt-0.5">
                        {currentStage.metricLabel}
                      </div>
                    </div>
                    <BarChart3 className="w-6 h-6 text-sky-400" />
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                    <strong>Quantified Impact:</strong> {currentStage.impact}
                  </div>
                </div>

                {/* Real-world Call Transcript Simulation */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Real-World Dialogue Scenario</span>
                  </div>

                  {/* Customer Line */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/60 text-xs space-y-1">
                    <div className="font-mono text-[10px] text-amber-400 font-bold uppercase">Customer Objection / Inquiry:</div>
                    <div className="text-slate-300 italic">{currentStage.dialogueSnippet.caller}</div>
                  </div>

                  {/* Asmita's Response */}
                  <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-800/50 text-xs space-y-1">
                    <div className="font-mono text-[10px] text-sky-400 font-bold uppercase">Asmita's De-escalation &amp; Discovery:</div>
                    <div className="text-slate-200 font-medium">{currentStage.dialogueSnippet.asmita}</div>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
