"use client";

import { CountdownTimer } from './CountdownTimer';
import Image from "next/image";
import kiwiImage from '../images/kiwi_pp-2.jpg';

export function Hero() {
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
    
          <div className="flex justify-center w-full md:w-2/3 lg:w-1/2 hover:scale-105 mb-6 md:mb-10 transform transition-transform duration-300 ease-in-out">
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