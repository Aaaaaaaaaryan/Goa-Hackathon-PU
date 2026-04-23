import { AnimatePresence, motion } from 'motion/react';

type RollingDigitProps = {
  value: number;
  label: string;
};

export function RollingDigit({ value, label }: RollingDigitProps) {
  const paddedValue = value.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-14 sm:h-20 md:h-28 overflow-hidden flex items-center justify-center bg-bg-darker border-[2px] border-white px-0.5 sm:px-4 md:px-5 rounded-lg shadow-[3px_3px_0px_#f24b28] sm:shadow-[4px_4px_0px_#f24b28] lg:shadow-[6px_6px_0px_#f24b28] w-[3.5rem] sm:w-[5.5rem] md:w-[7.5rem]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={paddedValue}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            exit={{ y: '-100%', opacity: 0, position: 'absolute' }}
            transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
            className="font-anton text-[2.5rem] sm:text-[4.5rem] md:text-[6.5rem] leading-none tracking-tight tabular-nums text-white block min-w-[1.1em] text-center"
          >
            {paddedValue}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="mt-2 sm:mt-4 font-inter font-bold tracking-[0.2em] uppercase text-[9px] sm:text-xs md:text-sm text-accent-orange text-center">
        {label}
      </span>
    </div>
  );
}

export function TimeSeparator() {
  return (
    <div className="flex flex-col justify-center h-14 sm:h-20 md:h-28 pointer-events-none pb-0 px-0.5 sm:px-0">
      <span className="font-anton text-xl sm:text-4xl md:text-5xl text-white/30 leading-none">:</span>
    </div>
  );
}
