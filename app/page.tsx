import {
  Sparkles,
  ArrowRight,
  ShieldOff,
  Flame,
  Volume2,
  Wand2,
  Sliders,
  CheckCircle2,
  Speaker,
  LanguagesIcon,
} from "lucide-react";
import { CHARACTERS } from "@/data/characters";
import Hero from "@/components/sections/Hero";
import Card from "@/components/Card";

export default function LandingPage() {
  return (
    <main className="flex-1 flex flex-col overflow-hidden">
      <Hero />
      {/* SEO VALUE PROPS / "NO BS" SECTION */}
      <section
        id="features"
        className="py-16 bg-slate-900/40 border-y border-slate-800/80 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Why Creators Switch to Voiceobe
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Clean, utility-first software built for fast audio production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <ShieldOff className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-200">
                Zero Signup or Paywalls
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No &quot;Sign in with Google to continue&quot; modals. No email
                verification. Open the page and convert text to speech
                instantly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <LanguagesIcon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-200">
                Hindi & Hinglish Fluency
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Native inflection for Devanagari Hindi as well as
                Indian-accented English scripts, avoiding the robotic cadence of
                legacy TTS engines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex flex-col space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-200">
                Real-Time Pitch & Modulation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transform any voice into a deep Sith narrator or a brisk
                high-tempo tutorial guide using instant Hertz and rate
                parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALACTIC CHARACTERS PREVIEW */}
      <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs text-indigo-400 font-mono tracking-[0.2em] uppercase mb-3">
            <Volume2 className="w-4 h-4" />
            Galactic Voice Cast
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Character Presets Ready for Battle
          </h2>

          <p className="text-sm text-slate-400 mt-3">
            Choose your voice. Give your story a personality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHARACTERS.map((char) => (
            <Card key={char.id} char={char} />
          ))}
        </div>
      </section>
    </main>
  );
}
