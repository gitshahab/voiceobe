"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BoomBox } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="voiceobe logo"
            width={40}
            height={12}
            className="border border-white rounded-lg"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Voiceobe
            </span>
            <span className="text-[10px] tracking-widest text-indigo-400 font-mono uppercase -mt-1">
              Free Voices, No Login
            </span>
          </div>
        </Link>

        {/* Right CTA / Navigation */}
        <div className="flex items-center gap-3">
          <Link
            href="/studio"
            className={`px-4 py-2 rounded-xl text-sm font-medium transition flex items-center gap-2 border ${
              pathname !== "/studio"
                ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30"
                : "bg-slate-900/90 text-slate-200 border-slate-700/80 hover:bg-slate-800 hover:text-white cursor-not-allowed"
            }`}
          >
            <BoomBox className="w-4 h-4 text-indigo-300" />
            <span>Studio</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
