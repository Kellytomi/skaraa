"use client";

import { useState } from "react";

interface UploadState {
  progress: number;
  uploading: boolean;
  error: string | null;
}

export function useUpload() {
  const [state, setState] = useState<UploadState>({
    progress: 0,
    uploading: false,
    error: null,
  });

  async function upload(file: File) {
    // TODO: implement file upload with progress tracking
    setState({ progress: 0, uploading: true, error: null });
  }

  return { ...state, upload };
}
