import { motion } from 'motion/react';
import { Minus, Plus } from 'lucide-react';

type AccordionItemProps = {
  title: string;
  time: string;
  isOpen: boolean;
  onClick: () => void;
};

export function AccordionItem({ title, time, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-white/20">
      <button
        onClick={onClick}
        className="w-full py-6 md:py-8 flex gap-4 justify-between items-start md:items-center text-left hover:text-white/80 transition-colors group"
      >
        <span className="font-anton text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide md:group-hover:pl-4 transition-all duration-300 flex-1 min-w-0 break-words pr-2">
          {title}
        </span>
        <div className="flex items-center gap-6 mt-1.5 md:mt-0 flex-shrink-0">
          <span className="font-inter text-sm md:text-base text-white/50 font-medium hidden md:block">
            {time}
          </span>
          {isOpen ? (
            <Minus className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0" />
          ) : (
            <Plus className="w-6 h-6 md:w-8 md:h-8 text-white flex-shrink-0" />
          )}
        </div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-8 pt-2 font-inter text-white/70 text-lg md:text-xl max-w-2xl">
          <p className="md:hidden text-accent-yellow font-bold mb-4">{time}</p>
          Join us for the {title.toLowerCase()} phase. Be prepared and on time. We've arranged
          everything you need for this segment to ensure maximum productivity and innovation.
        </div>
      </motion.div>
    </div>
  );
}
