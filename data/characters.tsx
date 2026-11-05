export interface CharacterVoice {
  id: string;
  name: string;
  moniker: string;
  lang: string;
  category: "Hindi" | "Indian English" | "Global English";
  voice: string;
  defaultPitch: number;
  defaultRate: number;
  avatarBg: string;
  tagline: string;
  img: string;
}

export const CHARACTERS: CharacterVoice[] = [
  {
    id: "vader-swara",
    name: "Master Swara",
    moniker: "High Priestess of Desi Cadence",
    lang: "Hindi (hi-IN)",
    category: "Hindi",
    voice: "hi-IN-SwaraNeural",
    defaultPitch: 0,
    defaultRate: 0,
    avatarBg: "from-amber-500 to-rose-600",
    tagline: "Ultra expressive Hindi narration with immaculate diction.",
    img: "/swara.jpg",
  },
  {
    id: "kylo-madhur",
    name: "Lord Madhur",
    moniker: "The Baritone Sith Inquisitor",
    lang: "Hindi (hi-IN)",
    category: "Hindi",
    voice: "hi-IN-MadhurNeural",
    defaultPitch: -8,
    defaultRate: -4,
    avatarBg: "from-red-600 to-zinc-950",
    tagline: "Deep, commanding resonant Hindi voice for dramatic impact.",
    img: "/madhur.jpg",
  },
  {
    id: "han-guy",
    name: "Captain Solo (Guy)",
    moniker: "The Smuggler Narrator",
    lang: "US English (en-US)",
    category: "Global English",
    voice: "en-US-GuyNeural",
    defaultPitch: -4,
    defaultRate: 2,
    avatarBg: "from-slate-600 to-zinc-800",
    tagline: "Casual, conversational, natural American male storytelling.",
    img: "/solo.jpg",
  },

  {
    id: "kenobi-prabhat",
    name: "General Prabhat",
    moniker: "The High Ground Diplomat",
    lang: "Indian English (en-IN)",
    category: "Indian English",
    voice: "en-IN-PrabhatNeural",
    defaultPitch: -3,
    defaultRate: 0,
    avatarBg: "from-blue-600 to-cyan-500",
    tagline:
      "Smooth, trustworthy Indian-accented English with crisp articulation.",
    img: "/prabhat.jpg",
  },
  {
    id: "leia-aria",
    name: "Princess Aria",
    moniker: "The Rebel Vanguard",
    lang: "US English (en-US)",
    category: "Global English",
    voice: "en-US-AriaNeural",
    defaultPitch: 0,
    defaultRate: 5,
    avatarBg: "from-purple-500 to-indigo-600",
    tagline: "Snappy, clean American commercial voiceover tone.",
    img: "/aria.jpg",
  },
  {
    id: "padme-neerja",
    name: "Senator Neerja",
    moniker: "Voice of the Republic",
    lang: "Indian English (en-IN)",
    category: "Indian English",
    voice: "en-IN-NeerjaNeural",
    defaultPitch: 2,
    defaultRate: 0,
    avatarBg: "from-emerald-500 to-teal-700",
    tagline:
      "Natural Indian-English corporate, technical, and podcast cadence.",
    img: "/neerja.jpg",
  },
];
