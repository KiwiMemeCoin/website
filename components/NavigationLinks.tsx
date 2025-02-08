import { Send, Syringe } from "lucide-react";
import ExternalLink from "./ExternalLink";
import DexScreenerIcon from "./icons/DexScreenerIcon";
import XIcon from "./icons/XIcon";
import { CONTRACT_ADDRESS } from "@/lib/consts";

export default function NavigationLinks() {
  let issetCA = false;
  if(!(CONTRACT_ADDRESS.length == 0)){
    issetCA = true;
  }

  return (
    <div className="flex space-x-6 items-center">
      <ExternalLink href={issetCA ? "https://pump.fun/coin/" + CONTRACT_ADDRESS: "https://pump.fun/"} icon={<Syringe className="w-6 h-6 transition-all duration-300 group-hover:text-[#8b4d2c] group-hover:scale-110 group-hover:-rotate-6" />} />
      <ExternalLink href={issetCA ? "https://dexscreener.com/solana/" + CONTRACT_ADDRESS: "https://dexscreener.com/"} icon={<DexScreenerIcon className="w-6 h-6 transition-all duration-300 group-hover:text-[#8b4d2c] group-hover:scale-110 group-hover:-rotate-6" />} />
      <ExternalLink href="https://x.com/KiwiToTheMoon" icon={<XIcon  className="w-6 h-6 transition-all duration-300 group-hover:text-[#8b4d2c] group-hover:scale-110 group-hover:-rotate-6" />} />
      <ExternalLink href="https://t.me/kiwitothemoon" icon={<Send  className="w-6 h-6 transition-all duration-300 group-hover:text-[#8b4d2c] group-hover:scale-110 group-hover:-rotate-6" />} />
    </div>
  );
}