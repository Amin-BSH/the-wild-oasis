import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://sxwpslnichnadkzcfzma.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4d3BzbG5pY2huYWRremNmem1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4NDUzOTEsImV4cCI6MjAyNDQyMTM5MX0.zGZ5jIga9BwEKyFWKtzj2Rvmx6-ma5Z-ppw620_RcSs";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
