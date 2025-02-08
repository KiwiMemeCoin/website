"use client";

import { useState, useEffect } from "react";
import { Copy } from 'lucide-react';
import { LAUNCH_DATE, CONTRACT_ADDRESS } from "@/lib/consts";

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS).then(() => {
      alert("Contract address copied to clipboard!");
    });
  };

  // When the timer has expired, display a button that copies the contract address.
  if (hasExpired) {
    return (
      <div className="flex justify-center">
        <button
        onClick={copyToClipboard}
        className="flex items-center btn btn-primary"
      >
        <span className="mr-2 truncate max-w-[150px]">{(CONTRACT_ADDRESS.length == 0) ? "CA will be out soon" : CONTRACT_ADDRESS}</span>
        <Copy size={18} />
      </button>
      </div>
      
    );
  }

  // Otherwise, display the countdown grid.
  return (
    <>
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
    <div className="flex justify-center m-5">
      <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
       disabled>CA not out yet!</button>
    </div>
    </>
  );
}