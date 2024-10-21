import { createClient } from "@supabase/supabase-js";
import { Database } from "../database.types";

export const supabase = createClient<Database>(
  `${import.meta.env.VITE_SUPABASE_URL_KEY}`,
  `${import.meta.env.VITE_SUPABASE_ANON_KEY}`
);
