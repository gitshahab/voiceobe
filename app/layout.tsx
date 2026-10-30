import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voiceobe — 100% Free AI Text to Speech | No Signup, No Credit Card",
  description:
    "Unlimited, instant AI voice generation in Hindi, English, and Hinglish. Zero login required, no paywalls, completely free forever.",
  keywords: [
    "free text to speech",
    "no login tts",
    "hindi text to speech free",
    "elevenlabs free alternative",
    "star wars voice tts",
    "voiceobe",
  ],
  openGraph: {
    title: "Voiceobe — Unlimited Free AI Text to Speech",
    description:
      "No account required. Instant neural voice synthesis with pitch & rate control.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
