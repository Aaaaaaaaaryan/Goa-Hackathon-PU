/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { SCHEDULE_ITEMS } from '../data/constants';

export const ScheduleSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <section id="schedule" aria-label="Event schedule" className="py-20 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="sticky top-32">
          <h2 className="font-anton text-5xl sm:text-7xl md:text-[6rem] leading-[1.1] md:leading-[0.9] tracking-wide uppercase mb-8">
            DEEP INTO <br/>
            HACKATHON PHASES, <br/>
            TIMINGS AND <br/>
            <span className="text-white">SCHEDULE</span>
          </h2>
        </div>
        
        <div className="flex flex-col mt-12 lg:mt-0">
          {SCHEDULE_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              time={item.time}
              isOpen={openAccordion === index}
              onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
