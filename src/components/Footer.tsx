/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RegistrationProps } from '../types';

export const Footer: React.FC<RegistrationProps> = ({ isLate, isHackathonStartedAuth, regLink, handleRegisterClick }) => {
  return (
    <footer id="contact" className="bg-accent-orange text-bg-dark pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-5 font-anton text-[20rem] leading-none whitespace-nowrap -mt-20 overflow-hidden text-black mix-blend-overlay" aria-hidden="true">
         GOA 2026 GOA 2026
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10 grid grid-cols-1 xl:grid-cols-4 gap-16 font-inter font-semibold">
         <div className="col-span-1 xl:col-span-1">
           <h2 className="font-anton text-5xl md:text-6xl uppercase tracking-widget mb-8 leading-[1.1] md:leading-[0.9]">GOA <br/> HACKATHON 26</h2>
         </div>
         
         <div className="col-span-1 xl:col-span-2 flex flex-col sm:flex-row gap-12 sm:gap-24 text-lg">
           <div>
              <p className="font-lg mb-6 font-inter opacity-70 tracking-wide uppercase">Event Coordinators</p>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-xl uppercase font-anton tracking-wide">AARYAN KUMAR TIWARI</p>
                  <p className="opacity-70 text-sm">Student Coordinator</p>
                </div>
                <div className="pt-2">
                  <p className="font-bold text-xl uppercase font-anton tracking-wide">DR. DHAVAL NIMAVAT</p>
                  <p className="opacity-70 text-sm">Faculty Coordinator</p>
                </div>
                <div className="pt-2">
                  <p className="font-bold text-xl uppercase font-anton tracking-wide">DR. SANJEETA RANE</p>
                  <p className="opacity-70 text-sm">Faculty Coordinator</p>
                </div>
                <div className="pt-2">
                  <p className="font-bold text-xl uppercase font-anton tracking-wide">MS. SILICA KOLE</p>
                  <p className="opacity-70 text-sm">Faculty Coordinator</p>
                </div>
              </div>
           </div>
           <div>
             <p className="font-lg mb-6 font-inter opacity-70 tracking-wide uppercase text-transparent selection:text-transparent">.</p>
             <ul className="space-y-4 text-xl">
                <li><a href="#about" className="hover:text-dark transition-colors opacity-80 hover:opacity-100">About</a></li>
                <li><a href="#schedule" className="hover:text-dark transition-colors opacity-80 hover:opacity-100">Schedule</a></li>
                <li><a href="#tools" className="hover:text-dark transition-colors opacity-80 hover:opacity-100">Tools</a></li>
                <li><a href="#prizes" className="hover:text-dark transition-colors opacity-80 hover:opacity-100">Prizes</a></li>
             </ul>
           </div>
         </div>

         <div className="col-span-1 flex flex-col items-start xl:items-end w-full gap-8 xl:justify-between">
            <a href={(!isLate && !isHackathonStartedAuth) ? regLink : "#"} onClick={handleRegisterClick} target={(!isLate && !isHackathonStartedAuth) ? "_blank" : "_self"} rel="noreferrer" className="bg-bg-dark text-white px-6 py-4 font-anton text-2xl tracking-widest uppercase flex items-center gap-2 hover:bg-black transition-colors w-full sm:w-fit xl:w-auto justify-center sm:justify-start">
              {isLate ? "REGISTRATIONS CLOSED" : "REGISTER NOW"} <ArrowUpRight className="w-8 h-8" />
            </a>
            <img src="/parul_university_logo.png" alt="Parul University Goa Campus Logo" className="w-64 xl:w-96 max-h-48 object-contain contrast-200 mt-auto mx-auto xl:mr-0 xl:ml-auto" style={{ filter: 'brightness(0)' }}/>
         </div>
      </div>

      <div className="max-w-[1800px] mx-auto border-t border-bg-dark/20 mt-20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10 font-inter">
        <div className="text-sm">
          <p className="font-anton text-2xl mb-2 uppercase tracking-wide">BUILT WITH ♥ AT PARUL UNIVERSITY GOA</p>
          <p className="mt-4 mb-6 text-xs opacity-50 font-bold tracking-wide">Developed by <a href="https://www.linkedin.com/in/noticedxaaryan" target="_blank" rel="noopener noreferrer" className="underline hover:text-bg-dark transition-colors">Aaryan Kumar Tiwari</a></p>
          <p className="text-xs opacity-60 font-medium">Code, sleep, repeat. ☾ Building the AI future.</p>
          <p className="text-xs opacity-60 mt-1 font-medium">© 2026 Goa Hackathon • Parul University Goa • Code of Conduct • Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};
