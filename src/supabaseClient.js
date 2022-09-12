import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vpvxtxuesfxscygkccny.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwdnh0eHVlc2Z4c2N5Z2tjY255Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIyOTQ1MjYsImV4cCI6MTk3Nzg3MDUyNn0.I18_RfuPSfj-nqel_iVT_bHVWEmxjc_yBjIUG2C2BY0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
