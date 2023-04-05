import { createClient } from '@supabase/supabase-js'

const URL = 'https://izbejlvozcxbcrafuehl.supabase.co'
const API_KEY = process.env.REACT_APP_SUPABASE //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6YmVqbHZvemN4YmNyYWZ1ZWhsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MDY1MzcyMiwiZXhwIjoxOTk2MjI5NzIyfQ.VWxo_k3VnYp82mxsFHvighORjA5DhJ8MB-sn2d5rWyQ";
export const supabase = createClient(URL, API_KEY);