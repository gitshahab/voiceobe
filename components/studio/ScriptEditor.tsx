"use client";

import { motion } from "framer-motion";
import { FileText, Languages, X, Sparkles, AudioLines } from "lucide-react";

type ScriptEditorProps = {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
};

export default function ScriptEditor({
  value,
  onChange,
  maxLength = 5000,
}: ScriptEditorProps) {
  const remaining = maxLength - value.length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 p-4 shadow-xl backdrop-blur-xl sm:p-6"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-500/[0.08] blur-[70px]" />

      <div className="relative z-10">
        {/* Textarea */}
        <div className="relative rounded-xl border border-white/[0.08] bg-[#080D1B]/80 transition-all duration-300 focus-within:border-indigo-400/50 focus-within:shadow-[0_0_25px_rgba(99,102,241,0.08)]">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
            maxLength={maxLength}
            placeholder="Start typing your script here...&#10;&#10;Let your imagination speak. Create something extraordinary."
            className="min-h-[190px] w-full resize-y bg-transparent p-4 text-lg leading-7 outline-none placeholder:text-slate-600 sm:min-h-[240px] sm:p-5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-700/50 hover:[&::-webkit-scrollbar-thumb]:bg-slate-600/80 [scrollbar-width:thin] [scrollbar-color:theme(colors.slate.700)_transparent]"
          />

          {/* Bottom toolbar */}
          <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-3">
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
              <AudioLines className="h-3.5 w-3.5 text-indigo-400" />
              <span>Ready for synthesis</span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`font-mono text-[10px] ${
                  remaining < 200 ? "text-amber-400" : "text-slate-500"
                }`}
              >
                {value.length.toLocaleString()} / {maxLength.toLocaleString()}
              </span>

              {value.length > 0 && (
                <button
                  type="button"
                  onClick={() => onChange("")}
                  aria-label="Clear script"
                  className="rounded-lg p-1.5 text-slate-500 transition hover:bg-white/5 hover:text-rose-400"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <p className="mt-3 text-[10px] leading-relaxed text-slate-500">
          Tip: Use punctuation and natural pauses to achieve more expressive
          voice delivery.
        </p>
      </div>
    </motion.section>
  );
}
