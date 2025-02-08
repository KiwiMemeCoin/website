"use client";

import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#331612ff]/90 backdrop-blur-sm text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://x.com/KiwiToTheMoon" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="hover:text-[#8b4d2c]">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://t.me/kiwitothemoon" target="_blank" rel="noopener noreferrer">
            <Send className="w-6 h-6 hover:text-[#8b4d2c]" />
          </a>
        </div>
        <p className="text-center text-sm mb-2">© 2025 KIWI Token. All rights reserved.</p>
        <p className="text-center text-xs text-gray-400">
          This is not financial advice. All cryptocurrencies involve risk.
        </p>
      </div>
    </footer>
  );
}