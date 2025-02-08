"use client";

import { CountdownTimer } from './CountdownTimer';
import Image from "next/image";
import kiwiImage from '../images/kiwi_pp-2.jpg';
import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { LAUNCH_DATE, CONTRACT_ADDRESS } from '@/lib/consts';

export function Hero() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const launchDate = new Date(LAUNCH_DATE).getTime();
    
    const checkLaunch = () => {
      const now = new Date().getTime();
      setIsLaunched(now >= launchDate);
    };

    checkLaunch();
    const timer = setInterval(checkLaunch, 1000);

    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = async () => {
    if (!isLaunched) return;
    
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen w-full pt-16 px-4">
      <div className="w-full md:w-3/4 lg:w-1/2 h-fit p-4 md:p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg m-4 md:m-10">
        <section className="flex flex-col justify-center items-center min-h-[calc(70vh-76px)] text-center select-none">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            Join Kiwi on his journey!
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-gray-300">
            Help $KIWI reach his beloved moon.
          </p>
                
          <div className="w-full max-w-3xl mb-8 md:mb-12">
            <CountdownTimer />
          </div>
    
          <button
            onClick={copyToClipboard}
            disabled={!isLaunched}
            className={`flex items-center space-x-2 px-4 md:px-6 py-3 rounded-lg transition-all duration-300 mb-6 md:mb-10 text-sm md:text-base ${
              isLaunched 
                ? 'bg-[#8b4d2c] hover:bg-[#a65e37] cursor-pointer' 
                : 'bg-gray-600'
            }`}
          >
            <span>
              {isLaunched 
                ? (isCopied ? 'Copied!' : 'Copy Contract Address') 
                : "$KIWI's journey hasn't started yet"}
            </span>
            {isLaunched && (
              isCopied 
                ? <Check className="w-4 md:w-5 h-4 md:h-5" />
                : <Copy className="w-4 md:w-5 h-4 md:h-5" />
            )}
          </button>
    
          <div className="w-full md:w-2/3 lg:w-1/2 hover:scale-105 mb-6 md:mb-10 transform transition-transform duration-300 ease-in-out">
            <Image
              src={kiwiImage}
              alt="Kiwi Bird"
              className="rounded-lg object-cover"
              width={400}
              height={400}
              priority
            />
          </div>
        </section>
      </div>
    </div>
  );
}