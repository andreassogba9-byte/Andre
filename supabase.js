// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Remplace par tes infos
const SUPABASE_URL = "https://kiebsjqdjnykpuhjehoh.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZWJzanFkam55a3B1aGplaG9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxNDE0NDEsImV4cCI6MjA3MzcxNzQ0MX0.RjGqRCp8eDn3QCUWushVdcRexdYdDKgsYQr3BQ3KyEI"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
