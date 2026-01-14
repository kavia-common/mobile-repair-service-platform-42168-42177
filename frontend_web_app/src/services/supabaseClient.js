import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (process.env.REACT_APP_SUPABASE_URL || "").trim();
const supabaseKey = (process.env.REACT_APP_SUPABASE_KEY || "").trim();

/**
 * We intentionally allow missing env vars so the app can run with mock data.
 * Any Supabase call should handle a null client.
 */
const canInit = Boolean(supabaseUrl && supabaseKey);

export const supabase = canInit ? createClient(supabaseUrl, supabaseKey) : null;

// PUBLIC_INTERFACE
export function getSupabaseStatus() {
  /** Returns whether Supabase is configured and ready to use. */
  return {
    configured: canInit,
    hasUrl: Boolean(supabaseUrl),
    hasKey: Boolean(supabaseKey),
  };
}
