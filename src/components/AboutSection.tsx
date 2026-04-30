/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight, Code, Github, Sparkles } from 'lucide-react';
import { RegistrationProps } from '../types';

export const AboutSection: React.FC<RegistrationProps> = ({ isLate, isHackathonStartedAuth, regLink, handleRegisterClick }) => {
  return (
    <section id="about" aria-label="About the hackathon" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-7">
          <h2 className="font-anton text-5xl sm:text-7xl md:text-[6rem] leading-[1.1] md:leading-[0.95] tracking-wide uppercase mb-12">
            BUILDING BRAND NEW <br />
            EXPERIENCES AT <span className="text-accent-orange underline decoration-[4px] md:decoration-[8px] underline-offset-[4px] md:underline-offset-[12px]">PARUL UNIVERSITY GOA</span>
          </h2>
          <div className="flex gap-4">
             <div className="w-16 h-16 md:w-20 md:h-20 bg-accent-teal rounded-full flex items-center justify-center text-bg-dark font-bold text-xl"><Sparkles size={32}/></div>
             <div className="w-16 h-16 md:w-20 md:h-20 bg-accent-pink rounded-xl rotate-12 flex items-center justify-center text-white"><Code size={32}/></div>
             <div className="w-16 h-16 md:w-20 md:h-20 bg-accent-yellow rounded-full flex items-center justify-center text-bg-dark"><Github size={32}/></div>
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="bg-bg-darker p-8 md:p-12 rounded-3xl border border-white/5 relative">
            <div className="absolute -top-10 -left-6 bg-accent-purple text-white font-anton text-4xl px-4 py-2 rotate-[-5deg] tracking-wider">
              OVERVIEW
            </div>
            <p className="font-inter text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Organized by the Department of Computer Science and Engineering. A 24 hour marathon of coding, building, and innovating the future of <strong>AI in campus life</strong>. Join hundreds of passionate participants as we explore the intersection of artificial intelligence and student experiences.
              Whether you are a seasoned coder or a visionary designer, this is your perfect playground to collaborate, build groundbreaking solutions, and shape the future of our university.
            </p>
            <a href={(!isLate && !isHackathonStartedAuth) ? regLink : "#"} onClick={handleRegisterClick} target={(!isLate && !isHackathonStartedAuth) ? "_blank" : "_self"} rel="noreferrer" className="font-anton text-2xl uppercase tracking-wider flex items-center gap-2 group hover:text-accent-teal transition-colors w-fit">
              {isLate ? "REGISTRATIONS CLOSED" : "REGISTER NOW"} <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
