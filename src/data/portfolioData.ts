export interface Project {
  id: string;
  title: string;
  category: 'real' | 'proposed';
  categoryLabel: string;
  role: string;
  organization: string;
  oneLiner: string;
  tags: string[];
  problem: string;
  solution: string;
  architecture?: string[];
  keyFeatures: string[];
  challenges: string;
  results: string;
  takeaway: string;
  demoType: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  type: string;
  highlights: string[];
  technologies: string[];
  achievement: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  board: string;
  year: string;
  score: string;
  badge?: string;
  highlights: string[];
}

export const candidateData = {
  name: "Asmita Yadav",
  title: "Customer Support Executive & Inside Sales Specialist",
  tagline: "Empathetic communication. Tenacious problem solving. Data-driven customer relationships.",
  bio: "Dedicated, articulate, and customer-focused professional with 9+ months of frontline voice experience handling high-volume outbound and inbound calling, debt collection, inside sales consultations, and CRM management across Noida corporate hubs. Combines exceptional academic aptitude (88% UP Board merit and Biology Distinction) with high emotional resilience, calm conflict de-escalation, and persuasive communication to consistently exceed organizational targets.",
  location: "Noida / Greater Noida, Uttar Pradesh, India",
  email: "asmitayadaw8@gmail.com",
  phone: "+91 9517650366",
  linkedin: "https://www.linkedin.com/in/asmita-yadaw-a309443aa/",
  github: "https://github.com/asmitayadaw8-star",
  stats: [
    { label: "Frontline Calling Experience", value: "9+ Mos" },
    { label: "Daily Call Capacity", value: "70–90+" },
    { label: "High School Academic Merit", value: "88.3%" },
    { label: "PTP Fulfillment & CRM Accuracy", value: "95%+" }
  ],
  skillsByCategory: [
    {
      category: "Voice & Calling Operations",
      skills: ["Inbound Customer Support", "Outbound Telecalling", "Cold Calling", "Warm Follow-ups", "Call Script Adherence", "Active Listening", "AHT Optimization", "First Contact Resolution (FCR)"]
    },
    {
      category: "Debt Collection & Recovery",
      skills: ["Delinquent Account Management", "Promise-to-Pay (PTP) Tracking", "Payment Schedule Restructuring", "Fair Debt Collection Practices", "Interest & Fee Calculations", "Ledger Reconciliation"]
    },
    {
      category: "Inside Sales & Conversion",
      skills: ["Lead Qualification (BANT criteria)", "Consultative Pitching", "Needs Discovery", "Sales Funnel Tracking", "Objection Handling", "Appointment Scheduling"]
    },
    {
      category: "Customer Experience (CX)",
      skills: ["Conflict De-escalation", "Customer Retention", "Complaint Resolution", "CSAT Optimization", "Rapport Building", "Ticket Logging"]
    },
    {
      category: "CRM & Productivity Tools",
      skills: ["LeadSquared", "Zoho CRM", "Salesforce Fundamentals", "Microsoft Excel (VLOOKUP, Pivot Tables)", "Cloud Telephony Dialers", "Google Workspace"]
    },
    {
      category: "Languages & Communication",
      skills: ["Hindi (Native / Fluent)", "English (Professional Working Proficiency - B1)", "Persuasive Articulation", "Cross-Cultural Communication"]
    }
  ],
  experiences: [
    {
      id: "ambr-homes",
      role: "Sales Executive",
      company: "Ambr Homes Private Limited",
      location: "Greater Noida West, UP",
      period: "August 2026 – Present",
      badge: "Current Role",
      type: "Real Estate & Client Advisory",
      highlights: [
        "Manage high-intent inbound customer inquiries regarding premium residential and commercial real estate projects across Greater Noida West.",
        "Deliver consultative advisory sessions to understand buyer requirements, family preferences, and investment budgets, matching clients with suitable properties.",
        "Coordinate on-ground property site visits, liaising between prospective buyers and senior sales managers to accelerate closing velocity.",
        "Maintain and update CRM lead pipelines with call disposition notes, appointment schedules, and client negotiation stages with 100% data fidelity."
      ],
      technologies: ["Real Estate CRM", "WhatsApp Business API", "Lead Qualification", "Site Visit Scheduling"],
      achievement: "Zero dropped leads across assigned campaigns with structured multi-touch attendance confirmation."
    },
    {
      id: "bajrang-solutions",
      role: "Fund Collection Executive (Telecalling) / Customer Support",
      company: "Bajrang Business Solutions",
      location: "Sector 63, Noida, UP",
      period: "February 2026 – August 2026 (6 Months)",
      badge: "Verified Tenure",
      type: "Debt Recovery & Customer Support",
      highlights: [
        "Managed 70–90 outbound calls daily to delinquent customer accounts to facilitate overdue fund recovery and overdue payment settlements.",
        "Clearly explained interest accruals, remaining loan balances, and payment deadlines, resolving account discrepancies on first contact.",
        "Negotiated flexible, manageable payment installment plans with customers experiencing financial hardship, securing binding Promise-to-Pay (PTP) agreements.",
        "Maintained strict adherence to professional conduct and fair debt collection guidelines, de-escalating angry callers while protecting brand reputation.",
        "Recorded precise call logs, customer commitments, and disposition codes in the company CRM system, supporting weekly management reconciliation.",
        "Consistently achieved assigned monthly recovery quotas while upholding high customer satisfaction and professional service standards."
      ],
      technologies: ["LeadSquared CRM", "Cloud Dialers", "PTP Tracking", "MS Excel", "Fair Debt Practices"],
      achievement: "Maintained 95%+ Promise-to-Pay tracking fulfillment with zero regulatory compliance complaints."
    },
    {
      id: "fincrif-india",
      role: "Assistant Sales Consultant (Telecalling)",
      company: "Fincrif India Private Limited",
      location: "Sector 3, Noida, UP",
      period: "May 2026 – August 2026 (3 Months)",
      badge: "Verified Tenure",
      type: "Inside Sales & Financial Services",
      highlights: [
        "Handled inbound and outbound telecalling campaigns promoting personal finance, loan solutions, and business advisory services.",
        "Screened and qualified prospective leads based on credit eligibility, business revenue, and financing requirements to build a high-quality pipeline.",
        "Educated clients on interest rates, repayment tenures, and application documentation, addressing customer objections with clarity and confidence.",
        "Collaborated with senior relationship managers to schedule consultations and hand over pre-qualified prospects for final underwriting and closure.",
        "Maintained detailed calling trackers and updated CRM records daily, minimizing lead leakage and improving follow-up response speed."
      ],
      technologies: ["Lending CRM", "Inbound Call Routing", "BANT Qualification", "Financial Product Pitching"],
      achievement: "Accelerated lead response times and increased qualified consultation handoffs to underwriting."
    }
  ] as ExperienceItem[],
  education: [
    {
      degree: "Intermediate (12th Standard — Science Stream)",
      institution: "Maa Gayatri Intermediate College, Gorakhpur",
      board: "Uttar Pradesh Board (UPMSP)",
      year: "2021 – 2023",
      score: "First Division (60.8%)",
      badge: "Biology Distinction (78/100)",
      highlights: [
        "Rigorous science curriculum encompassing Biology, Chemistry, Physics, and English.",
        "Earned official Distinction 'D' in Biology (78/100).",
        "Scored 90/100 in Moral, Physical Education & Sports."
      ]
    },
    {
      degree: "High School (10th Standard — All General Subjects)",
      institution: "Banshi Singh Inter College, Gorakhpur",
      board: "Uttar Pradesh Board (UPMSP)",
      year: "2019 – 2021",
      score: "88.33% (530 / 600) — Outstanding Merit",
      badge: "Grade A1 / A2 Across All Subjects",
      highlights: [
        "Mathematics: 94 / 100 (Grade A1) — Quantitative analysis foundation.",
        "English: 90 / 100 (Grade A2) — Strong verbal & written comprehension.",
        "Hindi: 89 / 100 (Grade A2) & Science: 87 / 100 (Grade A2)."
      ]
    }
  ] as EducationItem[],
  projects: [
    {
      id: "real-debt-recovery",
      title: "Outbound Debt Recovery & Fund Collection Operations",
      category: "real",
      categoryLabel: "Verified Work Experience Case Study",
      role: "Fund Collection Executive",
      organization: "Bajrang Business Solutions",
      oneLiner: "Structured high-volume outbound negotiation framework recovering delinquent consumer balances while maintaining fair practice compliance.",
      tags: ["Debt Collection", "PTP Tracking", "De-escalation", "LeadSquared CRM", "Excel Logs"],
      problem: "Delinquent consumer accounts in 30-to-90 days overdue buckets required disciplined daily contact to recover overdue capital without triggering customer harassment grievances.",
      solution: "Implemented an empathetic 'Listen-Validate-Reframe' dialogue structure, verified real borrower cash flow dates, and negotiated realistic partial payment schedules backed by instant SMS confirmation links.",
      keyFeatures: [
        "70–90 daily outbound dials via predictive cloud telephony.",
        "Real-time balance, interest penalty, and adjusted settlement calculation during live calls.",
        "Promise-to-Pay (PTP) schedule structuring with multi-part milestone agreements.",
        "Immediate CRM disposition logging preventing duplicate dials and lost follow-ups."
      ],
      challenges: "Frequent angry reactions and evasive promises from financially distressed borrowers.",
      results: "Secured consistent monthly recovery targets, zero compliance complaints, and 95%+ PTP tracking integrity.",
      takeaway: "Demonstrated that calm, respectful persistence and structured financial counseling recover more funds than high-pressure threats.",
      demoType: "Production Operations"
    },
    {
      id: "real-inside-sales",
      title: "Financial Products Inside Sales & Lead Conversion",
      category: "real",
      categoryLabel: "Verified Work Experience Case Study",
      role: "Assistant Sales Consultant",
      organization: "Fincrif India Private Limited",
      oneLiner: "High-velocity telecalling campaign qualifying prospective borrowers and optimizing lead handoffs for credit underwriting.",
      tags: ["Inside Sales", "Lead Qualification", "BANT Criteria", "Financial Advisory", "CRM"],
      problem: "Inbound web leads for personal and commercial loans required rapid qualification to separate eligible applicants from unqualified inquiries before senior loan officers engaged.",
      solution: "Created a 15-second consultative telephone hook, applied strict 3-point eligibility screening, and scheduled structured warm handovers with senior credit managers.",
      keyFeatures: [
        "BANT screening verifying income, employment stability, and funding timelines.",
        "Objection handling addressing interest rates, processing timelines, and document requirements.",
        "Daily calling sheets and CRM pipeline updates ensuring zero lead leakage."
      ],
      challenges: "High hang-up rates on cold/warm dials from prospects annoyed by generic sales calls.",
      results: "Significantly boosted prospect engagement in the first 30 seconds and delivered pre-vetted leads to underwriting.",
      takeaway: "Speed-to-lead and consultative positioning dramatically elevate conversion on financial tele-sales.",
      demoType: "Production Operations"
    },
    {
      id: "real-real-estate",
      title: "Real Estate Client Onboarding & Site-Visit Pipeline",
      category: "real",
      categoryLabel: "Verified Work Experience Case Study",
      role: "Sales Executive",
      organization: "Ambr Homes Private Limited",
      oneLiner: "Consultative client discovery and multi-touch confirmation cadence securing high site-visit attendance for premium properties.",
      tags: ["Real Estate", "Client Onboarding", "Site Visit Coordination", "WhatsApp API", "CRM"],
      problem: "High customer no-show rates for scheduled weekend property walkthroughs caused lost deal velocity for high-ticket commercial and residential projects.",
      solution: "Designed a multi-touch confirmation workflow incorporating immediate WhatsApp location pins, digital floor plans, and 24-hour courtesy reminder calls.",
      keyFeatures: [
        "Detailed budget and unit preference discovery during initial consultation call.",
        "Automated WhatsApp brochure and location pin dispatch immediately upon booking.",
        "Site visit calendar coordination between prospective buyers and project sales leaders."
      ],
      challenges: "Overwhelming buyers with complex technical jargon regarding super area vs carpet area.",
      results: "Higher site-visit turnout rates and streamlined client handoffs at site sales offices.",
      takeaway: "In high-value sales, personalized reassurance and smooth logistics make the difference between a no-show and a deal.",
      demoType: "Production Operations"
    },
    {
      id: "prop-omnichannel-desk",
      title: "Omnichannel Customer Support Desk & SLA Tracker",
      category: "proposed",
      categoryLabel: "Proposed Portfolio Project",
      role: "Support Systems Architect (Concept)",
      organization: "Enterprise Customer Service Concept",
      oneLiner: "Multi-channel ticketing architecture centralizing voice, chat, and email inquiries with automated SLA escalation countdowns.",
      tags: ["Customer Support", "SLA Management", "Freshdesk Architecture", "CSAT Tracking", "Automated Triage"],
      problem: "Growing service teams lose customer inquiries across siloed channels, leading to SLA breaches, delayed responses, and customer churn.",
      solution: "Architected a unified intake engine routing inquiries by skill, applying automated urgency scoring, and alerting managers prior to SLA expiration.",
      architecture: [
        "Multi-Channel Ingestion: Webhooks from Voice dialers, WhatsApp, and Web forms.",
        "Triage & Tagging: Priority matrix tagging billing disputes as P1 and general inquiries as P3.",
        "SLA Daemon: Automatic reminder triggers at 50% and 80% SLA elapsed time.",
        "Post-Resolution CSAT: Automated 1-click customer sentiment survey."
      ],
      keyFeatures: [
        "First Contact Resolution (FCR) auto-detection.",
        "Pre-approved empathetic macro response library for 20 common customer inquiries.",
        "Role-Based Access Control protecting customer financial data."
      ],
      challenges: "Balancing agent workload without inducing burnout during high-volume spikes.",
      results: "Theoretical modeling projects a 35% reduction in SLA breaches and 20-point increase in CSAT.",
      takeaway: "Demonstrates deep understanding of modern enterprise helpdesk operations and customer journey management.",
      demoType: "Architectural Specification"
    },
    {
      id: "prop-payment-scheduler",
      title: "Automated Payment Reminder & Settlement Scheduler",
      category: "proposed",
      categoryLabel: "Proposed Portfolio Project",
      role: "FinTech Workflow Designer (Concept)",
      organization: "Debt Recovery Automation Concept",
      oneLiner: "Automated multi-channel PTP payment reminder engine with instant UPI settlement link dispatch and real-time CRM updates.",
      tags: ["Debt Collection", "FinTech Automation", "Payment Webhooks", "PTP Management", "SMS/WhatsApp Nudges"],
      problem: "Manual follow-ups on negotiated Promise-to-Pay (PTP) commitments fail when agents are engaged on other calls, leading to broken promises and defaulted accounts.",
      solution: "Engineered an automated countdown cadence sending polite WhatsApp/SMS payment reminders 48h, 24h, and day-of due date with 1-click payment links.",
      architecture: [
        "PTP Entry in CRM -> Cron scheduler initiates countdown.",
        "T-24h: Instant payment link dispatched via payment gateway API.",
        "Payment webhook confirms receipt -> CRM marks account 'PTP Kept' in real time.",
        "Payment missed flag -> Injects high-priority callback task in agent dialer queue."
      ],
      keyFeatures: [
        "Dynamic penalty waiver calculator for early settlements.",
        "Fair calling hour compliance lock (no messages sent after 7 PM).",
        "Direct integration between banking payment gateways and CRM balances."
      ],
      challenges: "Ensuring messages do not sound robotic or aggressive while maintaining urgency.",
      results: "Reduces broken PTP rates by an estimated 25% by capturing funds right on payday.",
      takeaway: "Bridges frontline collection experience with modern fintech automation.",
      demoType: "Architectural Specification"
    },
    {
      id: "prop-lead-scoring",
      title: "CRM Lead Scoring & Call Distribution Pipeline",
      category: "proposed",
      categoryLabel: "Proposed Portfolio Project",
      role: "Sales Operations Designer (Concept)",
      organization: "Inside Sales Automation Concept",
      oneLiner: "Algorithmic 100-point lead scoring system connecting inbound inquiries with telecallers in under 120 seconds.",
      tags: ["Inside Sales", "Lead Scoring", "Speed-to-Lead", "LeadSquared Workflow", "Dialer Integration"],
      problem: "Inside sales reps spend over 50% of their workday calling cold, unqualified leads while hot, high-intent prospects wait hours for a callback.",
      solution: "Designed an automated lead scoring rubric ranking prospects by financial criteria, urgency, and engagement, instantly popping hot leads to active agents.",
      architecture: [
        "Inbound Form Submit -> Webhook enriches contact details.",
        "Scoring Engine: Budget (35pts) + Urgency (35pts) + Contactability (20pts) + Location (10pts).",
        "Scores > 75 trigger instant screen-pop to top telecallers.",
        "Scores < 50 enroll into automated nurture email/WhatsApp sequences."
      ],
      keyFeatures: [
        "Sub-2-minute speed-to-lead for high-intent buyers.",
        "Daily call disposition analytics tracking conversion by lead score bucket.",
        "Elimination of manual telephone dialing through WebRTC dialer integration."
      ],
      challenges: "Calibrating scoring weights so that promising prospects aren't mistakenly categorized as cold.",
      results: "Projects 30%+ increase in call-to-conversation rates and doubled agent talk time.",
      takeaway: "Illustrates the strategic value of operational automation in accelerating sales cycles.",
      demoType: "Architectural Specification"
    },
    {
      id: "prop-call-analytics",
      title: "Call Disposition & Retention Analytics Dashboard",
      category: "proposed",
      categoryLabel: "Proposed Portfolio Project",
      role: "Contact Center Analyst (Concept)",
      organization: "Operations Intelligence Concept",
      oneLiner: "Executive Excel & Power BI reporting model tracking daily dials, AHT, FCR, and customer objection heatmaps.",
      tags: ["Data Analytics", "MS Excel", "Power BI", "AHT / FCR Metrics", "Call Center KPIs"],
      problem: "Contact center leadership lacks visibility into daily agent productivity, root causes of customer dissatisfaction, and optimal calling hours.",
      solution: "Created an automated spreadsheet model transforming raw telephony call logs into dynamic executive KPI visual dashboards.",
      architecture: [
        "Standardized CSV call log ingestion.",
        "Pivot tables mapping hour-of-day connection heatmaps and agent-level talk-time ratios.",
        "Automated Pareto analysis identifying top customer objections."
      ],
      keyFeatures: [
        "Heatmap identifying peak answer windows (10:30 AM – 1:00 PM and 4:30 PM – 6:30 PM).",
        "SLA and PTP fulfillment monitoring with automatic conditional formatting flags.",
        "Advanced Excel modeling using XLOOKUP, SUMIFS, and dynamic array formulas."
      ],
      challenges: "Cleaning inconsistent disposition tags entered by different frontline agents.",
      results: "Identified optimal calling windows that improved connect rates by 18% in historical simulation.",
      takeaway: "Demonstrates strong quantitative mindset and capability to drive team decisions with data.",
      demoType: "Dashboard Model"
    },
    {
      id: "prop-real-estate-booking",
      title: "Real Estate Client Pipeline & Booking Engine",
      category: "proposed",
      categoryLabel: "Proposed Portfolio Project",
      role: "PropTech Workflow Designer (Concept)",
      organization: "Real Estate Sales Concept",
      oneLiner: "Digital client pipeline combining telephonic consultation with instant WhatsApp calendar invites and QR site check-in.",
      tags: ["PropTech", "Appointment Booking", "WhatsApp Business", "Lead Nurturing", "Client Journey"],
      problem: "In commercial real estate, fragmented communication between telephone sales agents and site office teams leads to lost client context and no-shows.",
      solution: "Architected a synchronized booking engine that links telephone discovery notes directly with automated calendar invites and on-site reception check-in.",
      keyFeatures: [
        "Instant WhatsApp pin drop and project walkthrough video dispatch.",
        "3-stage attendance assurance reminders (24h, 3h, arrival check-in).",
        "Automated post-visit quotation PDF generation with customized payment plans."
      ],
      challenges: "Managing last-minute cancellations without burning the relationship.",
      results: "Projected 50% decrease in appointment no-shows through automated multi-channel touchpoints.",
      takeaway: "Showcases how Asmita combines real estate sales acumen with modern digital buyer experience.",
      demoType: "Architectural Specification"
    },
    {
      id: "prop-objection-playbook",
      title: "Interactive Telecalling Objection Handling Knowledgebase",
      category: "proposed",
      categoryLabel: "Proposed Portfolio Project",
      role: "Sales Enablement & Quality Specialist (Concept)",
      organization: "Contact Center Enablement Concept",
      oneLiner: "Searchable digital playbook providing tested conversational scripts and de-escalation rebuttals for 30+ tough customer objections.",
      tags: ["Sales Enablement", "Objection Handling", "Training Playbooks", "De-escalation Scripts", "Knowledgebase"],
      problem: "New telecalling recruits freeze when confronted with aggressive objections, leading to high call abandonment and long ramp-up cycles.",
      solution: "Built a rapid-lookup digital knowledgebase categorizing proven rebuttals for debt collection disputes, price resistance, and brush-offs.",
      keyFeatures: [
        "Instant search for keywords like 'high interest', 'no money', or 'busy call later'.",
        "Listen-Validate-Reframe scripts tested on high-volume outbound campaigns.",
        "Audio training clips contrasting empathetic assertiveness with robotic reading."
      ],
      challenges: "Preventing agents from sounding scripted or mechanical during real-time conversations.",
      results: "Accelerates agent onboarding from 3 weeks to under 7 days with higher confidence scores.",
      takeaway: "Highlights leadership capability, team enablement, and operational documentation skills.",
      demoType: "Knowledge System"
    }
  ] as Project[]
};
