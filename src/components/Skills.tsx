import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { candidateData } from '../data/portfolioData';
import { PhoneCall, ShieldAlert, TrendingUp, Users, Wrench, Globe, CheckCircle2, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Voice & Calling Operations":
        return <PhoneCall size={20} className="text-sky-400" />;
      case "Debt Collection & Recovery":
        return <ShieldAlert size={20} className="text-rose-400" />;
      case "Inside Sales & Conversion":
        return <TrendingUp size={20} className="text-emerald-400" />;
      case "Customer Experience (CX)":
        return <Users size={20} className="text-amber-400" />;
      case "CRM & Productivity Tools":
        return <Wrench size={20} className="text-indigo-400" />;
      default:
        return <Globe size={20} className="text-cyan-400" />;
    }
  };

  const categories = candidateData.skillsByCategory;
  const filteredCategories = activeTab === 'all' 
    ? categories 
    : categories.filter(c => c.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-24 bg-[#07090e] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-800/70 text-sky-400 text-xs font-mono mb-2 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMPETENCY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Verified Skills &amp; Operational Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Field-tested across high-volume outbound calling, delinquency negotiation, real estate sales conversion, and enterprise CRM pipelines.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-sky-600 text-white shadow-[0_0_15px_rgba(2,132,199,0.5)]'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            All Competencies
          </button>
          <button
            onClick={() => setActiveTab('voice')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'voice'
                ? 'bg-sky-600 text-white shadow-[0_0_15px_rgba(2,132,199,0.5)]'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            Voice &amp; Calling
          </button>
          <button
            onClick={() => setActiveTab('sales')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'sales'
                ? 'bg-sky-600 text-white shadow-[0_0_15px_rgba(2,132,199,0.5)]'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            Inside Sales &amp; Real Estate
          </button>
          <button
            onClick={() => setActiveTab('debt')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'debt'
                ? 'bg-sky-600 text-white shadow-[0_0_15px_rgba(2,132,199,0.5)]'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            Debt Recovery &amp; PTP
          </button>
          <button
            onClick={() => setActiveTab('crm')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'crm'
                ? 'bg-sky-600 text-white shadow-[0_0_15px_rgba(2,132,199,0.5)]'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            CRM &amp; Tools
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60 hover:border-sky-500/60 hover:text-white hover:bg-slate-800 transition-all"
                    >
                      <CheckCircle2 size={12} className="text-sky-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-center text-xs text-slate-400 font-mono">
          ✨ <strong>Recruiter Guarantee:</strong> All skills listed above are directly verified through employment at Ambr Homes, Bajrang Business Solutions, and Fincrif India, as well as official UP Board academic certificates.
        </div>

      </div>
    </section>
  );
};
