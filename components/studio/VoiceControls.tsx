"use client";

import { Sliders, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

type VoiceControlsProps = {
  rate: number;
  pitch: number;
  onRateChange: (val: number) => void;
  onPitchChange: (val: number) => void;
  onReset: () => void;
};

export default function VoiceControls({
  rate,
  pitch,
  onRateChange,
  onPitchChange,
  onReset,
}: VoiceControlsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="rounded-2xl border border-white/[0.08] bg-slate-900/60 p-5 shadow-xl backdrop-blur-xl"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Sliders className="h-4 w-4 text-indigo-400" /> Acoustic Modulation
        </span>
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1 text-[11px] text-slate-500 transition hover:text-indigo-300"
        >
          <RefreshCw className="h-3 w-3" /> Reset
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Tempo / Speed */}
        <div className="space-y-3 rounded-xl border border-white/[0.05] bg-slate-950/50 p-4">
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">Tempo / Speed</span>
            <span className="font-mono text-indigo-300">
              {rate > 0 ? `+${rate}` : rate}%
            </span>
          </div>
          <input
            type="range"
            min="-40"
            max="40"
            value={rate}
            onChange={(e) => onRateChange(Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-indigo-500"
          />
        </div>

        {/* Pitch */}
        <div className="space-y-3 rounded-xl border border-white/[0.05] bg-slate-950/50 p-4">
          <div className="flex justify-between text-xs">
            <span className="text-slate-400">Pitch (Hz Shift)</span>
            <span className="font-mono text-indigo-300">
              {pitch > 0 ? `+${pitch}` : pitch}Hz
            </span>
          </div>
          <input
            type="range"
            min="-25"
            max="25"
            value={pitch}
            onChange={(e) => onPitchChange(Number(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-indigo-500"
          />
        </div>
      </div>
    </motion.section>
  );
}
