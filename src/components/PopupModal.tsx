import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Lock } from 'lucide-react';

interface PopupModalProps {
  message: string;
  onClose: () => void;
}

export default function PopupModal({ message, onClose }: PopupModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!message) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-dark/80 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-bg-dark border-[2px] border-accent-orange p-8 md:p-10 rounded-2xl max-w-md w-full shadow-[8px_8px_0px_#f24b28] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-white/50 hover:text-accent-orange transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="flex flex-col items-center text-center gap-6">
          <div className="w-20 h-20 rounded-full bg-accent-orange/20 text-accent-orange flex items-center justify-center mb-2">
            <Lock size={40} />
          </div>
          <h3 className="font-anton text-4xl md:text-5xl tracking-widest uppercase text-white">Notice</h3>
          <p className="font-inter text-lg text-white/80 leading-relaxed text-justify md:text-center px-2">{message}</p>
          <button 
            onClick={onClose}
            className="mt-4 bg-accent-orange text-bg-dark border-2 border-accent-orange px-8 py-4 font-anton text-xl tracking-widest uppercase hover:bg-bg-dark hover:text-accent-orange transition-all w-full flex justify-center items-center gap-2 group shadow-[0_0_15px_rgba(242,75,40,0.4)]"
          >
            NOTED <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
