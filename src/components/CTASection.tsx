/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RegistrationProps } from '../types';

export const CTASection: React.FC<RegistrationProps> = ({ isLate, isHackathonStartedAuth, regLink, handleRegisterClick }) => {
  return (
    <section aria-label="Call to action" className="py-16 md:py-32 px-6 text-center border-t border-white/10">
       <h2 className="font-anton text-4xl md:text-7xl lg:text-[8rem] uppercase tracking-wide">
         READY TO BUILD THE FUTURE? <br/>
         <a href={(!isLate && !isHackathonStartedAuth) ? regLink : "#"} onClick={handleRegisterClick} target={(!isLate && !isHackathonStartedAuth) ? "_blank" : "_self"} rel="noreferrer" className="text-accent-orange hover:text-white transition-colors inline-block relative cursor-pointer pt-4">
           {isLate ? "REGISTRATIONS CLOSED" : "REGISTER NOW"} <ArrowUpRight className="inline-block w-12 h-12 md:w-20 md:h-20 -mt-12 bg-accent-orange/20 rounded-full text-accent-orange group-hover:text-white group-hover:bg-white/20" />
         </a>
       </h2>
       <p className="mt-6 font-anton text-2xl text-accent-yellow tracking-widest uppercase">
         {isLate ? "Oops! Looks like someone is late to the party. Registrations are closed." : "Deadline to register: May 4th"}
       </p>
       <p className="mt-8 font-inter text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
         We're always open to new queries, collaborations, and connections. Whether you have a project doubt you'd like to discuss or just say hi! Feel free to reach out.
       </p>
    </section>
  );
};
