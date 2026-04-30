/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

interface CountdownState {
  timeLeft: TimeLeft;
  timerLabel: string;
  hasStarted: boolean;
  isLate: boolean;
  isHackathonStartedAuth: boolean;
  isWorkshopTime: boolean;
}

/**
 * Manages the multi-phase countdown timer logic for the hackathon.
 * Cycles through different target dates and updates labels accordingly.
 */
export function useCountdown(timeOffsetMs: number): CountdownState {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [timerLabel, setTimerLabel] = useState("HACKATHON STARTS IN");
  const [hasStarted, setHasStarted] = useState(false);
  const [isLate, setIsLate] = useState(false);
  const [isHackathonStartedAuth, setIsHackathonStartedAuth] = useState(false);
  const [isWorkshopTime, setIsWorkshopTime] = useState(false);

  useEffect(() => {
    const TARGETS = [
      { date: new Date('2026-05-11T10:30:00').getTime(), label: "HACKATHON STARTS IN", started: false },
      { date: new Date('2026-05-11T16:30:00').getTime(), label: "OFFLINE PHASE ENDS IN", started: true },
      { date: new Date('2026-05-11T17:30:00').getTime(), label: "MANDATORY BREAK ENDS IN", started: true },
      { date: new Date('2026-05-12T10:30:00').getTime(), label: "ONLINE HACKATHON ENDS IN", started: true },
    ];
    
    // Initial call to prevent 1-second delay
    const calculateTimeLeft = () => {
      const nowMs = new Date().getTime() + timeOffsetMs;
      const nowObj = new Date(nowMs);
      
      const isFourth = nowObj.getDate() === 4 && nowObj.getMonth() === 4 && nowObj.getFullYear() === 2026;
      const hours = nowObj.getHours();
      setIsWorkshopTime(isFourth && hours >= 10 && hours < 16);
      
      setIsLate(nowObj > new Date('2026-05-04T23:59:59'));
      setIsHackathonStartedAuth(nowObj >= new Date('2026-05-11T10:30:00'));
      
      const now = nowMs;
      let currentTarget = null;

      for (const target of TARGETS) {
        if (now < target.date) {
          currentTarget = target;
          break;
        }
      }

      if (currentTarget) {
        const difference = currentTarget.date - now;
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
        setTimerLabel(currentTarget.label);
        setHasStarted(currentTarget.started);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setTimerLabel("HACKATHON HAS ENDED");
        setHasStarted(true);
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [timeOffsetMs]);

  return { timeLeft, timerLabel, hasStarted, isLate, isHackathonStartedAuth, isWorkshopTime };
}
