/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const SocialSection: React.FC = () => {
  return (
    <section aria-label="Social media and community" className="py-16 md:py-40 px-6 md:px-12 text-center max-w-[1200px] mx-auto opacity-40 hover:opacity-100 transition-opacity duration-500">
      <h2 className="font-anton text-2xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.2] md:leading-[1.1] tracking-wide uppercase text-white/50">
        STAY TUNED FOR ANNOUNCEMENTS ON <span className="bg-[#25D366] text-white px-3 py-1 border-none pb-2 rounded inline-flex items-center gap-2 translate-y-1 md:translate-y-2 mx-1">WHATSAPP</span> AND <span className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-3 py-1 border-none pb-2 rounded inline-flex items-center gap-2 translate-y-1 md:translate-y-2 mx-1">IG</span> <br/>
        WHEN YOU'RE NOT HACKING SHARE <br/> TEAM PICS ON <span className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-3 py-1 border-none pb-2 rounded inline-flex items-center gap-2 translate-y-1 md:translate-y-2 mx-1">IG</span> <br/>
        AND PUSH YOUR CODE TO <span className="bg-[#181717] text-white px-3 py-1 pb-2 border-none rounded inline-flex items-center gap-2 translate-y-1 md:translate-y-2 mx-1 md:text-2xl">GH</span> EVERY NOW AND THEN
      </h2>
    </section>
  );
};
