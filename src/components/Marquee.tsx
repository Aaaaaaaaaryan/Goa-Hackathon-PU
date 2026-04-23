import { motion } from 'motion/react';

type MarqueeProps = {
  text: string;
};

export function Marquee({ text }: MarqueeProps) {
  return (
    <div className="bg-accent-orange py-3 md:py-4 transform -rotate-2 scale-110 my-20 md:my-32 overflow-hidden shadow-[0_0_50px_rgba(242,75,40,0.3)] relative z-10 w-full">
      <div className="flex overflow-hidden whitespace-nowrap w-[200%]">
        <motion.div
          className="flex whitespace-nowrap gap-8 md:gap-12 text-3xl md:text-5xl lg:text-6xl font-anton uppercase tracking-wider text-white"
          animate={{ x: [0, '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
        >
          {Array(10)
            .fill(text)
            .map((t, i) => (
              <span key={i} className="flex items-center gap-8 md:gap-12">
                {t} <span className="text-[0.6em] text-white/50">♦</span>
              </span>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
