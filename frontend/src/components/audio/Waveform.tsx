"use client";

interface WaveformProps {
  audioUrl?: string;
  className?: string;
}

export function Waveform({ audioUrl, className }: WaveformProps) {
  // TODO: implement waveform visualization using wavesurfer.js
  return (
    <div className={className}>
      <div className="h-24 rounded-lg bg-muted">
        {/* TODO: wavesurfer.js waveform container */}
        <p className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Waveform: {audioUrl || "No audio loaded"}
        </p>
      </div>
    </div>
  );
}
