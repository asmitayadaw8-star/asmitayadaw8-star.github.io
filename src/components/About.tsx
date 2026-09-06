import React from 'react';
import { motion } from 'framer-motion';
import { Award, HeartHandshake, Headphones, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#07090e] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-800/70 text-sky-400 text-xs font-mono mb-2 shadow-md">
            <span>PROFESSIONAL BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Connecting People, Resolving Friction, Delivering Impact
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A customer experience advocate combining high call resilience with intellectual precision and data integrity.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base"
          >
            <p className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-slate-300 leading-relaxed">
              I am an energetic, disciplined, and customer-oriented professional specialized in <strong className="text-white">Customer Support, Telecalling Operations, and Consultative Inside Sales</strong>. Over the past 9+ months across corporate hubs in Noida and Greater Noida, I have worked directly on the frontline of customer interactions—handling complex payment disputes, delinquent debt recovery, financial product advisory, and real estate sales consultations.
            </p>

            <p className="leading-relaxed">
              During my 6-month tenure at <strong className="text-sky-400">Bajrang Business Solutions</strong>, I dialed between <strong>70 to 90 customer accounts daily</strong> as a Fund Collection Executive. In this high-stakes environment, I mastered the art of <em>Listen-Validate-Reframe</em>: de-escalating angry callers, clarifying interest calculations, and negotiating structured <strong>Promise-to-Pay (PTP)</strong> schedules that preserved customer dignity while achieving company recovery quotas with zero compliance grievances.
            </p>

            <p className="leading-relaxed">
              My appointment as Sales Executive at <strong className="text-sky-400">Ambr Homes Private Limited</strong> (Greater Noida West) and my experience at <strong className="text-sky-400">Fincrif India Private Limited</strong> expanded my capabilities into consultative inside sales—qualifying buyer intent using BANT frameworks, booking site walkthroughs, overcoming price objections, and maintaining strict CRM pipeline hygiene.
            </p>

            <p className="leading-relaxed">
              Beyond the headset, I bring a strong analytical and quantitative foundation, having graduated with <strong className="text-emerald-400">First Division in 12th Science (Biology Distinction)</strong> and earning an <strong className="text-purple-400">88.33% academic merit</strong> in 10th standard (94 in Mathematics, 90 in English). I treat every customer conversation as an opportunity to build trust, retain accounts, and accelerate business growth.
            </p>

            {/* Language Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Languages:</span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-900 border border-slate-800 text-slate-200">
                Hindi (Native / Fluent)
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-900 border border-slate-800 text-slate-200">
                English (Professional Working - B1)
              </span>
            </div>
          </motion.div>

          {/* Core Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300 flex gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-600/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                <Headphones size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">High Call Stamina & Composure</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Proven ability to execute 70–90+ calls daily while maintaining calm, respectful, and energetic articulation on every single dial.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300 flex gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <HeartHandshake size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">Empathetic De-escalation</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Skilled at listening first, acknowledging customer grievances, and disarming hostility before presenting practical solutions.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)] transition-all duration-300 flex gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                <Award size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">Analytical & Mathematical Precision</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  94 in 10th Mathematics and Science distinction translate into flawless fee calculations, amortization explanations, and data accuracy.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300 flex gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                <Shield size={22} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">Integrity & Strict Compliance</h3>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Zero regulatory or conduct complaints across 9+ months of frontline voice operations. Strict adherence to professional ethics.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
