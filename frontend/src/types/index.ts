export interface User {
  id: string;
  email: string;
  credits: number;
  created_at: string;
}

export interface Track {
  id: string;
  user_id: string;
  filename: string;
  original_url: string;
  duration: number;
  bpm?: number;
  key?: string;
  status: "uploaded" | "processing" | "completed" | "failed";
  created_at: string;
}

export interface Stem {
  id: string;
  track_id: string;
  type: StemType;
  url: string;
  duration: number;
}

export type StemType = "vocals" | "drums" | "bass" | "other" | "piano" | "guitar";

export interface Job {
  id: string;
  track_id: string;
  user_id: string;
  status: "pending" | "processing" | "completed" | "failed";
  progress: number;
  model: string;
  created_at: string;
  completed_at?: string;
  error?: string;
}

export interface Credit {
  id: string;
  user_id: string;
  amount: number;
  type: "purchase" | "usage" | "bonus";
  description: string;
  created_at: string;
}
