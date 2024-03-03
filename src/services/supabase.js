import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ybgqtvzigwfhwgvdajtb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliZ3F0dnppZ3dmaHdndmRhanRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyOTc4OTksImV4cCI6MjAyNDg3Mzg5OX0.6x4GmJ7VjdyOLSjAlyB6Kgv7xym-BO9z1LR-g2XbXYw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
