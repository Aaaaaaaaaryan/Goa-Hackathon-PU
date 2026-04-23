/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Code, Github, Sparkles, User, Award } from 'lucide-react';
import { AccordionItem } from './components/AccordionItem';
import { Marquee } from './components/Marquee';
import { ToolItem } from './components/ToolItem';
import { TopNavigation } from './components/TopNavigation';
import { CountdownDisplay } from './components/CountdownDisplay';

export default function App() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const isLate = new Date() > new Date('2026-04-29T23:59:59');
  const regLink = isLate ? "#" : "https://forms.gle/SX25K6vjLWftuKpy6";

  return (
    <div className="bg-bg-dark text-white min-h-screen font-inter overflow-x-hidden selection:bg-accent-orange selection:text-white">
      <TopNavigation regLink={regLink} isLate={isLate} />

      {/* Hero Section */}
      <header className="min-h-[100svh] flex items-center justify-center pt-28 px-4 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[60vw] md:h-[60vw] bg-accent-orange/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none"></div>
        
        <h1 className="font-anton text-[3.2rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[1.1] md:leading-[0.9] tracking-tight uppercase max-w-[1400px] mx-auto z-10 break-words">
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.1}} className="block">
            HOOKED BY <span className="text-accent-yellow">AI,</span>
          </motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.2}} className="block mt-2 md:mt-4">
            FASCINATED BY <span className="text-accent-teal">INNOVATION,</span>
          </motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.3}} className="block mt-2 md:mt-4">
            FUELLED BY <span className="text-accent-pink">CODE</span> AND
          </motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.4}} className="block mt-2 md:mt-4">
            MEANINGFUL <span className="text-accent-orange">SOLUTIONS.</span>
          </motion.span>
        </h1>
      </header>

      <Marquee text="AI IN CAMPUS • PARUL UNIVERSITY GOA • 11TH & 12TH MAY •" />

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-7">
            <h2 className="font-anton text-5xl sm:text-7xl md:text-[6rem] leading-[1.1] md:leading-[0.95] tracking-wide uppercase mb-12">
              BUILDING BRAND NEW <br />
              EXPERIENCES AT <span className="text-accent-orange underline decoration-[4px] md:decoration-[8px] underline-offset-[4px] md:underline-offset-[12px]">PARUL UNIVERSITY GOA</span>.
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
                Organized by the Department of Computer Science & Engineering. A 2-day marathon of coding, building, and innovating the future of <strong>AI in campus life</strong>. Join hundreds of passionate hackers as we explore the intersection of artificial intelligence and student experiences.
                Whether you are a seasoned coder or a visionary designer, this is your perfect playground to collaborate, build groundbreaking solutions, and shape the future of our university.
              </p>
              <a href={regLink} target={isLate ? "_self" : "_blank"} rel="noreferrer" className="font-anton text-2xl uppercase tracking-wider flex items-center gap-2 group hover:text-accent-teal transition-colors w-fit">
                {isLate ? "REGISTRATIONS CLOSED" : "REGISTER NOW"} <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
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
            <CountdownDisplay />
          </div>
          
          <div className="flex flex-col mt-12 lg:mt-0">
             <AccordionItem 
               title="Pre-Hackathon Sensitization" 
               time="9:30 – 10:30 AM" 
               isOpen={openAccordion === 0} 
               onClick={() => setOpenAccordion(openAccordion === 0 ? null : 0)} 
             />
             <AccordionItem 
               title="Inauguration Ceremony" 
               time="10:00 – 10:30 AM" 
               isOpen={openAccordion === 1} 
               onClick={() => setOpenAccordion(openAccordion === 1 ? null : 1)} 
             />
             <AccordionItem 
               title="Offline Hackathon Phase" 
               time="10:30 AM – 4:30 PM" 
               isOpen={openAccordion === 2} 
               onClick={() => setOpenAccordion(openAccordion === 2 ? null : 2)} 
             />
             <AccordionItem 
               title="Mandatory Break" 
               time="4:30 – 5:30 PM" 
               isOpen={openAccordion === 3} 
               onClick={() => setOpenAccordion(openAccordion === 3 ? null : 3)} 
             />
             <AccordionItem 
               title="Online Hackathon Phase" 
               time="5:30 PM onwards" 
               isOpen={openAccordion === 4} 
               onClick={() => setOpenAccordion(openAccordion === 4 ? null : 4)} 
             />
          </div>
        </div>
      </section>

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
          <div>
            <h3 className="font-anton text-4xl mb-8 border-b-4 border-white inline-block pb-2">TEAM RULES</h3>
            <ul className="space-y-6 list-none font-inter text-xl text-white/80">
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
                <span>No substitutions after registration deadline (29th)</span>
              </li>
            </ul>

            <h3 className="font-anton text-4xl mb-8 mt-16 border-b-4 border-white inline-block pb-2">SUBMISSIONS</h3>
            <ul className="space-y-6 list-none font-inter text-xl text-white/90">
              <li className="flex gap-6 items-center lg:items-start xl:items-center">
                <div className="w-36 shrink-0 bg-white/10 px-4 py-2 rounded-md font-medium text-center text-sm md:text-base tracking-widest text-white/90 uppercase">PROTOTYPE</div> 
                <span className="leading-snug pt-1 lg:pt-2 xl:pt-1">Working MVP (web, app, <br className="hidden sm:block"/> hardware)</span>
              </li>
              <li className="flex gap-6 items-center">
                <div className="w-36 shrink-0 bg-white/10 px-4 py-2 rounded-md font-medium text-center text-sm md:text-base tracking-widest text-white/90 uppercase">CODEBASE</div> 
                <span className="leading-snug">GitHub repo link</span>
              </li>
              <li className="flex gap-6 items-center">
                <div className="w-36 shrink-0 bg-white/10 px-4 py-2 rounded-md font-medium text-center text-sm md:text-base tracking-widest text-white/90 uppercase">PITCH</div> 
                <span className="leading-snug">5-min live demo + 3-min Q&A</span>
              </li>
              <li className="flex gap-6 items-center">
                <div className="w-36 shrink-0 bg-white/10 px-4 py-2 rounded-md font-medium text-center text-sm md:text-base tracking-widest text-white/90 uppercase">DECK</div> 
                <span className="leading-snug">Final PPT template</span>
              </li>
            </ul>
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
          <ToolItem name="GITHUB COPILOT" desc="AI code autocomplete" color="bg-[#FAFAFA]" tag="Coding" link="https://github.com/features/copilot" />
          <ToolItem name="CHATGPT" desc="Ideation, debugging, documentation" color="bg-[#10A37F] text-white" tag="Assistant" link="https://chatgpt.com" />
          <ToolItem name="CLAUDE (ANTHROPIC)" desc="Writing, code explanation, analysis" color="bg-[#D97757] text-white" tag="Analysis" link="https://claude.ai" />
          <ToolItem name="GEMINI" desc="Multimodal AI for data & research" color="bg-[#4285F4] text-white" tag="Multimodal" link="https://gemini.google.com" />
          <ToolItem name="CURSOR / CODEIUM" desc="AI-native code editors" color="bg-accent-yellow" tag="IDE" link="https://cursor.com" />
          <ToolItem name="MIDJOURNEY / DALL-E" desc="UI/UX visual assets" color="bg-accent-purple text-white" tag="Design" link="https://www.midjourney.com" />
        </div>
      </section>

      <Marquee text="HALL OF FAME • PRIZES & RECOGNITION • CASH PRIZES REVEALED WITH WINNERS •" />

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
                HALL OF FAME, <br/> AND THE SPOILS.
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
                <h3 className="font-anton text-3xl mb-2 uppercase">BEST FEMALE-LED TEAM</h3>
                <p className="font-inter opacity-70 mb-6">Recognizing exceptional leadership and execution by women in tech.</p>
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
          WHEN YOU'RE NOT HACKING, SHARE <br/> TEAM PICS ON <span className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-3 py-1 border-none pb-2 rounded inline-flex items-center gap-2 translate-y-1 md:translate-y-2 mx-1">IG</span> <br/>
          AND PUSH YOUR CODE TO <span className="bg-[#181717] text-white px-3 py-1 pb-2 border-none rounded inline-flex items-center gap-2 translate-y-1 md:translate-y-2 mx-1 md:text-2xl">GH</span> EVERY NOW AND THEN.
        </h2>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-32 px-6 text-center border-t border-white/10">
         <h2 className="font-anton text-4xl md:text-7xl lg:text-[8rem] uppercase tracking-wide">
           READY TO BUILD THE FUTURE? <br/>
           <a href={regLink} target={isLate ? "_self" : "_blank"} rel="noreferrer" className="text-accent-orange hover:text-white transition-colors inline-block relative cursor-pointer pt-4">
             {isLate ? "REGISTRATIONS CLOSED" : "REGISTER NOW"} <ArrowUpRight className="inline-block w-12 h-12 md:w-20 md:h-20 -mt-12 bg-accent-orange/20 rounded-full text-accent-orange group-hover:text-white group-hover:bg-white/20" />
           </a>
         </h2>
         <p className="mt-6 font-anton text-2xl text-accent-yellow tracking-widest uppercase">
           {isLate ? "Oops! Looks like someone is late to the party. Registrations are closed." : "Deadline to register: 29th"}
         </p>
         <p className="mt-8 font-inter text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
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
                </div>
             </div>
             <div>
               <p className="font-lg mb-6 font-inter opacity-70 tracking-wide uppercase text-transparent selection:text-transparent">.</p>
               <ul className="space-y-4 text-xl">
                  <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
                  <li><a href="#tools" className="hover:text-white transition-colors">Tools</a></li>
                  <li><a href="#prizes" className="hover:text-white transition-colors">Prizes</a></li>
               </ul>
             </div>
           </div>

           <div className="col-span-1 flex flex-col items-start lg:items-end w-full">
              <a href={regLink} target={isLate ? "_self" : "_blank"} rel="noreferrer" className="bg-bg-dark text-white px-6 py-4 font-anton text-2xl tracking-widest uppercase flex items-center gap-2 hover:bg-black transition-colors w-fit lg:w-auto">
                {isLate ? "REGISTRATIONS CLOSED" : "REGISTER NOW"} <ArrowUpRight className="w-8 h-8" />
              </a>
           </div>
        </div>

        <div className="max-w-[1800px] mx-auto border-t border-bg-dark/20 mt-20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10 font-inter">
          <div className="text-sm">
            <p className="font-anton text-2xl mb-2 uppercase tracking-wide">BUILT WITH ♥ AT PARUL UNIVERSITY GOA</p>
            <p className="mt-4 mb-6 text-xs opacity-40 font-medium tracking-wide">Developed by <a href="https://www.linkedin.com/in/noticedxaaryan" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Aaryan Kumar Tiwari</a></p>
            <p className="text-xs opacity-60 font-medium">Code, sleep, repeat. ☾ Building the AI future.</p>
            <p className="text-xs opacity-60 mt-1 font-medium">© 2026 Goa Hackathon • Parul University Goa • Code of Conduct • Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
