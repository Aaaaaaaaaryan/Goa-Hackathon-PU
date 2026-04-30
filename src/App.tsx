/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';

// Hooks
import { useTimeSync } from './hooks/useTimeSync';
import { useCountdown } from './hooks/useCountdown';
import { useScrollDirection } from './hooks/useScrollDirection';

// Data
import { REGISTRATION_LINK } from './data/constants';

// Components
import { PopupModal } from './components/PopupModal';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { WorkshopSection } from './components/WorkshopSection';
import { ScheduleSection } from './components/ScheduleSection';
import { CountdownTimer } from './components/CountdownTimer';
import { ProblemStatements } from './components/ProblemStatements';
import { TeamRulesSection } from './components/TeamRulesSection';
import { ToolsSection } from './components/ToolsSection';
import { PrizesSection } from './components/PrizesSection';
import { SocialSection } from './components/SocialSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  // Custom hooks
  const timeOffsetMs = useTimeSync();
  const { timeLeft, timerLabel, hasStarted, isLate, isHackathonStartedAuth, isWorkshopTime } = useCountdown(timeOffsetMs);
  const isNavVisible = useScrollDirection();

  const regLink = REGISTRATION_LINK;

  const handleRegisterClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHackathonStartedAuth) {
      e.preventDefault();
      setPopupMessage("Registration is no longer working as the Hackathon has already started or concluded.");
    } else if (isLate) {
      e.preventDefault();
      setPopupMessage("Hackathon registrations are currently closed. The deadline was May 4th.");
    }
  }, [isHackathonStartedAuth, isLate]);

  const registrationProps = { isLate, isHackathonStartedAuth, regLink, handleRegisterClick };

  return (
    <div className="bg-bg-dark text-white min-h-screen font-inter overflow-x-hidden selection:bg-accent-orange selection:text-white relative">
      <AnimatePresence>
        {popupMessage && <PopupModal message={popupMessage} onClose={() => setPopupMessage(null)} />}
      </AnimatePresence>

      <Navbar isNavVisible={isNavVisible} {...registrationProps} />

      <main>
        <HeroSection />
        <Marquee text="AI IN CAMPUS • PARUL UNIVERSITY GOA • 11TH & 12TH MAY •" />
        <AboutSection {...registrationProps} />
        <WorkshopSection isWorkshopTime={isWorkshopTime} />
        <ScheduleSection />
        <CountdownTimer timeLeft={timeLeft} timerLabel={timerLabel} />
        {hasStarted && <ProblemStatements />}
        <TeamRulesSection />
        <ToolsSection />
        <Marquee text="HALL OF FAME • PRIZES & RECOGNITION • SURPRISE BOUNTY AMOUNT •" />
        <PrizesSection />
        <SocialSection />
        <CTASection {...registrationProps} />
      </main>

      <Footer {...registrationProps} />
    </div>
  );
}
