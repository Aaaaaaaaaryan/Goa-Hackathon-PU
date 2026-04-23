import { RollingDigit, TimeSeparator } from './RollingDigit';
import { useCountdown } from '../hooks/useCountdown';

export function CountdownDisplay() {
  const timeLeft = useCountdown('2026-05-11T10:00:00');

  return (
    <div className="relative w-full max-w-[95vw] sm:max-w-2xl mx-auto lg:mx-0 mt-8 md:mt-16 flex flex-col items-center lg:items-start text-center lg:text-left">
      <div className="mb-6 sm:mb-8 inline-block transform -rotate-2">
        <span className="bg-accent-yellow text-bg-dark font-anton text-base sm:text-xl px-4 md:px-6 py-1.5 md:py-2 uppercase tracking-widest border-[2px] border-bg-dark shadow-[3px_3px_0px_#f24b28] sm:shadow-[4px_4px_0px_#f24b28]">
          TIME TO GO
        </span>
      </div>
      <div className="flex items-center justify-center lg:justify-start gap-1 sm:gap-4 md:gap-5 w-full">
        <RollingDigit value={timeLeft.days} label="Days" />
        <TimeSeparator />
        <RollingDigit value={timeLeft.hours} label="Hours" />
        <TimeSeparator />
        <RollingDigit value={timeLeft.minutes} label="Minutes" />
        <TimeSeparator />
        <RollingDigit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
