import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { candidateData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'real' | 'proposed'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = candidateData.projects.filter(p => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-[#07090e] border-t border-slate-800/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-800/70 text-sky-400 text-xs font-mono mb-2 shadow-md">
            <Layers className="w-3.5 h-3.5" />
            <span>CASE STUDIES &amp; ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Customer Success &amp; Workflows
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Explore 3 verified field case studies from actual corporate employment alongside 6 proposed operational architectures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              filter === 'all'
                ? 'bg-sky-600 text-white shadow-[0_0_15px_rgba(2,132,199,0.5)]'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            All Case Studies ({candidateData.projects.length})
          </button>
          <button
            onClick={() => setFilter('real')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
              filter === 'real'
                ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <ShieldCheck size={14} />
            <span>Verified Field Studies (3)</span>
          </button>
          <button
            onClick={() => setFilter('proposed')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
              filter === 'proposed'
                ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Sparkles size={14} />
            <span>Operational Architectures (6)</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`flex flex-col justify-between p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                proj.category === 'real'
                  ? 'bg-gradient-to-br from-[#0b141d] via-slate-900 to-slate-900/90 border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]'
                  : 'bg-slate-900/50 border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/90 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]'
              }`}
            >
              <div className="space-y-4">
                {/* Header Badge & Role */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border ${
                    proj.category === 'real'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
                      : 'bg-indigo-950/80 text-indigo-300 border-indigo-700/60'
                  }`}>
                    {proj.categoryLabel}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {proj.organization}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {proj.title}
                </h3>

                {/* One Liner */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {proj.oneLiner}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  {proj.demoType}
                </span>
                <button
                  onClick={() => setActiveModalProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 hover:text-sky-300 transition-colors group cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Window */}
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
};
