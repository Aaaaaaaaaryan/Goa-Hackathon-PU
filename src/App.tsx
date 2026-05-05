import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Code, Github, Sparkles, Briefcase, User, Award, Calendar, Maximize, Minimize } from 'lucide-react';

import PopupModal from './components/PopupModal';
import Marquee from './components/Marquee';
import AccordionItem from './components/AccordionItem';
import ToolItem from './components/ToolItem';
import RollingDigit from './components/RollingDigit';
import TimeSeparator from './components/TimeSeparator';
import useCountdown from './hooks/useCountdown';
import useScrollDirection from './hooks/useScrollDirection';
import { REGISTRATION_LINK, PROBLEM_STATEMENTS, AI_TOOLS, SCHEDULE_ITEMS } from './data/constants';




export default function App() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isFullscreenTimer, setIsFullscreenTimer] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const { timeLeft, timerLabel, hasStarted, isLate, isHackathonStartedAuth, isWorkshopTime } = useCountdown();
  const isNavVisible = useScrollDirection();

  useEffect(() => {
    document.title = "Goa Hackathon 26 | Parul University";
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHackathonStartedAuth) {
        e.preventDefault();
        setPopupMessage("Registration is no longer working as the Hackathon has already started or concluded.");
    } else if (isLate) {
        e.preventDefault();
        setPopupMessage("Hackathon registrations are currently closed. The deadline was May 4th.");
    }
  };

  return (
    <div className="bg-bg-dark text-white min-h-screen font-inter overflow-x-hidden selection:bg-accent-orange selection:text-white relative">
      <AnimatePresence>
        {popupMessage && <PopupModal message={popupMessage} onClose={() => setPopupMessage(null)} />}
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isNavVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 w-full z-50 flex justify-between items-center p-4 md:p-6 lg:p-8 pointer-events-none"
      >
        <div className="pointer-events-auto">
          <img src="/logo.png" alt="Parul University Goa" className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto object-contain" />
        </div>
        <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
          <div className="hidden md:flex gap-8 font-inter text-sm uppercase tracking-widest font-medium bg-bg-dark/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            <a href="#about" className="hover:text-accent-orange transition-colors">About</a>
            <a href="#schedule" className="hover:text-accent-orange transition-colors">Schedule</a>
            <a href="#tools" className="hover:text-accent-orange transition-colors">Tools</a>
            <a href="#prizes" className="hover:text-accent-orange transition-colors">Prizes</a>
          </div>
          <a href={(!isLate && !isHackathonStartedAuth) ? REGISTRATION_LINK : "#"} onClick={handleRegisterClick} target={(!isLate && !isHackathonStartedAuth) ? "_blank" : "_self"} rel="noreferrer" className="bg-accent-orange text-bg-dark border-2 border-accent-orange px-5 py-2 md:py-2.5 rounded-full font-bold uppercase tracking-wide text-xs sm:text-sm hover:bg-bg-dark hover:text-accent-orange transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(242,75,40,0.4)]">
            Register
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="min-h-[100svh] flex flex-col justify-center pt-24 md:pt-32 pb-16 px-4 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] bg-accent-orange/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
        
        <h1 className="font-anton text-[clamp(2.5rem,8.5vw,8.5rem)] leading-[1.05] md:leading-[0.95] tracking-tight uppercase max-w-[1400px] mx-auto z-10 break-words w-full flex flex-col gap-0 md:gap-2">
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.1}} className="block">
            HOOKED BY <span className="text-accent-yellow">AI</span>
          </motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.2}} className="block">
            FASCINATED BY <span className="text-accent-teal">INNOVATION</span>
          </motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.3}} className="block">
            FUELLED BY <span className="text-accent-pink">CODE</span> AND
          </motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.4}} className="block">
            MEANINGFUL <span className="text-accent-orange">SOLUTIONS</span>
          </motion.span>
        </h1>
      </header>

      <Marquee text="AI IN CAMPUS • PARUL UNIVERSITY GOA • 11TH & 12TH MAY •" />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-7">
            <h2 className="font-anton text-[clamp(2.5rem,6.5vw,6rem)] leading-[1.1] md:leading-[0.95] tracking-wide uppercase mb-12 break-words w-full max-w-full">
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
              <p className="font-inter text-lg md:text-xl text-white/80 leading-relaxed mb-8 text-justify">
                Organized by the Department of Computer Science and Engineering. A 24 hour marathon of coding, building, and innovating the future of <strong>AI in campus life</strong>. Join hundreds of passionate participants as we explore the intersection of artificial intelligence and student experiences.
                Whether you are a seasoned coder or a visionary designer, this is your perfect playground to collaborate, build groundbreaking solutions, and shape the future of our university.
              </p>
              <a href={(!isLate && !isHackathonStartedAuth) ? REGISTRATION_LINK : "#"} onClick={handleRegisterClick} target={(!isLate && !isHackathonStartedAuth) ? "_blank" : "_self"} rel="noreferrer" className="font-anton text-2xl uppercase tracking-wider flex items-center gap-2 group hover:text-accent-teal transition-colors w-fit">
                {isLate ? "REGISTRATIONS CLOSED" : "REGISTER NOW"} <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Hackathon Workshop Section */}
      <section id="workshop" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto border-t border-white/10">
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
             <p className="font-inter text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed text-justify">
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
             <div className={`bg-bg-dark border-[2px] p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 text-center transition-all duration-300 hover:bg-[#1a1a1a] hover:border-accent-yellow hover:-translate-y-2 hover:shadow-[6px_6px_0px_#ffde59] cursor-default w-full sm:min-w-[140px] md:min-w-[170px] group/card ${activeCardIndex === 0 ? 'bg-[#1a1a1a] border-accent-yellow -translate-y-2 shadow-[6px_6px_0px_#ffde59]' : 'border-white/10'}`}>
                <Briefcase size={28} className={`text-accent-yellow group-hover/card:scale-110 transition-transform duration-300 sm:w-8 sm:h-8 ${activeCardIndex === 0 ? 'scale-110' : ''}`} strokeWidth={1.5} />
                <span className="font-anton tracking-widest text-base sm:text-lg md:text-xl text-white mt-1">UI / UX</span>
             </div>
             <div className={`bg-bg-dark border-[2px] p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 text-center transition-all duration-300 hover:bg-[#1a1a1a] hover:border-accent-pink hover:-translate-y-2 hover:shadow-[6px_6px_0px_#ff91e3] cursor-default w-full sm:min-w-[140px] md:min-w-[170px] group/card ${activeCardIndex === 1 ? 'bg-[#1a1a1a] border-accent-pink -translate-y-2 shadow-[6px_6px_0px_#ff91e3]' : 'border-white/10'}`}>
                <Code size={28} className={`text-accent-pink group-hover/card:scale-110 transition-transform duration-300 sm:w-8 sm:h-8 ${activeCardIndex === 1 ? 'scale-110' : ''}`} strokeWidth={1.5} />
                <span className="font-anton tracking-widest text-base sm:text-lg md:text-xl text-white mt-1">WEB DEV</span>
             </div>
             <div className={`bg-bg-dark border-[2px] p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 text-center transition-all duration-300 hover:bg-[#1a1a1a] hover:border-accent-orange hover:-translate-y-2 hover:shadow-[6px_6px_0px_#f24b28] cursor-default w-full sm:min-w-[140px] md:min-w-[170px] group/card ${activeCardIndex === 2 ? 'bg-[#1a1a1a] border-accent-orange -translate-y-2 shadow-[6px_6px_0px_#f24b28]' : 'border-white/10'}`}>
                <Sparkles size={28} className={`text-accent-orange group-hover/card:scale-110 transition-transform duration-300 sm:w-8 sm:h-8 ${activeCardIndex === 2 ? 'scale-110' : ''}`} strokeWidth={1.5} />
                <span className="font-anton tracking-widest text-base sm:text-lg md:text-xl text-white mt-1">BACKEND</span>
             </div>
             <div className={`bg-bg-dark border-[2px] p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-2 sm:gap-3 text-center transition-all duration-300 hover:bg-[#1a1a1a] hover:border-white hover:-translate-y-2 hover:shadow-[6px_6px_0px_white] cursor-default w-full sm:min-w-[140px] md:min-w-[170px] group/card ${activeCardIndex === 3 ? 'bg-[#1a1a1a] border-white -translate-y-2 shadow-[6px_6px_0px_white]' : 'border-white/10'}`}>
                <Github size={28} className={`text-white group-hover/card:scale-110 transition-transform duration-300 sm:w-8 sm:h-8 ${activeCardIndex === 3 ? 'scale-110' : ''}`} strokeWidth={1.5} />
                <span className="font-anton tracking-widest text-base sm:text-lg md:text-xl text-white mt-1">GITHUB</span>
             </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="sticky top-32">
            <h2 className="font-anton text-5xl sm:text-7xl md:text-[6rem] leading-[1.1] md:leading-[0.9] tracking-wide uppercase mb-8">
              DEEP INTO <br/>
              HACKATHON PHASES, <br/>
              TIMINGS AND <br/>
              <span className="text-white">SCHEDULE</span>
            </h2>
          </div>
          
          <div className="flex flex-col mt-12 lg:mt-0">
             {SCHEDULE_ITEMS.map((item, idx) => (
               <AccordionItem
                 {...{key: item.title} as any}
                 title={item.title}
                 time={item.time}
                 isOpen={openAccordion === idx}
                 onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
               />
             ))}
          </div>
        </div>
      </section>

      {/* Standalone Timer Section */}
      <section className={`py-16 md:py-24 px-6 md:px-12 w-full flex flex-col items-center border-t border-white/10 ${isFullscreenTimer ? 'fixed inset-0 z-[100] bg-bg-dark justify-center h-screen overflow-hidden' : 'relative'}`}>
         {isFullscreenTimer && (
           <>
             <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 w-full max-w-[90vw]">
               <img src="/logo.png" alt="Parul University Goa Logo" className="w-32 md:w-48 max-h-16 object-contain"/>
             </div>
             <button 
               onClick={() => setIsFullscreenTimer(false)}
               className="absolute top-8 right-8 z-10 text-white/50 hover:text-white transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10"
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

      {/* Problem Statements / Topics Section */}
      {hasStarted && (
        <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto border-t border-white/10">
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
                
                <p className="font-inter text-white/60 text-sm leading-relaxed mt-auto group-hover:text-white/90 transition-colors text-justify">
                  {stmt.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Team Rules & Submission */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-bg-darker">
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
            <div className="mt-16 hidden lg:flex w-full h-[400px] relative items-center justify-center group">
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

      {/* AI Tools Allowed Section */}
      <section id="tools" className="py-0 px-0 mt-32">
        <div className="mb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
          <h2 className="font-anton text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] md:leading-[0.9] tracking-wide uppercase text-white mb-6">
            AI TOOLS <span className="text-white/50">ALLOWED</span>
          </h2>
          <p className="font-inter text-xl text-white/70 max-w-2xl">Use these powerful tools to accelerate your workflow. Relevant to our "AI in Campus" theme.</p>
        </div>
        
        <div className="flex flex-col border-t border-white/20">
          {AI_TOOLS.map((tool) => (
            <ToolItem
              {...{key: tool.name} as any}
              name={tool.name}
              desc={tool.desc}
              color={tool.color}
              tag={tool.tag}
              link={tool.link}
            />
          ))}
        </div>
      </section>

      <Marquee text="HALL OF FAME • PRIZES & RECOGNITION • SURPRISE BOUNTY AMOUNT •" />

      {/* Prizes Section - Styled like Testimonials */}
      <section id="prizes" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto relative overflow-hidden text-center">
        <div className="absolute inset-0 flex flex-wrap content-start opacity-[0.03] text-6xl md:text-9xl font-anton uppercase break-all pointer-events-none line-clamp-[10] overflow-hidden leading-none z-0">
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

      {/* Social / Contact Big Text Section */}
      <section className="py-16 md:py-40 px-6 md:px-12 text-center max-w-[1200px] mx-auto opacity-40 hover:opacity-100 transition-opacity duration-500">
        <h2 className="font-anton text-2xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.2] md:leading-[1.1] tracking-wide uppercase text-white/50">
          STAY TUNED FOR ANNOUNCEMENTS ON <span className="bg-[#25D366] text-white px-3 py-1 border-none pb-2 rounded inline-flex items-center gap-2 translate-y-1 md:translate-y-2 mx-1">WHATSAPP</span> AND <span className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-3 py-1 border-none pb-2 rounded inline-flex items-center gap-2 translate-y-1 md:translate-y-2 mx-1">IG</span> <br/>
          WHEN YOU'RE NOT HACKING SHARE <br/> TEAM PICS ON <span className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-3 py-1 border-none pb-2 rounded inline-flex items-center gap-2 translate-y-1 md:translate-y-2 mx-1">IG</span> <br/>
          AND PUSH YOUR CODE TO <span className="bg-[#181717] text-white px-3 py-1 pb-2 border-none rounded inline-flex items-center gap-2 translate-y-1 md:translate-y-2 mx-1 md:text-2xl">GH</span> EVERY NOW AND THEN
        </h2>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 px-6 text-center border-t border-white/10">
         <h2 className="font-anton text-[clamp(2rem,7.5vw,8rem)] uppercase tracking-wide leading-[1.1] md:leading-[0.95] break-words w-full max-w-full flex justify-center flex-col items-center">
           <span className="block text-center w-full max-w-full break-words">READY TO BUILD THE FUTURE?</span>
           <a href={(!isLate && !isHackathonStartedAuth) ? REGISTRATION_LINK : "#"} onClick={handleRegisterClick} target={(!isLate && !isHackathonStartedAuth) ? "_blank" : "_self"} rel="noreferrer" className="text-accent-orange hover:text-white transition-all duration-300 inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6 relative cursor-pointer mt-6 max-w-full group">
             <span className="break-words max-w-full text-center">{isLate ? "REGISTRATIONS CLOSED" : "REGISTER NOW"}</span> 
             <div className="w-16 h-16 md:w-24 md:h-24 bg-accent-orange/10 group-hover:bg-white/10 rounded-full flex items-center justify-center transition-colors shrink-0">
               <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-accent-orange group-hover:text-white transition-colors" strokeWidth={2} />
             </div>
           </a>
         </h2>
         <p className="mt-6 font-anton text-2xl text-accent-yellow tracking-widest uppercase">
           {isLate ? "Oops! Looks like someone is late to the party. Registrations are closed." : "Deadline to register: May 4th"}
         </p>
         <p className="mt-8 font-inter text-lg md:text-xl text-white/50 max-w-2xl mx-auto text-justify md:text-center">
           We're always open to new queries, collaborations, and connections. Whether you have a project doubt you'd like to discuss or just say hi! Feel free to reach out.
         </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-accent-orange text-bg-dark pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5 font-anton text-[20rem] leading-none whitespace-nowrap -mt-20 overflow-hidden text-black mix-blend-overlay">
           GOA 2026 GOA 2026
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-16 font-inter font-semibold">
           <div className="col-span-1 lg:col-span-1">
             <h2 className="font-anton text-5xl md:text-6xl uppercase tracking-widget mb-8 leading-[1.1] md:leading-[0.9]">GOA <br/> HACKATHON 26</h2>
           </div>
           
           <div className="col-span-1 lg:col-span-2 flex flex-col sm:flex-row gap-12 sm:gap-24 text-lg">
             <div>
                <p className="font-semibold mb-6 font-inter opacity-70 tracking-wide uppercase">Event Coordinators</p>
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-lg md:text-xl uppercase tracking-wide">AARYAN KUMAR TIWARI</p>
                    <p className="opacity-70 text-sm mt-1">Student Coordinator</p>
                  </div>
                  <div className="pt-2 border-t border-bg-dark/10">
                    <p className="font-bold text-lg md:text-xl uppercase tracking-wide">DR. DHAVAL NIMAVAT</p>
                    <p className="opacity-70 text-sm mt-1">Faculty Coordinator</p>
                  </div>
                  <div className="pt-2 border-t border-bg-dark/10">
                    <p className="font-bold text-lg md:text-xl uppercase tracking-wide">DR. SANJEETA RANE</p>
                    <p className="opacity-70 text-sm mt-1">Faculty Coordinator</p>
                  </div>
                  <div className="pt-2 border-t border-bg-dark/10">
                    <p className="font-bold text-lg md:text-xl uppercase tracking-wide">MS. SILICA KOLE</p>
                    <p className="opacity-70 text-sm mt-1">Faculty Coordinator</p>
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

           <div className="col-span-1 flex flex-col items-start lg:items-end w-full gap-8 lg:justify-between">
              <a href={(!isLate && !isHackathonStartedAuth) ? REGISTRATION_LINK : "#"} onClick={handleRegisterClick} target={(!isLate && !isHackathonStartedAuth) ? "_blank" : "_self"} rel="noreferrer" className="bg-bg-dark text-white px-6 py-4 font-anton text-2xl tracking-widest uppercase flex items-center gap-2 hover:bg-black transition-colors w-full sm:w-fit lg:w-auto justify-center sm:justify-start">
                {isLate ? "REGISTRATIONS CLOSED" : "REGISTER NOW"} <ArrowUpRight className="w-8 h-8" />
              </a>
           </div>
        </div>

        <div className="max-w-[1800px] mx-auto border-t border-bg-dark/20 mt-20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10 font-inter">
          <div className="text-sm">
            <p className="font-bold text-lg mb-2 uppercase tracking-wide">PARUL UNIVERSITY GOA</p>
            <p className="mt-2 text-xs opacity-70 font-medium">© 2026 Goa Hackathon • Parul University Goa</p>
            <div className="mt-4 flex gap-4 text-xs opacity-60">
               <a href="#" className="hover:opacity-100 transition-opacity">Code of Conduct</a>
               <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            </div>
          </div>
          <div className="text-sm flex flex-col items-start md:items-end">
             <p className="text-xs opacity-50 font-bold tracking-wide">Platform Developed by <a href="https://www.linkedin.com/in/noticedxaaryan" target="_blank" rel="noopener noreferrer" className="underline hover:text-bg-dark transition-colors">Aaryan Kumar Tiwari</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
