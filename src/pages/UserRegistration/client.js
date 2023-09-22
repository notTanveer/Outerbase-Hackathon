import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uxpfusdvhvgyaynjeozq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4cGZ1c2R2aHZneWF5bmplb3pxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyODU5MjgsImV4cCI6MjAxMDg2MTkyOH0.qQ2qpXuqkI5ZypcqopVVnNG-x1hPDIqI0pJwzJEYP3I";
export const supabase = createClient(supabaseUrl, supabaseKey);
