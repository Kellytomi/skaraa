"use client";

interface PlayerProps {
  audioUrl?: string;
  className?: string;
}

export function Player({ audioUrl, className }: PlayerProps) {
  // TODO: implement audio player with play/pause, seek, volume
  return (
    <div className={className}>
      <div className="flex items-center gap-4 rounded-lg border p-4">
        <button className="text-sm">Play</button>
        <span className="text-sm text-muted-foreground">0:00 / 0:00</span>
        {/* TODO: player controls */}
      </div>
    </div>
  );
}
