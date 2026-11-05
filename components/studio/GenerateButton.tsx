"use client";

import { Loader2, Sparkles, AlertCircle, Disc3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type GenerateButtonProps = {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
  error: string | null;
};

export default function GenerateButton({
  onClick,
  loading,
  disabled,
  error,
}: GenerateButtonProps) {
  return (
    <div className="flex flex-col gap-3">
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3.5 text-xs text-rose-400"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={disabled ? {} : { y: -2 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        onClick={onClick}
        disabled={disabled || loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-4 text-sm font-medium text-white shadow-[0_0_30px_rgba(79,70,229,0.25)] transition-all disabled:opacity-50 disabled:shadow-none sm:py-3.5"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Generating Voiceover...</span>
          </>
        ) : (
          <>
            <Disc3 className="h-4 w-4" />
            <span>Synthesize Speech</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
