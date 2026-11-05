# 🎙️ Voiceobe: The "I Hate Login and Credits" of Text-to-Speech

![Voiceobe Hero UI Preview](https://via.placeholder.com/1200x600/0f172a/6366f1?text=Voiceobe+-+Zero+Login+TTS+Studio)

Voiceobe is an open-source, zero-login, completely free Text-to-Speech (TTS) web application. Built for creators who just want to generate high-quality voiceovers without jumping through hoops, paying subscriptions, or dealing with token limits.

## 🚨 The Problem

The AI Text-to-Speech landscape (like ElevenLabs, Murf, or PlayHT) is incredibly powerful, but heavily gated. To generate a simple 30-second audio clip, a user typically has to:

1. Create an account.
2. Verify their email.
3. Navigate a confusing token/credit system.
4. Hit a paywall after 5 minutes of generation.
5. Deal with monthly subscriptions.

## 💡 The Solution

Voiceobe eliminates the friction. We treat TTS like a simple utility (think _I Love PDF_).

- **Zero Login:** Open the site, paste your script, download the MP3.
- **100% Free:** Powered by the Microsoft Edge Neural TTS engine under the hood.
- **No Limits:** Generate as many clips as you want, as often as you want.
- **Customization:** Real-time pitch shifting and speed modulation.
- **Multilingual Support:** High-fidelity Indian English, Hindi, and Global English voices.

## 🛠️ Tech Stack

Voiceobe is built with a modern, edge-ready web stack to ensure lightning-fast performance and a premium feel:

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **TTS Engine / Backend API:** `msedge-tts` (Runs securely in Next.js Server Route Handlers)

## ✨ Key Features

- **Galactic Voice Cast:** Preset, high-quality neural voices categorized by language and style (e.g., Deep Sith narrator vs. Snappy tutorial guide).
- **Acoustic Modulation:** Precise, slider-based control over Voice Speed (Rate) and Hz Pitch.
- **Slim Audio Player:** Built-in minimal preview player with scrubbing, duration tracking, and native HTML5 audio sync.
- **Seamless MP3 Export:** One-click downloads directly to your device.
- **Mobile-First Studio:** Fully responsive UI that works just as well on an iPhone as it does on a desktop.

## 🚀 Getting Started

Want to run Voiceobe locally or deploy your own instance? It takes less than 2 minutes.

```bash
1. Clone the repository
git clone [https://github.com/yourusername/voiceobe.git](https://github.com/yourusername/voiceobe.git)
cd voiceobe
2. Install dependencies
npm install
3. Run the development server
npm run dev
Open http://localhost:3000 with your browser to see the result.
```

🗺️ Future Roadmap (The ElevenLabs Replica)
Voiceobe currently utilizes Edge-TTS for high-quality, free preset voices. To achieve our goal of becoming a 1:1 free alternative to ElevenLabs, here is what is coming next:

[ ] Zero-Shot Voice Cloning: Integrate F5-TTS or Chatterbox via a backend Python microservice to allow users to upload a 5-second reference audio clip and clone any voice instantly.

[ ] Ultra-Realistic Prosody: Implement Kokoro-82M for local, insanely fast, emotional human-like cadence that rivals ElevenLabs' top models.

[ ] Word-Level Timestamps (SRT/VTT): Extract word boundary data from the engine to auto-generate subtitles for video editors.

[ ] Studio Timeline Editor: Allow users to stitch multiple voices together in a single script (e.g., conversational podcasts).

[ ] Local Storage History: Save generated scripts and audio links to the browser's localStorage so users don't lose their work without needing a database.

🤝 Contributing
Voiceobe is open-source and community-driven. If you want to add new voices, improve the UI, or help integrate Python-based models like Kokoro/F5-TTS, pull requests are incredibly welcome!

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

☕ Support the Project
Voiceobe is free and always will be. If this tool saved you a subscription fee, consider supporting the server costs!

📄 License
Distributed under the MIT License. See LICENSE for more information.
