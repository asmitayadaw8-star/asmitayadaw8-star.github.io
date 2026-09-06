import React from 'react';
import { candidateData } from '../data/portfolioData';
import { Phone, Mail, MapPin, CheckCircle, FileText, Briefcase, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200 dark:border-slate-800">
      {/* Background subtle ambient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-100/40 via-indigo-50/20 to-transparent dark:from-sky-950/20 dark:via-slate-900/10 dark:to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Immediate Opportunities in Noida / Delhi NCR & Remote</span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Empathetic Voice. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-500">
                  Measurable Results.
                </span>
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
                I am <strong className="text-slate-900 dark:text-white font-bold">{candidateData.name}</strong>, a Customer Support Executive and Inside Sales Specialist with 9+ months of frontline voice experience resolving customer challenges, negotiating debt recovery, and qualifying sales pipelines across Noida business centers.
              </p>
            </div>

            {/* Quick Contact Line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-sky-600 dark:text-sky-400" />
                <span>{candidateData.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail size={16} className="text-sky-600 dark:text-sky-400" />
                <a href={`mailto:${candidateData.email}`} className="hover:text-sky-600 dark:hover:text-sky-400 underline decoration-slate-300 underline-offset-4">
                  {candidateData.email}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone size={16} className="text-sky-600 dark:text-sky-400" />
                <a href={`tel:${candidateData.phone}`} className="hover:text-sky-600 dark:hover:text-sky-400">
                  {candidateData.phone}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <GithubIcon size={16} className="text-slate-700 dark:text-slate-300" />
                <a href={candidateData.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 dark:hover:text-sky-400">
                  GitHub Profile
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#resumes"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <FileText size={18} />
                <span>View ATS Resumes</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold text-sm border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow transition-all"
              >
                <Briefcase size={18} />
                <span>Explore Case Studies</span>
              </a>
              <a
                href="#ats-matcher"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 font-semibold text-sm border border-indigo-200 dark:border-indigo-800/60 transition-all"
              >
                <Sparkles size={16} />
                <span>Test ATS JD Matcher</span>
              </a>
            </div>

            {/* Verified Guarantee Pill */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck size={16} className="text-emerald-600 dark:text-emerald-400" />
              <span>100% Truthful Data — Verified against Experience Letters, Offer Letters & UPMSP Records</span>
            </div>
          </div>

          {/* Right Column: Portrait & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition-opacity" />
              
              {/* Card container */}
              <div className="relative bg-white dark:bg-slate-900 p-4 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl max-w-sm">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                  <img
                    src="./assets/candidate_portrait.png"
                    alt="Asmita Yadav — Customer Support Executive"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Experience Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider font-bold text-sky-600 dark:text-sky-400">Active Role</div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Sales Executive @ Ambr Homes</div>
                    </div>
                    <CheckCircle size={18} className="text-emerald-500" />
                  </div>
                </div>

                {/* Micro Stats Grid */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <div className="text-lg font-extrabold text-slate-900 dark:text-white">70–90+</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Daily Outbound Calls</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <div className="text-lg font-extrabold text-slate-900 dark:text-white">88.33%</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">10th Academic Merit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Global Stats Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {candidateData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:border-sky-300 dark:hover:border-sky-800 transition-colors"
            >
              <div className="text-3xl font-extrabold text-sky-600 dark:text-sky-400 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
