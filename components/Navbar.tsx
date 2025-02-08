"use client";

import { Send, LineChart, Zap } from "lucide-react";
import Link from 'next/link';
import NavigationLinks from './NavigationLinks';
import BrandLogo from './BrandLogo';

export function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center px-4 md:px-6 py-4 fixed w-full z-50 backdrop-blur-sm bg-black/10">
      <BrandLogo />
      <NavigationLinks />
    </nav>
  );
}