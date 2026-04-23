import { ArrowUpRight } from 'lucide-react';

type ToolItemProps = {
  name: string;
  desc: string;
  color: string;
  tag: string;
  link: string;
};

export function ToolItem({ name, desc, color, tag, link }: ToolItemProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="block group relative border-b border-white/20 py-8 md:py-12 cursor-pointer hover:bg-white/5 transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 md:px-8">
        <div className="flex-1">
          <h3 className="font-anton text-4xl md:text-6xl uppercase tracking-wider mb-4 group-hover:text-accent-teal transition-colors">
            {name}
          </h3>
          <div className="flex gap-4 items-center">
            <span
              className={`px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#151515] ${color}`}
            >
              {tag}
            </span>
            <span className="font-inter text-white/60 text-lg">{desc}</span>
          </div>
        </div>
        <div className="mt-6 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
          <ArrowUpRight className="w-12 h-12 text-accent-teal" />
        </div>
      </div>
    </a>
  );
}
