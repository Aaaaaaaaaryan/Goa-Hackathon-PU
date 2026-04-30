/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, Briefcase, Calendar, Code, Github, Sparkles } from 'lucide-react';

interface WorkshopSectionProps {
  isWorkshopTime: boolean;
}

export const WorkshopSection: React.FC<WorkshopSectionProps> = ({ isWorkshopTime }) => {
  return (
    <section id="workshop" aria-label="Pre-hackathon workshop" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/10">
      <div className="bg-bg-dark border-[2px] border-white/10 rounded-3xl p-5 sm:p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative overflow-hidden group hover:border-white/30 transition-colors duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-teal/10 blur-[100px] pointer-events-none group-hover:bg-accent-teal/20 transition-colors duration-700"></div>
        
        <div className="flex-1 space-y-8 relative z-10 w-full">
           <div className="inline-flex items-center gap-3 bg-bg-dark border-[2px] border-accent-teal/50 shadow-[4px_4px_0px_#2cd2a8] rounded-full px-5 sm:px-6 py-2.5 text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase text-accent-teal transform -rotate-1">
              <Calendar size={18} />
              Monday, May 4th
           </div>
           <h2 className="font-anton text-5xl md:text-6xl lg:text-[5rem] uppercase tracking-wide leading-[1.05]">
              ZERO TO <br /> <span className="text-white/40">HACKATHON</span> READY
           </h2>
           <p className="font-inter text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              Join our exclusive Pre-Hackathon Workshop. We will teach you everything from designing seamless UI/UX, building frontend & backend web applications, to mastering GitHub. Perfect your skills before the 24 hour clock starts!
           </p>
           {isWorkshopTime && (
             <div className="mt-8">
               <a href="https://forms.gle/onrN7pownwfiJoCm6" target="_blank" rel="noreferrer" className="inline-block bg-accent-teal hover:bg-[#23b089] text-bg-dark font-anton text-base sm:text-lg md:text-xl px-8 sm:px-10 py-4 uppercase tracking-wider transition-colors shadow-[4px_4px_0px_rgba(255,255,255,0.15)] hover:shadow-[2px_2px_0px_rgba(255,255,255,0.15)] hover:translate-y-[2px] rounded-xl relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">Register for Workshop <ArrowUpRight size={24} /></span>
               </a>
             </div>
           )}
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 w-full lg:w-auto relative z-10 shrink-0">
           <div className="bg-bg-dark border-[2px] border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 text-center transition-all duration-300 hover:bg-[#1a1a1a] hover:border-accent-yellow hover:-translate-y-2 hover:shadow-[6px_6px_0px_#ffde59] cursor-default w-full sm:min-w-[140px] md:min-w-[170px] group/card">
              <Briefcase size={28} className="text-accent-yellow group-hover/card:scale-110 transition-transform duration-300 sm:w-8 sm:h-8" strokeWidth={1.5} />
              <span className="font-anton tracking-widest text-base sm:text-lg md:text-xl text-white mt-1">UI / UX</span>
           </div>
           <div className="bg-bg-dark border-[2px] border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 text-center transition-all duration-300 hover:bg-[#1a1a1a] hover:border-accent-pink hover:-translate-y-2 hover:shadow-[6px_6px_0px_#ff91e3] cursor-default w-full sm:min-w-[140px] md:min-w-[170px] group/card">
              <Code size={28} className="text-accent-pink group-hover/card:scale-110 transition-transform duration-300 sm:w-8 sm:h-8" strokeWidth={1.5} />
              <span className="font-anton tracking-widest text-base sm:text-lg md:text-xl text-white mt-1">WEB DEV</span>
           </div>
           <div className="bg-bg-dark border-[2px] border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 text-center transition-all duration-300 hover:bg-[#1a1a1a] hover:border-accent-orange hover:-translate-y-2 hover:shadow-[6px_6px_0px_#f24b28] cursor-default w-full sm:min-w-[140px] md:min-w-[170px] group/card">
              <Sparkles size={28} className="text-accent-orange group-hover/card:scale-110 transition-transform duration-300 sm:w-8 sm:h-8" strokeWidth={1.5} />
              <span className="font-anton tracking-widest text-base sm:text-lg md:text-xl text-white mt-1">BACKEND</span>
           </div>
           <div className="bg-bg-dark border-[2px] border-white/10 p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 text-center transition-all duration-300 hover:bg-[#1a1a1a] hover:border-white hover:-translate-y-2 hover:shadow-[6px_6px_0px_white] cursor-default w-full sm:min-w-[140px] md:min-w-[170px] group/card">
              <Github size={28} className="text-white group-hover/card:scale-110 transition-transform duration-300 sm:w-8 sm:h-8" strokeWidth={1.5} />
              <span className="font-anton tracking-widest text-base sm:text-lg md:text-xl text-white mt-1">GITHUB</span>
           </div>
        </div>
      </div>
    </section>
  );
};
