import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { candidateData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#07090e] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.08),transparent)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Job Seeker Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-800/70 text-sky-400 text-xs font-mono mb-6 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OPEN FOR CUSTOMER SUPPORT, INSIDE SALES &amp; OPERATIONS ROLES</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Connect &amp; Discuss Opportunities
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Looking for a dedicated <strong className="text-white">Customer Support Executive</strong> or <strong className="text-sky-400">Inside Sales Specialist</strong> with proven high call capacity (70–90 calls/day), calm de-escalation skills, and disciplined CRM tracking?
          </p>

          {/* Direct Connect Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {/* Email Button */}
            <a
              href={`mailto:${candidateData.email}`}
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.65)] hover:-translate-y-1"
            >
              <Mail className="w-4 h-4" />
              <span>{candidateData.email}</span>
            </a>

            {/* LinkedIn Button */}
            <a
              href={candidateData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#0a66c2] hover:bg-[#004182] text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-blue-900/40 hover:-translate-y-1 hover:shadow-xl"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.22a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>

            {/* WhatsApp Direct Chat Button */}
            <a
              href={`https://wa.me/919517650366?text=${encodeURIComponent("Hi Asmita, we reviewed your portfolio and would like to discuss an opportunity.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-emerald-900/40 hover:-translate-y-1 hover:shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* GitHub Profile Button */}
            <a
              href={candidateData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-sm transition-all hover:-translate-y-1 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub Profile</span>
            </a>
          </div>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/70 border border-slate-800">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{candidateData.phone}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/70 border border-slate-800">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>{candidateData.location}</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/70 border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Immediate Availability / Standard Notice</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
