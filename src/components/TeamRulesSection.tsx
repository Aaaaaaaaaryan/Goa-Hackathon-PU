/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export const TeamRulesSection: React.FC = () => {
  return (
    <section aria-label="Team rules and evaluation criteria" className="py-20 md:py-32 px-6 md:px-12 bg-bg-darker">
      <div className="max-w-[1400px] mx-auto text-center mb-20 md:mb-32">
        <h2 className="font-anton text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] md:leading-[0.9] tracking-wide uppercase mb-6 mx-auto inline-block relative">
          HELPING TEAMS THRIVE <br/>
          IN THE <span className="text-accent-purple">COMPETITION</span>
          <div className="absolute -top-12 -right-20 w-32 h-32 md:w-48 md:h-48 border-[4px] md:border-[8px] border-accent-purple rounded-full opacity-60 hidden md:block"></div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-[1800px] mx-auto">
        {/* Rules */}
        <div className="flex flex-col">
          <h3 className="font-anton text-4xl mb-8 border-b-4 border-white inline-block pb-2">TEAM RULES</h3>
          <ul className="space-y-6 list-none font-inter text-xl text-white/80 flex-grow">
            <li className="flex gap-4 items-start">
              <span className="text-accent-orange font-bold text-2xl mt-1">01</span>
              <span>Team size: <strong>4–5 members</strong></span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-accent-orange font-bold text-2xl mt-1">02</span>
              <span>At least <strong>1 female participant</strong> required per team (mandatory)</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-accent-orange font-bold text-2xl mt-1">03</span>
              <span>One designated Team Leader per team</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-accent-orange font-bold text-2xl mt-1">04</span>
              <span>Inter-disciplinary and inter-institute teams allowed</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-accent-orange font-bold text-2xl mt-1">05</span>
              <span>No substitutions after registration deadline (May 4th)</span>
            </li>
          </ul>

          {/* Geometric Shapes Animation */}
          <div className="mt-16 hidden lg:flex w-full h-[400px] relative items-center justify-center group" aria-hidden="true">
            {/* Teal Circle */}
            <motion.div
              className="absolute w-40 h-40 bg-accent-teal/80 mix-blend-screen rounded-full"
              animate={{
                x: [0, 80, 0, -80, 0],
                y: [0, 50, -50, -30, 0],
                scale: [1, 1.2, 0.8, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Pink Square Outline */}
            <motion.div
              className="absolute w-44 h-44 border-[12px] border-accent-pink/80 mix-blend-screen"
              animate={{
                x: [40, -60, 40, 80, 40],
                y: [-40, 40, -80, -20, -40],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Yellow Triangle */}
            <motion.div
              className="absolute w-0 h-0 border-l-[70px] border-l-transparent border-r-[70px] border-r-transparent border-b-[120px] border-b-accent-yellow/80 mix-blend-screen"
              animate={{
                x: [-60, 40, -20, -100, -60],
                y: [60, -20, 80, 40, 60],
                rotate: [0, -120, -240, -360],
                scale: [0.8, 1.1, 0.9, 1.2, 0.8],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        </div>

        {/* Evaluation Criteria */}
        <div>
          <h3 className="font-anton text-4xl mb-8 border-b-4 border-white inline-block pb-2">EVALUATION CRITERIA</h3>
          <div className="space-y-8 font-anton text-2xl md:text-3xl tracking-wide uppercase text-white/80">
            <div className="flex justify-between items-center group">
              <span className="group-hover:text-white transition-colors">Innovation & Originality</span>
              <span className="text-accent-teal text-4xl">25%</span>
            </div>
            <div className="w-full h-1 bg-white/10"><div className="w-[25%] h-full bg-accent-teal"></div></div>

            <div className="flex justify-between items-center group mt-8">
              <span className="group-hover:text-white transition-colors">Technical Complexity</span>
              <span className="text-accent-pink text-4xl">25%</span>
            </div>
            <div className="w-full h-1 bg-white/10"><div className="w-[25%] h-full bg-accent-pink"></div></div>

            <div className="flex justify-between items-center group mt-8">
              <span className="group-hover:text-white transition-colors">Feasibility & Practicability</span>
              <span className="text-accent-yellow text-4xl">20%</span>
            </div>
            <div className="w-full h-1 bg-white/10"><div className="w-[20%] h-full bg-accent-yellow"></div></div>
            
            <div className="flex justify-between items-center group mt-8">
              <span className="group-hover:text-white transition-colors">Presentation Clarity</span>
              <span className="text-accent-orange text-4xl">15%</span>
            </div>
            <div className="w-full h-1 bg-white/10"><div className="w-[15%] h-full bg-accent-orange"></div></div>
            
            <div className="flex justify-between items-center group mt-8">
              <span className="group-hover:text-white transition-colors">Social Impact</span>
              <span className="text-accent-purple text-4xl">10%</span>
            </div>
            <div className="w-full h-1 bg-white/10"><div className="w-[10%] h-full bg-accent-purple"></div></div>

            <div className="flex justify-between items-center group mt-8">
              <span className="group-hover:text-white transition-colors">User Experience</span>
              <span className="text-white/50 text-4xl">5%</span>
            </div>
            <div className="w-full h-1 bg-white/10"><div className="w-[5%] h-full bg-white/50"></div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
