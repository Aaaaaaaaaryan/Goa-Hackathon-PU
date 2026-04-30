/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';

/**
 * Tracks scroll direction to show/hide the navbar.
 * Uses useRef instead of useState for lastScrollY to avoid
 * re-attaching the scroll listener on every scroll event (stale closure fix).
 */
export function useScrollDirection(): boolean {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    document.title = "Goa Hackathon 26 | Parul University";
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar if scrolling up or at the very top, otherwise hide it
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsNavVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isNavVisible;
}
