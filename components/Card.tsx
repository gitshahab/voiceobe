import { CharacterVoice } from "@/data/characters";
import { CheckCircle2 } from "lucide-react";

export default function Card({ char }: { char: CharacterVoice }) {
  return (
    <div className="group relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/50 hover:shadow-[0_15px_45px_rgba(99,102,241,0.15)]">
      {/* Character Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url('${char.img}')`,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10" />

      {/* Ambient Color Overlay */}
      <div className="absolute inset-0 bg-indigo-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card Content */}
      <div className="relative z-10 flex min-h-[360px] flex-col justify-between p-5">
        {/* Top Section */}
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white/80 backdrop-blur-md">
            {char.category}
          </span>

          <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-300 backdrop-blur-md">
            <CheckCircle2 className="h-3 w-3" />
            Ready
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <div className="mb-3 h-px w-10 bg-indigo-400 transition-all duration-500 group-hover:w-20" />

          <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-lg">
            {char.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-indigo-300">
            {char.lang}
          </p>

          <p className="mt-3 max-w-[280px] text-xs leading-relaxed text-slate-300/90">
            {char.tagline}
          </p>

          <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Voice Preset
            </span>

            <span className="text-[10px] font-semibold text-white/70 transition-colors group-hover:text-indigo-300">
              Explore Character →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
