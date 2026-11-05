"use client";
import { ArrowRight, Flame, Speaker } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const KARAOKE_WORDS = [
  "No",
  "Credit",
  "Card.",
  "No",
  "Accounts.",
  "Pure",
  "High-Fidelity",
  "Hindi",
  "&",
  "English",
  "AI",
  "Voices.",
];

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      <div className="relative px-4 sm:px-6 pt-12 pb-20 md:pt-16 md:pb-28 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-red-400 text-xs font-medium mb-6 backdrop-blur">
          <Flame className="w-3.5 h-3.5 text-red-600 fill-red-400" />
          <span>
            The &quot;I Hate Login and Credits&quot; of Text to Speech
          </span>
        </div>

        {/* Karaoke Animated Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.15] mb-6">
          {KARAOKE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ color: "#64748b" }}
              animate={{ color: ["#64748b", "#ffffff", "#818cf8", "#ffffff"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 1.2,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
              className="inline-block mr-2.5"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
          Tired of ElevenLabs credit limits and forced sign-ups? Generate
          realistic speech with customizable pitch, rate, and Star Wars-inspired
          personas in under 1 second.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/studio"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition active:scale-[0.98]"
          >
            <Speaker className="w-4 h-4 rotate-90" />
            <span>Launch Studio</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          <a
            href="#features"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 text-sm font-medium transition"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
