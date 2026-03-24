interface ProgressBarProps {
  progress: number;
  label?: string;
  className?: string;
}

export function ProgressBar({ progress, label, className }: ProgressBarProps) {
  // TODO: implement animated progress bar with percentage
  return (
    <div className={className}>
      <div className="flex flex-col gap-1">
        {label && <span className="text-sm text-muted-foreground">{label}</span>}
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      </div>
    </div>
  );
}
