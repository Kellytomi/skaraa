"use client";

interface DropzoneProps {
  onFileSelect?: (file: File) => void;
  className?: string;
}

export function Dropzone({ onFileSelect, className }: DropzoneProps) {
  // TODO: implement drag-and-drop file upload with validation
  return (
    <div className={className}>
      <div className="flex h-48 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 hover:border-primary/50">
        <p className="text-sm text-muted-foreground">
          Drag & drop an audio file, or click to browse
        </p>
        {/* TODO: file input, drag events, format validation */}
      </div>
    </div>
  );
}
