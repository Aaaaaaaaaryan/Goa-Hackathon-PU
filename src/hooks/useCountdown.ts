import { useEffect, useState } from 'react';

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const INITIAL_COUNTDOWN: CountdownState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export function useCountdown(targetDate: string): CountdownState {
  const [timeLeft, setTimeLeft] = useState<CountdownState>(INITIAL_COUNTDOWN);

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
