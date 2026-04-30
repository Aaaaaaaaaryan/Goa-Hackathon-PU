/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, User, Award } from 'lucide-react';

export const PrizesSection: React.FC = () => {
  return (
    <section id="prizes" aria-label="Prizes and recognition" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto relative overflow-hidden text-center">
      <div className="absolute inset-0 flex flex-wrap content-start opacity-[0.03] text-6xl md:text-9xl font-anton uppercase break-all pointer-events-none line-clamp-[10] overflow-hidden leading-none z-0" aria-hidden="true">
        PRIZES BOUNTIES CASH TROPHY MEDAL RECOGNITION CERTIFICATE INNOVATION WINNER SUCCESS FUTURE MVP PROTOTYPE IMPACT AI GOA INNOVATE HACK CREATE DESIGN DEV DEPLOY
      </div>

      <div className="relative z-10 text-center mb-24 inline-flex flex-col items-center">
         <div className="inline-block relative">
            <div className="absolute -top-12 -left-16 bg-[#00A86B] p-4 text-bg-dark rounded-tr-3xl rounded-bl-3xl border-4 border-bg-dark transform -rotate-12 hidden md:block">
               <Sparkles size={48} fill="currentColor" />
            </div>
            <h2 className="font-anton text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] md:leading-[0.9] tracking-wide uppercase text-center mx-auto">
              <span className="text-accent-teal block mb-2 opacity-80 text-3xl leading-[1] md:text-5xl">"</span>
              HALL OF FAME <br/> AND THE SPOILS
            </h2>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 text-left">
        {/* Card 1: 1st Place */}
        <div className="bg-accent-yellow p-8 md:p-12 rounded-3xl text-bg-dark group hover:-translate-y-4 transition-transform duration-300">
          <h3 className="font-anton text-4xl mb-4 tracking-wide uppercase">1st Place Winner</h3>
          <p className="font-inter text-lg font-medium opacity-80 mb-8 leading-relaxed">
            For the team that brings unparalleled innovation and perfect execution. The absolute pinnacle of "AI in Campus" solutions. Look no further for the best.
          </p>
          <div className="flex items-center gap-6 mt-12 pt-4 border-t border-black/20">
             <div className="w-16 h-16 bg-bg-dark rounded-full flex items-center justify-center text-accent-yellow text-4xl pb-1">
               🥇
             </div>
             <div>
               <p className="font-anton text-2xl uppercase">GOLD BUNDLE</p>
               <p className="font-inter font-bold opacity-75 text-sm uppercase tracking-wide">Trophy • Certificate • Cash Prize</p>
             </div>
          </div>
        </div>

        {/* Card 2: 2nd Place */}
        <div className="bg-white p-8 md:p-12 rounded-3xl text-bg-dark group hover:-translate-y-4 transition-transform duration-300">
           <h3 className="font-anton text-4xl mb-4 tracking-wide uppercase">2nd Place Finish</h3>
           <p className="font-inter text-lg font-medium opacity-80 mb-8 leading-relaxed">
             Outstanding attention to detail and ability to deliver a highly scalable, excellent technical design and pitch. Simply outstanding!
           </p>
           <div className="flex items-center gap-6 mt-12 pt-4 border-t border-black/20">
             <div className="w-16 h-16 bg-bg-dark rounded-full flex items-center justify-center text-white font-anton text-4xl pb-1">
               🥈
             </div>
             <div>
               <p className="font-anton text-2xl uppercase">SILVER BUNDLE</p>
               <p className="font-inter font-bold opacity-75 text-sm uppercase tracking-wide">Trophy • Certificate • Cash Prize</p>
             </div>
          </div>
        </div>

        {/* Card 3: 3rd Place */}
        <div className="bg-bg-darker border border-white/10 p-8 md:p-12 rounded-3xl text-white group hover:-translate-y-4 transition-transform duration-300">
           <h3 className="font-anton text-4xl mb-4 tracking-wide uppercase">3rd Place Finish</h3>
           <p className="font-inter text-lg font-medium text-white/50 mb-8 leading-relaxed">
             A highly competitive podium finish proving exceptional skill, dedication, and teamwork during the hackathon. Truly exceptional.
           </p>
           <div className="flex items-center gap-6 mt-12 pt-4 border-t border-white/20">
             <div className="w-16 h-16 bg-black rounded-full border border-white/20 flex items-center justify-center text-bg-dark mt-1 text-4xl pb-1">
               🥉
             </div>
             <div>
               <p className="font-anton text-2xl uppercase">BRONZE BUNDLE</p>
               <p className="font-inter font-medium text-white/50 text-sm uppercase tracking-wide">Medal • Certificate</p>
             </div>
          </div>
        </div>
        
        <div className="bg-bg-darker border border-white/10 p-8 rounded-3xl text-white group/small hover:border-accent-pink transition-colors h-full flex flex-col justify-between">
           <div>
              <Sparkles className="text-accent-pink w-10 h-10 mb-4" />
              <h3 className="font-anton text-3xl mb-2 uppercase">BEST INNOVATIVE IDEA</h3>
              <p className="font-inter opacity-70 mb-6">For the most out-of-the-box conceptual solution regardless of technical completion.</p>
           </div>
           <p className="font-bold text-accent-pink tracking-widest text-sm uppercase">Certificate + Special Mention</p>
        </div>

        <div className="bg-bg-darker border border-white/10 p-8 rounded-3xl text-white group/small hover:border-accent-purple transition-colors h-full flex flex-col justify-between">
           <div>
              <User className="text-accent-purple w-10 h-10 mb-4" />
              <h3 className="font-anton text-3xl mb-2 uppercase">BEST PERFORMING FEMALE</h3>
              <p className="font-inter opacity-70 mb-6">Recognizing exceptional performance by a female student.</p>
           </div>
           <p className="font-bold text-accent-purple tracking-widest text-sm uppercase">Certificate + Special Mention</p>
        </div>
        
        <div className="bg-bg-darker border border-white/10 p-8 rounded-3xl text-white group/small hover:border-accent-orange transition-colors h-full flex flex-col justify-between flex-1">
           <div>
              <Award className="text-accent-orange w-10 h-10 mb-4" />
              <h3 className="font-anton text-3xl mb-2 uppercase">ALL PARTICIPANTS</h3>
              <p className="font-inter opacity-70 mb-6">Every single hacker leaves with validation of their hard work.</p>
           </div>
           <p className="font-bold text-accent-orange tracking-widest text-sm uppercase">Certificate of Participation</p>
        </div>
      </div>
    </section>
  );
};
