import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownState {
  timeLeft: TimeLeft;
  timerLabel: string;
  hasStarted: boolean;
  isLate: boolean;
  isHackathonStartedAuth: boolean;
  isWorkshopTime: boolean;
}

// Countdown targets — adjust dates here for future events
const TARGETS = [
  { date: new Date('2026-05-11T10:30:00').getTime(), label: "HACKATHON STARTS IN", started: false },
  { date: new Date('2026-05-11T16:30:00').getTime(), label: "OFFLINE PHASE ENDS IN", started: true },
  { date: new Date('2026-05-11T17:30:00').getTime(), label: "MANDATORY BREAK ENDS IN", started: true },
  { date: new Date('2026-05-12T10:30:00').getTime(), label: "ONLINE HACKATHON ENDS IN", started: true },
];

const FETCH_TIMEOUT_MS = 5000;

async function fetchWithTimeout(url: string, timeoutMs: number): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return res;
  } finally {
    clearTimeout(timeoutId);
  }
}

export default function useCountdown(): CountdownState {
  const [timeOffsetMs, setTimeOffsetMs] = useState(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [timerLabel, setTimerLabel] = useState("HACKATHON STARTS IN");
  const [hasStarted, setHasStarted] = useState(false);
  const [isLate, setIsLate] = useState(false);
  const [isHackathonStartedAuth, setIsHackathonStartedAuth] = useState(false);
  const [isWorkshopTime, setIsWorkshopTime] = useState(false);

  // Sync with a real-time API to prevent local clock manipulation
  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    const fetchRealTime = async () => {
      try {
        const res = await fetchWithTimeout('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata', FETCH_TIMEOUT_MS);
        if (!res.ok) throw new Error('Primary time API failed');
        const data = await res.json();
        if (mounted) {
          const apiTime = new Date(data.dateTime).getTime();
          setTimeOffsetMs(apiTime - Date.now());
        }
      } catch {
        try {
          const fallbackRes = await fetchWithTimeout('https://worldtimeapi.org/api/timezone/Asia/Kolkata', FETCH_TIMEOUT_MS);
          if (!fallbackRes.ok) throw new Error('Fallback time API failed');
          const data = await fallbackRes.json();
          if (mounted) {
            const apiTime = new Date(data.utc_datetime).getTime();
            setTimeOffsetMs(apiTime - Date.now());
          }
        } catch {
          // Both APIs unavailable — fall back to local system time
        }
      }
    };

    fetchRealTime();
    return () => { mounted = false; controller.abort(); };
  }, []);

  // Tick every second and compute the current countdown phase
  useEffect(() => {
    const calculateTimeLeft = () => {
      const nowMs = Date.now() + timeOffsetMs;
      const nowObj = new Date(nowMs);

      const isFourth = nowObj.getDate() === 4 && nowObj.getMonth() === 4 && nowObj.getFullYear() === 2026;
      const hours = nowObj.getHours();
      setIsWorkshopTime(isFourth && hours >= 10 && hours < 16);

      setIsLate(nowObj > new Date('2026-05-04T23:59:59'));
      setIsHackathonStartedAuth(nowObj >= new Date('2026-05-11T10:30:00'));

      let currentTarget = null;
      for (const target of TARGETS) {
        if (nowMs < target.date) {
          currentTarget = target;
          break;
        }
      }

      if (currentTarget) {
        const diff = currentTarget.date - nowMs;
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
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
