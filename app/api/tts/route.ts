import { NextRequest, NextResponse } from "next/server";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import type { Readable } from "stream";

export async function POST(req: NextRequest) {
  try {
    const {
      text,
      voice = "hi-IN-SwaraNeural",
      rate = 0,
      pitch = 0,
    } = await req.json();

    if (!text || typeof text !== "string" || !text.trim()) {
      return NextResponse.json(
        { error: "Valid text is required" },
        { status: 400 },
      );
    }

    const tts = new MsEdgeTTS();
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

    const formattedRate = rate >= 0 ? `+${rate}%` : `${rate}%`;
    const formattedPitch = pitch >= 0 ? `+${pitch}Hz` : `${pitch}Hz`;

    // Destructure audioStream from the returned object
    const streamResult = tts.toStream(text.trim(), {
      rate: formattedRate,
      pitch: formattedPitch,
    });

    const audioStream: Readable =
      "audioStream" in streamResult
        ? streamResult.audioStream
        : (streamResult as unknown as Readable);

    // Collect audio bytes into a buffer
    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      audioStream.on("data", (chunk: Buffer) => chunks.push(chunk));
      audioStream.on("end", () => resolve());
      audioStream.on("error", (err: Error) => reject(err));
    });

    const audioBuffer = Buffer.concat(chunks);

    if (audioBuffer.length === 0) {
      return NextResponse.json(
        { error: "Synthesizer produced an empty audio buffer" },
        { status: 502 },
      );
    }

    return new Response(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length.toString(),
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error: any) {
    console.error("TTS generation error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to generate speech" },
      { status: 500 },
    );
  }
}
