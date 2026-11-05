"use client";

import { RefObject } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Download } from "lucide-react";
import { CharacterVoice } from "@/data/characters";

type AudioPlayerProps = {
  audioUrl: string;
  selectedChar: CharacterVoice;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isMuted: boolean;
  audioRef: RefObject<HTMLAudioElement | null>;
  onTogglePlayPause: () => void;
  onToggleMute: () => void;
  onSeek: (time: number) => void;
};

const formatTime = (time: number) => {
  if (!Number.isFinite(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};

export default function AudioPlayer({
  audioUrl,
  selectedChar,
  isPlaying,
  currentTime,
  duration,
  isMuted,
  audioRef,
  onTogglePlayPause,
  onToggleMute,
  onSeek,
}: AudioPlayerProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-slate-900/80 p-4 sm:p-5 shadow-xl backdrop-blur-xl"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 sm:gap-4 rounded-xl bg-slate-950/50 p-2 sm:p-3 border border-white/[0.04]">
          <button
            type="button"
            onClick={onTogglePlayPause}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md transition hover:scale-105 hover:bg-indigo-500 active:scale-95"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4 fill-white" />
            ) : (
              <Play className="ml-0.5 h-4 w-4 fill-white" />
            )}
          </button>

          <div className="flex flex-1 items-center gap-3">
            <span className="w-8 text-right font-mono text-[10px] text-slate-500">
              {formatTime(currentTime)}
            </span>

            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.01}
              value={currentTime}
              onChange={(e) => onSeek(Number(e.target.value))}
              className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-slate-800 accent-indigo-500"
            />

            <span className="w-8 font-mono text-[10px] text-slate-500">
              {formatTime(duration)}
            </span>
          </div>

          <button
            type="button"
            onClick={onToggleMute}
            className="flex h-8 w-8 shrink-0 items-center justify-center text-slate-400 transition hover:text-white"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-rose-400" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
          <a
            href={audioUrl}
            download={`voiceobe-${selectedChar.id}.mp3`}
            aria-label="Download MP3"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-emerald-400"
          >
            <Download className="h-4 w-4" />
          </a>
        </div>

        {/* Hidden audio element required for playback to function natively */}
        <audio ref={audioRef} className="hidden" />
      </div>
    </motion.section>
  );
}
