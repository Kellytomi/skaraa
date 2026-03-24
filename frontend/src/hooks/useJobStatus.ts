"use client";

import { useState, useEffect } from "react";

type JobStatus = "pending" | "processing" | "completed" | "failed";

interface JobState {
  status: JobStatus;
  progress: number;
  error: string | null;
}

export function useJobStatus(jobId: string | null) {
  const [state, setState] = useState<JobState>({
    status: "pending",
    progress: 0,
    error: null,
  });

  useEffect(() => {
    if (!jobId) return;
    // TODO: poll or subscribe to job status updates
  }, [jobId]);

  return state;
}
