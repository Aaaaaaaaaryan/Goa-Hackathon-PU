import { motion } from 'motion/react';
import { useNavVisibility } from '../hooks/useNavVisibility';

type TopNavigationProps = {
  regLink: string;
  isLate: boolean;
};

export function TopNavigation({ regLink, isLate }: TopNavigationProps) {
  const isNavVisible = useNavVisibility();

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isNavVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 w-full z-50 flex justify-between items-center p-6 md:p-10 pointer-events-none"
    >
      <div className="font-anton text-3xl text-accent-orange uppercase tracking-wide pointer-events-auto">
        <img src="/logo.png" alt="Parul University Goa" className="h-12 md:h-16" />
      </div>
      <div className="flex items-center gap-4 sm:gap-6 pointer-events-auto">
        <div className="hidden md:flex gap-8 font-inter text-sm uppercase tracking-widest font-medium bg-bg-dark/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
          <a href="#about" className="hover:text-accent-orange transition-colors">
            About
          </a>
          <a href="#schedule" className="hover:text-accent-orange transition-colors">
            Schedule
          </a>
          <a href="#tools" className="hover:text-accent-orange transition-colors">
            Tools
          </a>
          <a href="#prizes" className="hover:text-accent-orange transition-colors">
            Prizes
          </a>
        </div>
        <a
          href={regLink}
          target={isLate ? '_self' : '_blank'}
          rel="noreferrer"
          className="bg-accent-orange text-bg-dark border-2 border-accent-orange px-5 py-2 md:py-2.5 rounded-full font-bold uppercase tracking-wide text-xs sm:text-sm hover:bg-bg-dark hover:text-accent-orange transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(242,75,40,0.4)]"
        >
          Register
        </a>
      </div>
    </motion.nav>
  );
}
