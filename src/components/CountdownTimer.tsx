/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Maximize, Minimize } from 'lucide-react';
import { RollingDigit, TimeSeparator } from './RollingDigit';
import { TimeLeft } from '../types';

interface CountdownTimerProps {
  timeLeft: TimeLeft;
  timerLabel: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft, timerLabel }) => {
  const [isFullscreenTimer, setIsFullscreenTimer] = useState(false);

  return (
    <section aria-label="Countdown timer" className={`py-16 md:py-24 px-6 md:px-12 w-full flex flex-col items-center border-t border-white/10 ${isFullscreenTimer ? 'fixed inset-0 z-[100] bg-bg-dark justify-center h-screen overflow-hidden' : 'relative'}`}>
       {isFullscreenTimer && (
         <>
           <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 w-full max-w-[90vw]">
             <img src="/parul_university_logo.png" alt="Parul University Logo" className="w-48 md:w-64 max-h-24 object-contain brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }}/>
           </div>
           <button 
             onClick={() => setIsFullscreenTimer(false)}
             className="absolute top-8 right-8 z-10 text-white/50 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
             aria-label="Exit fullscreen timer"
           >
             <Minimize className="w-8 h-8 md:w-10 md:h-10" />
           </button>
         </>
       )}
       
       <div className={`mb-8 md:mb-12 flex items-center justify-center relative w-full ${isFullscreenTimer ? 'mt-4 md:mt-12' : ''}`}>
         <div className={`inline-block transform ${isFullscreenTimer ? '' : '-rotate-2'}`}>
           <span className="bg-accent-yellow text-bg-dark font-anton text-xl sm:text-2xl md:text-3xl lg:text-4xl px-8 md:px-10 py-3 md:py-4 uppercase tracking-widest border-[3px] border-bg-dark shadow-[4px_4px_0px_#f24b28] md:shadow-[6px_6px_0px_#f24b28]">
             {timerLabel}
           </span>
         </div>
         {!isFullscreenTimer && (
           <button 
             onClick={() => setIsFullscreenTimer(true)}
             className="absolute right-0 text-white/50 hover:text-white transition-colors mr-2 hidden md:block"
             title="Fullscreen Timer"
             aria-label="Enter fullscreen timer"
           >
             <Maximize className="w-6 h-6" />
           </button>
         )}
       </div>

       <div className={`flex items-center justify-center w-full ${isFullscreenTimer ? 'gap-2 sm:gap-6 md:gap-8 lg:gap-16 max-w-full flex-wrap xl:flex-nowrap px-4' : 'gap-1 sm:gap-4 md:gap-6 max-w-[95vw] lg:max-w-2xl'}`}>
         <RollingDigit value={timeLeft.days} label="Days" isFullscreen={isFullscreenTimer} />
         <TimeSeparator isFullscreen={isFullscreenTimer} />
         <RollingDigit value={timeLeft.hours} label="Hours" isFullscreen={isFullscreenTimer} />
         <TimeSeparator isFullscreen={isFullscreenTimer} />
         <RollingDigit value={timeLeft.minutes} label="Minutes" isFullscreen={isFullscreenTimer} />
         <TimeSeparator isFullscreen={isFullscreenTimer} />
         <RollingDigit value={timeLeft.seconds} label="Seconds" isFullscreen={isFullscreenTimer} />
       </div>
    </section>
  );
};
