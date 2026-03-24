import { supabase } from "./supabase";

// TODO: implement auth helpers

export async function signIn(email: string, password: string) {
  // TODO: implement email/password sign in
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signUp(email: string, password: string) {
  // TODO: implement sign up
  return supabase.auth.signUp({ email, password });
}

export async function signOut() {
  // TODO: implement sign out
  return supabase.auth.signOut();
}

export async function getSession() {
  // TODO: implement session retrieval
  return supabase.auth.getSession();
}
