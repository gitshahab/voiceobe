"use client";

import { motion } from "framer-motion";
import { Check, Mic2, UserRound } from "lucide-react";
import { CharacterVoice } from "@/data/characters";

type VoiceSelectorProps = {
  characters: CharacterVoice[];
  selectedChar: CharacterVoice;
  onSelect: (character: CharacterVoice) => void;
};

export default function VoiceSelector({
  characters,
  selectedChar,
  onSelect,
}: VoiceSelectorProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-900/60 p-4 shadow-xl backdrop-blur-xl sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
            <Mic2 className="h-5 w-5" />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Voice Library</h3>
            <p className="text-[11px] text-slate-500">Choose your character.</p>
          </div>
        </div>

        <span className="font-mono text-[10px] text-slate-500">
          {characters.length} VOICES
        </span>
      </div>

      {/* Character Cards */}
      <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
        {characters.map((char) => {
          const isSelected = selectedChar.id === char.id;

          return (
            <motion.button
              key={char.id}
              type="button"
              onClick={() => onSelect(char)}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              aria-pressed={isSelected}
              className={`group relative w-[145px] shrink-0 snap-start overflow-hidden rounded-xl border text-left transition-all duration-300 sm:w-full ${
                isSelected
                  ? "border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                  : "border-white/[0.08] hover:border-white/20"
              }`}
            >
              {/* Character Artwork */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-950">
                {char.img ? (
                  <img
                    src={char.img}
                    alt={char.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <UserRound className="h-12 w-12 text-slate-600" />
                  </div>
                )}

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                {/* Selection indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="voice-selection"
                    className="absolute inset-0 border-2 border-indigo-400 rounded-xl"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                {/* Selected badge */}
                <div className="absolute right-2 top-2">
                  {isSelected && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-white shadow-lg">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>

                {/* Character details */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-sm font-bold text-white drop-shadow-lg">
                    {char.name}
                  </p>
                  <p className="mt-0.5 text-[10px] text-indigo-300">
                    {char.category}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between bg-[#111827] px-3 py-2.5">
                <span className="text-[10px] text-slate-400">{char.lang}</span>

                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isSelected ? "bg-indigo-400" : "bg-emerald-400"
                  }`}
                />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Selected Character */}
      <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-4">
        <Check className="h-3.5 w-3.5 text-indigo-400" />
        <p className="text-[11px] text-slate-400">
          Selected voice:
          <span className="ml-1 font-semibold text-indigo-300">
            {selectedChar.name}
          </span>
        </p>
      </div>
    </section>
  );
}
