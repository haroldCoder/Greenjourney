import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://yzjdumjamibbbiykruyj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6amR1bWphbWliYmJpeWtydXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE3Nzk1OTksImV4cCI6MTk3NzM1NTU5OX0.Tp_8Yu-HYwxnaGueuyBFCUaLcR210sLZUPFKJN-RwRc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
