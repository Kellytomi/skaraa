"use client";

interface StemControlsProps {
  stems?: string[];
  className?: string;
}

export function StemControls({ stems, className }: StemControlsProps) {
  // TODO: implement stem controls with individual volume, mute, solo, download
  return (
    <div className={className}>
      <div className="flex flex-col gap-2">
        {(stems ?? ["vocals", "drums", "bass", "other"]).map((stem) => (
          <div key={stem} className="flex items-center justify-between rounded border p-2">
            <span className="text-sm font-medium capitalize">{stem}</span>
            {/* TODO: volume slider, mute/solo buttons, download */}
          </div>
        ))}
      </div>
    </div>
  );
}
