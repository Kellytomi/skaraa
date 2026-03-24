"use client";

import { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: subscribe to auth state changes via Supabase
    setLoading(false);
  }, []);

  return { user, loading };
}
