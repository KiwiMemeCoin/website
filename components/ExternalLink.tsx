import Link from "next/link";
import React from "react";

interface ExternalLinkProps {
  href: string;
  icon: React.ReactNode;
}

export default function ExternalLink({ href, icon }: ExternalLinkProps) {
  return (
    <Link 
      href={href}
      className="group relative p-2 rounded-lg transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
    </Link>
  );
}