"use client";

import { useState, useEffect } from "react";
import { LAUNCH_DATE } from '@/lib/consts';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [hasExpired, setHasExpired] = useState(() => {
    const launchDate = new Date(LAUNCH_DATE).getTime();
    return launchDate <= Date.now();
  });

  useEffect(() => {
    if (hasExpired) return;

    const launchDate = new Date(LAUNCH_DATE).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const distance = launchDate - now;

      if (distance <= 0) {
        setHasExpired(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [hasExpired]);

  if (hasExpired) {
    return null;
  }

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="bg-[#09146E]/80 backdrop-blur-sm p-2 md:p-4 rounded-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
        >
          <div className="text-2xl md:text-4xl font-bold text-white">{value}</div>
          <div className="text-xs md:text-sm text-gray-400 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
}