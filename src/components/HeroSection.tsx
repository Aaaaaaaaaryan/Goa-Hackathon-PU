/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  return (
    <header className="min-h-[100svh] flex items-center justify-center pt-28 px-4 md:px-12 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] bg-accent-orange/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
      
      <h1 className="font-anton text-[11vw] md:text-[8rem] lg:text-[10rem] leading-[1.1] md:leading-[0.9] tracking-tight uppercase max-w-[1400px] mx-auto z-10 break-words">
        <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.1}} className="block">
          HOOKED BY <span className="text-accent-yellow">AI</span>
        </motion.span>
        <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.2}} className="block mt-2 md:mt-4">
          FASCINATED BY <span className="text-accent-teal">INNOVATION</span>
        </motion.span>
        <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.3}} className="block mt-2 md:mt-4">
          FUELLED BY <span className="text-accent-pink">CODE</span> AND
        </motion.span>
        <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.4}} className="block mt-2 md:mt-4">
          MEANINGFUL <span className="text-accent-orange">SOLUTIONS</span>
        </motion.span>
      </h1>
    </header>
  );
};
