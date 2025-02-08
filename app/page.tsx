"use client";

import { Background } from '@/components/Background';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative text-white">
      <Background />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}