import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/" className="btn btn-ghost text-xl">
      <span className="relative z-10">$KIWI</span>
      <span className="absolute inset-0 bg-[#8b4d2c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
    </Link>
  );
}