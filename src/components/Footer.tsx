import React from 'react';
import { candidateData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const resumeUrl = "./resumes/Asmita_Yadav_Resume.pdf";

  return (
    <footer className="py-8 bg-[#05070a] border-t border-slate-900 text-center text-xs text-slate-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {candidateData.name} — Customer Support Executive &amp; Inside Sales Specialist.
        </div>
        <div className="flex items-center gap-6">
          <a href="#overview" className="hover:text-sky-400 transition-colors">Back to Top ↑</a>
          <a 
            href={resumeUrl} 
            download="Asmita_Yadav_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-sky-400 transition-colors"
          >
            Download Official Resume
          </a>
        </div>
      </div>
    </footer>
  );
};
