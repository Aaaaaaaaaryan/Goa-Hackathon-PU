import { motion, AnimatePresence } from 'motion/react';

interface RollingDigitProps {
  value: number;
  label: string;
  isFullscreen?: boolean;
}

export default function RollingDigit({ value, label, isFullscreen = false }: RollingDigitProps) {
  const paddedValue = value.toString().padStart(2, '0');
  
  return (
    <div className="flex flex-col items-center">
      <div className={`relative overflow-hidden flex items-center justify-center bg-bg-darker border-[2px] border-white px-0.5 sm:px-4 md:px-5 rounded-lg shadow-[3px_3px_0px_#f24b28] sm:shadow-[4px_4px_0px_#f24b28] lg:shadow-[6px_6px_0px_#f24b28] ${isFullscreen ? 'h-20 sm:h-32 md:h-40 xl:h-48 w-[4.5rem] sm:w-[8rem] md:w-[10rem] xl:w-[12rem] 2xl:w-[15rem] 2xl:h-[18rem]' : 'h-14 sm:h-20 md:h-28 w-[3.5rem] sm:w-[5.5rem] md:w-[7.5rem]'}`}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={paddedValue}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0, position: "absolute" }}
            transition={{ duration: 0.5, ease: [0.19, 1.0, 0.22, 1.0] }}
            className={`font-anton leading-none tracking-tight tabular-nums text-white block min-w-[1.1em] text-center ${isFullscreen ? 'text-[3rem] sm:text-[6rem] md:text-[8rem] xl:text-[10rem] 2xl:text-[13rem]' : 'text-[2.5rem] sm:text-[4.5rem] md:text-[6.5rem]'}`}
          >
            {paddedValue}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className={`mt-2 sm:mt-4 font-inter font-bold tracking-[0.2em] uppercase text-accent-orange text-center ${isFullscreen ? 'text-[10px] sm:text-sm md:text-lg xl:text-2xl' : 'text-[9px] sm:text-xs md:text-sm'}`}>
        {label}
      </span>
    </div>
  );
}
