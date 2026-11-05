"use client";

import { useState, useRef, useEffect } from "react";
import { CHARACTERS, CharacterVoice } from "@/data/characters";

// Extracted Components
import ScriptEditor from "@/components/studio/ScriptEditor";
import VoiceControls from "@/components/studio/VoiceControls";
import GenerateButton from "@/components/studio/GenerateButton";
import VoiceSelector from "@/components/studio/VoiceSelector";
import AudioPlayer from "@/components/studio/AudioPlayer";

export default function StudioPage() {
  // Global State
  const [text, setText] = useState("");
  const [selectedChar, setSelectedChar] = useState<CharacterVoice>(
    CHARACTERS[0],
  );
  const [rate, setRate] = useState<number>(0);
  const [pitch, setPitch] = useState<number>(0);

  // Status & Audio State
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  // Playback State
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync native <audio> events to React state (because inline handlers were removed from AudioPlayer.tsx)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [audioUrl]);

  // Handlers
  const handleSelectCharacter = (char: CharacterVoice) => {
    setSelectedChar(char);
    setPitch(char.defaultPitch);
    setRate(char.defaultRate);
  };

  const handleSynthesize = async () => {
    if (!text.trim() || loading) return;

    setLoading(true);
    setError(null);
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setIsPlaying(false);
    setCurrentTime(0);

    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: text.trim(),
          voice: selectedChar.voice,
          rate,
          pitch,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `Server responded with ${response.status}`,
        );
      }

      const rawBlob = await response.blob();
      if (rawBlob.size === 0)
        throw new Error("Received empty audio stream from engine");

      const validAudioBlob = new Blob([rawBlob], { type: "audio/mpeg" });
      const url = URL.createObjectURL(validAudioBlob);
      setAudioUrl(url);

      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.src = url;
          audioRef.current.play().catch((err) => {
            console.warn(
              "Auto-play prevented. User interaction required.",
              err,
            );
            setIsPlaying(false);
          });
        }
      }, 50);
    } catch (err: any) {
      setError(
        err?.message || "Failed to generate speech. Please check your script.",
      );
    } finally {
      setLoading(false);
    }
  };

  const togglePlayPause = async () => {
    if (!audioRef.current || !audioUrl) return;
    try {
      if (audioRef.current.paused) await audioRef.current.play();
      else audioRef.current.pause();
    } catch (err) {
      console.error("Playback toggle error:", err);
    }
  };

  const handleSeek = (time: number) => {
    setCurrentTime(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Input, Controls, Button & Player */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <ScriptEditor value={text} onChange={setText} />

          <GenerateButton
            onClick={handleSynthesize}
            loading={loading}
            disabled={!text.trim()}
            error={error}
          />

          {audioUrl && (
            <AudioPlayer
              audioUrl={audioUrl}
              selectedChar={selectedChar}
              isPlaying={isPlaying}
              currentTime={currentTime}
              duration={duration}
              isMuted={isMuted}
              audioRef={audioRef}
              onTogglePlayPause={togglePlayPause}
              onToggleMute={toggleMute}
              onSeek={handleSeek}
            />
          )}
        </div>

        {/* RIGHT COLUMN: Voice Library Selection */}
        <div className="lg:col-span-5">
          <VoiceSelector
            characters={CHARACTERS}
            selectedChar={selectedChar}
            onSelect={handleSelectCharacter}
          />
          <div className="pt-5">
            <VoiceControls
              rate={rate}
              pitch={pitch}
              onRateChange={setRate}
              onPitchChange={setPitch}
              onReset={() => {
                setRate(selectedChar.defaultRate);
                setPitch(selectedChar.defaultPitch);
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
