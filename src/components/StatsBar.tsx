import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ShieldCheck, Award, TrendingUp } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      label: "Daily Call Volume Capacity",
      value: "70–90+",
      detail: "High-Volume Voice Operations Stamina",
      icon: <PhoneCall className="w-5 h-5 text-sky-400" />
    },
    {
      label: "Promise-to-Pay Fulfillment",
      value: "95%+",
      detail: "Empathetic Settlement & Delinquency Recovery",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />
    },
    {
      label: "Academic Board Merit",
      value: "88.33%",
      detail: "UPMSP Top Merit • Maths: 94, English: 90",
      icon: <Award className="w-5 h-5 text-purple-400" />
    },
    {
      label: "Truthful Career Records",
      value: "100%",
      detail: "Zero Fabrications • Verified Experience Letters",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />
    },
  ];

  return (
    <section className="py-8 bg-[#0b0f19] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-start gap-4 hover:border-sky-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 group-hover:border-sky-500/40 group-hover:bg-sky-600/10 transition-all duration-300">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-300 mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-500 mt-1 font-mono">{stat.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
