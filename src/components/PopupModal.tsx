/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

interface PopupModalProps {
  message: string;
  onClose: () => void;
}

export const PopupModal: React.FC<PopupModalProps> = ({ message, onClose }) => {
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Notice"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-bg-dark border-2 border-white/10 p-8 rounded-3xl max-w-md w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close notice"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-accent-orange/20 text-accent-orange flex items-center justify-center">
            <Lock size={32} />
          </div>
          <h3 className="font-anton text-2xl tracking-wide uppercase">Notice</h3>
          <p className="font-inter text-gray-400">{message}</p>
          <button 
            onClick={onClose}
            className="mt-4 bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors w-full"
          >
            NOTED
          </button>
        </div>
      </motion.div>
    </div>
  );
};
