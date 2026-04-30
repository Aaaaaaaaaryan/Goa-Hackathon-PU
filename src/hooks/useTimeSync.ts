/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

/**
 * Synchronizes local time with an external time API to prevent
 * users from manipulating the countdown by changing their system clock.
 * Falls back to local time if both APIs are unavailable.
 */
export function useTimeSync(): number {
  const [timeOffsetMs, setTimeOffsetMs] = useState<number>(0);

  useEffect(() => {
    let mounted = true;
    const fetchRealTime = async () => {
      try {
        const res = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata');
        if (!res.ok) throw new Error('API 1 config failed');
        const data = await res.json();
        if (mounted) {
          const apiTime = new Date(data.dateTime).getTime();
          const localTime = new Date().getTime();
          setTimeOffsetMs(apiTime - localTime);
        }
      } catch (err) {
        try {
          const fallbackRes = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
          if (!fallbackRes.ok) throw new Error('API 2 config failed');
          const data = await fallbackRes.json();
          if (mounted) {
            const apiTime = new Date(data.utc_datetime).getTime();
            const localTime = new Date().getTime();
            setTimeOffsetMs(apiTime - localTime);
          }
        } catch (fallbackErr) {
          // Both APIs failed, silently fall back to local system time 
          // (timeOffsetMs defaults to 0). No console error required.
        }
      }
    };
    fetchRealTime();
    return () => { mounted = false; };
  }, []);

  return timeOffsetMs;
}
