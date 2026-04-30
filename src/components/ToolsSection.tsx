/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ToolItem } from './ToolItem';
import { AI_TOOLS } from '../data/constants';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" aria-label="AI tools allowed" className="py-0 px-0 mt-32">
      <div className="mb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
        <h2 className="font-anton text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] md:leading-[0.9] tracking-wide uppercase text-white mb-6">
          AI TOOLS <span className="text-white/50">ALLOWED</span>
        </h2>
        <p className="font-inter text-xl text-white/70 max-w-2xl">Use these powerful tools to accelerate your workflow. Relevant to our "AI in Campus" theme.</p>
      </div>
      
      <div className="flex flex-col border-t border-white/20">
        {AI_TOOLS.map((tool) => (
          <ToolItem key={tool.name} name={tool.name} desc={tool.desc} color={tool.color} tag={tool.tag} link={tool.link} />
        ))}
      </div>
    </section>
  );
};
