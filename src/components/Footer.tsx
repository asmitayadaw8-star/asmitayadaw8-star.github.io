import React from 'react';
import { candidateData } from '../data/portfolioData';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
              AY
            </div>
            <div>
              <span className="font-bold text-white text-sm block">
                {candidateData.name}
              </span>
              <span className="text-slate-400 font-normal block text-xs">
                {candidateData.title}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#job-matcher" className="hover:text-white transition-colors">Job Matcher</a>
            <a href="#resume" className="hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="https://github.com/asmitayadaw8-star" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck size={16} className="text-emerald-500 shrink-0" />
            <span>
              <strong>Data Integrity Statement:</strong> All career records, marks, and dates are verified from original documentation.
            </span>
          </div>

          <div className="text-slate-500">
            © {new Date().getFullYear()} Asmita Yadav. Built for professional career advancement.
          </div>
        </div>

      </div>
    </footer>
  );
};
