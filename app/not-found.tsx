"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MicOff, Home, Speaker } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden min-h-[80vh]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md">
        {/* Floating Audio Icon */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center w-24 h-24 rounded-full bg-slate-900 border border-slate-800 shadow-2xl mb-8"
        >
          <div
            className="absolute inset-0 rounded-full border border-indigo-500/20 animate-ping"
            style={{ animationDuration: "3s" }}
          />
          <MicOff className="w-10 h-10 text-indigo-400" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-extrabold tracking-tight text-white mb-2"
        >
          404
        </motion.h1>

        {/* Messaging */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold text-slate-200 mb-3">
            Lost in the Audio Void
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-8">
            The voice or frequency you are looking for doesn't exist in this
            timeline. It might have been moved, deleted, or swallowed by a black
            hole.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/studio"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium text-sm shadow-lg shadow-indigo-600/25 transition active:scale-[0.98]"
          >
            <Speaker className="w-4 h-4 rotate-90" />
            Launch Studio
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 text-sm font-medium transition"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
        </motion.div>
      </div>

      {/* Decorative Waveforms at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end gap-1 opacity-20 pointer-events-none h-32 overflow-hidden">
        {[...Array(40)].map((_, i) => {
          // Use the index 'i' to create deterministic values instead of Math.random()
          // This prevents Next.js hydration errors while still looking random
          const duration = 1.5 + (i % 5) * 0.4; // Cycles through 1.5s, 1.9s, 2.3s, 2.7s, 3.1s
          const delay = (i % 7) * 0.3; // Cycles through 0s, 0.3s, 0.6s, 0.9s, 1.2s, 1.5s, 1.8s

          return (
            <motion.div
              key={i}
              animate={{ height: ["20%", "80%", "20%"] }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
              className="w-1.5 bg-indigo-500 rounded-t-full"
              style={{ height: "20%" }}
            />
          );
        })}
      </div>
    </main>
  );
}
