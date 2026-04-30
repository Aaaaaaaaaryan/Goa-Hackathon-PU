/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles } from 'lucide-react';
import { PROBLEM_STATEMENTS } from '../data/constants';

export const ProblemStatements: React.FC = () => {
  return (
    <section aria-label="Problem statements" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto border-t border-white/10">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6 text-sm font-medium tracking-widest uppercase text-white/80">
            <Sparkles size={16} className="text-accent-teal" />
            THEME: AI IN CAMPUS
          </div>
          <h2 className="font-anton text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] md:leading-[0.9] tracking-wide uppercase text-white">
            PROBLEM <span className="text-accent-teal">STATEMENTS</span>
          </h2>
        </div>
        <p className="font-inter text-xl text-white/60 max-w-lg leading-relaxed">
          Choose a problem statement and build intelligent solutions that seamlessly integrate artificial intelligence into the university experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative">
        {PROBLEM_STATEMENTS.map((stmt) => (
          <div key={stmt.id} className="group flex flex-col bg-bg-dark border-[2px] border-white/10 hover:border-white transition-all duration-300 p-6 xl:p-8 hover:-translate-y-2 hover:shadow-[6px_6px_0px_rgba(255,255,255,1)] relative overflow-hidden rounded-2xl">
            <div className={`absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-10 ${stmt.color} pointer-events-none transition-all duration-500 group-hover:opacity-40 group-hover:scale-150`}></div>
            
            <div className="flex justify-between items-start mb-6">
              <span className={`inline-flex items-center justify-center font-anton text-2xl w-12 h-12 rounded-full ${stmt.color} text-bg-dark shrink-0`}>
                {stmt.id}
              </span>
              <Sparkles size={24} className="text-white/20 group-hover:text-white/80 transition-colors" />
            </div>
            
            <h3 className="font-anton text-2xl xl:text-3xl uppercase tracking-wider mb-4 text-white">
              {stmt.title}
            </h3>
            
            <p className="font-inter text-white/60 text-sm leading-relaxed mt-auto group-hover:text-white/90 transition-colors">
              {stmt.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
