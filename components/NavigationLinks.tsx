import { Send } from "lucide-react";
import ExternalLink from "./ExternalLink";
import DexScreenerIcon from "./icons/DexScreenerIcon.tsx";
import XIcon from "./icons/XIcon";

export default function NavigationLinks() {
  return (
    <div className="flex space-x-6 items-center">
      <ExternalLink href="https://dexscreener.com" icon={<DexScreenerIcon className="w-6 h-6" className="w-6 h-6 transition-all duration-300 group-hover:text-[#8b4d2c] group-hover:scale-110 group-hover:-rotate-6" />} />
      <ExternalLink href="https://x.com/KiwiToTheMoon" icon={<XIcon  className="w-6 h-6 transition-all duration-300 group-hover:text-[#8b4d2c] group-hover:scale-110 group-hover:-rotate-6" />} />
      <ExternalLink href="https://t.me/kiwitothemoon" icon={<Send  className="w-6 h-6 transition-all duration-300 group-hover:text-[#8b4d2c] group-hover:scale-110 group-hover:-rotate-6" />} />
    </div>
  );
}